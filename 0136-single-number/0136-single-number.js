/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let dig = 0;
  for (const num of nums) {
    dig ^= num;
  }
  return dig;
};
