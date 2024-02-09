/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let curr = head;
  let length = 1;

  while (curr.next) {
    curr = curr.next;

    length++;
  }

  curr.next = head;

  k = length - (k % length);

  for (let i = 0; i < k; i++) {
    curr = curr.next;
    head = curr.next;
  }

  curr.next = null;
  return head;
};
// @lc code=end
