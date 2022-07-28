// given a table of shifts, return the name of who will be working when a range of time is given
// Abby = 8 - 17
// Charles = 9 - 18
// Bob = 12 - 20
// Carl = 4 - 8
// Julie = 2 - 20

const whosWorking = (clockIn, clockOut) => {
    let shifts = {
        Abby: [8, 17],
        Charles: [9, 18],
        Bob: [12, 20],
        Carl: [4, 8],
        Julie: [2, 20]
    }

    Object.keys(shifts).map(function (value) {
        let inTime = [shifts[value][0]]
        let outTime = [shifts[value][1]]

        let workersNames = Object.keys(shifts)
        // console.log(inTime);
        for (let i = 0; i < inTime.length; i++) {
            for (let j = 0; j, outTime.length; j++) {
                if (inTime[i] >= clockIn) {
                    console.log(inTime.indexOf(inTime[i]))
                }
            }
        }

        // if (clockIn <= inTime || clockOut < outTime) {
        //     console.log(shifts.indexOf(inTime || shifts.indexOf(outTime)));
        // }

    });
    // function between(x, min, max) {
    //     console.log(x >= min && x <= max);
    // }
    // if (between(clockIn, clockOut)) {
    //     console.log("hello")
    // }
}

whosWorking(5, 12)