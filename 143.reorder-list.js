/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow.next;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  slow.next = null;

  let h1 = head;
  let h2 = prev;

  while (h2) {
    let temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};
// @lc code=end
