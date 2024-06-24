## Move Element to End (Iterative Two-Pointer Approach)

### Problem Statement

Given an array of integers and an integer value `toMove`, move all instances of `toMove` to the end of the array while maintaining the relative order of the other elements.

### Algorithm Intuition

1. Initialize two pointers: `left` pointing to the front of the array and `right` pointing to the end of the array.
2. While `left` is less than `right`, perform the following checks:
   - If `array[right]` equals `toMove`, decrement `right`.
   - If `array[left]` equals `toMove` and `array[right]` is not equal to `toMove`, swap the values at `left` and `right`, then increment `left`.
   - Otherwise, increment `left`.
3. Return the modified array.

### JavaScript Implementation

```javascript
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[right] === toMove) {
      right--;
    } else if (array[left] === toMove && array[right] !== toMove) {
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
```

**Time Complexity:** The algorithm traverses the array once, so it has a linear time complexity of O(n).
**Space Complexity:** The algorithm modifies the input array in-place, so it uses constant space (O(1)).
