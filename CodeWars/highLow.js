// given a sting of numbers, return the highest & lowest #

// function highAndLow(numbers) {
//     const ascendNums = numbers.sort(function (a, b) { return a - b })
//     let len = numbers.length - 1
//     console.log(len)
//     const highLow = [ascendNums[0], ascendNums[len]]
//     console.log(highLow)
// }

// console.log(highAndLow([1, 2, -3, 4, 5]))


function highAndLow(numbers) {
    const num = numbers.split(" ")
    let sorted = num.sort(function (a, b) { return a - b })
    // console.log(sorted)
    let last = sorted.length - 1
    return sorted[last] + " " + sorted[0]
}

console.log(highAndLow("1 2 3 4 5"))

// =======================================================================
//                          DESCENDING ORDER
// =======================================================================
function descendingOrder(n) {
    const split = n.toString().split("")
    // console.log(split);
    let sorted = split.sort(function (a, b) { return b - a }).join("")
    let num = parseInt(sorted)
    // console.log("num", typeof num);
    return num
}
console.log(descendingOrder(1021));