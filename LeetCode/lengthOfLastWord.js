// given a string of words, return the length of the last word
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6

const lengthOfLastWord = (s) => {
    const wordSplit = s.split(" ")
    const lastWordIndex = wordSplit.length - 1
    // console.log(wordSplit)
    // console.log(lastWordIndex)
    const letterSplit = wordSplit[lastWordIndex].split("").length
    // console.log(letterSplit)
    return letterSplit

}

lengthOfLastWord("luffy is still joyboy")

// SOLUTION WITH MULTIPLE SPACES
const lengthOfLastWord2 = (s) => {
    const wordSplit = s.split(" ")
    const legitWords = []
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] !== '') {
            legitWords.push(wordSplit[i])
        }
    }
    console.log(legitWords)
    const lastWordIndex = legitWords.length - 1
    const letterSplit = legitWords[lastWordIndex].split("").length
    // console.log(letterSplit)
    return letterSplit
}

lengthOfLastWord2("   fly me   to   the moon  ")