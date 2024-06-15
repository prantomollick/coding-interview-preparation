## Validate Subsequence [algoexpert.io]

Array:

```javascript
[5, 1, 22, 25, 6, -1, 8, 10];
```

Sequence:

```javascript
[1, 6, -1, 10];
```

Simple output:

```javascript
true;
```

---

### Validate subsequence problem: Iterative approach | Solution-1

#### Algorithm Intuition

To validate whether a sequence is a subsequence of an array, we iterate through each element of the array while tracking our position in the sequence with an index variable. If we find a match between the current array element and the current sequence element, we increment our sequence index. If we reach the end of the array and have incremented our sequence index to equal the length of the sequence, we confirm that all elements of the sequence were found in order within the array.

#### Steps

1. Check if the main array is shorter than the sequence or if either is empty; return false in these cases.
2. Initialize an index variable to track our position within the sequence.
3. Iterate through each element of the main array:
   - If an element matches the current sequence element and we haven't reached the end of the sequence, increment our index.
4. After iterating through the main array, return true if our index equals the length of the sequence, confirming it's a valid subsequence.

#### Complexity Analysis

- **Time Complexity:** O(n), where 'n' is the length of the main array.
- **Space Complexity:** O(1), as no additional space is used apart from input arrays.

---

### Validate subsequence problem: Two-Pointer Approach || solution-2

#### Algorithm Intuition:

The two-pointer approach in this context is used to simultaneously traverse the `array` and `sequence` from both ends towards the center. We use two pointers for each, `left` and `right` for the `array`, and `leftS` and `rightS` for the `sequence`. The goal is to find matching elements from both ends of the `array` that correspond to the elements in the `sequence`.

#### Steps

1. If the `sequence` is empty, return false since there can't be a subsequence in an empty sequence.
2. Initialize two pointers for the `array` (`left` at start, `right` at end) and two pointers for the `sequence` (`leftS` at start, `rightS` at end).
3. Use a while loop to iterate as long as `left < right` and we haven't reached the end of the sequence (`idx < sequence.length`).
   - If the current element at the `left` pointer of the array matches the current element at the `leftS` pointer of the sequence, increment both `idx` and `leftS`.
   - Similarly, if the current element at the `right` pointer of the array matches the current element at the `rightS` pointer of the sequence, increment `idx` and decrement `rightS`.
   - Move both `left` and `right` pointers towards the center after each comparison.
4. The loop breaks if we have traversed through all elements in the sequence (`idx === sequence.length`) or if we have compared all elements from both ends of the array.
5. Return true if `idx === sequence.length`, indicating that all elements of the sequence have been matched in order within the array.

#### Complexity Analysis

- **Time Complexity:** O(n), where 'n' is the length of the main array.
- **Space Complexity:** O(1), as no additional space is used apart from input arrays.
