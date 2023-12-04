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
  /*
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
*/

  // Binary Search

  let left = 0,
    right = nums.length - 1,
    mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
  // Time Complexity    -----> O(log n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
