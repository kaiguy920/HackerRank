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