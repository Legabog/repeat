// Bubble Sort such a simple algorithm of sorting 
// In my example i'm using combination of ternary operator and destructuring assignment
// In this way I don't need to create temp variable

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[j] > array[j + 1]
        ? ([array[j], array[j + 1]] = [array[j + 1], array[j]])
        : null;
    }
  }

  return array
}

console.log(BubbleSort([7, 6, 4, 2, 10, 5]))
