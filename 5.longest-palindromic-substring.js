/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let maxLength = 0;
  let low = 0;
  let res = s;

  const expandPalindrome = (j, k) => {
    while (j >= 0 && k < s.length && s[j] === s[k]) {
      j--;
      k++;
    }
    if (maxLength < k - j - 1) {
      maxLength = k - j - 1;
      low = j + 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandPalindrome(i, i);
    expandPalindrome(i, i + 1);
  }

  return res.substring(low, low + maxLength);

  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(1)
};
// @lc code=end
