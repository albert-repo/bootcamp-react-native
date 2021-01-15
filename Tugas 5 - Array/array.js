var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 Array\n" + separator);

function range(startNum, finishNum) {
    var array = []
    if (startNum > finishNum) {
        // Mengurutkan secara Descending
        for (var angka = startNum; angka >= finishNum; angka--) {
            array.push(angka);
        }
        console.log(array)
    } else if (startNum < finishNum){
        // Mengurutkan secara Ascending
        for (var angka = startNum; angka <= finishNum; angka++) {
            array.push(angka) ;
        }
        console.log(array);
    } else if (startNum == null || finishNum == null) {
        array.push(-1);
        console.log(array);
    }
}

range(54, 50);

console.log("\n" + separator + "\nJawaban No.2 Array\n" + separator);