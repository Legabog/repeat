// Hoisting in Js - mechanism in JavaScript, when variables and function declaration move up in own scope

// Function Declarations method has an hoisting effect.

// example 1 with Function Declaration
console.log(sum(1, 41)) // not error

function sum(a, b) {
  return a + b
} 

// Function Expression doen't have an hoisting effect.

// example 1 with Function Expressoin
console.log(sum(1, 41)) // ReferenceError: Cannot access 'sum' before initialization

const sum = function(a, b) {
  return a + b
} 

// Hoisting with variables

// example 2 with var
// var i = 42 => var i => i = 42
console.log(i) // undefined
var i = 42
console.log(i) // 42

// example 2 with let/const

console.log(num) // ReferenceError: num is not defined
let num = 42 
console.log(num) // 42

// example 3
// In this example we have not declared variable a. All not declared variables it is global variables

function hoist() {
  a = 20; // Global variable a. We can refer to a outside of function.
  var b = 100; // Function/Local variable a. Has local scope. Can use it only inside of function
}

hoist();

console.log(a); // 20
console.log(b); // ReferenceError b is not defined


// Function declarations "rise" above variable declarations, but not their purposes
// example 4 variables purposes above function declaration
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // number

// example 4 function declaration above variable declaration
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // function

// example 5 with class declaration
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

// example 5 with class expression

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
