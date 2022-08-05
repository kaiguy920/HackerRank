// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function accum(s) {
    // let newString = []
    // for (let i = 0; i < s.length; i++) {
    //     let repeat = s.indexOf(s[i])
    //     newString.push(s[i].toLowerCase().repeat(repeat + 1))
    // }
    // let words = newString.toString().split(",")
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    // }
    // // console.log(words.toString().replace(/,/g, '-'));
    // return words.toString().replace(/,/g, '-')
    const result = []
    const lowerStr = s.toLowerCase()

    for (let i = 0; i < lowerStr.length; i++) {
        let str = lowerStr[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            str += lowerStr[i]
        }
        result.push(str)
    }

    return result.join("-")

}
console.log(accum("ZpglnRxqenU"));


