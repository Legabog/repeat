const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const strArray = [];
const objectForm = [];

rl.on("line", (str) => {
  if (str.trim().split("")[0] === "+" || str.trim().split("")[0] === "-") {
    strArray.push([..."+".concat(str.trim()).split("")]);
  } else if (str.trim().split("")[0] === "x") {
    strArray.push([..."+".concat(str.trim()).split("")]);
  } else if (
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(
      str.trim().split("")[0]
    ) !== -1
  ) {
    strArray.push([...str.trim().split("").unshift("+")]);
  } else {
    throw new Error("Неверный  формат многочлена.");
  }

  for (let i = 0; i < strArray.length; i++) {
    let arrayIndex = i;
    for (let j = 0; j < strArray[i].length; j++) {
      let element = [];
      let x = false;
      let koef = [];
      let pow = [];

      if (strArray[i][j] === "+" || strArray[i][j] === "-") {
        element.push(strArray[i][j]);

        let q = 1;
        while (
          strArray[i][j + q] !== "+" &&
          strArray[i][j + q] !== "-" &&
          strArray[i][j + q] !== undefined
        ) {
          element.push(strArray[i][j + q]);
          q++;
        }

        if (element.indexOf("x") !== -1) {
          x = true;

          if (
            element[element.indexOf("x") - 1] === "+" ||
            element[element.indexOf("x") - 1] === "-"
          ) {
            koef.push(element[element.indexOf("x") - 1]);
            koef.push("1");
          } else {
            koef = element.slice(0, element.indexOf("x"));
          }

          if (element.indexOf("^") !== -1) {
            pow = element.slice(element.indexOf("^") + 1);
          }

          // Validation koef
          if (Number(koef.slice(1).join("")) > 10 ** 5) {
            throw new Error("Коэфициент не должен превышать 10^5.");
          }

          // Validation pow
          if (Number(pow.join("")) > 20) {
            throw new Error("Степень не должна быть больше 20");
          }
        } else {
          koef = [...element];
        }

        objectForm.push({
          x,
          arrayIndex,
          koef: koef.length !== 0 ? [...koef] : [1],
          pow: pow.length !== 0 ? [...pow] : [1],
        });
      }
    }
  }
});

rl.on("close", () => {
  console.log(objectForm)
  let array = [];
  let array2 = [];
  let result = [];

  objectForm.map((e) => {
    e.arrayIndex === 0 ? array.push(e) : array2.push(e);
  });

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array2.length; j++) {

      if (array[i].x === true) {

        if (array2[j].x === true) {
          result.push(`${Number(array[i].koef.join("")) * Number(array[j].koef.join(""))}x^${Number(array[i].pow.join("")) + Number(array[j].pow.join(""))}`)
        }
      }
    }
  }

  console.log(array);
  console.log(array2);
  console.log(result)
});
