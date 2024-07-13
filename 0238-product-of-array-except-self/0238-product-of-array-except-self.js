/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const length = nums.length
    let left = new Array(length).fill(1)
    let right = new Array(length).fill(1)

    let ans = new Array(length)

    // left side array
    for (i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }

    // right side array
    for (i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1]
    }

    // result array
    for (i = 0; i < length; i++) {
        ans[i] = left[i] * right[i]
    }

    return ans
};