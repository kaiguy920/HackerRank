// It should remove all values from list a, which are present in list b keeping their order.
// ex: arrayDiff([1,2],[1]) == [2]
function arrayDiff(a, b) {
    a = a.filter((el) => !b.includes(el))
    return a
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // ==>[1, 3]