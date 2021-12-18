
function mobile_menu() {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}