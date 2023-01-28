let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5, 7, 9];

// ==========================================
// ================ Union ===================
// ==========================================

function union(array1, array2) {
  let uni = new Set();
  for (let i = 0; i < array1.length; i++) {
    uni.add(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    uni.add(array2[i]);
  }
  return [...uni];
}
console.log(union(arr1, arr2));

// ==========================================
// ================ Intersection ============
// ==========================================

function intersection(array1, array2) {
  let demoSet = new Set();
  let int = new Set();

  for (let i = 0; i < array1.length; i++) {
    demoSet.add(array1[i]);
  }
  for (let i = 0; i < array1.length; i++) {
    if (demoSet.has(array2[i])) {
      int.add(array2[i]);
    }
  }

  return [...int];
}
console.log(intersection(arr1, arr2));
