// ** Closure in JavaScript **

// Combination of function and lexical enviroment.
// Function depends on lexical enviroment's values.
// The lexical enviroment = parent scope.
// Parent scope could be a global scope or function/local/block

// * Parent scope = global scope
// An example:
let a = 10; // variable a was declared in global scope
function closure_1(b) {
  return a + b; // function closure_1 has access to varibale a, but it was declared in outer scope, parent scope
}
closure_1(50); // returns 60
// * Parent scope = other function
// An example:
function closure_2() {
  let a = 10; // variable a was declared in closure_2 scope

  function innerFunc(b) {
    return a + b; // function innerFunc has access to varibale a, but it was declared in closure_2's scope
  }

  return innerFunc;
}
const callerFunc = closure_2()
callerFunc(20) // 30

// Other example:
function sayHello(name) {
  const message = `Hello, ${name}`;

  return (function () {
    return message; // this function has access to variable message from upper scope, sayHello's scope
  })();
}
sayHello("Oleg");

// Other example:
// It's hook's concept

function managerOfEvents() {
  const events = ["Listen music", "Read book"]; // events was declared in managerOfEvents's scope

  function addEvent(event) { // method adds some custom event
    events.push(event); // mutation of variable events, which was declared in outer scope 
    console.log(`Event: "${event}" was added`);
  }

  function getEventList() { // method outputs list of events
    console.log(events); // we have access to variobale events, which was delcared in outer scope
  }

  return [
    addEvent,
    getEventList
  ] // returns methods
}

const [ addEvent, getEventList ] = managerOfEvents();
addEvent("Go to school");
getEventList();

// Other example:

function fib() {
  const fibNum = [1, 1, 2, 3, 5, 8, 13];

  for (let i = 0; i < fibNum.length; i++) {
    setTimeout(
      () => console.log(`Index: ${i}, number: ${fibNum[i]}`),
      `${i}000`
    );
  }
}

fib();
