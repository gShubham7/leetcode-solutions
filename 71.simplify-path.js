/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let directory = path.split("/");
  let stack = [];

  for (const dir of directory) {
    if (dir === "." || !dir) {
      continue;
    } else if (dir === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");

  //   Time Complexity   -----> O(n)
  //   Space Complexity  -----> O(n)
};
// @lc code=end
