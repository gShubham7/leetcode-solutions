/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestStringLength = 0;

  for (let i = 0; i < s.length; i++) {
    let currentStringSet = new Set();

    for (let x = i; x < s.length; x++) {
      if (currentStringSet.has(s[x])) {
        break;
      } else {
        currentStringSet.add(s[x]);
      }
    }
    longestStringLength = Math.max(longestStringLength, currentStringSet.size);
  }

  return longestStringLength;
};
// @lc code=end
