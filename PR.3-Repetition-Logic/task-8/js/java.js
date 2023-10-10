var limit = 1000;
var currentNumber = 1;

while (currentNumber <= limit) {
  var num = currentNumber;
  var numString = num.toString();
  var sum = 0;

  for (var i = 0; i < numString.length; i++) {
    sum += Math.pow(parseInt(numString[i]), i + 1);
  }

  if (sum === currentNumber) {
    var disariumList = document.getElementById("disariumList");
    var li = document.createElement("li");
    li.textContent = currentNumber;
    disariumList.appendChild(li);
  }

  currentNumber++;
}
