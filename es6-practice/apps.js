const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => arr.map( carrots => ({ type: "carrots", name: carrots}))
console.log(mapVegetables(carrots))


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => arr.filter(people => people.friendly);

console.log(filterForFriendly(people))


const sum = (a, b) => a + b;
const produceProduct = (a, b) => a + b

console.log(produceProduct("H", "i"))


let firstName = "Jane"
let lastName = "Doe"
let age1 = 100

const printString = (firstName = "Kat", lastName = "Stark", age1 = 40) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age1}`)

console.log(printString())


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog");
 console.log(filterForDogs(animals))


const welcome = (location, name) => (`Hi ${name}! 
\nWelcome to ${location}.
 
I hope you enjoy your stay. Please ask the president of ${location} if you need anything`)

console.log(welcome("Hawaii", "Janice"))

let name2 = "Jacob";
let age2 = 20;

console.log(`\nhello, my name is ${name2}. Next year, I will be ${age2 + 1} years old`);