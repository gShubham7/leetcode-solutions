/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Bit Manipulation
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
