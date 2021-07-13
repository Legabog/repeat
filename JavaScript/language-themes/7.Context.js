// ** Context in JavaScript **

// Context connects with object
// Keyword "this" connects with object, which function belongs
// "this" is just a mark to some object, function 
// Main problem with context is missing of context 
// Call, bind, apply, new are the types of binding context in JavaScript

// * Call
// JavaScript's method "call" calls your function with some context and arguments
// An example:
const firstPerson = {
  name: "Oleg",
  surname: "Dosov",

  getFullName() {
    return `Fullname: ${this.name} ${this.surname}`
  }
}

const secondPerson = {
  name: "Kolya",
  surname: "Pupkin"
}

firstPerson.getFullName() // "Fullname: Oleg Dosov"
firstPerson.getFullName.call(secondPerson) // "Fullname: Kolya Pupkin" 

// * Bind
// JavaScript's method "bind" creates new binded function with some context, doesn't call function
// An example: 
const someContext = {
  value: 100
}

function fn() {
  return this.value * 2
}

fn.bind(someContext)()

// * Apply 
// JavaScript's method "apply" calls your function with some context and array of arguments
// An example: 
const dataContext = {
  value: 10
}
function calculateFunc(arg1, arg2) {
  return this.value * arg1 * arg2
}

calculateFunc.apply(dataContext, [20, 50])

// * New
// An example
function Cat (color, name) {
  this.color = color
  this.name = name
}

const cat = new Cat("black", "QWE")
console.log(cat)

// * Explicit binding
// An example: 

const person = {
  surname: "Stark",
  knows: function (what, name) {
    console.log(`You knows ${what}, ${name} ${this.surname}`);
  },
};

const john = { surname: "Snow" };

person.knows("all", "Bran");
person.knows.call(john, "nothing", "John")
person.knows.apply(john, ["nothing", "John"])
person.knows.bind(john, "nothing", "John")()

// * Implicit binding
// An example:

function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this)
}

const oleg = new Person("Oleg", 24)

