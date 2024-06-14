# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

## Example

```plaintext
array = [3, 5, -4, 8, 11, 1, -1, 6] targetSum = 10
[-1, 11] // The numbers could be in reverse order.
```

---

### Two-sum problem: Brute Force approach: solution-1

The Two-Sum problem requires finding two numbers within an array that add up to a specific target sum. The brute force solution is a straightforward method to tackle this challenge

##### Algorithm Intuition:

1. **Initial Validation**: Ensure the array is not empty and contains at least two elements, which is the minimum requirement from a pair

2. **Iteration:** Utilize two nested loops to iterate over the array. The outer loop progresses through each element, while the inner loop searches for a complementary element that, when combined with a current element of the outer loop, equals the target sum.
3. **Finding the pair:** When a pair is found that sums up to the target value, return the pair number as an array of integers.
4. **No pair found:** if no such pair exists in the array, return an empty array to indicate the absence of a solution.

###### Pseudocode:

```plaintext
function twoSumBruteForce(array, targetSum):
    for i from 0 to length of the array:
        for j from i+1 to length of the array:
            if array[i] + array[j] == targetSum:
                return [array[i], array[j]]
    return [];
```

Time complexity: $$O(n^2)$$ n is the number of elements in the array. This is due to the nested loop structure, where each element is compared with every other element.
Space Complexity: $$O(1)$$ as no additional space is required apart from the input array.

---

### Two-Sum Problem: Optimal Solution solution2

##### Algorithm Intuition

The Two-Sum problem seeks a pair of numbers in an array that add up to a given target sum. This solution optimizes time complexity by trading off some space.

### Steps:

1. **Initial Validation**

   - Confirm the array is non-empty and contains at least two elements, fulfilling the basic requirement for a pair.

2. **HashTable Declaration**

   - Initialize a hashtable to keep track of the complement values. The complement of an element is defined as `targetSum - element`. This facilitates constant-time lookups.

3. **Iteration**

   - Traverse the array, calculating the complement for each element.
   - Check if the complement is already in the hashtable:
     - If it is, return the current element and its complement as the solution pair.
     - If not, store the current element in the hashtable and continue.

4. **No Pair Found**
   - If the iteration completes without finding a pair, return an empty array to signify no solution exists.

---

### Two-Sum Problem: Sorting and Two Pointers Approach

##### Algorithm Intuition

The Two-Sum problem requires finding two numbers in an array that sum up to a specific target. The Sorting and Two Pointers approach is a time-efficient method that leverages sorting to reduce the problem's complexity.

##### Steps:

1. **Initial Validation**

   - Ensure the array is not empty and contains at least two elements, which are necessary to form a pair.

2. **Sorting**

   - Sort the array in non-decreasing order. This step uses JavaScript's built-in sorting method, which is optimized for performance.

3. **Iteration with Two Pointers**

   - Initialize two pointers: one at the start (`left`) and one at the end (`right`) of the sorted array.
   - While the `left` pointer is less than the `right` pointer:
     - Calculate the sum of the elements at the two pointers.
     - If the sum equals the target sum, return the indices of the two elements.
     - If the sum is less than the target sum, move the `left` pointer forward to increase the sum.
     - If the sum is greater than the target sum, move the `right` pointer backward to decrease the sum.

4. **No Pair Found**
   - If the pointers meet and no pair has been found, return an empty array to indicate that no solution exists.

### Complexity Analysis

- **Time Complexity**: $$O(n \log n)$$, primarily due to the sorting step. The subsequent iteration with two pointers operates in linear time, $$O(n)$$.
- **Space Complexity**: $$O(1)$$, as the algorithm only requires space for the pointers and no additional data structures.
