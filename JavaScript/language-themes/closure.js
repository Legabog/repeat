// Closure in JavaScript
// It's Javascript mechanism. 
// Combination of function and lexical enviroment.

// The lexical enviroment = parent scope.
// Parent scope could be a global scope or function

// Parent scope = global scope

let a = 10;

function closure_1(b) {
  return a + b
}

// Parent scope = other function

function closure_2() {
  let a = 10

  function innerFunc() {
    return a + b
  }

  return innerFunc
}


// example 1
function sayHello(name) {
  const message = `Hello, ${name}`
  
  return (function() {
    console.log(message) // this function has access to variable message from upper scope
  })()
}

sayHello("Oleg")
// 

// example 2

function managerOfEvents() {
  const events = ["Listen music", "Read book"]

  return {
    addEvent(event) {
      events.push(event)
      console.log(`Event: "${event}" was added`)
    },
    getEventList() {
      console.log(events)
    }
  }
}

const manager = managerOfEvents()
manager.addEvent("Go to school")
manager.getEventList()

// example 3

function fib() {
  const fibNum = [1, 1, 2, 3, 5, 8, 13]

  for (let i = 0; i < fibNum.length; i++) {
    setTimeout(() => console.log(`Index: ${i}, number: ${fibNum[i]}`), `${i}000`)
  }
}

fib()