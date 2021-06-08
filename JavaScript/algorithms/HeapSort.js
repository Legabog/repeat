// Binary heap. Heap sort.
// - binary heap is a completed binary tree
// - there are 2 types: max-heap, min-heap
// - all leveles are filled exept last one
// * last level is located to the left
// - element < parent element (max-heap)
// - leftIndex = 2 * i; rightIndex = 2 * i + 1
// Exapmle: [4, 10, 3, 5, 1]
// Heap :
//              4(0)
//             / \
//         10(1)  3(2)
//          / \
//       5(3) 1(4)
//
//  10(1) > 4(0) => heapify
//
//              10(0)
//             / \
//         4(1)  3(2)
//          / \
//       5(3) 1(4)
//
// 5(3) > 4(1) => heapify
//
//              10(0)
//             / \
//         5(1)  3(2)
//          / \
//       4(3) 1(4)
//
//
//

const array_8 = [4, 10, 3, 5, 1];

const buildHeap = (arr) => {
  let i = Math.floor(arr.length / 2 - 1);
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i--;
  }
};

const heapify = (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
    d;

    if (leftChild < max && heap[leftChild] > heap[index]) index = leftChild;

    if (rightChild < max && heap[rightChild] > heap[index]) index = rightChild;

    if (index === i) return;

    [heap[i], heap[index]] = [heap[index], heap[i]];

    i = index;
  }
};

const heapSort = (arr) => {
  buildHeap(arr);

  let lastIndex = arr.length - 1;
  while (lastIndex > 0) {
    [arr[0], arr[lastIndex]] = [arr[lastIndex], arr[0]];
    heapify(arr, 0, lastIndex);
    lastIndex--;
  }

  return arr;
};
