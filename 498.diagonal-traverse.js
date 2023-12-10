/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length,
    n = mat[0].length,
    row = 0,
    col = 0;

  let result = new Array(m * n);

  for (let i = 0; i < result.length; i++) {
    result[i] = mat[row][col];
    if ((row + col) % 2 == 0) {
      if (col == n - 1) {
        row++;
      } else if (row == 0) {
        col++;
      } else {
        row--;
        col++;
      }
    } else {
      if (row == m - 1) {
        col++;
      } else if (col == 0) {
        row++;
      } else {
        row++;
        col--;
      }
    }
  }
  return result;
};
// @lc code=end
