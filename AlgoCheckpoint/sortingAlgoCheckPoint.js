let arr = [9, 2, 4, 7, 8, 6, 3, 12, 1, 10, 11];
function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(i);
}
SelectionSort();

////BubbleSort
let arr02 = [9, 2, 4, 7, 8, 6, 3, 12, 1, 10, 11];

function BubbleSort(arr02) {
  for (let i = 0; i < arr02.length - 1; i++) {
    for (let j = 0; j < arr02.length - i - 1; j++) {
      if (arr02[j + 1] < arr02[j]) {
        let temp = arr02[j];
        arr02[j] = arr02[j + 1];
        arr02[j + 1] = temp;
      }
    }
  }
}
BubbleSort();

// /// InsertionSort

function InsertionSort(arr02) {
  for (let index = 0; index < array.length; index++) {
    let temp = arr02[index];
    let j = arr02[index] - 1;
    while (arr02[j] > 0 && temp < arr02[j]) {
      arr02[j + 1] = arr02[j];
      j--;
    }
    arr02[j + 1] = temp;
  }
}
InsertionSort();
