const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const string = [];

rl.on("line", (str) => {
  let koeficient = [];

  for (let i = 0; i < str.split("").length; i++) {
    if (str.split("")[i] === "^") {
      let stepen = [];

      for (let j = i + 1; j < str.split("").length; j++) {
        if (
          str.split("")[j] !== "-" ||
          str.split("")[j] !== "+" ||
          str.split("")[j] !== undefined
        ) {
          stepen.push(str.split("")[j]);
        }
      }
      console.log(stepen)
      if (Number(stepen.join("")) > 20) {
        throw new Error("Степень не должна превышать 20.");
      }
    }

    if (
      str.split("")[i] !== "^" &&
      str.split("")[i] !== "+" &&
      str.split("")[i] !== "-" &&
      str.split("")[i] !== "x" &&
      str.split("")[i - 1] !== "^" &&
      str.split("")[i - 2] !== "^"
    ) {
      koeficient.push(str.split("")[i]);
    }
  }

  // console.log(stepen)

  if (Number(koeficient.join("")) > 10 ** 5) {
    throw new Error("Коэфициент степени не должен превышать 10^5.");
  }
});

rl.on("close", () => {});
