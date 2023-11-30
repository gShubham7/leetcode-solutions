/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  return str;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
