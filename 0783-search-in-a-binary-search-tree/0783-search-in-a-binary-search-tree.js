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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    // if(!root) return root
    // const stack = [ root ]

    // while(stack.length > 0){
    //     const node = stack.pop()
    //     if(node.val == val) return node
    //     if(node.val > val && node.left){
    //      stack.push(node.left)    
    //     } else if(node.val < val && node.right) {
    //      stack.push(node.right)
    //     }
    // }
    // return null

    if (!root) return root
    let curr = root

    while (curr) {
        if (curr.val == val) return curr
        else curr = curr.val > val ? curr.left : curr.right
    }

    return null
};