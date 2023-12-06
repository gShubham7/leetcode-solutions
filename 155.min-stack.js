/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function () {
  this.item = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.item.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.item.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.item[this.item.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Infinity;

  for (let i = 0; i < this.item.length; i++) {
    min = Math.min(min, this.item[i]);
  }

  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
