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

const plusOne2 = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }

    digits.unshift(1);
    console.log(digits)
}
plusOne([1, 2, 3, 4])

const majorityElement = (nums) => {
    let count = {}
    for (const x of nums) {
        count[x] = (count[x] || 0) + 1
    }
    console.log(count)

    // sort in ascenting order
    count = Object.keys(count).sort((a, b) => count[b] - count[a])
    console.log(count[0])

}
majorityElement([2, 2, 1, 1, 1, 2, 2])