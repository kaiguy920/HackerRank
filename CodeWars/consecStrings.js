// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array
function longestConsec(strarr, k) {
    if (k <= 0 || strarr.length < k || strarr.length == 0)
        return ""

    // ========================SOLUTION 1===================================
    // let ascendLen = strarr.sort((a, b) => a.length - b.length).reverse()
    // console.log("Ascend", ascendLen);
    // let concat = []
    // for (let i = 0; i < ascendLen.length; i++) {
    //     concat.push(ascendLen[i])
    //     if (i === k - 1) { break }
    // }
    // return concat.join("")
    // ========================SOLUTION 2===================================
    let longStr = '';
    let newStr = '';
    for (let i = 0; i < strarr.length; i++) {
        newStr = strarr.slice(i, i + k);
        if (newStr.join('').length > longStr.length) {
            longStr = newStr.join('');
        }
    }
    return longStr
}


// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // ==> "abigailtheta"

console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));