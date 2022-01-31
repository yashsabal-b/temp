let readlineSync = require("readline-sync");

const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

let encoded = "";

let str = readlineSync.question(
  "Enter your Desired string to convert to Rot13: "
);

for (let i = 0; i < str.length; i++) {
  const index = input.indexOf(str[i]);
  encoded += output[index];
}
console.log(encoded);
