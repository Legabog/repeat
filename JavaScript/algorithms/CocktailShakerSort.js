// Cocktail Shaker Sort
// variation of bubble sort

function cocktailShakerSort(arr) {
  let left = 0
  let right = arr.length - 1

  do {
    for (let i = 0; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
    right--
    for (let j = right; left < j; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
    left++

  } while (left < right)

  return array
}