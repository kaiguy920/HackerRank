const input = "We took the dog for a walk around the block. It started to rain, so we ran. The walk turned into a run. I do love the rain, but not on a walk."

const wordCount = (str) => {

    const remove = str.replace(/\./g, "").toLowerCase()
    // console.log(remove)
    const removeComma = remove.replace(/\,/g, "")
    const arr = removeComma.split(' ')
    // console.log("this is arr", arr)

    const counter = {}
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i]

        if (!counter[word]) {
            counter[word] = 1;
        } else {
            // if this word IS already a property of wordCounts, then increase its count value
            counter[word]++;
        }
    }

    for (const count in counter) {
        // console.log("counter[count]", counter[count])
        if (counter[count] > 1) {
            console.log(`${count}: ${counter[count]}`)
        }
    }
    // console.log(counter)
}

wordCount(input)