/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right * result[i];
    right = right * nums[i];
  }
  return result;
};
// @lc code=end
