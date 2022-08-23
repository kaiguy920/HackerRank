// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna) {
    let dnaUpper = dna.toUpperCase()
    console.log(dnaUpper);
    let match = ""
    for (let i = 0; i < dnaUpper.length; i++) {
        if (dnaUpper[i] === "A") {
            match += "T"
        }
        else if (dnaUpper[i] === "T") {
            match += "A"
        }
        else if (dnaUpper[i] === "G") {
            match += "C"
        }
        else if (dnaUpper[i] === "C") {
            match += "G"
        }
    }
    return match
}
console.log(DNAStrand("ATTgC")) // ==> "TAACG"