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

    Object.keys(shifts).map(function (key, index) {
        console.log(shifts[key])
    });
}

whosWorking(5, 12)