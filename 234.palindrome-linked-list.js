/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let curr = head;
  let num = [];

  while (curr.next !== null) {
    num.push(curr.val);
    curr = curr.next;
    if (curr.next === null) {
      num.push(curr.val);
    }
  }
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    if (num[left] !== num[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;

  // Time Complexity    -----> O(n)
  // Space Complexity   -----> O(n)
};
// @lc code=end
