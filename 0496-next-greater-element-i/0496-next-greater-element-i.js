/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (num1, num2) {
    let res = []
    let len1 = num1.length
    let len2 = num2.length

    for (let i = 0; i < len1; i++) {
        let val = -1
        for (let j = 0; j < len2; j++) {
            let index = j
            if (num1[i] == num2[j]) {
                while(index !== len2){
                    if(num2[index] > num1[i]) {
                        val = num2[index]
                        break
                    }
                    index++
                }
            }
        }
        res.push(val)
    }
    return res
};