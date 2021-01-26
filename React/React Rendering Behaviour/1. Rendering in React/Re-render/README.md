# Re-render 

1. During root phase. React finding all the components, which have flag need update.
2. Then for each components with flag React invokes the createElement method. And translate Jsx into React elements (JavaScript Objects). 
3. Next step is compare new React elements with old React elements. Previous Render compares with New Render.
4. Next phase is a commit phase in this phase all the changes apply into DOM.

## The main point: "Rendering is not the same as updating DOM. The DOM is not updated completely but partially."

![image](https://user-images.githubusercontent.com/44378669/105840808-a88e1c80-5fe4-11eb-9f28-07054fdb30e8.png)