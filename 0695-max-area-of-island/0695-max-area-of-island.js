/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let largest = 0

    const dfs = (r, c) => {
        const pos = r + ',' + c
        if (r < 0 || r >= rows || c < 0 || c >= cols ||
            grid[r][c] === 0 || visited.has(pos)) {
            return 0
        }
        visited.add(pos)
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited.has(r + ',' + c)) {
                let size = dfs(r, c)
                if (size > largest) {
                    largest = size
                }
            }
        }
    }
    return largest
};