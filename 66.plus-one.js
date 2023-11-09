/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  return [1, ...digits];
  // Time Complexity    -----> O(n);
  // Space Complexity    -----> O(n);
};
// @lc code=end
