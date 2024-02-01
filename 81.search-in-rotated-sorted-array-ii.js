/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return true;

    if (nums[start] === nums[mid]) {
      start++;
      continue;
    } else if (nums[mid] <= nums[end]) {
      if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    } else {
      if (target >= nums[start] && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    }
  }
  return false;
};
// @lc code=end
