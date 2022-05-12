function plusMinus(arr) {
    let positives = 0, negatives = 0, zeros = 0;
    const len = arr.length || 0;

    if (len > 0 && len <= 100) {
        arr.map((elem, key) => {
            if (elem > 0) {
                positives++;
            } else if (elem < 0) {
                negatives++;
            } else {
                zeros++;
            }

            return elem;
        });
    }
    console.log((positives / len).toFixed(6) || 0);
    console.log((negatives / len).toFixed(6) || 0);
    console.log((zeros / len).toFixed(6) || 0);
}
plusMinus([-4, 3, -9, 0, 4, 1])

function miniMaxSum(arr) {
    // Write your code here
    // assess the #'s in the array & arrange in ascending order
    // .sort()
    const ascendArr = arr.sort(function (a, b) { return a - b })
    // console.log(ascendArr)
    // add the first 4 & last 4 integers
    const minSum = ascendArr[0] + ascendArr[1] + ascendArr[2] + ascendArr[3]
    const maxSum = ascendArr[1] + ascendArr[2] + ascendArr[3] + ascendArr[4]
    // console.log(minSum, maxSum)
}

miniMaxSum([1, 2, 5, 4, 3])


function timeConversion(s) {
    // Write your code here
    // evaluate s based on it being AM or PM
    // .slice() to get AM/PM & time separated
    const ampm = s.slice(-2)
    const time = s.slice(0, -2).split(':')
    console.log(ampm)
    console.log(time)
    if (ampm === "AM" && time[0] === "12") {
        time[0] = "00";
    } else if (ampm === "PM") {
        time[0] = (time[0] % 12) + 12
    }
    return time.join(":");
}
// timeConversion(07: 45: 05PM)