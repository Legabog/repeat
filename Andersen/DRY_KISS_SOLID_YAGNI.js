// * DRY
// DRY - Don't repeat yourself.
// We have a single source of truth.
// We haven't to mutliply some blocks/modules of code.

// React application.
// An example:
// We have two the same blocks of code.
const Main = (props) => {
  return (
    <>
      <div>
        <p>Item 1</p>
        <button>item1 click</button>
      </div>
      <div>
        <p>Item 2</p>
        <button>item2 click</button>
      </div>
    </>
  );
};
// We need to take out this modules of code into one custom component, which will recieve properties.
const CustomComponent = ({ name, buttonName }) => {
  return (
    <div>
      <p>${name}</p>
      <button>${buttonName}</button>
    </div>
  )
}
// After this actions we have:
const Main = (props) => {
  return (
    <>
      <CustomComponent name={"Item 1"} buttonName={"item1 cllick"} />
      <CustomComponent name={"Item 2"} buttonName={"item2 cllick"} />
    </>
  );
};
// ---
// * KISS
// KISS - Keep it short and simple.
// Don't add useless methods, ui features.
// Create it with max simple way.
// ---
// * SOLID
// S - Single Responsibility Principle.
// Every class must meet to one aspect(solve one problem).
// Каждый класс должен отвечать за один аспект(решать одну поставленную задачу).
// O - Open Close Principle.
// Classes, objects must be opened for extention and closed for changes.
// Классы, объекты должны быть открыты для расширения и закрыты для изменений.
// L - Liskov Substitution Principle.
// An inherited class should complement, not replace, the behavior of a base class.
// Принцип подстановки Лисков гласит, что любой класс должен быть заменяем на свой родительский класс без неожиданных последствий.
// I - Interface Segregation Principle.
// The principle of interface separation says that interfaces that are too "thick" should be separated into smaller and more specific interfaces, so that the software entities of the smaller interfaces only know about the methods they need to use. As a result, changing an interface method should not change program entities that do not use that method.
// Принцип разделения интерфейсов гласит, что слишком "толстые" интерфейсы должны быть разделены на более мелкие и специфические интерфейсы, так что программные сущности более мелких интерфейсов знают только о методах, которые им нужны. В результате, изменение метода интерфейса не должно изменять программные сущности, которые не используют этот метод.
// D - Dependency Inversion Principle.
// A. Top-level modules should not depend on lower-level modules. Both types of modules should depend on abstractions.
// B. Abstractions should not depend on parts. Parts should depend on abstractions.
// A. Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
// B. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
// --- 
// * YAGNI
// YAGNI - You are not gonna need it.
// The main purpose of this principle is "Avoiding redundant application's functionality."
// ---
