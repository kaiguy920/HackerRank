// ===========================================================
//                      NUMBER 1
// ===========================================================
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid) {
    // first, need to take in each array in the grid row & arrange them in alphabetical order
    const newGrid = []
    // will need to first split each input
    // then, split & org each letter in string
    for (let i = 0; i < grid.length; i++) {
        let rows = grid[i].split("").sort()
        // then, push into a new array
        newGrid.push(rows)
    }
    console.log(newGrid)
    // then, evaluate if they are in ascending alphabetical order in each row & column
    const column = newGrid[0].length
    for (let j = 0; j < newGrid.length - 1; j++) {
        for (let z = 0; z < column; z++) {
            if (newGrid[j][z] > newGrid[j + 1][z]) {
                // return 'YES' or 'No' string
                return 'NO'
            }
        }
    }
    return 'YES'
}
gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])