
function greet(name) {
    if (name === undefined) {
      document.getElementById('h1').innerHTML="Good Morning";
    } else {
      document.getElementById('h2').innerHTML=name;
    }
  }
  greet();
  greet("Dhruvil");
  