/*
 * @lc app=leetcode id=766 lang=javascript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
  // Time Complexity    -----> O(n*m)
  // Space Complexity   -----> O(1)
};
// @lc code=end
