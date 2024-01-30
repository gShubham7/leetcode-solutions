/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0,
    diff;
  for (var i = 0; i < prices.length - 1; i++) {
    diff = prices[i + 1] - prices[i];
    if (diff > 0) max += diff;
  }
  return max;
};
// @lc code=end
