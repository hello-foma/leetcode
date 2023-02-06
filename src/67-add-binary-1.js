/**
 Sum binary strings
 doesnt use binary methods

 to sum binary, if both bits are 1 - make it zero, transfer 1 to the left
 Input: a = "1010", b = "1011"
 Output: "10101"
 "1010"
 "1011"
 "10101"

 Input: a = "11", b = "1"
 Output: "100"

 "01"
 "11"
 "100"

 "111"
 "111"

 "1110"

 1. Make strings equal length
 2. Iterate from end
 3. If there's two 1, set as 0 and save 1 for next
 4. After iteration is there's left 1 at the left, append to result

 O(n), O(n)
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let maxLength = Math.max(a.length, b.length);
  const aLengthDelta = maxLength - a.length;
  const bLengthDelta = maxLength - b.length;
  let result = "";
  let isAdd = false;

  for(let i = maxLength - 1; i >= 0; i--) {
    const aBit = a[i - aLengthDelta] || "0";
    const bBit = b[i - bLengthDelta] || "0";

    if (aBit === "1" && bBit === "1") {
      result = (isAdd ? "1" : "0") + result;
      isAdd = true;
    } else if (aBit === "0" && bBit === "0") {
      result = (isAdd ? "1" : "0") + result;
      isAdd = false;
    } else {
      result = (isAdd ? "0" : "1") + result;
    }
  }

  result = (isAdd ? "1" : "") + result;

  return result;
};
