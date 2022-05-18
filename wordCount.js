const input = "We took the dog for a walk around the block. It started to rain, so we ran. The walk turned into a run. I do love the rain, but not on a walk."

const wordCount = (str) => {

    const remove = str.replace(/\./g, "").toLowerCase()
    console.log(remove)
    const arr = remove.split(' ')
    console.log(arr)

    const counter = []
    for (let i = 0; i < arr.length; i++) {

    }

    console.log(counter)
}

wordCount(input)