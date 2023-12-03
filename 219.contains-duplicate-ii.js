/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i]) && i - hash.get(nums[i]) <= k) {
      return true;
    }
    hash.set(nums[i], i);
  }
  return false;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(n)
};
// @lc code=end
