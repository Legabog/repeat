const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = [];

rl.on("line", (str) => {
  if (str.trim().split(" ").length === 4) {
    inputString = str.trim().split(" ")
  } else {
    throw new Error("Неверный формат ввода")
  }
  
});

rl.on("close", () => {
  let day = Number(inputString[0])
  let hour = Number(inputString[1])
  let minute = Number(inputString[2])
  let seconds = Number(inputString[3])

  let resDay = 0
  let resHour = 0
  let resMinute = 0

  if (seconds > 0) {
    resMinute = seconds % minute
    resHour = Math.floor(seconds / minute)  % hour
    resDay = Math.floor(Math.floor(seconds / minute) / hour) % day
    console.log(`${resDay} ${resHour} ${resMinute}`)
  } else {
    console.log(`${resDay} ${resHour} ${resMinute}`)
  }
});