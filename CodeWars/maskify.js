// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    } else {
        const last4Digits = cc.slice(-4)
        const maskedNum = last4Digits.padStart(cc.length, "#")
        return maskedNum
    }
}

console.log(maskify("4556364607935616"))

// ===============================================================
//                      MULTIPLES OF 3 OR 5
// ===============================================================
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

function solution(number) {
    let num = number - 1
    let sum = 0
    let numCount = []

    for (let i = 1; i <= num; i++) {
        numCount.push(i)
    }
    console.log(numCount);
    if (number <= 0) {
        return 0
    } else {
        for (let i = 0; i < numCount.length; i++) {
            if (numCount[i] % 3 === 0 || numCount[i] % 5 === 0) {
                sum += numCount[i]
            }
        }
        return sum
    }
}
console.log(solution(10))