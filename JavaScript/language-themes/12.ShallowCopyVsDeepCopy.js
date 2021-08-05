// Shallow Copy and Deep Copy of Objects in JavaScript

// Proplem of shallow copy is nested objects in objects
// When you try to change some properties of copy, properties from main object will change
// An example:

let obj = {
  property: 55,
  nestedObj1: {
    nestedObj2: {
      num: 100,
    },
  },
  method() {
    console.log("I'm from obj!");
  },
};

// Shallow Copy:
// We can create shallow copy by 3 ways:
// 1.
let shallowCopy_1 = {...obj}
// Problem with nested properties, objects
shallowCopy_1.property = 144
shallowCopy_1.nestedObj1.nestedObj2.num = 200 // obj.nestedObj1.nestedObj2.num === shallowCopy_1.nestedObj1.nestedObj2.num === 200
// 2.
let shallowCopy_2 = Object.assign({}, obj)
// The same problem with nested objects
shallowCopy_2.property = 144
shallowCopy_2.nestedObj1.nestedObj2.num = 200 // obj.nestedObj1.nestedObj2.num === shallowCopy_2.nestedObj1.nestedObj2.num === 200
// 3.
let {...shallowCopy_3} = obj
// The same problem with nested objects
shallowCopy_3.property = 144
shallowCopy_3.nestedObj1.nestedObj2.num = 200 // obj.nestedObj1.nestedObj2.num === shallowCopy_3.nestedObj1.nestedObj2.num === 200

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(obj))
deepCopy.nestedObj1.nestedObj2.num === 200 // deepCopy.nestedObj1.nestedObj2.num === 200, but obj.nestedObj1.nestedObj2.num === 100 
