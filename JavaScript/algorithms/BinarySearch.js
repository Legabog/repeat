// Binary Search

const array = [1, 7, 5, 2, 10, 3, 6];
function binarySearch(arr, element) {
  let mid = Math.floor(arr.length / 2)

  if (element < arr[0] || element > arr[arr.length - 1]) return -1
  while(mid >=0 && mid <= arr.length - 1) {
    if (arr[mid] === element) return mid
    if (arr[mid] > element) mid = Math.floor(mid / 2)
    if (arr[mid] < element) mid = Math.floor((arr.length + mid) / 2)
  }
}