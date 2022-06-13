// take in a string of vegetables & return the count in descending order

function countVegetables(string) {
    string = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage cabbage"
    const split = string.split(" ")

    const counter = []
    for (let i = 0; i < split.length; i++) {
        const veggie = split[i]

        if (!counter[veggie]) {
            counter[veggie] = 1;
        } else {
            // if this veggie IS already a property of veggieCounts, then increase its count value
            counter[veggie]++;
        }
    }
    const sortObject = counter => {
        const sorter = (a, b) => {
            return counter[a] - counter[b];
        };
        const keys = Object.keys(counter);
        keys.sort(sorter).reverse();
        const res = {};
        keys.forEach(key => {
            res[key] = counter[key];
        });
        return res;
    };
    console.log(sortObject(counter));

    // console.log(counter.sort())
}
countVegetables()

function countVegetabless(string) {
    string = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage cabbage"

    const veggies = {}, array = [];
    string.match(/\w+/g).forEach(v => veggies[v] = (veggies[v] || 0) + 1);
    for (let prop in veggies)
        if (prop != 'chopsticks')
            array.push([veggies[prop], prop]);
    // return array.sort((a,b) => b[0] - a[0] || b[1].localeCompare(a[1]));
    // console.log("ehllo", array.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1])))
}
countVegetabless()