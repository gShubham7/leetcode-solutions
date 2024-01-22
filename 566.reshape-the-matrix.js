/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat[0].length * mat.length !== r * c) {
    return mat;
  }

  let res = [];
  let row = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      row.push(mat[i][j]);
      if (row.length === c) {
        res.push(row);
        row = [];
      }
    }
  }
  return res;
};
// @lc code=end
