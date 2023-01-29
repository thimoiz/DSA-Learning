// Find Distinct Elements in Window K

let array = [1, 2, 2, 1, 3, 1, 1, 3];
let k = 4;

function distinctCounter(array, k) {
  let map = {};
  for (let i = 0; i < k; i++) {
    map[array[i]] = (map[array[i]] | 0) + 1;
  }
  console.log(Object.keys(map).length);

  for (i = k; i < array.length; i++) {
    if (map[array[i - k]] === 1) {
      delete map[array[i - k]];
    } else {
      map[array[i - k]] = map[array[i - k]] - 1;
    }
    map[array[i]] = (map[array[i]] | 0) + 1;
    console.log(Object.keys(map).length);
  }
}

distinctCounter(array, k);
