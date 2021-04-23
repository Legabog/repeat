// Quick sort
// Estimation of algorithm complexity = O(nlogn)
const array_5 = [4, 4, 3, 7, 5, 9, 15];
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less = arr.filter((value) => value < pivot);
  const greater = arr.filter((value) => value > pivot);
  const equal = arr.filter((value) => value === pivot)
  return [...quickSort(less), ...equal, ...quickSort(greater)];
};