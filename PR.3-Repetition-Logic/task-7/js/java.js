var limit = 100;
var currentNumber = 1;

while (currentNumber <= limit) {
  var num = currentNumber;

  
  while (num > 9) {
    var sum = 0;
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }


  if (num === 1) {
    var magicList = document.getElementById('magicList');
    var li = document.createElement('li');
    li.textContent = currentNumber;
    magicList.appendChild(li);
  }

  currentNumber++;
}
