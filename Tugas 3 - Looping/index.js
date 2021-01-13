var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);

var flag = 1;
while (flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
    console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
    flag++; // Mengubah nilai flag dengan menambahkan 1
}

var deret = 5;
var jumlah = 0;
while (deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
    jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
    deret--; // Mengubah nilai deret dengan mengurangi 1
    console.log('Nilai jumlah saat ini: ' + jumlah + ' Nilai deret saat ini: ' + deret)
}

console.log(jumlah);

for (var angka = 1; angka < 10; angka++) {
    console.log('Iterasi ke-' + angka);
}

var jumlah = 0;
for (var deret = 5; deret > 0; deret--) {
    jumlah += deret;
    console.log('Jumlah saat ini: ' + jumlah + ' Nilai deret saat ini: ' + deret);
}

console.log('Jumlah terakhir: ' + jumlah);

for (var deret = 0; deret < 10; deret += 2) {
    console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for (var deret = 15; deret > 0; deret -= 3) {
    console.log('Iterasi dengan Decrement counter : ' + deret);
} 