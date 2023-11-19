/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // let maxArea = 0;

  // for (let i = 0; i < height.length - 1; i++) {
  //     for (let j = i + 1; j < height.length; j++) {
  //         let area = Math.min(height[i], height[j]) * (j - i);
  //         maxArea = Math.max(maxArea, area);
  //     }
  // }
  // return maxArea;
  // Time Complexity    -----> O(n^2)
  // Space Complexity   -----> O(1)

  // Optimized Approach --> Using Two Pointers

  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(1)
};
// @lc code=end
