# Non-Constructible Change Problem (Sorting and iterative approch)

## Problem Intuition

Imagine you're managing a cash register with a limited set of coins. A customer wants to make a specific amount, but you can't give them exact change because you lack certain coin denominations. The problem asks you to find the smallest amount of money the customer can't pay for with the available coins.

## Steps to Solve

1. **Initialize a Variable:**

   - Create a variable called `change` to store the maximum amount you can create using the available coins so far. Initially, set `change` to 0.

2. **Sort the Coins:**

   - Arrange the available coin denominations in ascending order (e.g., [1, 2, 5] instead of [5, 2, 1]). Sorting ensures that you consider smaller coins first when building up the target amount.

3. **Iterate Through Coins:**

   - Loop through each coin denomination in the sorted list.

4. **Check If the Coin Can Be Used:**

   - Compare the current coin value with `change`.
   - If the coin value is greater than `change`, you can't make the exact change with the current coins. The smallest amount you can't create is `change + 1`. Return this value as the "non-constructible change."
   - If the coin value is less than or equal to `change`, you can use this coin. Add the coin value to `change`.

5. **After Iterating:**
   - If the loop finishes iterating through all coins without returning a value, it means you can create any amount using the available coins. In this case, the "Non-constructible change" is 0. Return 0.

## Complexity Analysis

- **Time Complexity:** Combining the sorting step and the iteration, the overall time complexity is O(n log n + n) = O(n log n).
- **Space Complexity:** O(1) (doesn't take any additional space except for the coins input space).

---

Feel free to copy this Markdown content and add it to your GitHub repository! Let me know if you need any further assistance. 😊
