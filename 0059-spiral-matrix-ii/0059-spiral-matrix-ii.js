/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = new Array(n).fill(0).map(x => [])

    let row = col = n

    if (row == 0) return res

    let count = 0
    let total = row * col

    let startingRow = startingCol = 0
    let endingRow = row - 1
    let endingCol = col - 1

    while (count < total) {

        // starting row
        for (let i = startingCol; count < total && i <= endingCol; i++) {
            count++
            matrix[startingRow][i] = count
        }
        startingRow++

        // ending col
        for (let i = startingRow; count < total && i <= endingRow; i++) {
            count++
            matrix[i][endingCol] = count
        }
        endingCol--

        // ending row
        for (let i = endingCol; count < total && i >= startingCol; i--) {
            count++
            matrix[endingRow][i] = count
        }
        endingRow--

        // stating col
        for (let i = endingRow; count < total && i >= startingRow; i--) {
            count++
            matrix[i][startingCol] = count
        }
        startingCol++
    }

    return matrix
};