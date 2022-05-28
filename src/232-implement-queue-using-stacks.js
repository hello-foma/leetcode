/*
We can use stack as store
We need to keep first elem at the top of the stack
When we add new elem, we put at the data stack
When we pop, we return from buffer stack
If buffer is empty, move to buffer every value from data
Wee can keep size by a prop
*/

var MyQueue = function() {
  this.data = [];
  this.buffer = [];
  this.size = 0;

  this.keepBuffer = () => {
    if (this.buffer.length !== 0) {
      return;
    }
    while(this.data.length > 0) {
      this.buffer.push(this.data.pop());
    }
  }
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.data.push(x);
  this.size++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.size === 0) {
    return;
  }

  this.keepBuffer();
  this.size--;

  return this.buffer.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  this.keepBuffer();

  return this.buffer[this.buffer.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
