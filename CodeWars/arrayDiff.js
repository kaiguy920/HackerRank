// It should remove all values from list a, which are present in list b keeping their order.
// ex: arrayDiff([1,2],[1]) == [2]
function arrayDiff(a, b) {
    a = a.filter((el) => !b.includes(el))
    return a
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // ==>[1, 3]

// =========================================================
//                          RANDOM
// =========================================================
// program to generate random strings
// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));