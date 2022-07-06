// 'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('i can drive');
///////////////////////////////////////////////////////////////////////
//function declaration !

// function logger() {
//     console.log(`My name is Slavi`);
// }
// //calling, running, INVOKING the function!
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
////////////////////////////////////////////////////////////////////////

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} milion people and its capital city is ${capitalCity}`;
//     return (description);
// }
// const country = describeCountry(`Finland`, 6, `Helsinki`);
// console.log(country);

////////////////////////////////////////////////////////////////////////
// function expression vs function declaration!

// function declaration (CAN call the declarations before the function)
// const age1 = calcAge1(1997); //declaration BEFORE the function

// function calcAge1(birthYear) {
//     return 2043 - birthYear;
// }
// const age1 = calcAge1(1997); //declaration AFTER function

// // function expression (can NOT call the declarations before the function)
// const calcAge2 = function (birthYear) {
//     return 2043 - birthYear;
// }
// const age2 = calcAge2(1997);
// console.log(age1, age2);

// homework
// const percentageOfWorld1 = function (population) {
//     return (population / 7900) * 100;
// }
// const Bulgaria = percentageOfWorld1(1111);
// const Italy = percentageOfWorld1(2222);
// const Germany = percentageOfWorld1(3333);
// console.log(Bulgaria, Italy, Germany);
// ////////////////////////////////////////////////////////////////////////
// const calcAge3 = birthYear => 2033 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2033 - birthYear;
//     const retirement = 65 - age;
//     return ` ${firstName}, ${retirement} `
// }
// console.log(yearsUntilRetirement(1992, `Jojo`))
// console.log(yearsUntilRetirement(1992, `idk`))
/////////////////////////////////////////////////////////////////
// homework
// const percentageOfWorld1 = (population) => {
//     return ((population / 7900) * 100);
// }
// const Bulgaria = percentageOfWorld1(1111);
// const Italy = percentageOfWorld1(2222);
// const Germany = percentageOfWorld1(3333);
// console.log(percentageOfWorld1(Bulgaria));
// console.log(percentageOfWorld1(Italy));
// console.log(percentageOfWorld1(Germany));
// // ///////////////////////////////////////////////////////////////////////
// const rezancheta = function (plod) {
//     return plod * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = rezancheta(apples);
//     const orangePieces = rezancheta(oranges);

//     const sok = `Juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//     return sok;
// }
// console.log(fruitProcessor(2, 4));
// //////////////////////////////////////////////////////////////////////////

// function percentageOfWorld1(population) {
//     return ((population / 7900) * 100);
// }
// function describePopulation(country, population) {
//     const procenti = percentageOfWorld1(population);// undefined procenti ???
//     const opisanie = (`${country} has ${population} million people,
//     which is about ${procenti}% of the world.`);
//     return (opisanie);
// }
// const country1 = percentageOfWorld1(1111111);
// const country2 = percentageOfWorld1(2222222);
// const country3 = percentageOfWorld1(3333333);
// console.log(`Bulgaria`, percentageOfWorld1(country1), `%`);
// console.log(`Italy`, percentageOfWorld1(country2), `%`);
// console.log(`Germany`, percentageOfWorld1(country3), `%`);
// console.log(describePopulation(`Bulgaria`, 2131231)); // idk ???

// -------------------------------
// const calaAvg = (dolphins, koalas) => {
//     return (dolphins + koalas / 2);
// }
// const avgDolphins = (44 + 23 + 71);
// const avgKoalas = (65 + 54 + 49);
// console.log(`Dolphins avg: ${dolphins}
// Koalas avg: ${koalas}`);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     // return (avgDolphins < avgKoalas);
//     if (avgDolphins < avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins}))`)
//     }

// }

// function calAvg(a, b, c) {
//     return ((a + b + c) / 3).toFixed(0)
// }

// const avgKoalas = calAvg(65, 64, 49)
// const avgDolphins = calAvg(44, 23, 71)
// console.log(avgKoalas, avgDolphins)

// checkWinner(avgDolphins, avgKoalas)

// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.1))
// console.log(Math.round(5.4))

// console.log(1 == "1")
// console.log(1 === "1")

