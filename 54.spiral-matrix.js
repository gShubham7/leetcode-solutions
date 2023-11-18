/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let res = [];
  let totalElem = matrix.length * matrix[0].length;
  let count = 0;

  while (count < totalElem) {
    for (let i = left; i <= right && count < totalElem; i++) {
      res.push(matrix[top][i]);
      count++;
    }
    top++;

    for (let i = top; i <= bottom && count < totalElem; i++) {
      res.push(matrix[i][right]);
      count++;
    }
    right--;

    for (let i = right; i >= left && count < totalElem; i--) {
      res.push(matrix[bottom][i]);
      count++;
    }
    bottom--;

    for (let i = bottom; i >= top && count < totalElem; i--) {
      res.push(matrix[i][left]);
      count++;
    }
    left++;
  }
  return res;
  // Time Complexity    -----> O(n*m)
  // Space Complexity   -----> O(n*m)
};
// @lc code=end
