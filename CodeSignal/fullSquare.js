// given an array of numbers; return the number of paire that correspond to a sum of a full square
function fullSquare(nums) {
    let square = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            // if (Math.sqrt(nums[i] + nums[j]))
            console.log(Math.sqrt(nums[i] + nums[j]));
        }
    }
}
console.log(fullSquare[-1, 18, 3, 1])
// should return 4
// -1 + 1 = 0
// -1 + 5 = 4
//  3 + 1 = 4
//  18 + 18 = 36