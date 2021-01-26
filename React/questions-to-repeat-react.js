// ~ Junior/junior+/premiddle questions

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
// Answer: Props are properties that we use in components all the time.  We can pass properties through a chain of components. Components in UI are static by default, but we can change them to dynamic with changing and using props. And we can controll this props by hooks and state managers.

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
// Answer: setState we can call only in class components. When we call a setState, we create an object. After we change our state by comparison this object with state object and change it. The next step is changing Virtual DOM with new props.

// 12. What is the difference between state and props?
// Answer: State is an object with some values, attributes like a storage with data. Props are the properties, attributes wich we can pass to components.

// 13. When to make asynchronous requests in React?
// Answer: We have 2 types of components: classes and functions. Each type does this differently.

// In classes: We need to do it in life cycle "componentDidMount"
// An example:
componentDidMount() {
  someFetch()
}

// In functions: We need to do it in useEffect hook.
// An example: 
useEffect() {
  someFetch()
},[]

// 14. What is the meaning of the special attribute key in React?
// Answer: This attribute optimizes engine's rendering. In almost all cases. We need to add it.
// Bad practise:
array.map((x, index) => {
  return <CustomComponent key={index} value={x.value}/>
})
// In this case we need to add some little lib with generating random keys

// 15. Difference between Origian DOM and Virtual DOM
// Answer:
// 1) Real DOM updates too slow. Virtual DOM updates faster.
// 2) DOM can directly update HTML. V-DOM can't.
// 3) Creates a new DOM if element updates. Virtual DOM updates JSX if element updates.
// 4) DOM manipulation is very expensive. With Virtual DOM it's more easy.
// 5) Too much of memory wastage. No memory wastage.

// 16. What are the features of React? 
// Answer:
// 1) Uses Virtual DOM instead of real DOM.
// 2) Uses SSR.
// 3) It follows uni-directional data flow (Flux) or data binding.

// 17. 