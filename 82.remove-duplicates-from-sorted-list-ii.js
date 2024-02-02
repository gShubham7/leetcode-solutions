/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function (head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let list = dummyNode;

  while (list.next && list.next.next) {
    if (list.next.val === list.next.next.val) {
      while (
        list.next &&
        list.next.next &&
        list.next.val === list.next.next.val
      ) {
        list.next = list.next.next;
      }
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return dummyNode.next;
};
// @lc code=end
