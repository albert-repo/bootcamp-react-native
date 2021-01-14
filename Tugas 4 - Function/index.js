var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);

function tampilkan() {
    console.log("halo!");
}

tampilkan();
console.log('-------------------------------');

function munculkanAngkaDua() {
    return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung);
console.log('-------------------------------');

function kalikanDua(angka) {
    return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung);
console.log('-------------------------------');

function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5, 3));
console.log('-------------------------------');

function tampilkanAngka(angka = 1) {
    return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1
console.log('-------------------------------');

var fungsiPerkalian = function (angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2, 4))