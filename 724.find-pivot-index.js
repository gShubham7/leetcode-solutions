/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightSum = 0;
  let leftSum = 0;

  nums.forEach((v) => (rightSum += v));

  for (var i = 0; i <= nums.length - 1; i++) {
    let curr = nums[i];

    rightSum -= curr;

    if (leftSum === rightSum) return i;

    leftSum += curr;
  }

  return -1;
  // Time Complexity    ------> O(n)
  // Space Complexity    ------> O(1)
};
// @lc code=end
