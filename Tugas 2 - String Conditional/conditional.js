console.log("\n========\nJAWABAN 1 IF ELSE \n========");

var nama = "Junaedi"
var peran = "Werewolf"

if (nama == "" && peran == "") {
    console.log("Nama harus diisi!")
} else if (nama == "John" && peran == "") {
    console.log("Halo John, Pilih peranmu untuk memulai game!")
} else if (nama == "Jane" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane!")
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
} else if (nama == "Jenita" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita")
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
} else if (nama == "Junaedi" && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, Junaedi")
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
} else if (nama == "John" && peran == "Penyapu") {
    console.log("Selamat datang di Dunia Werewolf, John")
    console.log("Halo Penyapu John, buruan disapu kotor tuh halaman ujar si emak!")
} else if (nama != "" && peran == "") {
    console.log("Isi perannya dong!")
} else {
    console.log("Siapakah aku? Mengapa aku disini?")
}

console.log("\n========\nJAWABAN 2 SWITCH CASE\n========");

var hari = 17;
var bulan = 8;
var tahun = 1945;

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
    // default: { console.log('Bulan tidak sesuai!'); }
}

if (bulan > 0 && bulan < 13) {
    var kombinasi = hari + " " + bulan + " " + tahun;
    console.log (kombinasi);
} else {
    console.log ( "Bulan tidak sesuai!")
}
