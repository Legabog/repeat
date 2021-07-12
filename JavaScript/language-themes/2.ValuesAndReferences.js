// ** Values and references in JavaScript **

// Primitive types in JavaScript interacts as values.
// Object types in JavaScript interacts as references.

// * Primitives values
// An Example:
let a = 10; // first memory segment
let b = 20; // second memory segment
b++; // chaning value of b, b = 20 + 1 = 21
// value of a wasn't changed
console.log(`a: ${a}`); // 10
console.log(`b: ${b}`); // 21
// Immutable string
// An example
let str = "string";
str[0] = "X";
console.log(str); // "string"

// * Objects references
// Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
// An Example:
let x = [1, 2, 3]; // initial Array, first reference of memory segment
let y = x; // copy of x, first reference
y.push(4); // if we change y, we change x too
// x, y = [1, 2, 3, 4] two references of the same memory segment

let z = [1, 2, 3, 4]; // reference of another memory segment, second memory segment

console.log(`x: ${x}`); // [1, 2, 3, 4]
console.log(`y: ${y}`); // [1, 2, 3, 4]

console.log(x === y); // true, because it's two references of the one same memory segment
console.log(x === z); // false, because it's two references of different memory segments

// The same situation with objects
let initObj = {
  a: 1,
  b: 2,
  c: 3,
}; // initial Object, first reference of memory segment
let copyObj = initObj; // copy of initObj, first reference
copyObj.d = 4; // if we change copyObj, we change initObj too

let otherObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}; // reference of another memory segment, second memory segment

console.log(`initObj: `, { ...initObj }); // {a: 1, b: 2, c: 3, d: 4}
console.log(`copyObj: `, { ...copyObj }); // {a: 1, b: 2, c: 3, d: 4}

console.log(initObj === copyObj); // true, because it's two references of the one same memory segment
console.log(initObj === otherObj); // false, because it's two references of different memory segments
