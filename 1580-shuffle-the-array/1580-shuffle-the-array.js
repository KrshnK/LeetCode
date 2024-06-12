/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let arr = nums.splice(n)
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(nums[i])
        newArr.push(arr[i])
    }
    return newArr
};