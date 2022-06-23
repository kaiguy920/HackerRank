
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
    console.log("back", backTurn);
    console.log("front", frontTurn);
    if (frontTurn <= backTurn) {
        return frontTurn
    } else {
        return backTurn
    }

}
pageCount(15, 5)