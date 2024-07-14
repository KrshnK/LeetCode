/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const res = []
    dfs(root)
    return res

    function dfs(root) {
        if (root !== null) {
            res.push(root.val)
            for (const child of root.children) {
                dfs(child)
            }
        }
    }
};