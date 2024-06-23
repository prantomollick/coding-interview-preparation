function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;

  const smallestPair = new Array(2);
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair[0] = firstNum;
      smallestPair[1] = secondNum;
    }
  }
  return smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
