let readlineSync = require("readline-sync");
let str = readlineSync.question("Enter IP Address: ");
let isValidIP = () => {
  let words = str.split(".");
  if (words.length !== 4) {
    console.log("Invalid");
  } else {
    console.log("valid");
  }
  if (
    words[0] === "10" ||
    (words[0] === "172" &&
      parseInt(words[1], 10) >= 16 &&
      parseInt(words[1], 10) <= 31) ||
    (words[0] === "192" && words[1] === "168")
  ) {
    console.log("It is a Private IP");
  } else {
    console.log("It is a Public IP");
  }
};
isValidIP();
