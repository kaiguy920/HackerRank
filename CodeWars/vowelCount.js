function getCount(str) {
    const letters = str.toLowerCase().replace(/\s/g, '').split("")
    // console.log(letters);
    let count = 0
    let vowels = ["a", "e", 'i', 'o', 'u']
    for (let i = 0; i < letters.length; i++) {
        vowels.map((el) => {
            if (letters[i].includes(el)) {
                count++
            }
        })
    }
    return count
    // console.log(count);
}

getCount("Vowels Count Tests")

// =============================NUMBER 2=====================================
// remove all vowels from string
function disemvowel(str) {
    const letters = str.split("")
    let noVowel = ""
    console.log(letters);
    let vowels = ["a", "e", 'i', 'o', 'u', "A", "E", "I", "O", "U"]
    for (let i = 0; i < letters.length; i++) {
        vowels.map((el) => {
            if (!letters[i].includes(el)) {
                noVowel.push(letters[i])
            }
        })
    }
    console.log(noVowel.join(""))
    // return str;
}
disemvowel("This website is for losers LOL!")