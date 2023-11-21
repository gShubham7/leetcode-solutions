/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  count = 0;
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      let total = time[i] + time[j];
      if (total % 60 === 0) {
        count++;
      }
    }
  }
  return count;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(1)
};
// @lc code=end
