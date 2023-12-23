/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const n = Math.floor(nums.length / 3);
  const ans = [];

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, freq] of map.entries()) {
    if (freq > n) {
      ans.push(num);
    }
  }

  return ans;
};
// @lc code=end
