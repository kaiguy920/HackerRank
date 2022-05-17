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
    // console.log(newGrid)
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

// ===========================================================
//                      NUMBER 2
// ===========================================================

// Given an integer, we need to find the super digit of the integer
// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

function superDigit(n, k) {
    // Write your code here
    let nLength = n.length;

    if (nLength == 1) {
        return n
    }

    let nArr = n.split('');


    let nSum = 0;

    for (let i = 0; i < nArr.length; i++) {
        nSum = nSum + (k * parseInt(nArr[i]))
    }

    return superDigit(nSum.toString(), 1)
}

// ===========================================================
//                      NUMBER 3
// ===========================================================

var longestCommonPrefix = function (strs) {
    let prefix = ""
    if (strs === null || strs.length === 0) return prefix

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++) {
            // loop through all other strings in the array
            if (strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// ===========================================================
//                      NUMBER 4
// ===========================================================

const minimumBribes = (q) => {
    let bribes = 0
    let chaotic = false
    // loop backward through q
    for (let i = q.length - 1; i >= 0; i--) {
        // if q index is greater than three less than index value, change chaotic to true
        if (q[i] - i > 3) {
            chaotic = true
        }
        // if value of one index to the left is greater than q[i], then add a number to the bribes
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) bribes++
        }
    }
    if (chaotic) {
        console.log("Too chaotic")
    }
    else {
        console.log(bribes)
    }
}

minimumBribes([2, 1, 3, 5, 4])