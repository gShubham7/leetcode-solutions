/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let stack = [];
  let result = new Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i % n];
    }
    stack.push(i % n);
  }

  return result;
};
// @lc code=end
