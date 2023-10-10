  var limit = 1000;
  var currentNumber = 2;

  while (currentNumber <= limit) {
    var isPrime = true;

    
    for (let i = 2; i < currentNumber; i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }

    
    if (isPrime) {
      var primeList = document.getElementById('primeList');
      var li = document.createElement('li');
      li.textContent = currentNumber;
      primeList.appendChild(li);
    }

    currentNumber++;
  }