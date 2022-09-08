// given the dimensions of a rectangle, return a collection with the size of each squares
// ex: sqInRect(5, 3) ==> [3, 2, 1, 1]
// you can fit in on 3x3 square, 1 2x2, and 2 1x1 
function sqInRect(lng, wdth) {
    const squares = [];
    if (lng === wdth) {
        return null
    }
    while (wdth > 0) {
        if (wdth < lng) {
            squares.push(wdth);
            lng -= wdth;
        } else {
            squares.push(lng);
            wdth -= lng;
        }
    }
    return squares;
}

console.log(sqInRect(5, 3))