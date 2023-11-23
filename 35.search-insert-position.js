/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
