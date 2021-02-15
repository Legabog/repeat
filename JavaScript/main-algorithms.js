// Bubble sort
// Estimation of algorithm complexity = O(n^2)
let array_1 = [1, 6, 4, 2, 10, 5];
const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};
console.log(bubble(array_1));

// Insertion sort
// Estimation of algorithm complexity = O(n^2)
let array_2 = [1, 6, 4, 2, 10, 5];
const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temp = arr[i];

    while (j >= 0 && arr[j] > temp) {
      arr[j] = arr[j + 1];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};
console.log(insertion(array_2));

// Binary sort
// Estimation of algorithm complexity = O(n)
const array_3 = [1, 7, 5, 2, 10, 3, 6];
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
console.log(binary(array_3, 5));

// Js sort
// js sort method have deference algorithms of sorting (depends on browser and array.length)
const array_4 = [1, 5, 4, 2, 10, 25];
array_4.sort((a, b) => a - b);

// Quick sort
// Estimation of algorithm complexity = O(nlogn)
const array_5 = [4, 3, 7, 5, 9, 15];
const quickSort = (arr) => {
  const mid = Math.floor(arr.length / 2);

  const left = arr.filter((e) => e < arr[mid]);
  const right = arr.filter((e) => e > arr[mid]);

  return [...quickSort(left), arr[mid], ...quickSort(right)];
};

// Merge sort
// Estimation of algorithm complexity = O(nlogn)
const array_6 = [1, 6, 20, 14, 5, 2, 7];
const merging = (left, right) => {
  const resultArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resultArr.push(left.shift());
    } else {
      resultArr.push(right.shift());
    }

    while (left.length) {
      resultArr.push(left.shift());
    }

    while (right.length) {
      resultArr.push(right.shift());
    }
  }

  return resultArr
};
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merging(mergeSort(left), mergeSort(right));
};
