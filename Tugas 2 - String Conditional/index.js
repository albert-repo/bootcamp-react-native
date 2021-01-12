console.log("===DATA TYPE===")

var sayHello = "Hello World!"
console.log(sayHello)

var name = "John"
var angka = 12
var todayIsFriday = false

console.log(name)
console.log(angka)
console.log(todayIsFriday)

console.log("===OPERATOR===")

var angka = 20
console.log(angka == 100)
console.log(angka == 20)

var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 

var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 

var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false

var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true

console.log("===OPERATOR KONDISIONAL===")

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 

console.log("===STRING PROPERTIES & METHOD===")

var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"

var word = "Javascript is awesome"
console.log(word.length) // 21 

console.log('i am a string'.charAt(3)); // 'm'

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1
console.log(text.indexOf('ces'));
console.log(text.indexOf('!'));
console.log(text.indexOf('c'))

var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport

var motor1 = 'zelda motor';
var motor2 = motor1.substr(2, 2);
console.log(motor2); // ld

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you

var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'

console.log("===Mengubah tipe data dari dan ke String===");

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN

var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7

console.log(strInt_1);
console.log(strInt_2);

console.log("===Javascript Conditional===");

if ( true ) {
    console.log("jalankan code")
};

if ( false ) {
    console.log("code tidak dijalankan")
};

var mood = "happy";
if ( mood == "happy" ) {
    console.log("hari ini aku bahagia!")
};

var minimarketStatus = "open"
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}

var minimarketStatus = "close"
var minuteRemainingToOpen = 5
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

var buttonPushed = 3;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}