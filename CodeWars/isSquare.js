const isSquare = (n) => {
    let square = Math.sqrt(n)
    if (square % 1 == 0) {
        return true
    } else {
        return false
    }
}
// console.log(isSquare('4'));

// =======================================================================
//                          X & O
// =======================================================================
// Check to see if a string has the same amount of 'x's and 'o's. 
function XO(str) {
    let strLower = str.toLowerCase()
    let x = 0
    let o = 0
    for (let i = 0; i < strLower.length; i++) {
        if (!strLower[i] == "x" || !strLower[i] == "o") {
            return false
        } else if (strLower[i] === "x") {
            x++
        } else if (strLower[i] === "o") {
            o++
        }
    }

    return x == o

}
console.log(XO("oxXXOo"));