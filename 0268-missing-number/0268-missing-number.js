/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length + 1;

  // if (nums[0] !== 0) return 0
  // if (nums[len - 1] !== len) return len

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      return i;
      break;
    }
  }
};
