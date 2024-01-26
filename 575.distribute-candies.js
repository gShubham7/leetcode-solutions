/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const hashmap = {};
  let output = 0;

  for (let i = 0; i < candyType.length; i++) {
    if (!hashmap[candyType[i]]) output++;
    hashmap[candyType[i]] = i + 1;
    if (output === Math.floor(candyType.length / 2)) return output;
  }

  return output;

  //   return Math.min(candyType.length / 2, new Set(candyType).size);
};
// @lc code=end
