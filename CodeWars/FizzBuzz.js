// 1. You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
//  2. You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

var fibsFizzBuzz = function (n) {
    let result = [], [a, b] = [0, 1]
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b]
        result.push(a % 15 == 0 ? "FizzBuzz" :
            a % 3 == 0 ? "Fizz" :
                a % 5 == 0 ? "Buzz" :
                    a)
    }
    return result
}

console.log(fibsFizzBuzz(5))


