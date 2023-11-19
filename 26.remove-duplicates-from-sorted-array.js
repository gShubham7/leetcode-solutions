/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
