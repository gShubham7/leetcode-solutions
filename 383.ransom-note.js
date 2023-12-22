/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (const char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
