/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  const res = [];

  for (let i = 0; i < col; i++) {
    const arr = [];
    for (let j = 0; j < row; j++) {
      arr.push(matrix[j][i]);
    }
    res.push(arr);
  }
  return res;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(n^2)
};
// @lc code=end
