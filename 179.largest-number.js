/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (!nums || nums.length === 0) {
    return "0";
  }

  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};
// @lc code=end
