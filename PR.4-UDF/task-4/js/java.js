function rectangleArea(length, height) {

    var area = length * height;

    return area;
  }
  
  var result = rectangleArea(12, 8);
  
  document.getElementById('h1').innerHTML = "The area of the rectangle with length 12 and height 8 is " + result;
  