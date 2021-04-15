const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = [];
let inputString_2 = []

rl.on("line", (str) => {
  if (inputString.length === 0) {
    inputString = str.trim().split(" ")
  } else if (inputString.length !== 0 && inputString_2.length === 0) {
    inputString_2 = str.trim().split(" ")
  }
});

rl.on("close", () => {
  
});