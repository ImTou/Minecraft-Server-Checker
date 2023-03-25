const pingTimes = {
  us: 100,
  uk: 150,
  fr: 200,
  jp: 250
};

const countrySelect = document.getElementById('country');
const checkPingButton = document.getElementById('check-ping');
const pingResult = document.getElementById('ping-result');

checkPingButton.addEventListener('click', function() {
  const selectedCountry = countrySelect.value;
  const pingTime = pingTimes[selectedCountry];
  pingResult.innerText = `Your ping in ${countrySelect.options[countrySelect.selectedIndex].text} is ${pingTime}ms`;
});
