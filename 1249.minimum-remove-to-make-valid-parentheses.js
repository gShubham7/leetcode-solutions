/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (str) {
  const stack = [];
  const arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        arr[i] = "";
      } else {
        stack.pop();
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const char = stack[i];
    arr[char] = "";
  }

  return arr.join("");
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(n)
};
// @lc code=end
