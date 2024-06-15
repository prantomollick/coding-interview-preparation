//Iterative approch
function isValidSubsequence(array, sequence) {
  if (array.length < sequence.length || array.length < 1 || sequence.length < 1)
    return false;
  // Write your code here.
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence.length === 0) return false;
    if (array[i] === sequence[idx] && idx < sequence.length) {
      idx++;
    }
  }
  return sequence.length === idx;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
