/*
We can keep data at an array
We can keep min elem at prop
At each push, we can push to min value, if its lower
at pop, if we remove min val, we need to update min stack
We can keep min value as stack

O(1), O(n)
*/


var MinStack = function() {
  this.value = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.min.length === 0 || val <= this.getMin()) {
    this.min.push(val);
  }

  this.value.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.value.pop();

  if (this.getMin() === val) {
    this.min.pop();
  }

  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.value[this.value.length - 1];
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
