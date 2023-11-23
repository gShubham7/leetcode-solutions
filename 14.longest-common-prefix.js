/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (!char) {
      return "";
    }
    if (strs.every((str) => str[i] === char)) {
      res += char;
    } else {
      break;
    }
  }
  return res;
};
// @lc code=end
