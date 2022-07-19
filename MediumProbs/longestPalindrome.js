// given string, s, return longest palindrome value
const isPalindrome = function (s) {
    // .replace(/\s/g, "") means to replace all white space 
    // .replace(/\W/g, "") will replace all non word character
    const remove = s.toLowerCase().replace(/\W/g, "").replace(/\_/g, "")
    const stringForward = remove.split("")
    const stringRev = stringForward.reverse().join("")
    // console.log(remove === stringRev);
    return remove === stringRev

};

const longestPalindrome = function (s) {
    var maxLength = 1;
    var result = s[0] || "";
    for (i = s.length - 1; i >= 0; i--) {
        if (i + 1 < maxLength) {
            break;
        }
        for (j = 0; j < i; j++) {
            if (i - j + 1 > maxLength) {
                const str = s.substring(j, i + 1);
                if (isPalindrome(str)) {
                    maxLength = i - j + 1;
                    result = str;
                    break;
                }
            }
        }
    }
    return result;
    // console.log(result);
}

longestPalindrome("babad")

