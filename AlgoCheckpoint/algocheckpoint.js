// Algo CheckPoint

// Problem01

const arr01 = [3, 1, 7, 9];
const arr02 = [2, 4, 1, 9, 3];
const arr03 = new Set();

function test(set1, set2) {
  for (let element of set1) {
    if (!arr03.has(element)) {
      arr03.add(element);
    }
  }
  for (let element of set2) {
    if (!arr03.has(element)) {
      arr03.add(element);
    }
  }
  let sum = 0;
  for (let element of arr03) {
    sum += element;
  }
  return sum;
}
let sumOfSets = test(arr01, arr02);

console.log("Sum of distinct elements:", sumOfSets);

// Problem02

// jamais 9rit les matrices f algo (X
