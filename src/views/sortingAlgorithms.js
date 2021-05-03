export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

export function getBubbleSortAnimation(arr) {
  const animations = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.length - i - 1 == 0) {
      animations.push([4, 0]);
    }
    for (var j = 0; j < arr.length - i - 1; j++) {
      animations.push([1, [j, j + 1]]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      animations.push([3, [j, arr[j]]]);
      animations.push([3, [j + 1, arr[j + 1]]]);
      animations.push([2, [j, j + 1]]);
      if (j + 1 == arr.length - i - 1) {
        animations.push([4, j + 1]);
      }
    }
  }
  return animations;
}
export function getInsertionSortAnimation(inputArr) {
  const animations = [];
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    animations.push([2, [i, j]]);
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      animations.push([1, [i, j]]);
      animations.push([3, [j + 1, inputArr[j + 1]]]);
      animations.push([2, [i, j]]);

      j--;
    }

    inputArr[j + 1] = current;
    if (i == n - 1) animations.push([4, i]);
    animations.push([3, [j + 1, inputArr[j + 1]]]);
  }
  return animations;
}
export function getSelectionSortAnimation(inputArr) {
  const animations = [];
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      animations.push([1, [min, j]]);
      animations.push([2, [min, j]]);
      if (inputArr[j] < inputArr[min]) {
        animations.push([3, min]);
        min = j;
        animations.push([4, min]);
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
    animations.push([5, [min, inputArr[min]]]);
    animations.push([5, [i, inputArr[i]]]);
    animations.push([3, min]);
    animations.push([6, i]);
  }
  return animations;
}

export function getQuickSortAnimation(arr, start, end, animations) {
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end, animations);

  // Recursively apply the same logic to the left and right subarrays
  getQuickSortAnimation(arr, start, index - 1, animations);
  getQuickSortAnimation(arr, index + 1, end, animations);
  return animations;
}

function partition(arr, start, end, animations) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  animations.push([-4, [1, end]]);
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    animations.push([-1, [i, end]]);
    animations.push([-1, [pivotIndex, end]]);
    animations.push([-2, [i, end]]);
    animations.push([-2, [pivotIndex, end]]);
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      animations.push([-3, [i, arr[i]]]);
      animations.push([-3, [pivotIndex, arr[pivotIndex]]]);
      pivotIndex++;
    }
  }
  animations.push([-5, [1, end]]);

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  animations.push([-3, [pivotIndex, arr[pivotIndex]]]);
  animations.push([-3, [end, arr[end]]]);
  return pivotIndex;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
