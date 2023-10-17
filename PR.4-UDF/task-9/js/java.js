
function oddOrEven(n) {
    if (n % 2 === 0) {
      document.getElementById('h1').innerHTML="The number is even";
    } else {
      document.getElementById('h1').innerHTML="The number is odd";
    }
  }

  oddOrEven(8);