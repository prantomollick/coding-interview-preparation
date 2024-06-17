## Tournament Winner Problem: Iterative Approach | Solution-1

Simple input:

```javascript
competitons = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
];

results = [0, 0, 1];
```

Output:

```javascript
"Python";
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# -  3 points
// Python -  6 points
```

### Algorithm Intuition

The function takes two arrays as input: `competitions` and `results`. `competitions` is an array of pairs representing competing teams, and `results` contains the outcomes of these competitions. The goal is to iterate through both arrays simultaneously, determine the winner of each match, update their score in a hash table, and track the team with the highest score throughout the tournament. Note that each team competes with another team only once.

### Steps

1. **Variable Declaration:**

   - Initialize `bestTeam` with an empty string to track the name of the team with the highest score.

2. **Hash Table:**

   - Initialize a `scores` hash table to keep track of each team's accumulated points.

3. **Iteration:**

   - Use a single loop to iterate through both `competitions` and `results` arrays simultaneously, as they are parallel arrays.
   - Determine the winning team for each match by comparing the result with the constant `HOME_TEAM_WON`. If `results[idx]` is 1, then `homeTeam` wins; otherwise, `awayTeam` wins.
   - Call `updateScores` to add 3 points to the winning team's score in the `scores` hash table.
   - Update `bestTeam` if the current winning team has more points than the previously recorded best team.

4. **Return:**
   - After iterating through all competitions, return the name of `bestTeam`.

### Complexity Analysis

- **Time Complexity:** O(n), because it iterates through both `competitions` and `results` arrays together.
- **Space Complexity:** O(k), where k is the number of unique teams, to store each team's score in the hash table.
