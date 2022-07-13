// given two strings, reverse, add them together and return the sum as a linked list 
const addTwoNumbers = function (l1, l2) {
    const num1rev = l1.reverse().join("")
    const num2rev = l2.reverse().join("")
    const num1 = Number(num1rev)
    const num2 = Number(num2rev)
    const sum = num1 + num2
    const list = sum.toString().split("").reverse().map(Number)
    console.log(list);
};
addTwoNumbers([2, 4, 3], [5, 6, 4])