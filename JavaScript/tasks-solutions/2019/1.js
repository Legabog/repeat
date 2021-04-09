const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []

rl.on('line', (data) => {
  input.push(data)
})

rl.on('close', () => {
  if (input[0] >= 1 && input[0] <= 100) {
    const slicedArray = input.slice(1)
    if (slicedArray.reduce((acc, current) => Math.abs(acc) + Math.abs(current)) <= 1000) {
      let min = 100
      let value = 100

      for (let i = 0; i < slicedArray.length; i++) {
        value += Number(slicedArray[i])

        if (min > value) {
          min = value
        }
      }

      

       process.stdout.write(value.toString())
    } else {
      throw new Error("Перемещения проектировщиков не должны по модулю превышать 1000")
    }
  } else {
    throw new Error("n должно быть в диапазоне [1, 100].")
  }
})