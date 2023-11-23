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
  //   for (let i = 0; i < nums.length; i++) {
  //     if (target <= nums[i]) {
  //       return i;
  //     }
  //   }
  //   return nums.length;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)

  // Binary Search

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
  // Time Complexity    -----> O(log n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
