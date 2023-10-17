

function celsiusToFahrenheit(cel) {
    var fah = cel * 1.8 + 32;
    return fah;
  }

  var result = celsiusToFahrenheit(30);
  document.getElementById('h1').innerHTML="The temperature in Fahrenheit is " + result;

