// ===========================================================
//                      NUMBER 1
// ===========================================================

function towerBreakers(n, m) {
    // if the towers are all height 1, 2 will win because 1 does not have a move
    // OR if there is an even number of towers, 2 will always win
    if (m === 1 || n % 2 === 0) {
        return 2
    }
    else {
        return 1
    }

}

// ===========================================================
//                      NUMBER 2
// ===========================================================

// given an unencrypted string (s), rotate the letters (k) spaces to encript the string
function caesarCipher(s, k) {
    // Write your code here
    // first, define the alphabet 
    const alphabet = ["a", "b,", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // .split() s to compare each letter
    const stringLetters = s.split("")
    console.log(stringLetters)
    // map over alphabet to compare to stringLetters
    alphabet.find(stringLetters => {
        console.log(stringLetters.indexOf(alphabet))
    })
    // get the index of each letter in s 
    // increment by k 
    // push into a new array?
    // .join() to get letters back together

}


function caesarCipher(s, k) {
    //     if (k === 0) { return s }
    //     const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //     return s.replace(/[a-zA-Z]/g, (char) => {
    //         let newChar = alpha[(alpha.indexOf(char.toLowerCase()) + k) % 26]
    //         if (char == char.toUpperCase()) {
    //             newChar = newChar.toUpperCase();
    //         }
    //         return newChar
    //     })


    // }


    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = lowerCase.toUpperCase()

    const newArr = s.split("").map((el) => {
        if (lowerCase.includes(el)) {
            let currentIdx = lowerCase.indexOf(el)
            return lowerCase[(currentIdx + k) % 26]
        } else if (upperCase.includes(el)) {
            let currentIdx = upperCase.indexOf(el)
            return upperCase[(currentIdx + k) % 26]
        } else {
            return el
        }
    })

    return newArr.join('')

}
console.log(caesarCipher("middle-Outz", 2))