var limit = 1000;
var currentNumber = 0;

while (currentNumber <= limit) {
  var numString = currentNumber.toString();
  var isPalindrome = true;

  for (var i = 0; i < Math.floor(numString.length / 2); i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    var palindromeList = document.getElementById("pall");
    var li = document.createElement("li");
    li.textContent = currentNumber;
    palindromeList.appendChild(li);
  }

  currentNumber++;
}
