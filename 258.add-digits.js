/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let res = 0;
  while (num) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return res <= 9 ? res : addDigits(res);
};
// @lc code=end
