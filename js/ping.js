function ping() {
  var server = document.getElementById("server").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://" + server, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      document.getElementById("loading").style.display = "none";
      if (xhr.status === 0) {
        document.getElementById("result").innerHTML = "<p><strong>Error:</strong> Unable to connect to the server.</p>";
      } else {
        var time = new Date().getTime() - xhr.getResponseHeader("Date");
        document.getElementById("result").innerHTML = "<p><strong>Success!</strong> Ping time to " + server + " is " + time + "ms.</p>";
      }
    }
  };
  xhr.onerror = function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = "<p><strong>Error:</strong> Unable to connect to the server.</p>";
  };
  document.getElementById("result").innerHTML = "";
  document.getElementById("loading").style.display = "block";
  xhr.send();
}
