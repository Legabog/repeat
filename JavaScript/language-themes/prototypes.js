// __proto__ ES6
// Object.getPrototypeOf() ES5

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
