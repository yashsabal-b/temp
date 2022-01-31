let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter Number of Rows: ");
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= i; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);
