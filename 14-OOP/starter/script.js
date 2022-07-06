// 'use strict';
// const Person = function (firstName, birthYear, job) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.job = job;
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };
// const slavi = new Person('Slavi', 1997, 'unemployed');
// const lora = new Person('Lora', 2008, 'student');
// console.log(slavi, lora);
//1 new empty object is created {}
//2 the func is called and this is set to the newly set object : this = {}
//3 {} is linked to prototype
//4 function automatically returns {}

//tova dolu proverqva dali dadeno v sluchaq "ime" sushtestvuva kato instance v obekta Person
// console.log(slavi instanceof Person);

//Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// slavi.calcAge();

// console.log(slavi.__proto__);
// console.log(slavi.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(slavi)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// //задаване на propreties на prototype

// Person.prototype.ethnicity = 'Bulgarian';
// console.log(slavi, lora);

// console.log(slavi.hasOwnProperty('firstName')); //true
// console.log(slavi.hasOwnProperty('ethnicity')); //false

// console.log(slavi.__proto__);
// //Object.prototype(top of prototype chain)
// console.log(slavi.__proto__.__proto__);
// console.log(slavi.__proto__.__proto__.__proto__);

// const arr = [2, 4, 5, 7, 2, 1, 9, 3, 1, 5, 5, 5, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// //unikalni elementi v array-a
// Array.prototype.unikalni = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unikalni());
///////////////////////////////////////////////////
//challenge
// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };
// const bmw = new Car('BMW', 120);
// const vw = new Car('Volkswagen', 95);
// console.log(bmw, vw);

// Car.prototype.accelerate = function () {
//   console.log(`${this.brand} accelerated:${(this.speed += 10)}km/h`);
// };

// Car.prototype.decelerate = function () {
//   console.log(`then decelerated:${(this.speed -= 5)}`);
// };

// bmw.accelerate();
// bmw.decelerate();
// vw.accelerate();
// vw.decelerate();

//ако продължаваме, стойностите се add up-ват към предходния резултат
///////////////////////////////////////////////////

//////////////////////class expression
// const PersonCL = class {};
// class declaration
// class PersonCL {
//   //constructor() is a method of the class and serves the same purpose like constructor functions
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to the .prototype property
//   calcAge() {
//     // this is a method
//     console.log(2032 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`); //same as below
//   }

//   get age() {
//     return 2032 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${'idfk'}`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log(`hey`);
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(this.fullName, this.course);
//   }
// }
// const martha = new StudentCl('ime', 2022);
// martha.introduce();
// martha.calcAge();
// const jessica = new PersonCL('Jessica Davis', 1996);
// // console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

//same as above
// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// const account = {
//   owner: 'Slavi',
//   movements: [312, 242, 11, 112, 33],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;

// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ///Challenge
// class CarCl {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`${this.brand} accelerated:${(this.speed += 10)}km/h`);
//   }

//   decelerate() {
//     console.log(`then decelerated:${(this.speed -= 5)}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.decelerate();
// ford.speedUS = 50;
// console.log(ford);
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this.firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} I am a ${this.course}`);
// };
// const slavi = new Student('Slavyan', 1997, 'neshto');
// console.log(slavi);
// slavi.introduce();
// slavi.calcAge();

class Account {
  //public fields (instances)
  // localce = navigator.language;
  #movements = [];
  // #pin;

  //private fields
  // #movements = {};

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    this.#movements = [];
    this.locale = navigator.language;
    console.log(`TY for openning a n account${owner}`);
  }
  //public interface
  getMovements(val) {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
    }
  }
  #approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Slavi', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-220);
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(10000);
acc1.approveLoan(10000);
console.log(acc1);
console.log(acc1.pin);
// acc1._movements.push(250);
console.log(acc1.getMovements());
