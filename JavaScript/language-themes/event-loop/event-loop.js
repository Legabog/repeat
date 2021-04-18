// Event loop 
// Microtasks > Macrotasks
// example 1

function main() {
  console.log("A")

  setTimeout(() => console.log("B"), 0)

  console.log("C")

}

main() // Console: A, C, B

// Order of actions
// 1) Call of function main() => push it to call stack => push first expression of function main() (its console.log("A")) to call stack => execution of console.log("A") => delete after finish of this action => Console output: "A"
// 2) Next expression setTimout with arrow function and console.log("B") push to call stack => execution begins => function setTimeout uses Web Api for call delay => The item (frame) is removed from the stack as soon as the timer transfer to the browser API is complete
// 3) console.log('C') is placed on the stack while the timer for calling exec() is started in the browser. In this particular case, since the wait time is 0 seconds, the callback (exec()) will be placed in the message queue as soon as the browser receives it (ideally).
// 4) After the last expression of the main function, the main element is removed from the call stack, leaving it empty. The call stack must be empty in order for the browser to place a message queue item in it. For this reason, even if setTimeout specifies a timeout of 0 seconds, exec() is not executed until all elements in the call stack are finished.
// 5) Now exec() is placed on the call stack and executed. The letter B is printed to the console. This is it - the JavaScript event loop (EventLoop).

// example 2 

function main() {
  console.log('A')
  setTimeout(function exec() {
    console.log('B')
  }, 0)
  runWhileLoopForNSeconds(3)
  console.log('C')
}
main()
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
  now = start
  while (now - start < sec * 1000) {
  now = Date.now()
  }
}

// The runWhileLoopForNSeconds() function does exactly what its name says. It constantly checks if the number of seconds passed by the argument has passed since it was called. The main thing to remember is that the while loop is a blocking expression, which means that it is executed on the call stack and does not use browser APIs. So it blocks all subsequent expressions until it is executed.
// In the code above, even though setTimeout has a 0-second delay and the while loop runs for 3 seconds, exec() will get stuck in the message queue. The while loop will run in the call stack (which has one thread) until 3 seconds have passed. Only when the call stack is empty will exec() be placed on the stack and executed.
// Thus, the delay argument in setTimeout() does not guarantee that execution will start after the specified delay has finished. It is the minimum delay time.