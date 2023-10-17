var name = "VISAVELIYA DHRUVIL";
var Accounts = 70;
var Statistics = 80;
var Economics = 89;
var Computer = 85;
var Gujarati = 81;

var total = Accounts + Statistics + Economics + Computer + Gujarati;

var percentage = total / 5;

document.getElementById("name").innerHTML = "NAME :" + name;
document.getElementById("Accounts").innerHTML = Accounts;
document.getElementById("Statistics").innerHTML = Statistics;
document.getElementById("Economics").innerHTML = Economics;
document.getElementById("Computer").innerHTML = Computer;
document.getElementById("Gujarati").innerHTML = Gujarati;

document.getElementById("total").innerHTML = total;

document.getElementById("pr").innerHTML = percentage + "%";

if (percentage > 60) {
  document.getElementById("admission-msg").innerHTML = " Congrate ........";
  if (percentage > 90) {
    document.getElementById("discount-msg").innerHTML =
      " yoy get 10% discount and 1000rs gift ........";
  } else if (percentage > 80) {
    document.getElementById("discount-msg").innerHTML =
      " yoy get 50% discount ........";
  } else if (percentage > 70) {
    document.getElementById("discount-msg").innerHTML =
      " yoy get 5% discount ........";
  }
} else {
  Document.getElementById("admission-msg").innerHTML = "Sorry ........";
}
