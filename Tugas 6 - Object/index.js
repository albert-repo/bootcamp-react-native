var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);

var personArr = ["John", "Doe", "male", 27]
var personObj = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    age: 27
}

console.log(personArr[0]) // John
console.log(personObj.firstName) // John 

var car = {
    brand: "Ferrari",
    type: "Sports Car",
    price: 50000000,
    "horse power": 986
}

//

var car2 = {}
// meng-assign key:value dari object car2
car2.brand = "Lamborghini"

car2.brand = "Sports Car"
car2.price = 100000000
car2["horse power"] = 730

console.log(car2)

///

var motorcycle1 = {
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"
console.log(motorcycle1["price"])

var array = [1, 2, 3]
console.log(typeof array) // object