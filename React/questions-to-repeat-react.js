// ~ Junior questions

// 1. What is React?
// Answer: React - is a JavaScript library for creating resuing components and building user interfaces. This library was developed by Facebook.

// 2. What are the main advantages of React?
// Answer: React library accelerates application rendering performance with engine and Virtual DOM. Creating components that can be reused in the future. Easy to integrate into the application. Can be used on frontend and backend sides. JSX syntax.

// 3. What are the limitations of React?
// Answer: This is a library, not a framework. You need to add third-party libraries yourself for a coherent ecosystem. Can be difficult for a beginner because of the ecosystem.

// 4. What is JSX?
// Answer: JSX is a specific syntax, which combines JavaScript and HTML. This syntax was developed by programmers from facebook for a quick code maintenance. It is a shell of "document.createElemnt".

// 5. What is Virtual DOM in React?
// Answer: The most expensive processes in JavaScript are the working with DOM elements. The Virtual DOM is a scaled-down copy of the DOM, which is JavaScript object. It is used for better performance in combination with the React engine. 

// 6. What are the Props?
// Answer: Props are properties that we use in components all the time. It's could be dynamic or static values. We can pass properties through a chain of components. Components in UI are static by default, but we can change them to dynamic with changing and using props. And we can controll this props by hooks and state managers.

// 7. What is the stat? Where is it used?  
// Answer: State is a global or isolated data store in React. It is and object with values.

// Class with state:
  class Elo extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: 42
      }
    }

    retnder() {
      
    }
  }

// Function with state(useState hook):
  const exampleState = (props) => {
    const [state, setState] = useState({
      value: 42
    })

    return 
  }

// Other case global store with using some state manager like Redux, Mobx, Effector.

// 8. What are refs in React?
// Answer: Refs are references on elements in components. We can easily access the element and controll it. Replaces "document" accesses. To create refs we can use hooks depends on components.
// Class component: React.createRef().
// Functional component: hook: useRef().

// 9. What is a Jest? 
// Answer: Jest is a facebook's library for tests like Enzume. This library is based on Jasmine framework.

// 10. When to use class components and functional components?
// Answer: Functional components are more productive. Now we can use only functional components with hooks, because today we don't need class components life cycles.

// 11. What happens when you call setState?
// 
