// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digital_root(n) {
    let result = 0;
    String(n).split('').map(num => {
        result += Number(num);
    });
    return result > 10 ? digital_root(result) : result;
}
console.log(digital_root(942))