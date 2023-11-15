/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] = nums[i] ** 2;
  //   }
  //   return nums.sort((a, b) => a - b);

  // Time Complexity    -----> O(nlog(n))
  // Space Complexity    -----> O(1)

  let result = [];
  let l = 0;
  let r = nums.length - 1;
  let p = r;

  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      result[p--] = nums[l++] ** 2;
    } else {
      result[p--] = nums[r--] ** 2;
    }
  }

  return result;

  // Time Complexity    -----> O(n)
  // Space Complexity    -----> O(n)
};
// @lc code=end
