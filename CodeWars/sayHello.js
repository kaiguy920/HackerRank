// take in a name in an array & city, state to print a welcome message
// ex: sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// return Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello(name, city, state) {
    // return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    console.log(`Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`)
}
sayHello(['Wallace', 'Russel', 'Osbourne'], 'Phoenix', 'Arizona')