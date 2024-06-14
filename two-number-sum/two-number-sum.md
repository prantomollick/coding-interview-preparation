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

### Two-sum problem: Brute Force approach

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
