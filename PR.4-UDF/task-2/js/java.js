
function circleArea(radius) {
    var pi = 3.14;
    var area = pi *radius*radius;
    return area;
  }
  
  var result = circleArea(10);
  
  document.getElementById('h2').innerHTML= "The area of the circle with radius 5 is " + result;