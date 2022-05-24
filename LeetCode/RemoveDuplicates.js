// given an array of nums, replace any duplicates with an underscore
// keep the relative arrancgement the same
// example: Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = (nums) => {
    const newArr = []
    const numCount = {}
    for (const count of nums) {
        numCount[count] = (numCount[count] || 0) + 1
    }
    newArr.push(Object.keys(numCount).toString())
    let keyCount = []
    for (const key in numCount) {
        if (numCount.hasOwnProperty(key)) {
            keyCount.push((numCount[key]) - 1)
        }
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    // console.log("sum", keyCount.reduce(reducer));
    newArr.push("_".repeat(keyCount.reduce(reducer)))
    console.log(newArr)
    const arr = Array.from(String(newArr))
    const filtered = arr.filter(function (value, index, arr) {
        return value != ",";
    });
    console.log("filtered with _", filtered)
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])


// to remove string without duplicates
const removesDuplicates = (nums) => {
    const newArr = []
    const numCount = {}
    for (const count of nums) {
        numCount[count] = (numCount[count] || 0) + 1
    }
    newArr.push(Object.keys(numCount).toString())
    let keyCount = []
    for (const key in numCount) {
        if (numCount.hasOwnProperty(key)) {
            keyCount.push((numCount[key]) - 1)
        }
    }
    const arr3 = []
    console.log("this is newArr parseInt", parseInt(newArr))
    console.log("this is newArr", newArr)
    const arr = Array.from(String(newArr))
    const filtered = arr.filter(function (value, index, arr) {
        // return value != ",";
        if (value != ",") {
            arr3.push(parseInt(value))
        }
    });
    console.log(filtered.join(','))
    console.log("arr3", arr3)
    console.log(typeof arr[0])

}
removesDuplicates([1, 1, 2])

// to just return length of string without duplicates
var removeDuplicatess = function (nums) {
    if (nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    console.log("double loopy", i + 1)
};
removeDuplicatess([1, 1, 2])