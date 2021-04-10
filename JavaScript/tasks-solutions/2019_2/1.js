const readline = require("readline")

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
let result = 0

rl.on("line", (number) => {
  if (Number(number.trim()) >= 1 && Number(number.trim()) <= 100000) {
    input.push(number)
  } else {
    throw new Error("Число должно быть в диапазоне от 1 до 100000.")
  }
})

rl.on("close", () => {
  for (let i = 0; i <= Number(input.join("")); i++) {
    if (Number(i.toString().split("").reverse().join("")) === i) {
      console.log(Number(i.toString().split("").reverse().join("")))
      result++
    }
  }
  process.stdout.write(result.toString())
})