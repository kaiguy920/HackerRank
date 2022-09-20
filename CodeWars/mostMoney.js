// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. Return name of student who has the monst money. A student is defined like this:
class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
function mostMoney(students) {
    let array = [];
    if (students.length === 1) {
        return students[0].name;
    }
    students.forEach((value, index) => {
        let total = ((5 * value.fives) + (10 * value.tens) + (20 * value.twenties));
        array.push([total, value.name]);
    });
    array = array.sort((a, b) => b[0] - a[0]);
    console.log(array);
    if (array.every((el, i, array) => el[0] === array[0][0])) {
        return 'all';
    }
    else {
        return array[0][1];
    }
}

console.log(mostMoney([andy, stephen, eric, david, phil]))
