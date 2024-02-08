/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head == null) {
    return null;
  }
  let pointer = head;
  let arr = [];
  while (pointer) {
    arr.push(pointer.val);
    pointer = pointer.next;
  }
  arr.sort((a, b) => a - b);
  let n = new ListNode(arr[0]);
  head = n;
  let temp = head;
  for (let i = 1; i < arr.length; i++) {
    let n1 = new ListNode(arr[i]);
    temp.next = n1;
    temp = temp.next;
  }
  return head;
};
// @lc code=end
