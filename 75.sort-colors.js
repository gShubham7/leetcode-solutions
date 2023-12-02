/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /*
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    } else if (nums[i] == 1) {
      oneCount++;
    }
  }
  let twoCount = nums.length - zeroCount - oneCount;
  nums.length = 0;

  for (let i = 0; i < zeroCount; i++) nums.push(0);
  for (let i = 0; i < oneCount; i++) nums.push(1);
  for (let i = 0; i < twoCount; i++) nums.push(2);

  */
  /*
  ----------Approach-2:   One pass algorithm----------

  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      swap(mid, high);
      high--;
    }
  }

  function swap(a, b) {
    [nums[b], nums[a]] = [nums[a], nums[b]];
  }
  */

  //----------Approach-3:   Two pass algorithm----------

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  let k = i;
  for (let m = 0; m < nums.length; m++) {
    if (nums[m] == 1) {
      [nums[m], nums[k]] = [nums[k], nums[m]];
      k++;
    }
  }
};
// @lc code=end
