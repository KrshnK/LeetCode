/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr = nums.splice(0, n);
  let str = [];
  for (let i = 0; i < n; i++) {
    str.push(arr[i]);
    str.push(nums[i]);
  }
  return str;
};
