var separator = "===================="
console.log(separator + "\nFile Latihan\n" + separator);

// class Car {
//     constructor(brand, factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk!vroomvroom"
//     }
// }

// Ekspresi Class


// console.log(Car.brand) // Car

// // Tidak diberi nama 
// var Car = class {
//     constructor(brand, factory) {
//         this.brand = brand
//         this.factory = factory
//     }
// }

// console.log(Car.name) // Car


// // Diberi nama
// var Car = class Carlo {
//     constructor(brand, factory) {
//         this.brand = brand
//         this.factory = factory
//     }
// }
// console.log(Car.name) // Car2

// class Car{} // BENAR
// class car{} // SALAH
// class SportsCar {} // BENAR
// class sportscar {} // SALAH 

// Method

// class Car {
//     constructor(brand) {
//         console.log('masuk atas')
//         this.carname = brand;
//     }
//     present() {
//         console.log('masuk bawah')
//         return "I have a " + this.carname;
//     }
// }

// mycar = new Car("Ford");
// console.log(mycar.present()) // I have a Ford

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + ", I have a " + this.carname;
//     }
// }

// mycar = new Car("Ford");
// console.log(mycar.present("Hello"));

// Static Method

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     static hello() {
//         return "Hello!!";
//     }
// }

// mycar = new Car("Ford");

// // memanggil 'hello()' pada class Car:
// console.log(Car.hello());

// // dan tidak bisa pada 'mycar':
// //   console.log(mycar.hello());
// // jika menggunakan sintaks tersebut akan memunculkan error.

// // Inheritance

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// mycar = new Model("Ford", "Mustang");
// console.log(mycar.show());

// Getters dan Setters

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     get cnam() {
//       return this.carname;
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
//   }

//   mycar = new Car("Ford");
//   console.log(mycar.cnam); // Ford
//   // getter cnam digunakan tanpa "()"

class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

mycar = new Car("Ford");
mycar.carname = "Volvo"; // memanggil setter, mengubah Ford menjadi Volvo
console.log(mycar.carname); // Volvo