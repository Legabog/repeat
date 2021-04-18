// IIFE -  Immediately invoked function expression.
let result = [];

// for (var i = 0; i < 5; i++) {
//   result.push(() => console.log(i))
// }

// result[3]()

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    result.push(() => console.log(j));
  })();
}

result[3]()