// ** Hoisting in JavaScript **
// Hoisting in Js - mechanism in JavaScript, when variables and function declaration move up in own scope

// * Function Declarations method has an hoisting effect
// An example:
console.log(sum(1, 41)) // we have called function sum before initialization, but it's not an error. It's a hoisting effect in JavaScript

function sum(a, b) {
  return a + b
} 

// * Function Expression doesn't have an hoisting effect
// An example:
console.log(sum(1, 41)) // ReferenceError: Cannot access 'sum' before initialization

const sum = function(a, b) {
  return a + b
} 

// * Hoisting with variables
// An example:
console.log(i) // it's undefined, because var i = 42 hoists and splits to var i and i = 42, var i move up, but i = 42 stays in the same place, where it's was called
var i = 42
console.log(i) // 42
// Previous example:
// var i
// console.log(i) // udefined, because variable i was just declared
// i = 42 
// console.log(i) // 42

// * It's not working with let/const
// An example:
console.log(num) // ReferenceError: num is not defined, NO HOISTING
let num = 42 
console.log(num) // 42

// * In this example we have not declared variable a. All not declared variables it is global variables
// An example:
function hoist() {
  a = 20; // Global variable a. We can refer to a outside of function.
  var b = 100; // Function/Local variable b. Has local scope. Can use it only inside of function
}
hoist();
// Previous example:
// var a;
// function hoist() {
  // var b;
  // a = 20;
  // b = 100;
// }
console.log(a); // 20, we have an access to variable a, because it's global
console.log(b); // ReferenceError b is not defined, because b was declared inside of function hoist, we have not an eccess to it

// * Function declarations "rise" above variable declarations, but not their purposes
// Variables purposes above function declaration
// An example:
var double = 22;
function double(num) {
  return (num*2);
}
console.log(typeof double); // number

// function declaration above variable declaration
// An example:
var double;
function double(num) {
  return (num*2);
}
console.log(typeof double); // function

// * Class declaration
// An example
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

// * Class expression
// An example:
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
