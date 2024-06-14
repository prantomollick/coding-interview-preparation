function twoNumberSum(array, targetSum) {
  //check array at least contains two integers
  if (array.length < 2) return [];

  const num_map = {};

  let i = 0;

  for (let num of array) {
    let complement = targetSum - num;
    if (complement in num_map) {
      return [complement, num];
    } else {
      num_map[num] = i;
      i++;
    }
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
