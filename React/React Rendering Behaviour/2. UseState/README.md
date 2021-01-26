# useState and Render

1. The setter function from a useState hook will cause the component to re-render.
2. The exception is when you update a State Hook to the same value as the current state.
3. Same value after the initial render? The component will not re-render.
4. Same value after re-renders? React will render that specific component one more time and then bails out from any subsequent renders.

React compares values with Object.is().

![image](https://user-images.githubusercontent.com/44378669/105871369-4811d600-600a-11eb-86d0-d16353c72d52.png)
