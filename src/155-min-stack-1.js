/*
Need to implement MinStack class with constant time operations

1. We have stack of values
2. We have min field
3. Min is list
4. When we put new value, compare with top of the list
5. If minList are empty - put value
6. If new value are smaller than top of minList, put at list
7. When we pop and this is min value, pop from min value stack too
* Can we improve space complexity by not using nested list?
O(1), O(n)
 */
var MinStack = function() {
  this.min = [];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);

  const isMinEmpty = this.min.length === 0;
  if (isMinEmpty || this.getMin() >= val) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.stack.pop();
  const min = this.getMin();

  if (val === min) {
    this.min.pop();
  }

  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
