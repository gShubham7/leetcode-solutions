/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  for (let c of num) {
    while (stack.length && k > 0 && stack[stack.length - 1] > c) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }
  while (stack.length && k > 0) {
    stack.pop();
    k--;
  }
  while (stack.length && stack[0] == "0") {
    stack.shift();
  }
  return stack.join("") || "0";
};
// @lc code=end
