/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
  //   Time Complexity   ----->O(n^2);
  //   Space Complexity  ----->O(1);

  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let diffNum = target - nums[i];
    if (obj[diffNum] !== undefined) {
      return [obj[diffNum], i];
    }
    obj[nums[i]] = i;
  }
  //   Time Complexity   ----->O(n);
  //   Space Complexity  ----->O(n);
};
// @lc code=end
