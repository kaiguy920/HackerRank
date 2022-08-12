// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// ("test") should return "es"
// ("testing") should return "t"
function getMiddle(s) {
    let middle = ""
    let even = s.length % 2 === 0
    if (even) {
        let len = s.length / 2
        middle += s.charAt(len - 1)
        middle += s.charAt(len)
    } else {
        let len = s.length / 2
        middle += s.charAt(Math.round(len - 1))
    }
    return middle
}
console.log(getMiddle("testy"))

// ===================== TAKE 2 ==================================

function getMiddle2(s) {
    let middle = Math.floor(s.length / 2);

    return s.length % 2 === 0
        ? s.slice(middle - 1, middle + 1)
        : s.slice(middle, middle + 1);

}

console.log(getMiddle2("werq"))