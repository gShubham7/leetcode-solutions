/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  let hash = {};
  let maxGap = 0;
  for (let num of nums) {
    hash[num] = true;
  }
  let sortedData = Object.keys(hash).map(Number);
  let i = 0;

  while (i < sortedData.length - 1) {
    maxGap = Math.max(maxGap, Math.abs(sortedData[i] - sortedData[i + 1]));
    i++;
  }
  return maxGap;
};
// @lc code=end
