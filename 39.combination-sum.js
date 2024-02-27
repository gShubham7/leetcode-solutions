/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  dfs(candidates, target, [], result);
  return result;
};

function dfs(nums, target, path, result) {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push(path);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    dfs(nums.slice(i), target - nums[i], [...path, nums[i]], result);
  }
}
// @lc code=end
