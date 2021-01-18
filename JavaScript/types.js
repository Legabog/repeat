// JavaScript - dynamic program language

// Primitive types in JavaScript(immutable types)

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

