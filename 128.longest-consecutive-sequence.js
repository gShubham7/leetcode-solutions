/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 0) return 0;

  let map = new Map();

  for (let elem of nums) {
    map.set(elem, 1);
  }

  for (let i in nums) {
    if (map.has(nums[i] - 1)) {
      map.set(nums[i], 0);
    }
  }

  let maxLen = 1;

  for (let elem of nums) {
    if (map.get(elem) == 1) {
      let seqCount = 1;
      while (map.has(elem + seqCount)) {
        seqCount += 1;
      }

      maxLen = Math.max(maxLen, seqCount);
    }
  }
  return maxLen;
};
// @lc code=end
