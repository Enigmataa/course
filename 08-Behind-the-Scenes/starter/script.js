'use strict';
// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milenial = true;
//       const firstName = 'Nqkoi';
//       const str = `Oh you are a milleanial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'New output';
//     }
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Slavi';
// calcAge(1997);
// const slavi = {
//   firstName: 'slavi',
//   lastName: 'Bardarski',
//   age: 24,
// };
// const slavi2 = Object.assign({}, slavi);
// //с Object.assign({}) се прави копие на обект (shallow copy)
// slavi2.lastName = 'neshto';
// console.log('predi marriage:', slavi);
// console.log('after marriage:', slavi2);
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(oldAge);
// console.log(age);

// const me = {
//   name: 'slavi',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me', me);
let lastName = 'Williams ';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
};
const marriedJ = jessica;
marriedJ.lastName = 'Davis';

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('before:', jessica2);
console.log('after:', jessicaCopy);
