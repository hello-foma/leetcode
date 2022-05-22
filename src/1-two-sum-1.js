/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 Input: nums = [1,2,5,6,7,11,15], target = 9
 Output: [0,2]
 
 Naive solution:
     O(n^2), O(1)

     forEachNum(i) {
        forEachNextNum(j) {
            sumBoth() {
                return result;
            }
        }  
     }
 
 Optimized solution 1:
    Create hash of nums where values is indexes at nums
    sort nums
    binary search for each value, find their pair
    return indexes from hash
    O(n * log(n)), O(n)
    
Optimized solution 2:
    Create hash of nums where values is indexes at nums
    sort nums
    two pointers: to lesser (l) and to highest (r)
    go for each left and check right, if sum too much, decrease right
        if sum too low - increase left
    return indexes from hash
    O(n*2), O(n)
    
Optimized solution 3:
    create empty hash
    go for each value and get delta between target and value
    look for delta in hash
        return result
    save value in hash
    go next
    O(n), O(n)
 */

// Optimized solution 3
var twoSum = function(nums, target) {  
    const hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        const delta = target - nums[i];
        
        if (typeof hash[delta] !== 'undefined') {
            return [i, hash[delta]];
        }
        
        hash[nums[i]] = i;
    }
    
    /*
    // Optimized solution 2
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    };
    nums.sort((a, b) => a - b);
    
    let l = 0;
    let r = nums.length - 1;
    
    while(l < r) {
        const sum = nums[l] + nums[r];
        if (sum === target) {
            if (nums[l] === nums[r]) {
                return [hash[nums[l]], hash[nums[l]] - 1];
            }
            return [hash[nums[l]], hash[nums[r]]];
        } else if (sum > target) {
            r--;
        } else if(sum < target) {
            l++;
        }
    }
    */
    
    /*
    // Naive solution
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
    */
};
