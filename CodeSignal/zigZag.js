// input of (a,b, c), is either a < b > c OR a > b < c then it is a zigzag
// return an output array of 1 if triple is zigzag, or 0 otherwise

function solution(numbers) {
    let output = []

    for (let i = 0; i < numbers.length - 2; i++) {

        if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2] || numbers[i] > numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
            output.push(1)

        } else {
            output.push(0)
        }
    }
    return output
}

console.log(solution([1, 2, 1, 3, 4]));