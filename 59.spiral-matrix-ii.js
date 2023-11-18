/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let res = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let totalElem = n * n;
  let count = 0;

  while (count < totalElem) {
    for (let i = left; i <= right && count < totalElem; i++) {
      res[top][i] = ++count;
    }
    top++;

    for (let i = top; i <= bottom && count < totalElem; i++) {
      res[i][right] = ++count;
    }
    right--;

    for (let i = right; i >= left && count < totalElem; i--) {
      res[bottom][i] = ++count;
    }
    bottom--;

    for (let i = bottom; i >= top && count < totalElem; i--) {
      res[i][left] = ++count;
    }
    left++;
  }
  return res;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(n^2)
};
// @lc code=end
