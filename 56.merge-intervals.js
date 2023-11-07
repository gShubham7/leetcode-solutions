/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (currentInterval[1] >= intervals[i][0]) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  mergedIntervals.push(currentInterval);

  return mergedIntervals;

  //   Time Complexity   -----> O(nlogn)
  //   Space Complexity  -----> O(n)
};
// @lc code=end
