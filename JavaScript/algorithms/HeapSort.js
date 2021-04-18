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

function binaryHeap(arr) {
  let heaplist = [...arr];
  let heapsize = arr.length;

  function heapify(root_index) {
    const largest = root_index;
    const left_child_root = 2 * root_index + 1;
    const right_child_root = 2 * root_index + 2;

    if (
      left_child_root < heapsize &&
      heaplist[left_child_root] > heaplist[largest]
    ) {
      [heaplist[largest], heaplist[left_child_root]] = [
        heaplist[left_child_root],
        heaplist[largest],
      ];

      return heapify(left_child_root);
    }

    if (
      right_child_root < heapsize &&
      heaplist[right_child_root] > heaplist[largest]
    ) {
      [heaplist[largest], heaplist[right_child_root]] = [
        heaplist[right_child_root],
        heaplist[largest],
      ];

      return heapify(right_child_root);
    }
  }

  function buildHeap() {
    for (let i = heapsize / 2; i <= 0; i--) {
      heapify(i);
    }

    return heaplist;
  }

  return {buildHeap};
}

const result = binaryHeap(array_8);
const {heapbuilder} = result();

console.log(heapbuilder());