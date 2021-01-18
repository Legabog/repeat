// Primitives values
let a = 10
let b = 20
b++

console.log(`a: ${a}`) // 42
console.log(`b: ${b}`) // 43

// Objects reference
// Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

let x = [1, 2, 3] // initial Array, reference
let y = x // refCopy
y.push(4)

let z = [1, 2, 3, 4]

console.log(`x: ${x}`)
console.log(`y: ${y}`)

console.log(x === y)
console.log(x === z)

// The same situation with objects
let initObj = {
  a: 1,
  b: 2,
  c: 3
} // initial Object, reference 

let copyObj = initObj // refCopy
copyObj.d = 4

let otherObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4  
} // otherObj not the same it's other memory place

console.log(`initObj: `, {...initObj})
console.log(`copyObj: `, {...copyObj}) // the same memory place with initObj 

console.log(initObj == copyObj)
console.log(initObj == otherObj)

