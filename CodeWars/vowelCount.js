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
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    // console.log(newStr);
    return newStr
}

disemvowel("This website is for losers LOL!")