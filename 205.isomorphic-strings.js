/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] != map2[t[i]]) return false;
    map1[s[i]] = i + 1;
    map2[t[i]] = i + 1;
  }
  return true;
};

// @lc code=end
