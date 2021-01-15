var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);

var hobbies = ["coding", "cycling", "climbing", "skateboarding", "sleeping"] 
console.log(hobbies) // [ 'coding', 'cycling', 'climbing', 'skateboarding' ]
console.log(hobbies.length) // 4 
console.log(hobbies[0]) // coding
console.log(hobbies[2]) // climbing
// Mengakses elemen terakhir dari array
console.log(hobbies[hobbies.length -1]) // sleeping

var feeling = ["dag", "dig"]
console.log(feeling);
feeling.push("dug") // menambahkan nilai "dug" ke index paling belakang
console.log(feeling);
feeling.pop() // menghapus nilai pada elemen terakhir array
console.log(feeling);

var numbers = [0, 1, 2]
console.log(numbers)
numbers.push(3)
console.log(numbers) // [0, 1, 2, 3]
// Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
numbers.push(4, 5)
console.log(numbers) // [0, 1, 2, 3, 4, 5] 

var numbers = [0, 1, 2, 3, 4, 5]
console.log(numbers)
numbers.pop() 
console.log(numbers) // [0, 1, 2, 3, 4] 

var numbers = [0, 1, 2, 3]
console.log(numbers)
numbers.unshift(-1) 
console.log(numbers) // [-1, 0, 1, 2, 3]
numbers.unshift(-3, -2) 
console.log(numbers) 

var numbers = [ 0, 1, 2, 3]
console.log(numbers)
numbers.shift()
console.log(numbers) // [1, 2, 3] 

var animals = ["kera", "gajah", "musang"] 
animals.sort()
console.log(animals) // ["gajah", "kera", "musang"]

var numbers = [12, 1, 3]
numbers.sort()
console.log(numbers) // [1, 12, 3] 

var numbers = [12, 1, 3]
// Mengurutkan secara Ascending
numbers.sort(function (value1, value2) { return value1 - value2 } ) ; 
console.log(numbers) // [1, 3, 12]
 
// Mengurutkan secara Descending
numbers.sort(function (value1, value2) { return value2 - value1 } ) ;
console.log(numbers) // [12, 3, 1] 

var angka = [0, 1, 2, 3]
var irisan1 = angka.slice(1,3) 
console.log(irisan1) //[1, 2, 3]
var irisan2 = angka.slice(0,2)
console.log(irisan2) //[0, 1, 2] 

var angka = [0, 1, 2, 3]
var irisan3 = angka.slice(2)
console.log(irisan3) // [2, 3] 

var angka = [0, 1, 2, 3]
var salinAngka = angka.slice()
console.log(salinAngka) // [0, 1, 2, 3]

var fruits = [ "banana", "orange", "grape"]
fruits.splice(1, 0, "watermelon") 
console.log(fruits) // [ "banana", "watermelon", "orange", "grape"]

var fruits = [ "banana", "orange", "grape"]
fruits.splice(0, 2)
console.log(fruits) // ["grape"]

var biodata = "name:john,doe" 
var name = biodata.split(":")
console.log(name) // [ "name", "john,doe"] 

var title = ["my", "first", "experience", "as", "programmer"] 
var slug = title.join("-")
console.log(slug) // "my-first-experience-as-programmer"

var arrayMulti = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

/*
    [
        [(0,0), (0,1), (0,2)],
        [(1,0), (1,1), (1,2)],
        [(2,0), (2,1), (2,2)]
    ] 
*/

console.log(arrayMulti[0][0]) // 1 
console.log(arrayMulti[1][0]) // 4
console.log(arrayMulti[2][1]) // 8