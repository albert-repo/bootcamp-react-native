var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 Object\n" + separator + "\n");

function arrayToObject(arr) {
    dataRow = arr.length
    dataObject = {}
    if (dataRow <= 0) {
        return "invalid data"
    } else {
        for (i=0; i<dataRow; i++) {
            var now = new Date()
            var thisYear = now.getFullYear() // 2021 (tahun sekarang)
            var birthYear = arr[i][3];
            var age = 0;
            if ( birthYear > thisYear ) {
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
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
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
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
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