const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = [];

rl.on("line", (str) => {
  // console.log(str.split("").filter(e => e !== " "))
  // let tempStr = str.match("^[a-zA-Z]+$").join("").toLowerCase()
  // console.log(tempStr.join("").toLowerCase())

  let tempStr = str
    .split("")
    .filter((e) => e !== " ")
    .join("")
    .match("^[a-zA-Z]+$");

  if (tempStr !== null) {
    tempStr = tempStr.join("").toLowerCase();
    if (tempStr.split("").length >= 1 && tempStr.split("").length <= 100) {
      inputString = [...tempStr.split("")];
    } else {
      throw new Error("Строка должна быть быть в диапазоне [0..100].");
    }
  } else {
    throw new Error("Строка должна быть быть из латинских букв.");
  }
});

rl.on("close", () => {
  let result;
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i < inputString.length; i++) {
    // Глассная
    if (vowels.indexOf(inputString[i]) !== -1) {
      if (vowels.indexOf(inputString[i + 1]) === -1) {
        result = "YES";
      } else if (inputString[i + 1] === undefined) {
        console.log(result);
      } else if (vowels.indexOf(inputString[i + 1]) !== -1) {
        result = "NO";
        console.log(result);
        break;
      }
    } // Cогласная
    else if (vowels.indexOf(inputString[i]) === -1) {
      if (vowels.indexOf(inputString[i + 1]) !== -1) {
        result = "YES";
      } else if (inputString[i + 1] === undefined) {
        console.log(result);
      } else if (vowels.indexOf(inputString[i + 1]) === -1) {
        result = "NO";
        console.log(result);
        break;
      }
    }
  }
});
