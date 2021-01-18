// Scopes var, let, const
// We have global and local scope (global scope and function scope)

// var declaration

// example 1
var example_one
console.log(example_one) // undefined
example_one = 1 // initialization

// example 2
// functional scope
const varTest = () => {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
};

varTest()

// 1) i = 0 console.log(i) => i++, i = 1 
// 2) i = 1 console.log(i) => i++, i = 2
// 3) i = 2 console.log(i) => i++, i = 3
// 4) => console.log(i) i = 3
// console: 0, 1, 2, 3

// example 3
const someFunction = () => {
  var str = "str"
  const someFunction_2 = () => console.log(str.split("")[0]) // s

  return someFunction_2()
}

someFunction()
console.log(str) //  ReferenceError: str is not define

// example 4
const func = () => {
  var some = 1
  if (true) {
    var some = 2
    console.log(some) // 2
  }
  console.log(some) // 2 
}

// Hoisting
// var someVar = undefined // hoisting
console.log(someVar) // undefined
var someVar = 1 // someVar = 1 

