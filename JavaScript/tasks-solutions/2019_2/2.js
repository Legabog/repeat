const readline = require("readline")

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let string
const result = []

rl.on("line", (str) => {
  if (str.trim().split("").length >= 2 && str.split("").length <= 1000) {
    string = str
  } else {
    throw new Error("Длина строки должна быть от 2 до 1000.")
  }
})

rl.on("close", () => {

  for (let i = 0; i < string.split("").length; i++) {
    if (string.split("")[i] !== " ") {
      let element = string.split("")[i]

      for (let j = i + 1; j < string.split("").length; j++) {
        if (element === string.split("")[j]) {
          if (result.indexOf(element) === -1) {
            result.push(element)
          } 
        }
      }
    }
  }  

  process.stdout.write(result.join(""))
})