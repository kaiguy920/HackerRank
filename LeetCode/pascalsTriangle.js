// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it
// example: Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const generate = (numRows) => {
    if (numRows === 0) return [];
    const arr = [[1]];
    if (numRows === 1) return arr;
    for (let i = 1; i < numRows; i++) {
        arr[i] = new Array(i + 1).fill(1);
        for (let j = 1; j < arr[i].length - 1; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }
    console.log("soulution 1", arr)
    // return res;
};
generate(6)

// ======================= SOLUTION 2 ============================
var generates = function (numRows) {
    const pascalsTriangles = [];
    if (numRows === 0) {
        return pascalsTriangles;
    }

    pascalsTriangles.push([1]);
    let last = [];
    while (pascalsTriangles.length < numRows) {
        let newEntry = [];
        newEntry[0] = 1;


        for (let i = 0; i < last.length - 1; i++) {
            newEntry[i + 1] = last[i] + last[i + 1];
        }
        newEntry.push(1);
        pascalsTriangles.push(newEntry);
        last = newEntry;
    }
    console.log(pascalsTriangles)
    // return pascalsTriangles;
};

generates(6)