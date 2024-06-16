### Sorted Squared Array [algoexpert.io]

Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.

Simple input:

```javascript
[1, 2, 3, 5, 6, 8, 9];
```

Simple Output:

```javascript
[1, 4, 9, 25, 36, 64, 81];
```

---

#### Sorted Squared Problem: Brute Force Approach- solution-1

**Algorithm Intuition:**
Given an array of integers sorted in ascending order, the goal is to return a new array with each element squared, also sorted in ascending order.

**Steps:**

1. **Array Initialization:** Create a new array of the same length as the input array.
2. **Iteration:** Traverse the input array, square each element, and store it in the new array.
3. **Sorting:** Sort the new array in ascending order before returning it.

**Time Complexity:** `O(nlogn)` - This accounts for both the iteration over the array and the subsequent sorting step. Sorting typically has a time complexity of `O(nlogn)`.

**Space Complexity:** `O(n)` - A new array is created to store the squared values.

---

#### Sorted Squared Problem: Two-Pointer Approach (Solution-2)

**Algorithm Intuition:**
Given an array of integers sorted in ascending order, the goal is to return a new array with each element squared, maintaining the sorted order, with a time complexity better than `O(nlogn)`.

**Implementation Details:**
The function `sortedSquaredArray` takes an array of integers as input and returns a new array with each element squared and sorted in ascending order. It utilizes a two-pointer approach to efficiently construct the output array without the need for additional sorting.

**Steps:**

1. **Initialize Variables:** Set `startPointer` to 0 and `endPointer` to the last index of the input array.
2. **Array Initialization:** Create a new array called `newArray` with the same length as the input array.
3. **Iterate with Two Pointers:** Traverse the input array from both ends towards the center.
   - **Compare Absolute Values:** Square the absolute values of elements at `startPointer` and `endPointer`.
   - **Store Larger Value:** Place the larger squared value in the current end position of `newArray`.
   - **Move Pointers:** Increment `startPointer` or decrement `endPointer` based on which had the larger squared value.
4. **Return New Array:** Once all elements have been processed, return `newArray` with squared values in ascending order.

**Time Complexity:** `O(n)` - This accounts for a single pass through the input array.

**Space Complexity:** `O(n)` - A new array is created to store the squared values.

**Code Example:**

```javascript
function sortedSquaredArray(array) {
  const start = array.length;

  let startPointer = 0;
  let endPointer = start - 1;

  const newArray = new Array(start);

  for (let i = start - 1; i >= 0; i--) {
    const startValue = Math.abs(array[startPointer]) ** 2;
    const lastValue = Math.abs(array[endPointer]) ** 2;

    if (startValue > lastValue) {
      newArray[i] = startValue;
      startPointer++;
    } else {
      newArray[i] = lastValue;
      endPointer--;
    }
  }

  return newArray;
}

exports.sortedSquaredArray = sortedSquaredArray;
```
