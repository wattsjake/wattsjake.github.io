/*Mobile menu window*/
function mobile_menu() {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Temperature radio buttons */
function temperatureConverter(temp){
	tempValue = document.getElementById("inputTemp").value;
	console.log(tempValue);
	document.getElementById("outputFahrenheit").value = tempValue;
	document.getElementById("outputCelsius").value = tempValue;
	document.getElementById("outputKelvin").value = tempValue;
	
	
}