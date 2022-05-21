
// in array of nums, insert target where it fits
// ex: [1, 3, 5, 6], target = 5
// output: 2
const searchInsert = (nums, target) => {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            arr.push(nums[i])
            console.log("hello", arr)
        }
    }
    console.log(arr.length)
}
searchInsert([1, 3, 5, 6], 2)