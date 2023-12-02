/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /*
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  let keys = Object.keys(obj);
  keys.sort((a, b) => obj[b] - obj[a]);
  return keys[0];

  // Time Complexity    -----> O(nlog(n))
  // Space Complexity   -----> O(n)
  */

  //   Boyer-Moore majority vote algorithm
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
