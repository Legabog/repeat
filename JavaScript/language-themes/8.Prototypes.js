// ** Prototype inheritance in JavaScript

// Prototype inheritance is a concept of chaning inheritance in JavaScript
// The highest level of this chane is object and __proto__ of object is null
// If we have not a method we move up on chane structure and try to find it in prototypes
// We have a feature to overwrite or add some custom methods
// __proto__ ES6
// Object.getPrototypeOf() ES5
// all objects have a property __proto__
// only functions(exept arrow function) and classes have a property prototype. 

// __proto__ refers on class(function constructor)  Number().__proto__ === Number.prototype

// * Chaning structure
// An example
function User(name) {
  this.name = name
}

console.log(User.prototype) // constructor [Function]
console.log(User.__proto__) // [Function]
console.log(User.__proto__.__proto__) // [Object]
console.log(User.__proto__.__proto__.__proto__) // null

// * Adding some methods
// An example
function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat("KOT1", "red")
cat.voice()

function Person() {

}

Person.prototype.legs = 2
Person.prototype.skin = "white"

const person = new Person()
person.name = "Oleg"

console.log("skin" in person)
console.log(person.hasOwnProperty("name"))
