/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = []
    const queue = [root]

    if(!root) return res
    while (queue.length > 0) {
        const size = queue.length
        const level = []

        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            level.push(node.val)

            // for child of children
            queue.push(...node.children)
        }
        res.push(level)
    }
    return res
};