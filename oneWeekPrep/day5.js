// ===========================================================
//                      NUMBER 1
// ===========================================================
// given an array of scores, determine the number of times Maria breaks her records for most and least points scored during the season.
// return an array that shows at index 0 how may times she broke her least points record, and how many times at index 1 she broke her most points record

// *this function succesfully records how many times the min & max was achieved
function breakingRecords(scores) {
    const record = [0, 0]
    let least = Math.min(...scores)
    let most = Math.max(...scores)
    console.log(least, most)
    for (let i = 0; i < scores.length; i++)
        if (scores[i] === least) {
            record[0]++
        } else if (scores[i] === most) {
            record[1]++
        }
    console.log(record)
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])

// need to map over & record in order if max or min record occurred
function breakingRecords2(scores) {
    let games = scores
    let min = games[0]
    let max = games[0]

    let minRecord = 0
    let maxRecord = 0

    for (let i = 0; i <= scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxRecord++
        }
        if (scores[i] < min) {
            min = scores[i];
            minRecord++
        }
    }
    console.log(maxRecord, minRecord)
    // return [maxRecord, minRecord]
}
breakingRecords2([10, 5, 20, 20, 4, 5, 2, 25, 1])


// ===========================================================
//                      NUMBER 2
// ===========================================================
// given an array of numbers (ar), return how many times where the sum of 2 numbers in the array are divisible by k
// n = length of the array
function divisibleSumPairs(n, k, ar) {
    let divisible = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = ar[i] + ar[j]
            if (sum % k === 0) {
                divisible++
            }
        }

    }
    console.log("div", divisible)
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
// should return 5