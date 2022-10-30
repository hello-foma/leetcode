/*
Need to implement queue with two stacks;
We can push at the end
We can pop and peek from the beginning

1. We have stack to keep current elems
2. On push we put elem at stack
3. On peek or pop, we move all elems to the second stack and pop (peek elem)
4. Push always from first stack
5. Peek\pop from second
6. If second is empty - fill with first
7. if first also empty - return null

amort O(1), O(n)

*/


var MyQueue = function() {
  this.in = [];
  this.out = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.in.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.peek();

  return this.out.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.out.length === 0) {
    if (this.in.length === 0) {
      return null;
    }

    const inLength = this.in.length;
    for (let i = 0; i < inLength; i++) {
      this.out.push(this.in.pop());
    }
  }

  return this.out[this.out.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.in.length === 0 && this.out.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
