let array = [1, 0, 7, 4, 5, 2];
function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      arr[j] < arr[i] ? (minIndex = j) : null;
    }

    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
}
