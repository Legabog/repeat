// Merge Sort

function merge(arrayX, arrayY) {
  let resultArray = [];
  while (arrayX.length && arrayY.length) {
    if (arrayX[0] < arrayY[0]) {
      resultArray.push(arrayX.shift());
    } else if (arrayX[0] === arrayY[0]) {
      resultArray.push(arrayX.shift());
      resultArray.push(arrayY.shift());
    } else {
      resultArray.push(arrayY.shift());
    }
  }

  return resultArray.concat(arrayX, arrayY);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
}
