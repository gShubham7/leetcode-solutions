/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (str) {
  str = str.trim();
  let arr = str.split(" ");
  return arr[arr.length - 1].length;
};
// @lc code=end
