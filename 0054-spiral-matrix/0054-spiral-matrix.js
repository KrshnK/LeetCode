/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = []

    let row = matrix.length
    let col = matrix[0].length

    if (row == 0) return res

    let count = 0
    let total = row * col

    let startingRow = startingCol = 0
    let endingRow = row - 1
    let endingCol = col - 1

    while (count < total) {

        // starting row
        for (let i = startingCol; count < total && i <= endingCol; i++) {
            res.push(matrix[startingRow][i])
            count++
        }
        startingRow++

        // ending col
        for (let i = startingRow; count < total && i <= endingRow; i++) {
            res.push(matrix[i][endingCol])
            count++
        }
        endingCol--

        // ending row
        for (let i = endingCol; count < total && i >= startingCol; i--) {
            res.push(matrix[endingRow][i])
            count++
        }
        endingRow--

        // stating col
        for (let i = endingRow; count < total && i >= startingRow; i--) {
            res.push(matrix[i][startingCol])
            count++
        }
        startingCol++
    }

    return res
};