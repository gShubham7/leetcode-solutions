/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word.toUpperCase() == word || word.slice(1) == word.slice(1).toLowerCase()
  );
};
// @lc code=end
