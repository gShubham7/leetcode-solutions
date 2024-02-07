/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jump = 0;
  let prev = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === prev) {
      jump++;
      prev = max;
    }
  }
  return jump;
};
// @lc code=end
