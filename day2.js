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

