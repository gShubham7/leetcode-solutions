/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
