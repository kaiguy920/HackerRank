// input matrix represents rooms and their cost; ones that are free are said to be haunted
// superstitious stayers don't want to stay in the free rooms or the ones below it
// return total sum of all rooms that are suitable
function matrixElementsSum(matrix) {
    let counter = 0
    // double loop through columns
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            // console.log(matrix[j][i])

            if (matrix[j][i] === 0) {
                break;
            }
            // console.log(matrix[j][i])
            counter += matrix[j][i]
        }
    }
    return counter
}
console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])); // ==> [1 + 1 + 2 + 5] = 9