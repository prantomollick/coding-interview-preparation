function nonConstructibleChange(coins) {
  // Write your code here.
  let change = 0;

  coins
    .sort((a, b) => a - b)
    .forEach(function (elm) {
      if (elm > change + 1) {
        return change + 1;
      }

      change += elm;
    });

  return change + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
