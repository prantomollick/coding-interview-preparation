function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[right] === toMove) {
      right--;
    } else if ((array[left] == toMove) & (array[right] != toMove)) {
      let temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      left++;
    } else {
      left++;
    }
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
