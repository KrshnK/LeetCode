/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = maxlen = zeroCount = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            zeroCount++
        }
        while (zeroCount > 1) {
            if (nums[left] == 0) {
                zeroCount--
            }
            left++
        }
        if (zeroCount == 1) {
            maxlen = Math.max(maxlen, right - left)
        }
    }

    return zeroCount == 0 ? nums.length - 1 : maxlen
};