function solution(a) {
    let anagramCount = 0
    let b = []

    for (let i = 0; i < a.length; i++) {
        let string = a[i].toString().split('').sort().join("")
        b.push(string)

    }
    console.log(b)
    for (let i = 0; i < b.length; i++) {
        for (let j = i + 1; j < b.length; j++) {
            if (b[i] === b[j]) {
                anagramCount++
            }
        }
    }
    // return anagramCount
    console.log("count", anagramCount)
}

solution([276, 762, 35, 25, 52, 907, 876, 52])