// Given an array of integers, find the one that appears an odd number of times.
function findOdd(A) {
    let counter = {}
    for (const x of A) {
        counter[x] = (counter[x] || 0) + 1
    }
    // console.log(counter);
    for (const count in counter) {
        if (counter[count] % 2 !== 0) {
            // console.log(`${count}: ${counter[count]}`)
            return parseInt(count)
        }

    }
}
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // ==> -1