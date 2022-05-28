// Given two binary strings a and b, return their sum as a binary string.
// ex: Input: a = "11", b = "1"
// Output: "100"

const addBinary = (a, b) => {
    console.log((BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2))
};
addBinary("11", "1")