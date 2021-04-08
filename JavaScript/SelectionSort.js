// Selection Sort
// 

function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }

    if (minIndex != i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    
    
  }

  return array
}

console.log(SelectionSort([1, 6, 15, 5, 0]))