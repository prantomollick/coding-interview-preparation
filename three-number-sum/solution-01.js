function threeNumberSum(array, targetSum) {
  // Write your code here.
  const sumArray = [];
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    let nextSum = targetSum - sortedArray[i];

    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let sum = sortedArray[left] + sortedArray[right];

      console.log("P", left, "=>", right);
      console.log(sum, "=>", nextSum);
      if (sum == nextSum) {
        let triplet = new Array(3);
        triplet[0] = sortedArray[i];
        triplet[1] = sortedArray[left];
        triplet[2] = sortedArray[right];
        sumArray.push(triplet);
        left++;
      } else if (sum < nextSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return sumArray;
}

// const inputs = [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 1, 5]
// ];

const inputs = [12, 3, 1, 2, -6, 5, -8, 6];

console.log(threeNumberSum(inputs, 0));
