/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let max = major = 0

    for (const key of map.keys()) {
        if (map.get(key) > max) {
            max = map.get(key)
            major = key
        }
    }

    return major
};