// console.log("a,b,c,A,B,C".split(","))
// console.log(typeof 1)
// console.log(typeof "2")
// console.log(typeof true)

// function convertor(arg) {
//     console.log(+arg)
//     console.log(Boolean(arg))
// }

// convertor(2)

//arrays
// const friends = ['Michael', 'Stephen', 'Peter'];
// console.log(friends);
// const years = new Array(1990, 1997, 1994);
// console.log(friends[0]); //Michael
// console.log(friends[2]); //Peter
// console.log(friends.length); //number of elements in array
// console.log(friends[friends.length - 1]); // retrieves next to last element from an array
// friends[2] = 'Jay'; //replaces smth in position 2 in the array
// console.log(friends);
// const slavi = ['Slavyan', 'Bardarski', 2022 - 1997, friends];
// console.log(slavi);

// //upr1
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const yearss = [1990, 1992, 2002, 1989];
// const age1 = calcAge(yearss[0]);
// const age2 = calcAge(yearss[2]);
// const age3 = calcAge(yearss[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
///////////////////////////////////////////////////////////////////////
// homework
// let populations = Array[11111, 22222, 33333, 44444];
// if (populations = 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// let percentages = Array[178.03, 356.07, 534.10];

// function percentageOfWorld1(populations) {
//     return ((populations / 7900) * 100);
// }
///////////////////////////////////////////////////////////////////////
// const friends = ['michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay'); // .push stores data at the end of an array
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); //unshift stores data at the beginning of an arr
// console.log(friends);

// //remove elements
// friends.pop(); // pop removes the Last element
// //if we do it again it removes the next last element
// const popped = friends.pop();
// console.log(popped); // pokazva koe e mahnatoto ot gore^
// console.log(friends);

// friends.shift();// removes the first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log(`imash fr naime steven`);
// } else {
//     console.log(`nqmash fr naime Steven`);
// }
/////////////////////////////////////////////////////////
//Objects
// const slavi = {
//     firstName: 'Slavyan',
//     lastName: 'Bardarski',
//     age: 2022 - 1997,
//     job: 'IT',
//     friends: ['Anji', 'Kalcho', 'Gabi', 'Krisi']
// };
// console.log(slavi);
// console.log(slavi.lastName);

// const nameKey = 'Name';
// console.log(slavi['first' + nameKey]);
// console.log(slavi['last' + nameKey]);
// //////////////////////////////////////////////////////////////
// const interestedIn = prompt(`What do you want to know about Slavi? Choose between First name, Last Name, age, job and friends.`);

// if (slavi[interestedIn]) {
//     console.log(slavi[interestedIn]);
// } else {
//     console.log(`WRONG RESULT Choose between First name, Last Name, age, job and friends.`)
// }
// slavi.location = 'Bulgaria';
// slavi['leagueAcc'] = 'Enigmata';
// console.log(slavi);
//Challenge
// const slavifr = {
//     name: 'Slavi',
//     numbrFr: 3,
//     bestFr: 'Someone'

// }
// console.log(slavifr.name, `has`, slavifr.numbrFr, `friends, but his best fr is `, slavifr.bestFr);

// console.log(`${slavifr.name} has ${slavifr.numbrFr} friends, but his best fr is ${slavifr.bestFr}`);
////////////////////////////////////////////////////////////////////////
// const slavi = {
//     firstName: 'Slavyan',
//     lastName: 'Bardarski',
//     birthYear: 1997,
//     job: 'IT',
//     friends: ['Anji', 'Kalcho', 'Gabi', 'Krisi'],
//     hasDriversLicense: true,

// calcAge: function (birthYear) {
//     return 2033 - birthYear;
// }

// calcAge: function () {
//     return 2033 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2033 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is ${this.calcAge()} year old ${slavi.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
// };
// console.log(slavi.calcAge());
// console.log(slavi.age);
// console.log(slavi.age);
// console.log(slavi.age);
// console.log(slavi.age);
// //chalenge
// //slavi is a 44 year old student.and he has a driver license.
// console.log(slavi.getSummary());
////////////////////////////////////////////////////

// const mark = {
//     name: `Mark Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// const john = {
//     name: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// if (mark.bmi > john.bmi) {
//     console.log(`mark has a higher BMI`);
// } else {
//     console.log(`john has a higher BMI`);
// }

