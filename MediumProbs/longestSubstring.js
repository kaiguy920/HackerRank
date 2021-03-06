// given a string, s, find the length of the longest substring without repeating characters

const lengthOfLongestSubstring = function (s) {
    // brute force method (double loop)
    // inefficient
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        let set = new Set([char])

        for (let j = i + 1; j < s.length; j++) {
            let char = s.charAt(j)
            if (set.has(char)) {
                break
            } else {
                set.add(char)
            }
            count = Math.max(count, set.size)
        }
    }

    return count
};

let result = lengthOfLongestSubstring("abcabcbb")
console.log("result", result)


const lengthOfLongestSubstrings = function (s) {
    // sliding window method
    let count = 0

    let i = 0
    let j = 0
    let n = s.length
    let set = new Set()

    while (i < n && j < n) {
        let char = s.charAt(j)
        if (!set.has(char)) {
            set.add(char)
            // move right part of sliding window
            j++
            // Math.max returns the greater of the values
            count = Math.max(count, j - i)
        } else {
            set.delete(s.charAt(i))
            // move left part of sliding window
            i++
        }
    }

    return count
};

let results = lengthOfLongestSubstrings("abcabcbb")
console.log("result2", results);