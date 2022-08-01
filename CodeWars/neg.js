function makeNegative(num) {
    if (num >= 0) {
        console.log(-Math.abs(num));
        //   return -Math.abs(num).toFixed(2)
    } else if (num === 0) {
        //   return 0
        console.log(0)
    } else {
        //   return num;
        console.log(num)
    }
}

makeNegative(.12)