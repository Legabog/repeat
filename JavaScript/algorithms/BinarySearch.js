// Binary Search

const array = [1, 7, 5, 2, 10, 3, 6];
const binary = (arr, el) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  const maxEl = sortedArr[sortedArr.length - 1];
  if (el > maxEl) return -1;

  while (mid >= 0 && mid <= sortedArr.length) {
    if (sortedArr[mid] === el) return mid;
    if (sortedArr[mid] > el) mid = Math.floor(mid / 2);
    if (sortedArr[mid] < el) mid = Math.floor((sortedArr.length - mid) / 2);
  }
};