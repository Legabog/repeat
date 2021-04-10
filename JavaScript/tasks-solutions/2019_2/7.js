const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number1;
let number2;
let iterations = 0;
let result = false;

rl.on("line", (str) => {
  if (
    str.trim().split(" ")[0] >= 1 &&
    str.trim().split(" ")[0] <= 100 &&
    str.trim().split(" ")[1] >= 1 &&
    str.trim().split(" ")[1] <= 100
  ) {
    number1 = Number(str.trim().split(" ")[0]);
    number2 = Number(str.trim().split(" ")[1]);
  } else {
    throw new Error("Диапазон для переменных X, Y:  1 <= X <= Y <= 100.");
  }
});

rl.on("close", () => {
  if (number1 > number2) {
    process.stdout.write("-1");
  } else {
    while (number2 > number1) {
      if ((number2 / 4) % 1 === 0 && number2 / 4 > number1) {
        number2 = number2 / 4;
        iterations++;
      } else if (number2 / 4 === number1) {
        number2 = number2 / 4;
        iterations++;
        result = true;
        process.stdout.write(iterations.toString());
      } else if (number2 - 3 > number1) {
        number2 = number2 - 3;
        iterations++;
      } else if (number2 - 3 === number1) {
        number2 = number2 - 3;
        iterations++;
        result = true;
        process.stdout.write(iterations.toString());
      } else if ((number2 / 4) % 1 === 0 && number2 / 4 < number1) {
        number2 = number2 / 4;
        process.stdout.write("-1");
      } else if (number2 - 3 < number1) {
        number2 = number2 - 3;
        process.stdout.write("-1");
      }
    }
  }
});
