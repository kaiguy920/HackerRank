// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array
function longestConsec(strarr, k) {
    let ascendLen = strarr.sort((a, b) => a.length - b.length)
    let concat = []
    for (let i = 0; i < ascendLen.length; i++) {
        concat.push(ascendLen[i])
        if (i < k) { break }
    }
    console.log(concat);

}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // ==> "abigailtheta"