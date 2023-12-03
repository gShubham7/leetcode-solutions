/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let sumUptoN = (n * (n + 1)) / 2;

  let actualSum = nums.reduce((acc, el) => acc + el, 0);

  return sumUptoN - actualSum;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
