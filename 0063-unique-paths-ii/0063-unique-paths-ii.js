/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid, r = 0, c = 0, memo = {}) {
    let pos = r + ',' + c
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    if (pos in memo) return memo[pos]
    if (r >= m || c >= n || obstacleGrid[r][c] == 1) return 0
    if (r === m - 1 && c === n - 1) return 1

    const right = uniquePathsWithObstacles(obstacleGrid, r + 1, c, memo)
    const bottom = uniquePathsWithObstacles(obstacleGrid, r, c + 1, memo)

    memo[pos] = right + bottom
    return memo[pos]
};