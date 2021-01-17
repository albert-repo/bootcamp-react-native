var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 Array\n" + separator + "\n");

function range(startNum, finishNum) {
    var array = []
    if (startNum > finishNum) {
        // Mengurutkan secara Descending
        for (var angka = startNum; angka >= finishNum; angka--) {
            array.push(angka);
        }
        // console.log(array)
    } else if (startNum < finishNum) {
        // Mengurutkan secara Ascending
        for (var angka = startNum; angka <= finishNum; angka++) {
            array.push(angka);
        }
        // console.log(array);
    } else if (!startNum || !finishNum) {
        // array.push(-1);
        // console.log(array);
        return -1
    }
    return array;
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log("\n" + separator + "\nJawaban No.2 Array\n" + separator + "\n");

function rangeWithStep(startNum, finishNum, step) {
    var array = []
    if (startNum > finishNum) {
        // Mengurutkan secara Descending
        for (var angka = startNum; angka >= finishNum; angka -= step) {
            array.push(angka);
        }
        console.log(array)
    } else if (startNum < finishNum) {
        // Mengurutkan secara Ascending
        for (var angka = startNum; angka <= finishNum; angka += step) {
            array.push(angka);
        }
        console.log(array);
    } else if (!startNum || !finishNum || step) {
        array.push(-1);
        console.log(array);
    }
    return array;
}


rangeWithStep(1, 10, 2) // [1, 3, 5, 7, 9]
rangeWithStep(11, 23, 3) // [11, 14, 17, 20, 23]
rangeWithStep(5, 2, 1) // [5, 4, 3, 2]
rangeWithStep(29, 2, 4) // [29, 25, 21, 17, 13, 9, 5] 

console.log("\n" + separator + "\nJawaban No.3 Array\n" + separator + "\n");

function sum(startNum, finishNum, step) {
    var array = []
    var total = 0

    if (!step) {
        kelipatan = 1;
    } else {
        kelipatan = step;
    }

    if (startNum > finishNum) {
        // Mengurutkan secara Descending
        for (var angka = startNum; angka >= finishNum; angka -= kelipatan) {
            array.push(angka);
            total = total + angka;
        }
        console.log(total);
    } else if (startNum < finishNum) {
        // Mengurutkan secara Ascending
        for (var angka = startNum; angka <= finishNum; angka += kelipatan) {
            array.push(angka);
            total = total + angka;
        }
        console.log(total);
    } else if (startNum) {
        total = startNum;
        console.log(total);
    } else {
        total = 0;
        console.log(total);
    }
    return total
}

sum(1, 10) // 55
sum(5, 50, 2) // 621
sum(15, 10) // 75
sum(20, 10, 2) // 90
sum(1) // 1
sum() // 0 

console.log("\n" + separator + "\nJawaban No.4 Array\n" + separator + "\n");

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(input) {
    var rowData = input.length;

    for (var i = 0; i < rowData; i++) {
        console.log('Nomor ID: ' + input[i][0] + "\nNama Lengkap: " + input[i][1] + "\nTTL: " + input[i][2] + "\nHobi: " + input[i][3] + "\n");
    }
}

// panggil data
dataHandling(input);

console.log("\n" + separator + "\nJawaban No.5 Array\n" + separator + "\n");

function balikKata(kataKata) {
    var panjang = kataKata.length - 1
    var hasil = ""
    for (var i = panjang; i >= 0; i--) {
        // console.log(i);
        // console.log(kataKata[i]);
        var hasil = hasil.concat(kataKata[i]);
    }
    console.log(hasil);
}

balikKata("Kasur Rusak") // kasuR rusaK
balikKata("SanberCode") // edoCrebnaS
balikKata("Haji Ijah") // hajI ijaH
balikKata("racecar") // racecar
balikKata("I am Sanbers") // srebnaS ma I 


console.log("\n" + separator + "\nJawaban No.6 Array\n" + separator + "\n");

function dataHandling2(input) {
    var text = input;
    var dob = input[3].split("/");
    var bulan = parseInt(dob[1]);
    switch (bulan) {
        case 1: { bulan = "Januari"; break; }
        case 2: { bulan = "Februari"; break; }
        case 3: { bulan = "Maret"; break; }
        case 4: { bulan = "April"; break; }
        case 5: { bulan = "Mei"; break; }
        case 6: { bulan = "Juni"; break; }
        case 7: { bulan = "Juli"; break; }
        case 8: { bulan = "Agustus"; break; }
        case 9: { bulan = "September"; break; }
        case 10: { bulan = "Oktober"; break; }
        case 11: { bulan = "November"; break; }
        case 12: { bulan = "Desember"; break; }
        default: { break; }
    }
    var slug = dob.join("-")

    text.pop();
    text.push("Pria");
    text.push("SMA Internasional Metro");
    text.splice(1, 1, "Roman Alamsyah Elsharawy");
    text.splice(2, 1, "Provinsi Bandar Lampung");
    console.log(text);
    console.log(bulan);
    dob.sort(function (value1, value2) { return value2 - value1 });
    console.log(dob);
    console.log(slug);

    var nameSlice = text[1].slice(0, 14)
    console.log(nameSlice);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);