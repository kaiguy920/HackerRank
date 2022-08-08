function StringChallenge(num) {
    let numCount = []
    let outputNums = []
    for (let i = 1; i <= num; i++) {
        numCount.push(i)
    }
    for (let j = 0; j < numCount.length; j++) {
        if (numCount[j] % 3 === 0 && numCount[j] % 5 !== 0) {
            outputNums.push("Fizz")
        } else if (numCount[j] % 5 === 0 && numCount[j] % 3 !== 0) {
            outputNums.push("Buzz")
        } else if (numCount[j] % 3 === 0 && numCount[j] % 5 === 0) {
            outputNums.push("FizzBuzz")
        } else {
            outputNums.push(numCount[j])
        }
    }
    console.log(outputNums)

    let result = outputNums.toString().replace(/,/g, " ")
    console.log(result);

}

StringChallenge(8)