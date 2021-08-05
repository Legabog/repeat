// ** Types of functions **

// Function's types: functions and arrow functions
// Arrow function doesn't have own context "this" and "arguments", it refers to outer scope

// * Function declaration
// An example:
function func() {
  return "qwe";
}
() => "qwe";
// * Function expression
// An example:
const func_2 = function () {
  return "QWE";
};
const arrow_2 = () => "QWE";
// * Anonymous function
// An example:
const func_3 = function () {
  return "I'm noname";
};
// * Named function
// An example:
const func_4 = (function namedFunc() {
  return "I have name";
})
// * IIFE -  Immediately invoked function expression
// An example:
(() => {
  console.log("IIFE");
})();
// Other example:
let result = [];
for (var i = 0; i < 5; i++) {
  setTimeout(() => result.push(i), 100);
}
result; // result = [5, 5, 5, 5, 5]
// First solution. Switch var to let
// Second solution.
// First variant:
for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    result.push(j);
  })();
}
// Second variant:
for (var i = 0; i < 5; i++) {
  ((a) => {
    result.push(a);
  })(i);
}

result;
