/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //   let nonZeroIndex = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != 0) {
  //       nums[nonZeroIndex] = nums[i];
  //       nonZeroIndex++;
  //     }
  //   }

  //   for (let i = nonZeroIndex; i < nums.length; i++) {
  //     nums[i] = 0;
  //   }
  // };
  // Time Complexity  -----> O(n);
  // Space Complexity  -----> O(1);

  //Single Traversal of array -----> Two pointer
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0 && nums[j] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    if (nums[j] != 0) j++;
  }
};
// Time Complexity  -----> O(n);
// Space Complexity  -----> O(1);
// @lc code=end
