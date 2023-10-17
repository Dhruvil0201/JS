
function triangleArea(length, height) {

    var area = (length * height) / 2;

    return area;
  }

  var result = triangleArea(10, 15);
  
  document.getElementById('h1').innerHTML = "The area of the triangle with length 10 and height 15 is " + result ;