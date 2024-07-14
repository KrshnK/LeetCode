/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if(!root) return []
    
    const res = []
    dfs(root)
    return res

    function dfs(root) {
        if (root !== null) {
            for (const child of root.children) {
                dfs(child)
            }
            res.push(root.val)
        }
    }
};