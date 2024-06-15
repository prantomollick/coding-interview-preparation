### Validate Subsequence [algoexpert.io]

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

Validate subsequence problem: Iterative approach | Solution-1

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
