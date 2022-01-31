let readlineSync = require("readline-sync");
let str = readlineSync.question("Enter IP Address: ");
let isValidIP = () => {
  let words = str.split(".");
  if (words.length !== 4) {
    console.log("Invalid");
  } else {
    console.log("valid");
  }
  let type = str.substring(0, 3).toString();
  if (type >= 0 && type <= 127) {
    console.log("Its a Class A IP Address");
  }
  if (type >= 128 && type <= 191) {
    console.log("Its a Class B IP Address");
  }
  if (type >= 192 && type <= 223) {
    console.log("Its a Class C IP Address");
  }
};
isValidIP();
