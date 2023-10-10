var n = 5;
var string = "";
var count = 1;

for (var i = 1; i <= n; i++) {

  for (var j = 1; j <= i; j++) {
    string += " "+count;
    count++;
  }
  string += "<br/>";
}
document.write(string);