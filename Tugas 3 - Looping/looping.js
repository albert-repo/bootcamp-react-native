var separator = "===================="

console.log("\n" + separator + "\nJawaban No.1 Looping\n" + separator);
console.log("\nLOOPING PERTAMA\n");

var angka = 0;
var text = "I love coding";
while (angka < 20) {
    angka += 2;
    console.log(angka + ' - ' + text)
}

console.log("\nLOOPING KEDUA\n");

var angka = 20;
var text = "I will become a mobile developer";
while (angka > 0) {
    console.log(angka + ' - ' + text);
    angka -= 2;
}

var separator = "===================="
console.log("\n" + separator + "\nJawaban No.2 Looping\n" + separator);


for (var angka = 1; angka <= 20; angka++) {
    if (angka % 2 == 0) {
        console.log(angka + " Berkualitas");
    } else if (angka % 3 == 0) {
        console.log(angka + " I Love Coding");
    } else {
        console.log(angka + " Santai");
    }
}

var separator = "===================="
console.log("\n" + separator + "\nJawaban No.3 Looping\n" + separator);

// variable pagar di buat dinamis menggunakan looping
var pagar = "#";
var deret = 1;
for (var deret = 1; deret <= 8; deret++) {
    pagar = pagar + "#"
}

// setelah didapatkan pagar terbentuk horizontal dengan sesuai, lanjut looping vertikal dan cetak 
if (deret = 8) {
    for (var baris = 1; baris <= 4; baris++) {
        console.log(pagar);
    }
}

var separator = "===================="
console.log("\n" + separator + "\nJawaban No.4 Looping\n" + separator);

var tangga = "#";
var deret = 1;
for (var deret = 1; deret <= 7; deret++) {
    console.log(tangga);
    tangga = tangga + "#";
}

var separator = "===================="
console.log("\n" + separator + "\nJawaban No.5 Looping\n" + separator);

// cara paling simple
// var deret = 1;
// for (var deret = 1; deret <= 8; deret++) {
//     if (deret % 2 == 0) {
//         console.log("# # # # ");
//     }else {
//         console.log(" # # # #");
//     }
// }

var caturganjil = " ";
var caturgenap = "#";
var kelipatan = 1

for (i=1; i<8; i++) {
    if (i % 2 == 0) {
        caturganjil = caturganjil + " ";
        caturgenap = caturgenap + "#";
        // console.log (catur);
    } else {
        caturganjil = caturganjil + "#";
        caturgenap = caturgenap + " ";
        // console.log (catur, i);
    }
}
// tes apakah sudah terbentuk baris ganjil dan genap nya sesuai
// console.log (caturganjil);
// console.log (caturgenap);
// looping untuk vertikal dan cetak

for (var deret = 1; deret <= 8; deret++) {
    if (deret % 2 == 0) {
        console.log(caturgenap);
    }else {
        console.log(caturganjil);
    }
}