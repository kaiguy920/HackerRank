
// ===========================================================
//                      NUMBER 1
// ===========================================================
// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page
// n=# of pages; p=page # to turn to 
// ex: (5, 3) output would be 1, as with one turn of the page you'd see page three
const pageCount = (num, p) => {
    const frontTurn = Math.round((p - 1) / 2)
    const backTurn = Math.round(((num - 1) - p) / 2)
    // console.log("back", backTurn);
    // console.log("front", frontTurn);
    if (frontTurn <= backTurn) {
        return frontTurn
    } else {
        return backTurn
    }

}
pageCount(15, 5)

// ===========================================================
//                      NUMBER 2
// ===========================================================
// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.
// ex: n = 132
// Louise goes first; 132 is not a power of 2; the next lower power of 2 is 128, so she subtracts that from 132 & passes 4 to Richard. 4 is a power of 2, so Richard divides it by 2 & passes 2 to Louise. 2 is a power, so Louise divides by 2 & reaches 1, winning the game
function counterGame(n) {
    // Write your code here
    if (n == 1) return 'Richard';
    if (n == 2) return 'Louise';
    let count = 0;
    let move = 0;
    while (n > 1) {
        let power = parseInt(Math.log2(n));
        let max = 2 ** power;
        if (n === max) {
            n = parseInt(n / 2);
        } else {
            n = n - max;
        }
        move++;
    }
    if (move % 2 === 0) {
        console.log("Richard")
        // return 'Richard';
    } else {
        console.log("Louise")
        // return 'Louise';
    }

}
counterGame(6)