// Counting Sort

const countingSort = (array, max) => {
  const counts = new Array(max + 1);
  counts.fill(0);
  array.map((e) => counts[e]++);

  const resultArray = [];

  counts.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      resultArray.push(index);
    }
  });

  return resultArray;
};
