// give an array of single digit intigers, add one to the last number
// if the last # is 9, making it 10, return seperated as [1, 0]
const plusOne = (digits) => {
    const len = digits.length
    const lastNumIndex = len - 1
    const plusOne = digits[lastNumIndex] + 1
    if (plusOne >= 10) {
        let split = plusOne.toString().split('')
        let splitNum = split.map(Number)
        console.log(splitNum)
        digits.pop(digits[lastNumIndex])
        digits.push(...splitNum)
    } else {
        digits.pop(digits[lastNumIndex])
        digits.push(plusOne)
    }
    console.log(digits)
};
plusOne([1, 2, 3])