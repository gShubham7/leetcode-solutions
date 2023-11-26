/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = hash[s[i]];

    if (i < s.length - 1 && curr < hash[s[i + 1]]) {
      res -= curr;
    } else {
      res += curr;
    }
  }

  return res;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
