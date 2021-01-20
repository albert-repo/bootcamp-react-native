var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 

async function readBook() {
    let myTime = 10000
    let numberBooks = books.length
    for (let i = 0; i < numberBooks; i++) {
        myTime = await readBooksPromise(myTime, books[i])
            .then(function (sisaWaktu) {
                return sisaWaktu;
            })
            .catch(function (sisaWaktu) {
                return sisaWaktu;
            })
    }
    console.log("saya sudah selesai membaca semuanya")
}

readBook()