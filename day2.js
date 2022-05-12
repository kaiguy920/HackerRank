// ===========================================================
//                      NUMBER 1
// ===========================================================
// Given an array of integers, where all elements but one occur twice, find the unique element.
// example = [1, 2, 3, 4, 3, 2, 1]
// unique element is 4
function lonelyinteger(a) {
    // Write your code here
    // create an object that counts the occurence of the numbers
    const occurenceCount = {}
    for (const num of a) {
        occurenceCount[num] = (occurenceCount[num] || 0) + 1
    }
    console.log(occurenceCount)

    // make a second function to be able to search for the value of 1 & display the key
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    return (getKeyByValue(occurenceCount, 1))

}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])
// returns 4 successfully

// ===========================================================
//                      NUMBER 2
// ===========================================================
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                sum1 += arr[i][j];
            }
        }
        for (let j = 0; j < arr.length; j++) {
            if ((i + j) === (arr.length - 1)) {
                sum2 += arr[i][j];
            }
        }
    }
    // console.log(Math.abs(sum1 - sum2))
    return Math.abs(sum1 - sum2);
    // const sum1 = arr[0] + arr[4] + arr[8]
    // const sum2 = arr[2] + arr[4] + arr[6]
    // console.log(sum1, sum2)
    // const difference = Math.abs(sum1 - sum2)

    // return (difference)

}
diagonalDifference([11, 2, 4,
    4, 5, 6,
    10, 8, -12,])