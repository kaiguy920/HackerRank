// square each # & concatenate
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
    const split = num.toString().split("")
    let squared = []
    // console.log(split)
    for (let i = 0; i < split.length; i++) {
        let numSquare = Math.pow(split[i], 2)
        squared.push(numSquare)
    }
    const concat = squared.join('')
    const concatNum = parseInt(concat)
    // console.log(concatNum)
    return concatNum
}
console.log(squareDigits(9119))