///////////////////////////////////////////////////////
// for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Do ${rep} chinups`)
// }
// const slavi = [
//     'Slavyan',
//     'Bardarski',
//     2022 - 1997,
//     'IT',
//     ['Anji', 'Kalcho', 'Gabi', 'Krisi'],
//     true
// ];
// const types = [];

// for (let i = 0; i < slavi.length; i++) {
//     //reading from slavi array
//     console.log(slavi[i], typeof slavi[i]);
//     //filling types array
//     types[i] = typeof slavi[i];
//     // types.push(typeof slavi[i]); // same
// }
// console.log(types);

// const years = [1991, 2007, 1989, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2033 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log(`===ONLY STRINGS===`)
// for (let i = 0; i < slavi.length; i++) {
//     if (typeof slavi[i] !== `string`) continue;
//     console.log(slavi[i], typeof slavi[i]);

// }

// console.log(`===BREAK WITH NUMBER===`)
// for (let i = 0; i < slavi.length; i++) {
//     if (typeof slavi[i] === `number`) break;
//     console.log(slavi[i], typeof slavi[i]);
// }
///////////////////////////////////////////////////////
// homework
// const myCountry = {
//     country: `Bulgaria`,
//     capital: `Sofia`,
//     language: `bulgarian`,
//     population: 33,
//     neighbours: [`east, west, north, south`],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`);
//     },
//     // checkIsIsland: function () {
//     //     isIsland = true;
//     //     if (isIsland === true) {
//     //         console.log(`ostrov e`)
//     //     } else {
//     //         console.log(`ne e ostrov`)
//     //     }
//     // }
//     checkIsIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }

// };
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.`)

// // myCountry.population += 2;
// // console.log(myCountry.population);
// console.log(myCountry.population + 2);
// // myCountry[`population`] -= 2;
// // console.log(myCountry[`population`]);
// console.log(myCountry[`population`] - 2);

// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry);
////////////////////////////////////////////////////////
// for (let i = 1; i <= 50; i++)
//     console.log(`Voter number ${i} is voting now!`)

//////////////////////////////////////////////////////
// looping backwards

// const slavi = [
//     'Slavyan',
//     'Bardarski',
//     2022 - 1997,
//     'IT',
//     ['Anji', 'Kalcho', 'Gabi', 'Krisi'],
//     true
// ];
// //0,1,2,3...
// //...3,2,1,0

// //Loop inside a loop !
// for (let i = slavi.length - 1; i >= 0; i--) {
//     console.log(i, slavi[i])
// }

// for (let exercise = 1; exercise <= 5; exercise++) {
//     console.log(`--------Starting exercise ${exercise}-------`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Liftings repetition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Liftings repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Liftings repetition ${rep}`);
//     rep++;

// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`-----If its a 6 its a win-----`)
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a 6! Ending loop...`);
}





// const randomString = "absafsadsa"

// const randomObj = {
//     name: "Gosho",
//     age: 26,
//     married: false,
//     calculate: function () { console.log("kalkuliram...") }
// }

// randomObj.calculate();
// console.log(randomObj.name)
// randomObj.random = "Neshto"
// console.log(randomObj.random)
// console.log(randomObj)
// console.log(Object.values(randomObj))
// // Object.freeze(randomObj)
// randomObj.newProp = 0;
// console.log(randomObj.newProp)

// let sum = 0;

// let exampleArr = [1, 2, 3, 4, 5];

// const a = exampleArr.forEach((el, index) => {
//     console.log(el, index);
//     sum += el
// })

// console.log(a);
// console.log(exampleArr)
// function increase(a, b) {
//     while (a < b) {
//         a++;
//     }
//     console.log(a);
// }

// increase(6, 10);

// function sumArr(arr) {
//     let sum = 0;
//     arr.forEach((el) => {
//         sum += el;
//     })
//     return sum;
// }

// const result = sumArr([1, 2, 3, 4, 10]);
// console.log(result)

// function logObject(obj) {
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(`${key}: ${value}`);
//     }
// }

// const obj = { type: 'car', brand: 'mercedes benz', model: 'E63' }

// logObject({ type: 'car', brand: 'mercedes benz', model: 'E63' })

