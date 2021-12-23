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
	tempValue = parseFloat(tempValue);
	console.log(tempValue);
	
	
	if(document.querySelector('input[name=tempunit]:checked').value == "Fahrenheit")
		{
			Celsius = convertFtoC(tempValue);
			Kelvin = convertFtoK(tempValue);
			
			document.getElementById("outputFahrenheit").value = tempValue;
			document.getElementById("outputCelsius").value = roundOff(Celsius);
			document.getElementById("outputKelvin").value = roundOff(Kelvin);
		}
	else if(document.querySelector('input[name=tempunit]:checked').value == "Celsius")
		{
			Fahrenheit = convertCtoF(tempValue);
			Kelvin = convertCtoK(tempValue);
			
			document.getElementById("outputFahrenheit").value = roundOff(Fahrenheit);
			document.getElementById("outputCelsius").value = tempValue;
			document.getElementById("outputKelvin").value = roundOff(Kelvin);
		}
	else if(document.querySelector('input[name=tempunit]:checked').value == "Kelvin")
		{
			Fahrenheit = convertKtoF(tempValue);
			Celsius = convertFtoC(Fahrenheit);
			
			document.getElementById("outputFahrenheit").value = roundOff(Fahrenheit);
			document.getElementById("outputCelsius").value = roundOff(Celsius);
			document.getElementById("outputKelvin").value = tempValue;
		}
}

function convertFtoK(Fahr){
	Kelvin = (.5556 * (Fahr - 32)) + 273.16;
	return Kelvin;	
}

function convertFtoC(Fahr){
	Celsius = ((Fahr - 32) * (5/9));
	return Celsius;
}

function convertCtoF(Cels){
	Fahrenheit = ((Cels * (9/5))+32);
	return Fahrenheit
}

function convertCtoK(Cels){
	Kelvin = (Cels + 273.15);
	return Kelvin;
}

function convertKtoF(Fahr){
	Fahrenheit = ((Fahr-273.15)*(9/5)+32);
	return Fahrenheit;
}

function roundOff(value){
	value = Math.round(100*value)/100;
	return value;
}