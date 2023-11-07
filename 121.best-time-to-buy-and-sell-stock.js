/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let maxProfit = 0;

  // for (let i = 0; i < prices.length - 1; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //         let currentProfit = prices[j] - prices[i];
  //         maxProfit = Math.max(maxProfit, currentProfit);
  //     }
  // }
  // return maxProfit;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(1)

  let profit = 0;
  let stockToBuy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i];
    }

    let currentProfit = prices[i] - stockToBuy;

    profit = Math.max(profit, currentProfit);
  }
  return profit;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
