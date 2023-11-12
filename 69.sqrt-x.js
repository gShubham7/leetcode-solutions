/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Binary search
  let left = 0;
  let right = x;
  if (x <= 1) {
    return x;
  }
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    let square = mid * mid;
    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
  // Time Complexity -----> O(log(n))
  // Space Complexity  -----> O(1)
};
// @lc code=end
