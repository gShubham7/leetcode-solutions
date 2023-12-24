/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  let current_product = x;

  while (n > 0) {
    if (n % 2 == 1) {
      result = result * current_product;
    }
    current_product = current_product * current_product;
    n = Math.floor(n / 2);
  }

  return result;
};
// @lc code=end
