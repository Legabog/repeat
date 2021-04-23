// Odd - even sort

function oddEvenSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i % 2 ? 0 : 1; j < array.length; j+=2) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return array
}