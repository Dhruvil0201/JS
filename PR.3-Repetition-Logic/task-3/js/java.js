var limit = 1000; 
var currentNumber = 0;

while (currentNumber <= limit) {
    var numString = currentNumber.toString();
    var numDigits = numString.length;
    var sum = 0;

    var temp = currentNumber;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    
    if (sum === currentNumber) {
        var armstrongList = document.getElementById('armstrongList');
        var li = document.createElement('li');
        li.textContent = currentNumber;
        armstrongList.appendChild(li);
    }

    currentNumber++;

}

