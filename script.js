const Kelvin = 400;
// this is today's forecast //

function convertCelsius() {
  let celsius = Kelvin - 273;
  document.getElementById("celsius").innerHTML = "The temperature is " + celsius + " degrees Celsius."
}

function convertFahrenheit() {
  let fahrenheit = (Kelvin - 273) *(9/5) +32;
  fahrenheit = Math.floor(fahrenheit);
  document.getElementById("fahrenheit").innerHTML = "The temperature is " + fahrenheit + " degrees Fahrenheit."
  }
