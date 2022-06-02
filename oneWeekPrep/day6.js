// ===========================================================
//                      NUMBER 1
// ===========================================================
// given an array of grades return the rounded grade given these rules:
// if grade minus rounded up to next 5 integer is less than 3, round to next 5 integer
// score less than 40 is failig, do not round 
function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] <= 40) {
            roundedGrades.push(grades[i])
        } else {
            if (Math.round((grades[i] / 5) * 5) - grades[i] > 3) {
                roundedGrades.push(Math.round((grades[i] / 5) * 5))
            } else {
                roundedGrades.push(grades[i])
            }
        }
    }
    console.group(roundedGrades)
    // function roundNearest5(num) {
    //     return Math.round(num / 5) * 5;
    //   }
}
gradingStudents([29, 84, 57])