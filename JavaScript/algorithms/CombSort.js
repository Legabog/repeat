// Comb sort
// interval = shrink factor, people suggested, this factor's ideal value is 1.3

function combSort(array) {
  let interval = Math.floor(array.length / 1.3);

  while (interval > 0) {
    for (let i = 0; i + interval < array.length; i++) {
      if (array[i] > array[i + interval]) {
        [array[i + interval], array[i]] = [array[i], array[i + interval]];
      }
    }
    interval = interval / 1.3;
  }

  return array;
}
