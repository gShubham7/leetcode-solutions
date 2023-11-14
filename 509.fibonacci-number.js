/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  //   let arr = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     arr.push(arr[i - 2] + arr[i - 1]);
  //   }
  //   return arr[n];
  // Time Complexity    -----> O(n)
  // Space Complexity    -----> O(n)

  if (n == 0) return 0;

  let prev = 0,
    cur = 1,
    temp;

  for (let i = 1; i < n; i++) {
    temp = cur;
    cur = cur + prev;
    prev = temp;
  }

  return cur;
  // Time Complexity    -----> O(n)
  // Space Complexity    -----> O(1)
};
// @lc code=end
