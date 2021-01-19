  
// Let
let a = 'Variable a'
let b = 'Variable b'
{
  a = 'New Variable A'
  let b = 'Local Variable B'
  console.log('Scope A', a) // Overwriting a with value "Variable a" with new value "New Variable A" Console: "New Variable A"
  console.log('Scope B', b) // "Local Variable B"
  console.log('Scope C', c) // ReferenceError: Cannot access 'c' before initialization
  let c = 'Something'
}
console.log('A:', a)
console.log('B:', b)

// Const
const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!') // not error, but it is const(Allowed mutation)
array[0] = 'JS' // the same situation mutate array(Allowed mutation)
console.log(array)

const obj = {}
obj.name = 'Vladilen' // Allowed mutation
obj.age = 26 // Allowed mutation

console.log(obj)

delete obj.name

console.log(obj)