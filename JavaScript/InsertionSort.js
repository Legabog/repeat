// Insertion Sort

function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    const currentElement = array[i]

    while(j > 0 && currentElement < array[j - 1]) {
      array[j] = array[j - 1]
      j--
    }

    array[j] = currentElement
  }

  return array
}
