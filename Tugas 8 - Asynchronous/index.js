// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

let myTime = 10000
let numberBooks = books.length
let i = 0;
function startRead(){
    readBooks(myTime, books[i], function(timeLeft){
        // console.log(myTime, timeLeft)
        myTime = timeLeft
        i++
        if (i < numberBooks)
        startRead()
    })
}

startRead();