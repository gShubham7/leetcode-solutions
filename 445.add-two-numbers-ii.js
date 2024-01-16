/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let r1 = reverseLinkedList(l1);
  let r2 = reverseLinkedList(l2);

  let carry = 0;
  let result = null;

  while (r1 !== null || r2 !== null || carry !== 0) {
    let sum = carry;
    if (r1 !== null) {
      sum += r1.val;
      r1 = r1.next;
    }
    if (r2 !== null) {
      sum += r2.val;
      r2 = r2.next;
    }

    carry = Math.floor(sum / 10);
    sum %= 10;

    let newNode = new ListNode(sum);
    newNode.next = result;
    result = newNode;
  }

  return result;
};

const reverseLinkedList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
// @lc code=end
