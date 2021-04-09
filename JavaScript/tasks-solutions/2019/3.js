const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let output = []

rl.on("line", (data) => {
  output.push(data)
})

rl.on("close", () => {
  process.stdout.write(output.join(""))
})