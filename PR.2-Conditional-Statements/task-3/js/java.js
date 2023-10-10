var P = 100000;
var R = 0;
var N = 4;

if (8 > N <= 12) {
  R = 12;
  if (5 > N <= 8) {
      R = 5;
      if (3 > N <= 5) {
          R = 3;
      }
  }
}
else {
  R = 15;
}



var I = (P * R * N) / 100;
console.log("Total Amount:", P);
console.log("Total Years:", N);
console.log("Total Interest Rate:", R);
console.log("Total Interest:", I);
