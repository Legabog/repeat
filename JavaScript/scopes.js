// Scopes
// We have global and local scope (global scope and function scope)

// example 1
// nested functional scope

function func_1() {
  let from_scope_1 = 1;

  function func_2() {
    let from_scope_2 = 2;

    function func_3() {
      let from_scope_3 = 3;

      function func_4() {
        let from_scope_4 = 4;

        console.log(
          "Variables from first, second, third and fourth scope: ",
          from_scope_1,
          from_scope_2,
          from_scope_3,
          from_scope_4
        );
      }

      func_4();
      console.log(
        "Variables from first, second and third scope: ",
        from_scope_1,
        from_scope_2,
        from_scope_3
      );
    }

    func_3();
    console.log(
      "Variables from first and second scope: ",
      from_scope_1,
      from_scope_2
    );
  }

  func_2();
  console.log("Variable from first scope: ", from_scope_1);
}

func_1();

//----------------------

// example 2
// functional scope
const varTest = () => {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
};

varTest();

// 1) i = 0 console.log(i) => i++, i = 1
// 2) i = 1 console.log(i) => i++, i = 2
// 3) i = 2 console.log(i) => i++, i = 3
// 4) => console.log(i) i = 3
// console: 0, 1, 2, 3

// example 2 with setTimeout

const varTest_2 = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
};

varTest();

// console: 3, 3, 3
// Fix this example

// First way - switch var => let
const fixedTest_1 = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
};

// Second way - with using IIFE
const fixedTest_2 = () => {
  for (var i = 0; i < 3; i++) {
    (() => console.log(i))();
  }
};

// Block scope works with const and let. In constructions: if, for, while. Var is not block scoped.

// example 3

// Construction if with let/const = block scope
if (true) {
  // "if" block scope
  const message = "Hello";
  console.log(message); // 'Hello'
}
console.log(message); // throws Reference error

// Construction if with var != block scope

if (true) {
  // "if" block scope
  var count = 0;
  console.log(count); // 0
}
console.log(count); // 0 (not ReferenceError)

// Functional scope define a scope with const, let and var.

// example 4

function run() {
  // "run" function scope
  var message = "Run, Forrest, Run!";
  console.log(message); // 'Run, Forrest, Run!'
}

run();
console.log(message); // throws ReferenceError

function run() {
  // "run" function scope
  const two = 2;
  let count = 0;
  function run2() {}

  console.log(two); // 2
  console.log(count); // 0
  console.log(run2); // function
}

run();
console.log(two); // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2); // throws ReferenceError

// Module scope

// Circle module

// area of module scope
const pi = 3.14159;
console.log(pi); // 3.14159
// Usage of pi

import "./circle";
console.log(pi); // throws ReferenceError
