/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums, i = 0, memo = {}) {
    if (i in memo) return memo[i]
    if (i >= nums.length) return 0

    const skip = rob(nums, i + 1, memo)
    const take = nums[i] + rob(nums, i + 2, memo)

    memo[i] = Math.max(skip, take)
    return memo[i]
};