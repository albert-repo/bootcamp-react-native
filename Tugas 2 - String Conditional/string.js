
console.log("\n=========\nJAWABAN 1\n=========");
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
console.log(word.concat(' ',second,' ',third,' ',fourth,' ',fifth,' ',sixth,' ',seventh));

console.log("\n=========\nJAWABAN 2\n=========");
var sentence = "I am going to be React Native Developer";
var exampleFirstWord = sentence[0]; 
var exampleSecondWord = sentence[2] + sentence[3]; 
var thirdWord= sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] + sentence[10]; // lakukan sendiri 
var fourthWord= sentence[11] + sentence[12];// lakukan sendiri 
var fifthWord= sentence[14] + sentence[15]; // lakukan sendiri 
var sixthWord= sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri 
var seventhWord= sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28]; // lakukan sendiri 
var eighthWord= sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38]; // lakukan sendiri 


// var thirdWord= sentence.substr(5,5); // lakukan sendiri 
// var fourthWord= sentence.substr(11,2);// lakukan sendiri 
// var fifthWord= sentence.substr(14,2); // lakukan sendiri 
// var sixthWord= sentence.substr(17,5); // lakukan sendiri 
// var seventhWord= sentence.substr(23,6);; // lakukan sendiri 
// var eighthWord= sentence.substr(30,9);; // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

console.log("\n=========\nJAWABAN 3\n=========");

var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0,3); 
var secondWord2= sentence2.substring(4,14); // do your own! 
var thirdWord2 = sentence2.substring(15,17); // do your own! 
var fourthWord2 = sentence2.substring(18,20); // do your own! 
var fifthWord2 = sentence2.substring(21,25); // do your own! 

// contoh pake substr jg bisa
// var sentence2 = "wow JavaScript is so cool";
// var exampleFirstWord2= sentence2.substr(0,3); // lakukan sendiri 
// var secondWord2= sentence2.substr(4,10);// lakukan sendiri 
// var thirdWord2= sentence2.substr(15,2); // lakukan sendiri 
// var fourthWord2= sentence2.substr(18,2); // lakukan sendiri 
// var fifthWord2= sentence2.substr(21,4); // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

console.log("\n=========\nJAWABAN 4\n=========");

var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4, 14); // do your own! 
var thirdWord3 = sentence3.substring(15, 17); // do your own! 
var fourthWord3 = sentence3.substring(18, 20); // do your own! 
var fifthWord3 = sentence3.substring(21, 25);; // do your own! 

var firstWordLength = exampleFirstWord3.length  
var secondWordLength = secondWord3.length  
var thirdWordLength = thirdWord3.length  
var fourthWordLength = fourthWord3.length  
var fifthWordLength = fifthWord3.length  


// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength); 