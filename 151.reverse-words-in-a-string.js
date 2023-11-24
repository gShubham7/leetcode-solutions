/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //   let str = s.split(" ");
  //   let res = "";

  //   for (let i = str.length - 1; i >= 0; i--) {
  //     if (str[i]) {
  //       res += (res ? " " : "") + str[i];
  //     }
  //   }

  //   return res;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(n)

  // Optimized Approach

  let word = "";
  let right = s.length - 1,
    left = right;

  while (right >= 0) {
    while (s[right] === " ") {
      --right;
      --left;
    }

    while (left >= 0 && s[left] !== " ") {
      --left;
    }

    let i = left + 1;
    while (i <= right) {
      if (i == left + 1 && word !== "") {
        word += " ";
      }
      word += s[i];
      ++i;
    }
    right = left;
  }
  return word;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
