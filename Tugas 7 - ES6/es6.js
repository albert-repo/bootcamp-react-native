var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 ES6\n" + separator + "\n");

// const golden = function goldenFunction() {
//     console.log("this is golden!!")
// }

golden = () => {
    console.log("this is golden!!")
}

golden()

console.log("\n" + separator + "\nJawaban No.2 ES6\n" + separator + "\n");

// const newFunction = function literal(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: function () {
//             console.log(firstName + " " + lastName)
//             return
//         }
//     }
// }


const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

console.log("\n" + separator + "\nJawaban No.3 ES6\n" + separator + "\n");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

// ES5
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

// ES6
const { firstName, lastName, destination, occupation } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation)

console.log("\n" + separator + "\nJawaban No.4 ES6\n" + separator + "\n");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

//ES5
// const combined = west.concat(east)

//ES6
let combined = [...west, ...east]

//Driver Code
console.log(combined)

console.log("\n" + separator + "\nJawaban No.5 ES6\n" + separator + "\n");

const planet = "earth"
const view = "glass"
// var before = 'Lorem ' + view + 'dolor sit amet, ' +  
//     'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
//     'incididunt ut labore et dolore magna aliqua. Ut enim' +
//     ' ad minim veniam'

const before = `Lorem ${view} dolor sit amet,
onsectetur adipiscing elit, ${planet} do eiusmod tempor
ncididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam`

// Driver Code
console.log(before) 