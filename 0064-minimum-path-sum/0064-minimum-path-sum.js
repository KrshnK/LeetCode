/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid, r = 0, c = 0, memo = {}) {
    const pos = r + ',' + c
    const m = grid.length
    const n = grid[0].length

    if (pos in memo) return memo[pos]
    if (r >= m || c >= n) {
        return Infinity
    }
    if (r === m - 1 && c === n - 1) {
        return grid[r][c]
    }

    const right = minPathSum(grid, r + 1, c, memo)
    const bottom = minPathSum(grid, r, c + 1, memo)

    memo[pos] = grid[r][c] + Math.min(right, bottom)
    return memo[pos]
};