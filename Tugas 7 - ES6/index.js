var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);
console.log("Let + Const\n")

//Normal Javascript:
// var x = 1;

// if (x === 1) {
// var x = 2;

// console.log(x);
// // expected output: 2
// }

// console.log(x); // 2 

//ES6 :
let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x); // 1 

// const number = 42;
// number = 100; // Uncaught TypeError: Assignment to constant variable.

console.log("Arrow Functions\n")

//Normal Javascript:
function appFunction() {
    console.log("ini dari JS")
}

appFunction();

//ES6 :
appFunction = () => {
    console.log("ini dari ES6")
}

appFunction();

console.log("Default Parameters\n")

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5 

console.log("Destructuring \n")

//Normal Javascript:
// let studentName = {
//     firstName: 'Peter',
//     lastName: 'Parker'
// };

// const firstName = studentName.firstName;
// const lastName = studentName.lastName; 
// console.log(firstName); // Peter
// console.log(lastName); // Parker 

//ES6:
let studentName = {
    firstName: 'Peter',
    lastName: 'Parker'
};

const { firstName, lastName } = studentName;

console.log(firstName); // Peter
console.log(lastName); // Parker

console.log("Rest Parameters \n")
// Rest Parameters

let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores;

console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
console.log(restOfScores) // [90, 87, 85] 

//spread operator
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']

// ES5 Way / Normal Javascript

// var combinedArray = array1.concat(array2).concat(array3)
// console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']

// ES6 Way 

let combinedArray = [...array1, ...array2, ...array3]
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six'] 


console.log("Enhanced object literals \n")

//Before ES6 Javascript:

// const fullName = 'John Doe'

// const john = {
//   fullName: fullName
// }

// console.log(fullName, john.fullName)

//After Es6

const fullName = 'John Doe'

const john = { fullName }

console.log(fullName, john.fullName)

console.log("Template literals \n")

const awalName = 'Zell'
const akhirName = 'Liew'
const teamName = 'unaffiliated'

const theString = `${awalName}, ${akhirName}, ${teamName}`

console.log(theString)