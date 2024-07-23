/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (num1, num2) {
    let merge = [...num1, ...num2].sort((a, b) => a - b)
    let median = Math.floor(merge.length / 2)
    
    if (merge.length % 2 == 0) {
        median = (merge[median] + merge[median - 1]) / 2
    } else {
        median = merge[median]
    }
    return median
};