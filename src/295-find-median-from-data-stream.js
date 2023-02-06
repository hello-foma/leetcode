/**
 Implement MedianFinder class
 Median value - its middle of sorted row. If there even size, than median is mean of two middle values
 values can be duplicates
 so =>
 [1,2,3] => 2
 [1,2,5] => 2
 [1,2] => 1.5
 [1,2,2] => 2

 Methods are:
 addNum() - to add number to array
 findMedian() - to find median value


 When add, we must place at ordered place
 To calculate orderedPlace, we can use median
 if its more than median, place right to median, if lower - place at left
 use binary search for that

 add: O(n) <- can be improved? Should we keep all nums?
 findMediac O(1)


 leetcode couldnot complete custom heap, use default
 */

var MedianFinder = function() {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let min = this.minHeap;
  let max = this.maxHeap;

  if (max.isEmpty() || max.front().element >= num) {
    max.enqueue(num);
  } else {
    min.enqueue(num);
  }

  if (max.size() > min.size() + 1) {
    min.enqueue(max.dequeue().element);
  } else if (max.size() < min.size()) {
    max.enqueue(min.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let min = this.minHeap;
  let max = this.maxHeap;

  let result;
  if (min.size() === max.size()) {
    result = (max.front().element + min.front().element) / 2.0
  } else {
    result = max.front().element;
  }

  return result;
};

var MedianFinder1 = function() {
  this.small = new HeapMax();
  this.big = new HeapMin();
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder1.prototype.addNum = function(num) {
  //console.log({num});
  const smallSize = this.small.size();
  if (smallSize === 0) {
    this.small.put(num);
    return;
  }

  const bigSize = this.big.size();
  const bigVal = this.big.peek();
  const smallVal = this.small.peek();

  if (bigVal === null) {
    if (num < smallVal) {
      this.small.remove(smallVal);
      this.big.put(smallVal);
      this.small.put(num);
    } else {
      this.big.put(num);
    }

    return;
  }

  if (num > bigVal) {
    if (bigSize > smallSize) {
      this.big.replace(bigVal, num);
      this.small.put(bigVal);
    } else {
      this.big.put(num);
    }
  } else if (num < smallVal) {
    if (smallSize > bigSize) {
      this.small.replace(smallVal, num);
      this.big.put(smallVal);
    } else {
      this.small.put(num);
    }
  } else {
    if (bigSize < smallSize) {
      this.big.put(num);
    } else {
      this.small.put(num);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder1.prototype.findMedian = function() {
  const bigSize = this.big.size();
  const smallSize = this.small.size();

  //console.log({small: this.small.values(), big: this.big.values()})
  if(smallSize > bigSize) {
    return this.small.peek();
  } else if (bigSize > smallSize) {
    return this.big.peek();
  } else {
    const smallVal = this.small.peek();
    const bigVal = this.big.peek();

    return (smallVal * 1000 + bigVal * 1000) / 2000;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

function HeapMin() {
  return new Heap(false);
}

function HeapMax() {
  return new Heap(true);
}

function Heap(isMax) {
  this.arr = [];
  this.compare = (a,b) => isMax ? a > b : a < b;
  this.heapify = function(startIndex) {
    let t = startIndex;
    let l = startIndex * 2 + 1;
    const r = startIndex * 2 + 2;

    if (l < this.arr.length && this.compare(this.arr[l], this.arr[t])) {
      t = l;
    }

    if (r < this.arr.length && this.compare(this.arr[r], this.arr[t])) {
      t = r;
    }

    if (t !== startIndex) {
      [this.arr[startIndex],this.arr[t]] = [this.arr[t],this.arr[startIndex]];
      this.heapify(t);
    }
  };
  this.rebalance = () => {
    for(let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }
}

Heap.prototype.values = function() {
  return this.arr;
}

Heap.prototype.size = function() {
  return this.arr.length;
}

Heap.prototype.put = function(val) {
  this.arr.push(val);

  if (this.arr.length === 1) {
    return;
  }

  this.rebalance();
}

Heap.prototype.remove = function(val) {
  if (this.arr.length === 0) {
    return;
  }

  let i = 0;

  while(i < this.arr.length && this.arr[i] !== val) {
    i++;
  }

  if (this.arr[i] !== val) {
    return;
  }

  const last = this.arr.length - 1;
  [this.arr[i],this.arr[last]] = [this.arr[last],this.arr[i]];

  this.arr.pop();

  if (last !== i) {
    this.rebalance();
  }
}

Heap.prototype.replace = function(oldVal, newVal) {
  if (this.arr.length === 0) {
    return;
  }

  let i = 0;

  while(i < this.arr.length && this.arr[i] !== oldVal) {
    i++;
  }

  if (this.arr[i] !== oldVal) {
    return;
  }

  this.arr[i] = newVal;

  if (i !== this.arr.length - 1) {
    this.rebalance();
  }
}

Heap.prototype.peek = function(val) {
  return this.arr.length === 0 ? null : this.arr[0];
}
