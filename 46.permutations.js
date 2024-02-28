/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  permuteRec(nums, 0, result);

  return result;
};

function swapNums(nums, i, j) {
  let swapIndex = [...nums];

  let temp = swapIndex[j];
  swapIndex[j] = swapIndex[i];

  swapIndex[i] = temp;

  return swapIndex;
}

function permuteRec(nums, currentIndex, result) {
  let swappedNums;

  if (currentIndex === nums.length - 1) {
    result.push(nums);
    return;
  }

  for (let index = currentIndex; index < nums.length; index++) {
    swappedNums = swapNums(nums, currentIndex, index);
    permuteRec(swappedNums, currentIndex + 1, result);
  }
}
// @lc code=end
