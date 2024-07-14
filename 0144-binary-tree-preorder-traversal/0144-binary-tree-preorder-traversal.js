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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const result = []
    preOrder(root, result)
    return result

    function preOrder(root, result) {
        if(root !== null) {
            result.push(root.val)
            preOrder(root.left, result)
            preOrder(root.right, result)
        }
    }
};