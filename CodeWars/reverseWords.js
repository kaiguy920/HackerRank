// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
function spinWords(string) {
    // let words = string.split(" ")
    // let string2 = []
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length >= 5) {
    //         const rev = words[i].split('').reverse()
    //         string2.push(rev.join(''))
    //     }
    //     else {
    //         string2.push(words[i])
    //     }
    // }
    // const solution = string2.toString().replace(/,/g, ' ')
    // return solution

    // ====================cleaner solution============================
    return string.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}
console.log(spinWords("Hey fellow warriors")) // ==> "Hey wollef sroirraw"