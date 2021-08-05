// ** Types in JavaScript **

// * All types:
// - 1) Number -> primitive type
// - 2) String -> primitive type
// - 3) Boolean -> primite type
// - 4) Object -> object type
// - 5) BigInt -> primitive type 
// - 6) Symbol -> primitive type
// - 7) undefined -> primitive type
// - 8) null -> primitive type, but typeof null === "object", an old bug of JavaScript

// * All typeof types:
// - 1) "number"
// - 2) "string"
// - 3) "boolean"
// - 4) "undefined"
// - 5) "object"
// - 6) "function"
// - 7) "symbol"
// - 8) "bigint"

// - Arrays inherited from the object
// - Function inherited from the object, but the type is defined as "function" for convenience
// - An Object is the hieghest level of JavaScript's hierarchy. Above only null. 

// Primitive types in JavaScript(immutable types)
// * All primitive types have a wrapper(this is a object with methods), exept null, undefined: Number(), String(), Boolean(), BigInt(), Symbol()
// Thats why we can call some methods in this example.
// An example:
// let a = 10
// a.isNaN() === Number(10).isNaN(), here we called method of Number() isNaN. We can do it, because a was wrapped by wrapper Number() at the moment of calling method isNaN. Variable a doesn't have any methods it is just a simple variable. 

console.log(typeof 1) // number
console.log(typeof NaN) // number
console.log(typeof -Infinity, typeof +Infinity) // number number


console.log(typeof "some string") // string

console.log(typeof undefined) // undefined

console.log(typeof true) // boolean 

console.log(typeof 10n) // bigint

console.log(typeof Symbol("symbol")) // symbol

console.log(typeof null) // Not null, it's object. Common mistake for compatibility.

// Objective types in JavaScript

console.log(typeof {}) // object
console.log(typeof function(){}) // function
console.log(typeof []) // object 

// Collections Map, WeakMap, Set, WeakSet

// 0 have -0 and +0
console.log(-0 === +0) // true
// but
console.log(42 / -0 === 42 / +0) // -Infinity !== +Infinity

// Explicit and implicit type conversion 

console.log(1 + "1") // "11"
console.log("" + 42) // "42"
console.log("" - 42) // -42, Strings doesn't have operator "-", "" converts into 0, because "" equal 0 => 0 - 42 = -42
console.log("2" * "5") // 10, Strings doesn't have operator "-", "2" converts into number 2 and "5" into 5 => 2 * 5 = 10
console.log(40 + 2 + "%") // "42%"
console.log("50" - 20) // 30
console.log("10$" - 5) // NaN, Strings doesn't have operator "-", "10$" converts into NaN => NaN - 5 = NaN
console.log(null + 1) // 1, null convers into 0 => 0 + 1 = 1
console.log(undefined + 5) // NaN, undefined converts into NaN => NaN + 5 = NaN

// "==" - comparison with type conversion, "===" - compartion without type conversion

console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log("0" == false) // true
console.log("0" == 0) // true
console.log(false == "") // true
console.log(false == []) // true
console.log(false == {}) // false
console.log("" == 0) // true
console.log("" == []) // true
console.log("" == {}) // false
console.log(0 == []) // true
console.log(0 == null) // false
console.log(0 == {}) // false

// {} + [] and [] + {}
// - in the first case {} + [], 
// {} is an empty block of code, cause of that we have +[]
// +[] is a number type conversion, +[] === 0
// - first result {} + [] === 0
// - in the second case [] + {}
// array [] is converting to String, [].toString() === ""
// "" + {} === "[objectObject]"
// - second result is "[objectObject]"

// Some interesting examples
// array
// [].toString() === ""
// [1,2].toString() === "1,2"
// [1, "abc"].toString() === "1, abc"
// +[] === 0
// +[1] === 1
// +[1, 2] === NaN
// !![] === true

// object
// let obj = {}
// obj.toString() === "[objectObject]"
// +obj === NaN
// !!obj === true 
