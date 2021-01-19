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

const newFunction = function literal(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(firstName + " " + lastName)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName() 