const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let string = [];

rl.on("line", (str) => {
  if (string.length === 0) {
    if (Number(str.trim()) >= 1 && Number(str.trim()) <= 10 ** 9) {
      string.push(str.trim());
    } else {
      throw new Error("N должно быть в диапазоне [1..10^9].");
    }
  } else if (string.length === 1) {
    if (Number(str.trim()) >= 0 && Number(str.trim()) <= 1000) {
      string.push(str.trim());
    } else {
      throw new Error("M должно быть в диапазоне [0..1000].");
    }
  } else if (string.length >= 2) {
    let tempArray = str.replace(/ +/g, ' ').trim().split("")
    

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] === " ") {
        if (
          Number(tempArray.slice(0, i).join("")) >= 1 &&
          Number(tempArray.slice(0, i).join("")) <= string[0]
        ) {
          string.push(tempArray.slice(0, i).join(""));
          if ((string.length - 2) / 2 > string[i]) {
            throw new Error("Количество пар чисел должно быть равно M.");
          }
        } else {
          throw new Error(
            "Числовое значение пары должно быть в диапазоне [1..N]."
          );
        }

        if (
          Number(tempArray.slice(i + 1).join("")) >= 1 &&
          Number(tempArray.slice(i + 1).join("")) <= string[0]
        ) {
          string.push(tempArray.slice(i + 1).join(""));
          if ((string.length - 2) / 2 > string[i]) {
            throw new Error("Количество пар чисел должно быть равно M.");
          }
        } else {
          throw new Error(
            "Числовое значение пары должно быть в диапазоне [1..N]."
          );
        }
      }
    }
  } else {
    throw new Error("Некоректный ввод данных.");
  }
});

rl.on("close", () => {
  let resultIndex = 0;
  for (let i = 0; i < string.slice(2).length; i += 2) {
    let temp1 = [];
    let temp2 = [];
    let similarValues = 0;

    for (
      let x = Number(string.slice(2)[i]);
      x <= Number(string.slice(2)[i + 1]);
      x++
    ) {
      temp1.push(x);
    }

    for (let j = i + 2; j < string.slice(2).length; j += 2) {
      for (
        let x = Number(string.slice(2)[j]);
        x <= Number(string.slice(2)[j + 1]);
        x++
      ) {
        temp2.push(x);
      }

      for (let y = 0; y < temp2.length; y++) {
        if (temp1.indexOf(temp2[y]) !== -1) {
          similarValues++;
        }
      }

      console.log(similarValues)
      console.log(temp1, temp2);

      if (similarValues === 0) {
        resultIndex++;
      }
      
      temp2 = [];
      similarValues = 0
    }
  }

  console.log(resultIndex);
});
