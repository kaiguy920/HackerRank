// given an array of nums, remove the occurences of val in nums
// return the # of elements in the array after removing val
// ex: Input: nums = [3,2,2,3], val = 3
// Output: 2

const removeElement = (nums, val) => {
    // ======================= SOLUTION 1 ============================
    // const newArr = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] != val) {
    //         newArr.push(nums[i])
    //     }
    // }
    // console.log(newArr.length)
    // return newArr.length
    // ======================= SOLUTION 2 ============================
    // nums = nums.filter((num) => num !== val);
    // // return nums.length;
    // console.log(nums.length)
    // ======================= SOLUTION 3 ============================
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }


    console.log(j);
};
// removeElement([3, 2, 2, 3], 3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

