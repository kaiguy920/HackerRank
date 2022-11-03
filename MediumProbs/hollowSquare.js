const hollowSquare = function (n) {
    let string = "";

    for (let i = 0; i < n; i++) { // external loop
        for (let j = 0; j < n; j++) { // internal loop
            if (i === 0 || i === n - 1) {
                string += "*";
            }
            else {
                if (j === 0 || j === n - 1) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
        }
        // newline after each row
        string += "\n";
    }
    return string
}
console.log(hollowSquare(5))