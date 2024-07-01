/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return gcd(min, max);

  function gcd(val1, val2) {
    if (val1 == val2) {
      return val1;
    }
    if (val1 > val2) {
      return gcd(val1 - val2, val2);
    } else {
      return gcd(val1, val2 - val1);
    }
  }
};
