/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;
  const sArr = s.split("");

  while (left < right) {
    while (left < right && !vowels.includes(sArr[left])) {
      left++;
    }
    while (left < right && !vowels.includes(sArr[right])) {
      right--;
    }
    [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
    left++;
    right--;
  }

  return sArr.join("");
};
// @lc code=end
