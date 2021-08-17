// Difference between Arrow Function and Regular Function

// 1. Syntax
// Regular Function
function someFunc() {
  return "qwe";
}
// Arrow Function
() => "qwe";

// 2. Arguments
// Regular Function have an object with arguments
function checkArguments() {
  return [...arguments];
}
// Arrow function doesn't have arguments.

// 3. "This"
// Regular Function has their own "this", instead of arrow functions.
// If we use "this" in arrow function, we turn to parent scope instead of their own scope.

let person = {
  name: "Oleg",
  thisInArrow: () => console.log("My name is " + this.name), // no 'this' binding here, because this is arrow function and we turn to parent scope
  thisInRegular() {
    console.log("My name is " + this.name);
  }, // 'this' binding works here
};

// 4. Functions constructors.
// We can create some regular function as constructor, with using keyword "new".
// We can't use arrow functions as constructors(with keyword "new").

// 5. Duplicates of arguments
// Regular Functions
// no use strict
// An example:
function addNumber(x, x) {} // is valid
// use strict
("use strict");
function addNumber(x, x) {} // Syntax Error
// Arrow Functions
// It doesn't matter "use strict" or no "use strict". Duplicates of arguments are invalid.
(x, x) => "a"; // SyntaxError: duplicate argument names not allowed in this context
