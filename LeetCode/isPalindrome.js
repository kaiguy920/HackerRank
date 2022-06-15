// ===========================================================
//                         WITH NUMBERS
// ===========================================================

var isPalindrome = function (x) {
    //  given an input, x we need to determine if it is the same backward as it is forward
    //  first we need to split x into each number value
    let digits = x.toString().split('');
    let realDigits = digits.map(Number)
    console.log("realDigits", realDigits)
    let xX = realDigits.join("")
    console.log("xX", xX)

    //  then, we need to reverse the order of the array
    const xRev = realDigits.reverse().join("")

    console.log(xRev)
    // then compare, if same, then isPalindrome, otherwise false
    if (xX === xRev) {

        console.log("is Palindrome")
    }
    else {
        console.log("not a Palindrome")
    }

};
isPalindrome(124)


// ===========================================================
//                         WITH WORDS
// ===========================================================
const isPalindromeWord = (s) => {
    // .replace(/\s/g, "") means to replace all white space 
    // .replace(/\W/g, "") will replace all non word character
    const remove = s.toLowerCase().replace(/\W/g, "").replace(/\_/g, "")
    console.log(remove)
    const stringForward = remove.split("")
    const stringRev = stringForward.reverse().join("")
    console.log(stringRev)
    console.log(remove === stringRev)
    // return remove === stringRev
}
isPalindromeWord("ab_a")