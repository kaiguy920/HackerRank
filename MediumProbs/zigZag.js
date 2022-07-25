// given a string (s) and a number of rows, return an output of s written in a zigzag pattern in the given # of rows

const convert = function (s, numRows) {
    let result = []
    let step = 1, index = 0;
    for (let i = 0; i < s.length; i++) {
        if (result[index] === undefined) {//'undefined' will be put into string without this
            result[index] = '';
        }
        result[index] += s[i];
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    // return result.join('');
    console.log(result.join(''));
};

convert("PAYPALISHIRING", 4)