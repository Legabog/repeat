const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let matrixSize = [];
const matrix = [];
let result = 0;

rl.on("line", (string) => {
  if (matrixSize.length === 0) {
    if (
      string.trim().split(" ")[0] >= 1 &&
      string.trim().split(" ")[0] <= 12 &&
      string.trim().split(" ")[1] >= 1 &&
      string.trim().split(" ")[1] <= 12
    ) {
      matrixSize = string.trim().split(" ");
    } else {
      throw new Error("Стороны должны быть в диапазоне от 1 до 12.");
    }
  } else {
    if (string.trim().split(" ").length !== Number(matrixSize[0])) {
      throw new Error("Длина не равна заданной матрице N x M");
    } else {
      matrix.push(string.trim().split(" "));
    }
  }
});

rl.on("close", () => {
  if (matrix.length !== Number(matrixSize[1])) {
    throw new Error("Ширина не равна заданной матрице N x M");
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "0") {
          console.log(i, j);
          let q = j + 1;
          let w = i + 1;
          while (matrix[i][q] !== "1" && q < matrix[i].length) {
            result++;
            q++;
          }

          while (matrix[w][j] !== "1" && w < matrix.length) {
            result++;
            w++;
          }
        }
      }
    }

    process.stdout.write(result.toString());
  }
});
