// Context
// explicit binding
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

// implicit binding

function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this)
}

const oleg = new Person("Oleg", 24)

