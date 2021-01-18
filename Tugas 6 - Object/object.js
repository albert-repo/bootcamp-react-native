var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 Object\n" + separator + "\n");

function arrayToObject(arr) {
    dataRow = arr.length
    dataObject = {}
    if (dataRow <= 0) {
        return "invalid data"
    } else {
        for (i = 0; i < dataRow; i++) {
            var now = new Date()
            var thisYear = now.getFullYear() // 2021 (tahun sekarang)
            var birthYear = arr[i][3];
            var age = 0;
            if (birthYear > thisYear) {
                age = "Invalid birth year"
            } else if (!birthYear) {
                age = "Invalid birth year"
            } else {
                age = thisYear - birthYear;
            }

            dataObject.firstName = arr[i][0];
            dataObject.lastName = arr[i][1];
            dataObject.gender = arr[i][2];
            dataObject.age = age;
            console.log(dataObject);
        }
    }
}

// Driver Code
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case 
arrayToObject([]) // ""

console.log("\n" + separator + "\nJawaban No.2 Object\n" + separator + "\n");

function shoppingTime(memberId, money) {
    var itemList = [
        ["Sepatu Stacattu", "Baju Zoro", "Baju H&N", "Sweater Uniklooh", "Casing Handphone"],
        [1500000, 500000, 250000, 175000, 50000]
    ]

    var totalItem = itemList[0].length

    // var productList = {
    //     "Sepatu Stacattu": 1500000,
    //     "Baju Zoro": 500000,
    //     "Baju H&N": 250000,
    //     "Sweater Uniklooh": 175000,
    //     "Casing Handphone": 50000
    // }

    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    } else {
        memberObject = {}
        memberObject.memberId = memberId
        memberObject.money = money
        changeMoney = money
        memberObject.listPurchased = []

        // pembelian item maksimal 1

        for (i = 0; i < totalItem; i++) {
            if (money > itemList[1][i] && changeMoney >= itemList[1][i]) {
                // console.log(itemList[0][i])
                memberObject.listPurchased.push(itemList[0][i]);
                changeMoney -= itemList[1][i];
                // money -= itemList[1][i];
            }
        }
        memberObject.changeMoney = changeMoney
        // console.log(memberObject)
        return (memberObject)
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log("\n" + separator + "\nJawaban No.3 Object\n" + separator + "\n");

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var totalItem = arrPenumpang.length

    // console.log(totalItem,arrPenumpang)

    var resultArray = []

    if (arrPenumpang <= 0) {
        return []
    } else {
        // return ('masuk sini')

        for (i = 0; i < totalItem; i++) {
            var resultObject = {}
            var naikIndex = rute.indexOf(arrPenumpang[i][1])
            var tujuanIndex = rute.indexOf(arrPenumpang[i][2])
            var totalBayar = (tujuanIndex - naikIndex) * 2000

            resultObject.penumpang = arrPenumpang[i][0]
            resultObject.naikDari = arrPenumpang[i][1]
            resultObject.tujuan = arrPenumpang[i][2]
            resultObject.bayar = totalBayar

            // console.log (naikIndex, tujuanIndex, totalBayar)
            // console.log(resultObject)
            resultArray.push(resultObject)
            // console.log('push done')

            // return (resultArray); 
        }

        return(resultArray)
    }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]


// var AA = { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 };
// var BB = { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 };
// var CC = []

// CC.push(AA);
// CC.push(BB);

// console.log(CC);

// function naikAngkotVersiGurunya(arrPenumpang) {
//     rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//     var arrOutput = []
//     if (arrPenumpang.length <= 0) {
//         return []
//     }

//     for (var i = 0; i < arrPenumpang.length; i++) {
//         var objOutput = {}
//         var asal = arrPenumpang[i][1]
//         var tujuan = arrPenumpang[i][2]
//         var indexAsal;
//         var indexTujuan;

//         for (var j = 0; j < rute.length; j++) {
//             if (rute[j] == asal) {
//                 indexAsal = j
//             } else if (rute[j] === tujuan) {
//                 indexTujuan = j
//             }
//         }

//         var bayar = (indexTujuan - indexAsal) * 2000
//         objOutput.penumpang = arrPenumpang[i][0]
//         objOutput.naikDari = asal
//         objOutput.tujuan = tujuan
//         console.log(indexTujuan, indexAsal)
//         objOutput.bayar = bayar

//         arrOutput.push(objOutput)
//     }
//     return arrOutput
// }

