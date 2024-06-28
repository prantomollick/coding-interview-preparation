# Monotonic Array Problem (Solving with Iteration Approach)

## Algorithm Intuition

Given an array, we want to check if it is monotonic. A monotonic array maintains a trend of either being non-decreasing or non-increasing for its elements.

- Non-decreasing: The sequence doesn't decrease; it either stays the same or increases.
  Examples: [1, 2, 2, 3] or [3, 3, 4, 5, 5]

- Non-increasing: The sequence doesn't increase; it either stays the same or decreases.
  Examples: [5, 4, 4, 3] or [7, 7, 6, 5, 5]

## Steps

1. Initialize two variables: `isNonIncreasing` and `isNonDecreasing` as `True`.
2. Iterate through the array starting from the second element:
   - If an element is smaller than the previous one, set `isNonDecreasing` to `False`.
   - If an element is larger than the previous one, set `isNonIncreasing` to `False`.
3. Finally, return `True` if the array is either non-increasing or non-decreasing.

## Complexity

- Time Complexity: O(n) (We simply iterate through the array to check the element trend.)
- Space Complexity: O(1) (This algorithm doesn't use any auxiliary space except for the input array.)

---

### Math Definition

In the context of sequences (such as arrays), "non-increasing" and "non-decreasing" refer to the behavior of the sequence elements with respect to their order.

1. **Non-decreasing**: A sequence is non-decreasing if each element is greater than or equal to the previous element. Formally, a sequence \(a*1, a_2, \ldots, a_n\) is non-decreasing if for all \(i\) such that \(1 \leq i < n\), \(a_i \leq a*{i+1}\).

   Example:

   - [1, 2, 2, 3] is a non-decreasing sequence.
   - [3, 3, 4, 5, 5] is a non-decreasing sequence.

2. **Non-increasing**: A sequence is non-increasing if each element is less than or equal to the previous element. Formally, a sequence \(a*1, a_2, \ldots, a_n\) is non-increasing if for all \(i\) such that \(1 \leq i < n\), \(a_i \geq a*{i+1}\).

   Example:

   - [5, 4, 4, 3] is a non-increasing sequence.
   - [7, 7, 6, 5, 5] is a non-increasing sequence.

In simpler terms:

- **Non-decreasing** means the sequence doesn't decrease; it either stays the same or increases.
- **Non-increasing** means the sequence doesn't increase; it either stays the same or decreases.

Your function checks whether a given array is either non-increasing or non-decreasing. If the array satisfies either of these conditions, it is considered monotonic.
