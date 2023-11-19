/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  matrix.forEach((row) => row.reverse());

  return matrix;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(1)
};
// @lc code=end
