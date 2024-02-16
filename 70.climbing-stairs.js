/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 0,
    b = 1,
    ways = 0;

  // Iterate to calculate ways using Fibonacci logic.
  for (let i = 1; i <= n; i++) {
    ways = a + b; // Calculate current ways.
    a = b; // Update a.
    b = ways; // Update b.
  }

  // Return total ways to climb the stairs.
  return ways;
};
// @lc code=end
