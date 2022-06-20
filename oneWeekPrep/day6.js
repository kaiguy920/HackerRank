// ===========================================================
//                      NUMBER 1
// ===========================================================
// given an array of grades return the rounded grade given these rules:
// if grade minus rounded up to next 5 integer is less than 3, round to next 5 integer
// score less than 40 is failig, do not round 
// this solves rounding to nearest 5 integer
function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = []
    for (let i = 0; i < grades.length; i++) {
        let near = Math.round(grades[i] / 5) * 5
        if (grades[i] <= 40) {
            roundedGrades.push(grades[i])
        } else {
            // console.log("near", near)
            // console.log(Math.abs(near - grades[i]));
            let distance = Math.abs(near - grades[i])
            if (distance < 3) {
                roundedGrades.push(near)
            } else {
                roundedGrades.push(grades[i])
            }
        }
    }
    // console.group(roundedGrades)

}
gradingStudents([73, 67, 38, 33])
// should return [75, 67, 40, 33]

// to round grade to next higher # increment of 5

function gradingStudentss(grades) {
    // Write your code here
    const roundedGrades = []
    for (let i = 0; i < grades.length; i++) {
        let near = Math.ceil(grades[i] / 5) * 5
        if (grades[i] <= 40) {
            roundedGrades.push(grades[i])
        } else {
            // console.log("near", near)
            console.log(Math.abs(near - grades[i]));
            let distance = near - grades[i]
            if (distance < 3) {
                roundedGrades.push(near)
            } else {
                roundedGrades.push(grades[i])
            }
        }
    }
    // console.group("2", roundedGrades)

}
gradingStudentss([73, 67, 38, 33])

// ===========================================================
//                      NUMBER 2
// ===========================================================
// the steps represents the total # of steps taken
// path is an array of D (downhill) & U (uphill)
// return a count of how many valleys are incountered
// ex: (8, [UDDDUDUU])
// output = 1

function countingValleys(steps, path) {
    const pathSplit = path.toString().split('')
    // console.log(pathSplit[0])
    let valley
    pathSplit[0] === "D" ? valley = 1 : valley = 0
    let count = 0
    // let valley = 0
    for (let i = 0; i < pathSplit.length; i++) {
        if (pathSplit[i] === "U" && count === 0) {
            count += 1, valley += 1
        }
        else if (pathSplit[i] === "U") {
            count += 1
        }

        else if (pathSplit[i] === "D") {
            count -= 1
        }
        // console.log("count", count)
        // console.log("valley", valley)
    }
    return valley
}

// countingValleys(8, ["UDDDUDUU"])
// should return 1
countingValleys(12, ["DDUUDDUDUUUD"])
// should return 2


// ===========================================================
//                      NUMBER 3
// ===========================================================
// 

// given a chocolate bar that has digits on it, determine the number of ways you can split it, based on the day/month of a birthday

// s = array of chocolate bar squares with digits on it
// d = birthday day of month
// m = birth month (as #)
// ex: s = [2, 2, 1, 3, 2], d= 4, m= 2
// find how many ways to sum 4, using 2 bars from s
// return = 2 => [2,2], [1,3]


function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
        if (s.slice(i, i + m).reduce((a, b) => a + b, 0) == d) count++
    }
    // return count
    console.log("count", count)

}

birthday([1, 2, 1, 3, 2], 3, 2)