'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('NDBA131', 2, 412);
// createBooking('NDBA131', 43);
// createBooking('NDBA131', undefined, 10000);
// createBooking('NDBA131', 4);

// const flight = 'LNS2324';
// const slavi = {
//   name: 'Slavyan Bardarski',
//   passport: 215412514,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'AFN2';
//   passenger.name = `Mr. ${passenger.name}`;
//   if (passenger.passport === 215412514) {
//     alert(`Check in`);
//   } else {
//     alert(`Wrong Passport`);
//   }
// };

// // checkIn(flight, slavi);
// // console.log(flight);
// // console.log(slavi);

// // const flightNum = flight;
// // const passenger = slavi;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(slavi);
// checkIn(flight, slavi);
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// //Higher-order function
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split('');
//   return [first.toUpperCase(), ...others].join('');
// };
// const transformer = function (str, fn) {
//   console.log(`Original str ${str}`);
//   console.log(`Transformed str: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer(`Js language`, upperFirstWord);
// transformer(`Js language`, oneWord);
// //js uses callbacks all the timae
// const high5 = function () {
//   console.log(`yo`);
// };
// document.body.addEventListener('click', high5);

// const multiply = function (a, b) {
//   a * b;
//   return 0;
// };
// multiply(2, 2);
////////////////////////////////////////////////
//with normal functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting},${name}`);
//   };
// };
// const greeter = greet(`hello there`);
// greeter(`slavi`);
// greet(`hello`)(`mah boi`);
// //with arrow functions
// const greet2 = greeting2 => name2 => console.log(`${greeting2},${name2}`);
// greet2(`Hello`)(` Slavi mah boy`);
////////////////////////////////////////////////
// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(222, `slavi B`);
// lufthansa.book(6626, `niki B`);
// const eurowings = {
//   name: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, `Sarah williams`);
// console.log(eurowings);
// book.call(lufthansa, 213, `nfi `);
// console.log(lufthansa);
//
//////////////////////////////////////////////

const poll = {
  question: `What is your favourite programming language?`,
  options: [`0: Javascript`, '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'aray') {
    if ((type = 'array')) {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//////////////////////NE STAVA/////////////////
//standartno
// const runOnce = function () {
//   console.log(`this runs`);
// };
// runOnce();
// //IIFE function
// (function () {
//   console.log(`this runs`);
// })();
// //IIFE arrow functions
// (() => console.log(`this ALSE runs`))();
// const items = [
//   { name: 'Bike', price: 100 },
//   { name: 'TV', price: 200 },
//   { name: 'Album', price: 10 },
//   { name: 'Book', price: 5 },
//   { name: 'Phone', price: 500 },
//   { name: 'PC', price: 1000 },
//   { name: 'Keyboard', price: 25 },
// ];

//filter
// const filtered = items.filter(x => {
//   return x.price <= 100;
// });
// console.log(items);
// console.log(filtered);

//Map
// const itemNames = items.map(item => {
//   return item.price;
// });
// console.log(items);
// console.log(itemNames);
//find
// const foundItem = items.find(item => {
//   return item.name === 'Book';
// });
// console.log(items);
// console.log(foundItem);
//forEach
// items.forEach(item => {
//   console.log(item.name);
// });
//every
// const cheap = items.every(item => {
//   return item.price <= 5000;
// });
// console.log(cheap);
//reduce
// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);
// console.log(total);
// const itemi = [1, 2, 3, 4, 5];
// const includes2 = itemi.includes(2);
// console.log(includes2);
////////////////////////////////////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// //re-assigning f function
// h();
// f();
// console.dir(f);
// //Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`Boarding all ${n} passengers`);
//     console.log(`3 groups each with ${perGroup} passegers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };
// boardPassengers(180, 3);

///////////////////////////////////////////////
//challenge
// (function () {
//   const a = document.querySelector(`h1`);
//   a.style.color = `red`;

//   document.querySelector(`body`).addEventListener('click', function () {
//     a.style.color = `blue`;
//   });
// })();
///////////////////////////////////////////////
