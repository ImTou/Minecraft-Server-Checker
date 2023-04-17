const form = document.querySelector('form');
const result = document.querySelector('#result');
window.addEventListener("beforeunload", function () {
  document.querySelector("#loader").style.display = "block";
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const server = document.querySelector('#server').value;
  try {
    result.classList.add('loading');
    const response = await fetch(`https://api.mcsrvstat.us/2/${server}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    result.classList.remove('loading');
    if (!data.online) {
      result.innerHTML = 'Server is offline.';
      return;
    }
    const { motd, players, version, software } = data;
    result.innerHTML = `
      <div class="motd" data-aos="fade-righ" data-aos-duration="4000">${motd.html || motd.clean || 'No MOTD'}</div>
      <div class="info">Information: ${software} ${version}</div>
      <div class="players"><b>Players online:</b> ${players.online}/${players.max}</div>
      <div class="debug">
  <h2>Debug Information:</h2>
  <ul>
    <li><b>Ping:</b></b> ${data.debug.ping}</li>
    <li><b>Query:</b> ${data.debug.query}</li>
    <li><b>SRV:</b> ${data.debug.srv}</li>
    <li><b>Query Mismatch:</b> ${data.debug.querymismatch}</li>
    <li><b>IP in SRV:</b> ${data.debug.ipinsrv}</li>
    <li><b>CNAME in SRV:</b> ${data.debug.cnameinsrv}</li>
    <li><b>Animated MOTD:</b> ${data.debug.animatedmotd}</li>
    <li><b>Cache Time:</b> ${data.debug.cachetime}</li>
    <li><b>Cache Expire:</b> ${data.debug.cacheexpire}</li>
    <li><b>API Version:</b> ${data.debug.apiversion}</li>
  </ul>
  <h2>DNS Information:</h2>
  <ul>
    <li><b>SRV A:</b></li>
    <ul>
      <li><b>Name:</b> ${data.debug.dns.srv_a[0].name}</li>
      <li><b>Type:</b> ${data.debug.dns.srv_a[0].type}</li>
      <li><b>Class:</b> ${data.debug.dns.srv_a[0].class}</li>
      <li><b>TTL:</b> ${data.debug.dns.srv_a[0].ttl}</li>
      <li><b>Address:</b> ${data.debug.dns.srv_a[0].address}</li>
    </ul>
    <li><b>SRV:</b></li>
    <ul>
      <li><b>Name:</b> ${data.debug.dns.srv[0].name}</li>
      <li><b>Type:</b> ${data.debug.dns.srv[0].type}</li>
      <li><b>Class:</b> ${data.debug.dns.srv[0].class}</li>
      <li><b>TTL:</b> ${data.debug.dns.srv[0].ttl}</li>
      <li><b>Priority:</b> ${data.debug.dns.srv[0].priority}</li>
      <li><b>Weight:</b> ${data.debug.dns.srv[0].weight}</li>
      <li><b>Port:</b> ${data.debug.dns.srv[0].port}</li>
      <li><b>Target:</b> ${data.debug.dns.srv[0].target}</li>
    </ul>
  </ul>
</div>

    `;
  } catch (error) {
    console.error('Error:', error);
    result.innerHTML = 'There was an error fetching server data. please another server or ip';
  }
});

const box = document.querySelector('.footer1');
const textToType = 'Made With 💖 By Tou';
const typingSpeed = 70;
const typingDelay = 400;
let charIndex = 0;

box.textContent = '';
setTimeout(() => {
  const intervalId = setInterval(() => {
    box.textContent += textToType[charIndex];
    charIndex++;
    if (charIndex === textToType.length) {
      clearInterval(intervalId);
    }
  }, typingSpeed);
}, typingDelay);
