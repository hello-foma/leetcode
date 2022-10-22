

/*
for search we can use Set
For effecient startsWith we can place each substring from start of inserted to startWith set
O(1), O(2n)

Trie with sets for each letter
*/


// var Trie = function() {
//     this.containsSet = new Set();
//     this.prefixSet = new Set();
// };

// /**
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     this.containsSet.add(word);

//     for(let i = 1; i < word.length; i++) {
//         this.prefixSet.add(word.slice(0, i));
//     }
// };

// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     return this.containsSet.has(word);
// };

// /**
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     return this.search(prefix) || this.prefixSet.has(prefix);
// };

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */

var Trie = function() {
  this.letters = new Map();
  this.isWordEnding = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currentTrie = this;
  for(let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!currentTrie.letters.has(letter)) {
      currentTrie.letters.set(letter, new Trie());
    }
    currentTrie = currentTrie.letters.get(letter);
  }

  currentTrie.isWordEnding = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let currentTrie = this;
  for(let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (!currentTrie.letters.has(letter)) {
      return false;
    } else {
      currentTrie = currentTrie.letters.get(letter);
    }
  }

  return currentTrie.isWordEnding;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let currentTrie = this;
  for(let i = 0; i < prefix.length; i++) {
    const letter = prefix[i]
    if (!currentTrie.letters.has(letter)) {
      return false;
    } else {
      currentTrie = currentTrie.letters.get(letter);
    }
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
