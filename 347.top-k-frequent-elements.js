/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let res = [];
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]]++;
    } else {
      freq[nums[i]] = 1;
    }
  }

  let array = Object.entries(freq).sort((a, b) => {
    return a[1] - b[1];
  });
  
  while (res.length != k) {
    let curr = array.pop();
    res.push(curr[0]);
  }
  return res;
};
// @lc code=end
