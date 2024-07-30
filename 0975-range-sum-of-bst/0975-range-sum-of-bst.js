/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let res = []
    let sum = 0

    function traversal(root) {
        if (root) {
            traversal(root.left)
            res.push(root.val)
            traversal(root.right)
        }
    }
    traversal(root)

    for (let i = 0; i < res.length; i++) {
        if (res[i] >= low && res[i] <= high) {
            sum += res[i]
        }
    }

    return sum
};