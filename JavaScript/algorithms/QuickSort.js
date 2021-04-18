// Quick sort
// Estimation of algorithm complexity = O(nlogn)
const array_5 = [4, 3, 7, 5, 9, 15];
const quickSort = (arr) => {
  const mid = Math.floor(arr.length / 2);

  const left = arr.filter((e) => e < arr[mid]);
  const right = arr.filter((e) => e > arr[mid]);

  return [...quickSort(left), arr[mid], ...quickSort(right)];
};