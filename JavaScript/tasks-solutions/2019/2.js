const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let string = ""

rl.on("line", (data) => {
  string += data
  console.log(string)
})

rl.on("close", () => {
  if (string.split("").length <= 1000 && string.split("").length >= 0 ) {
    const result = []

    for (let i = 1; i <= string.split("").length; i++) {
      if (i % 2 === 0) {
        result.push(string.split("")[i - 1])

      }
    }   

    for (let i = 1; i <= string.split("").length; i++) {
      if (i % 2 !== 0) {
        result.push(string.split("")[i - 1])
      }
    }

    process.stdout.write(result.join(""))

  } else {
    throw new Error("Длина строки должна быть в диапазоне [0, 1000]")
  }
})
