function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var leftHalf = arr.slice(0, middle);
  var rightHalf = arr.slice(middle);

  var leftSorted = mergeSort(leftHalf);
  var rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = mergeSort(arrayToSort);

console.log("Sorted array: ", sortedArray);
