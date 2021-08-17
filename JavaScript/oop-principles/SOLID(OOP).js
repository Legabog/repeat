// SOLID principles

// S - Single Responsibility Principle
// Every class must meet to one aspect(solve one problem)
// Каждый класс должен отвечать за один аспект(решать одну поставленную задачу)

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  transformToHTML() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <span>${this.news.text}</span>
      </div>
    `;
  }

  transformToJSON() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }

  transformToXML() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `;
  }
}

const print = new NewsPrinter(
  new News("Новость № 1.", "Сегодня очень пасмурно.")
);

// O - Open Close Principle
// Classes, objects must be opened for extention and closed for changes

// Классы, объекты должны быть открыты для расширения и закрыты для изменений

class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class React {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalculator([new Square(10), new Circle(1), new Circle(5)]);

// L - Liskov Substitution Principle
// An inherited class should complement, not replace, the behavior of a base class

// Принцип подстановки Лисков гласит, что любой класс должен быть заменяем на свой родительский класс без неожиданных последствий.

class Person {}

class Member extends Person {
  access() {
    console.log("У тебя есть доступ.");
  }
}

class Guest extends Person {
  access() {
    throw new Error("У тебя нет доступа!");
  }
}

class Frontend extends Member {
  creatingForms() {}
}

class Backend extends Member {
  creatingEngine() {}
}

class PersonFromDifferentCompany extends Guest {}

function openSecretRoom(member) {
  member.access();
}

openSecretRoom(new Frontend());
openSecretRoom(new Backend());
// openSecretRoom(new PersonFromDifferentCompany()) Here should be a Member of Company

// ======================

class Component {}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class Footer extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is impossible here.");
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
// renderComponent(new HOC())

// I - Interface Segregation Principle
// The principle of interface separation says that interfaces that are too "thick" should be separated into smaller and more specific interfaces, so that the software entities of the smaller interfaces only know about the methods they need to use. As a result, changing an interface method should not change program entities that do not use that method.

// Принцип разделения интерфейсов гласит, что слишком "толстые" интерфейсы должны быть разделены на более мелкие и специфические интерфейсы, так что программные сущности более мелких интерфейсов знают только о методах, которые им нужны. В результате, изменение метода интерфейса не должно изменять программные сущности, которые не используют этот метод.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} умеет ходить.`);
//   }

//   swim() {
//     console.log(`${this.name} умеет плавать.`);
//   }

//   fly() {
//     console.log(`${this.name} умеет летать.`);
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }

// class Eagle extends Animal {}

// class Whale extends Animal {
//   fly() {
//     return null;
//   }

//   walk() {
//     return null;
//   }
// }

// const dog = new Dog("Шарик");
// const eagle = new Eagle("Птица");
// const whale = new Whale("Китяра");

class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать.`);
  }
}

const flier = {
  fly() {
    console.log(`${this.name} умеет летать.`);
  }
}

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить.`);
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, swimmer, walker, flier)
Object.assign(Whale.prototype, swimmer)

// D - Dependency Inversion Principle
// A. Top-level modules should not depend on lower-level modules. Both types of modules should depend on abstractions.
// B. Abstractions should not depend on parts. Parts should depend on abstractions.

// A. Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
// B. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())

    return Promise.resolve("data from fetch")
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from local storage"
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request("vk.com")
  }
}

class LocalStorageClient {
  constructor() {
    this.LocalStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.LocalStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData() {
    return this.client.clientGet(key)
  }
}
