/*
We need to implement trie
Insert, search, startWith must have O(1) time complexity (amortized)


1. Each Trie has hash of letters (26 for lowerCase English)
2. Each Letter - new Trie
3. Trie has prop - isEndWord if some words ends on that Trie
4. On insert, we take first letter
5. If there's no saved Trie for this letter, create new
6. Insert rest of word at new Trie
7. At the end of word, mark Trie as isEndWord
8. On search, look recursively
9. If look for whole word, check isEndWord on last
10. return false, if not found or no endings for this word

O(1), O(n) 
*/


var Trie = function() {
  this.isWordEnds = false;

  this.hash = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const letter = word[0];

  if (!this.hash[letter]) {
    this.hash[letter] = new Trie();
  }

  if (word.length === 1) {
    this.hash[letter].isWordEnds = true;
  }

  if (word.length > 1) {
    this.hash[letter].insert(word.substring(1));
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const letter = word[0];

  if (!this.hash[letter]) {
    return false;
  }

  if (word.length > 1) {
    return this.hash[letter].search(word.substring(1));
  }

  return this.hash[letter].isWordEnds;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const letter = prefix[0];

  if (!this.hash[letter]) {
    return false;
  }

  if (prefix.length > 1) {
    return this.hash[letter].startsWith(prefix.substring(1));
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
