const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputString = [];

rl.on("line", (str) => {
  if (inputString.length <= 2) {
    const tempStr = str.replace(/ +/g, " ").trim().split("");
    if (tempStr.indexOf(" ") !== -1) {
      if (
        Number(tempStr.slice(0, tempStr.indexOf(" ")).join("")) >= 0 &&
        Number(tempStr.slice(0, tempStr.indexOf(" ")).join("") <= 6)
      ) {
        inputString.push(tempStr.slice(0, tempStr.indexOf(" ")).join());
      } else {
        throw new Error("Числа должны быть в диапазоне [0..6].");
      }

      if (
        Number(tempStr.slice(tempStr.indexOf(" ") + 1).join("")) >= 0 &&
        Number(tempStr.slice(tempStr.indexOf(" ") + 1).join() <= 6)
      ) {
        inputString.push(tempStr.slice(tempStr.indexOf(" ") + 1).join());
      } else {
        throw new Error("Числа должны быть в диапазоне [0..6].");
      }
    } else {
      throw new Error("Неверный формат записи доминошек.");
    }
  } else {
    throw new Error("Все должно быть две доминошки.");
  }
});

rl.on("close", () => {
  let temp1 = inputString.slice(0, 2);
  let temp2 = inputString.slice(2);

  if (temp2.indexOf(temp1[0]) === 0) {
    temp1.reverse();
    console.log(...temp1.concat(temp2));
  } else if (temp2.indexOf(temp1[0]) === 1) {
    temp1.reverse();
    temp2.reverse();
    console.log(...temp1.concat(temp2));
  } else if (temp2.indexOf(temp1[1]) === 0) {
    console.log(...temp1.concat(temp2));
  } else if (temp2.indexOf(temp1[1]) === 1) {
    temp2.reverse();
    console.log(...temp1.concat(temp2));
  } else {
    console.log(-1);
  }
});
