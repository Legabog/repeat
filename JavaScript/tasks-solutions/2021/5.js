const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString_1;
let inputString_2 = [];

rl.on("line", (str) => {
  if (inputString_1 === undefined) {
    inputString_1 = str.trim()
  } else if (inputString_1 !== undefined && inputString_2.length === 0) {
    inputString_2 = str.trim().split(" ")
  }
});

rl.on("close", () => {
  let result = []
  for (let i = 0; i < inputString_2.length; i++) {
    let element = Number(inputString_2[i])
    let k = 1
    for (let j = i + 1; j < inputString_2.length; j++) {
      if (element < Number(inputString_2[j])) {
        element = Number(inputString_2[j])
        k++
      }
    }

    result.push(k)
  }

  console.log(result.join(" "))
});