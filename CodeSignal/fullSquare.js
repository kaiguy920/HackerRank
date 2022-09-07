// given an array of numbers; return the number of paire that correspond to a sum of a full square
function fullSquare(nums) {
    let square = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = [i + 1]; j < nums.length; j++) {
            console.log(nums[i], nums[j], Math.sqrt(nums[i] + nums[j]));
            if (nums[i] + nums[j] >= 0 && Math.sqrt(nums[i] + nums[j]) % 1 === 0) {
                square++
            }
            // console.log(Math.sqrt(nums[i] + nums[j]) % 1 === 0)
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (Math.sqrt(nums[i] + nums[1]) % 1 === 0) {
            square++
        }
    }
    return square
}
console.log(fullSquare([-1, 18, 3, 1, 5]))
// should return 4
// -1 + 1 = 0
// -1 + 5 = 4
//  3 + 1 = 4
//  18 + 18 = 36