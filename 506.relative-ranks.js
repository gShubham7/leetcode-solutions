/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let newScore = [...score].sort((a, b) => b - a);
  let mapRes = new Map();

  for (let i = 0; i < newScore.length; i++) {
    mapRes.set(newScore[i], i);
  }

  for (let i = 0; i < score.length; i++) {
    score[i] = (mapRes.get(score[i]) + 1).toString();
    if (score[i] === "1") score[i] = "Gold Medal";
    if (score[i] === "2") score[i] = "Silver Medal";
    if (score[i] === "3") score[i] = "Bronze Medal";
  }
  return score;
};
// @lc code=end
