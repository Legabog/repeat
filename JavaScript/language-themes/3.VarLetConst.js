// ** Var, let, const in JavaScript **

// Var, let and const are difference ways of variable's declaration

// * Var
// It's ES5 way of variable's declaration
// When we declare variable with "var", it has global scope, but we can limit it with functions
// An example:
var global_1 = "I'm global"(function checkScope() {
  var global_2 = "I'm limited";
})();
console.log(global_1); // "I'm global"
console.log(global_2) // isn't defined, global_2 is limited by function scope, we cant get access to it
// In ES5 developers used function to seperate scopes, today we have "let" and "const"

// * Let
// It's ES6 way if variable's declaration
// When we declare variable with "let", it has modal/functional scope
// An example:
let a = "Variable a";
let b = "Variable b";
{
  a = "New Variable A";
  let b = "Local Variable B";
  console.log("Scope A", a); // Overwriting a with value "Variable a" with new value "New Variable A" Console: "New Variable A"
  console.log("Scope B", b); // "Local Variable B"
  console.log("Scope C", c); // ReferenceError: Cannot access 'c' before initialization
  let c = "Something";
}
console.log("A:", a);
console.log("B:", b);
// With "let" we can change variable, instead of "const"
let changeMe = 12
changeMe += 100 // no error

// * Const
// It's ES6 way if variable's declaration
// When we declare variable with "const", it has modal/functional scope
// An example:
const PORT = 8080;
PORT = 10000; // an error
const array = ["Javascript", "is", "Awesome"];
array.push("!"); // not error, but it is const(Allowed mutation)
array[0] = "JS"; // the same situation mutate array(Allowed mutation)
console.log(array);

const obj = {};
obj.name = "Vladilen"; // Allowed mutation
obj.age = 26; // Allowed mutation

console.log(obj);

delete obj.name;

console.log(obj);
