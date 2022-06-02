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
            console.log("near", near)
            console.log(Math.abs(near - grades[i]));
            let distance = Math.abs(near - grades[i])
            if (distance < 3) {
                roundedGrades.push(near)
            } else {
                roundedGrades.push(grades[i])
            }
        }
    }
    console.group(roundedGrades)

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
            console.log("near", near)
            console.log(Math.abs(near - grades[i]));
            let distance = near - grades[i]
            if (distance < 3) {
                roundedGrades.push(near)
            } else {
                roundedGrades.push(grades[i])
            }
        }
    }
    console.group("2", roundedGrades)

}
gradingStudentss([73, 67, 38, 33])
