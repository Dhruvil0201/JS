
function fahrenheitToCelsius(x) {
    var celsius = (x - 32) / 1.8;
    return celsius;
  }

  var result = fahrenheitToCelsius(120);
  document.getElementById('h1').innerHTML="The temperature in Celsius is :" + result;