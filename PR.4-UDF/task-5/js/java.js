function calculate(x, y, z) {
    var answer = (y * y - 4 * x * z) / (2 * x);
    return answer;
  }

  var result = calculate(10, 5, 7);
  document.getElementById('h1').innerHTML="The answer is :" + result;