var isPalindrome = function (x) {
    //  given an input, x we need to determine if it is the same backward as it is forward
    //  first we need to split x into each number value
    let digits = x.toString().split('');
    let realDigits = digits.map(Number)
    console.log(realDigits)
    let xX = realDigits.join("")
    console.log(xX)

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