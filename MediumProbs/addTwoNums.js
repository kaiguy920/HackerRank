// given two strings, reverse, add them together and return the sum as a linked list 
const addTwoNumbers = function (l1, l2) {
    const num1rev = l1.reverse().join("")
    const num2rev = l2.reverse().join("")
    const num1 = Number(num1rev)
    const num2 = Number(num2rev)
    const sum = num1 + num2
    const list = sum.toString().split("").reverse().map(Number)
    console.log(num1, "+", num2, "=", list);
};
addTwoNumbers([2, 4, 3], [5, 6, 4])

// ============================================================
//                          TAKE 2
// ============================================================

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const addTwoNums = (l1, l2) => {
    let result = new ListNode(0);
    let current = result;
    let carry = 0;
    // explanation: we set carry to 0, and then we will add the values of l1 and l2
    // and then we will add the carry to the result
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
            // we will add the values of l1 to the sum
            // then move on to the next node
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
            // we will add the values of l2 to the sum
            // then move on to the next node
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        // we set the current.next to the new ListNode with the value of sum % 10
        // and then we set the current to the current.next
        current = current.next;
    }
    // return result.next;
    console.log("result2", result.next);
}
addTwoNums([2, 4, 3], [5, 6, 4])