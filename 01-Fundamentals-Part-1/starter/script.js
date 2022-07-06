// let movie = ("The Grudge");
// let year = ('2012');
// let genre = ('horror');
// console.log(movie);
// console.log(year);
// console.log(genre);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 'fefe');
// // console.log(typeof 34);

// const isIsland = false;
// let language = 'bulgarian';
// const country = 'Bulgaria';
// let population = 142251254;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);
// population = 69696969696969;
// console.log(population);
// // const country = 'bulgaria';
// // let population = 746129491;

// //////////////////////////////////////////////////////////////////
// //Math operators
// const now = 2022;
// const ageSlavi = now - 1997;
// const ageLora = now - 2008;
// console.log(ageSlavi, ageLora);

// console.log(ageSlavi * 2, ageSlavi / 10, 2 ** 3);
// // 2 ** 3 e 2 на 3та степен - 2 * 2 * 2

// const firstName = 'Slavyan'; //може след името space и ще се отделят двете имена!!
// const lastName = 'Bardarski';
// console.log(firstName + ' ' + lastName); // а може и 'space' и пак ще се отделят имената/стойностите
// //assignment operators +, -, *, /, ++, -- ...
// let x = 10 + 5;//15
// x += 10;// играе ролята на " х + зададената стойност" в случая е 10 и се пресмята 15+10 = 25 !
// x *= 4;// сега х умножено по 4 = 100
// x /= 10;// сега x делено на 10 = 10
// x++;// стойността на x, + 1 = 11
// x--;// стойността на x, - 1 = 10
// console.log(x);

// // comparison operators ><
// console.log(ageSlavi > ageLora);// >. <. >=. ==
// console.log(ageLora >= 18);
// console.log(now - 1997 > now - 2008);
// /////////////////////////////////////////////////////////////////////////
// let bgPopulation = 4471524;
// let half = bgPopulation / 2;
// bgPopulation++;
// let finPopulation = 6000000;
// console.log(bgPopulation >= finPopulation);
// let avgPopulation = 33000000;
// console.log(bgPopulation >= avgPopulation);
// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// console.log(description);
// //////////////////////////////////////////////////////////////////
// const now = 2022;
// const ageSlavi = now - 1997;
// const ageLora = now - 2008;

// console.log(now - 1997 > now - 2008);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10
// console.log(x, y);
// const averageAge = (ageSlavi + ageLora) / 2;
// console.log(ageSlavi, ageLora, averageAge);
// ///////////////////////////////////////////////////////////////
// Homework
// //BMI challenge (Data 1)

// let mMark = 78;
// let hMark = 1.69;
// let mJohn = 92;
// let hJohn = 1.95;
// x = mMark / hMark ** 2; // Mark= 27.3099681383705
// y = mJohn / (hJohn * hJohn); // John=24.194608809993
// console.log("BMIMark= ", x, "BMIJohn= ", y);
// let markHeigherBMI;
// console.log("Has Mark got a higher BMI? ", x >= y);//Has Mark got a higher BMI? true

// //MBI challenge (Data 2)

// let mMark = 95;
// let hMark = 1.88;
// let mJohn = 85;
// let hJohn = 1.76;
// x = mMark / hMark ** 2; // Mark= 26.8786781349
// y = mJohn / (hJohn * hJohn); // John= 27.440599173553
// console.log("BMIMark= ", x, "BMIJohn= ", y);
// let markHeigherBMI;
// console.log("Has Mark got a higher BMI? ", x >= y);//Has Mark got a higher BMI? false
// ////////////////////////////////////////////////////////////////////

// const firstName = "Slavi";
// const job = 'IT';
// const birthYear = 1997;
// const year = 2021;

// const slavi = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + "!";
// console.log(slavi);
// const slaviNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} `   // ` ` and ${} are the best !!!!!!!! :D
// console.log(slaviNew);
// console.log(`bate
// tva
// e
// qko :D `);
// /////////////////////////////////////////////////////////////////////
// Homework
// // recreation of last home task
// let bgPopulation = 4471524;
// let half = bgPopulation / 2;
// bgPopulation++;
// let finPopulation = 6000000;
// // console.log(bgPopulation >= finPopulation);
// let avgPopulation = 33000000;
// // console.log(bgPopulation >= avgPopulation);
// let description = `${bgPopulation >= finPopulation};
// ${bgPopulation >= avgPopulation};
// Portugal is in Europe, and its 11 million people speak portuguese `;
// console.log(description);

// ////////////////////////////////////////////////////////////////////
// const age = 10;

// if (age >= 18 && age <= 69) {
//     console.log(`Ìs old enough`);
// } else if (age > 70) {
//     console.log(`pls give up`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Is not old enough. You can drive a car after ${yearsLeft} years`);
// }

// const birthYear = 2021;
// let century;
// if (birthYear <= 1999) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
// /////////////////////////////////////////////////////////////////////
// Homework

// const popBul = 10;
// const population = 33;
// let popAvg = population - popBul;

// if (popAvg < popBul) {
//     console.log(`Bulgaria's population is above average!`);
// } else (popAvg) {
//     console.log(`Bulgaria's population is 22 million below average`);
// }
////////////////////////////////////////////////////////////////////
// Challenge#2

// let mMark = 100; //original78
// let hMark = 1.69;
// let mJohn = 80; //original 92
// let hJohn = 1.55;
// markBMI = mMark / hMark ** 2; // Mark= 27.3099681383705
// johnBMI = mJohn / (hJohn * hJohn); // John=24.194608809993
// // console.log("BMIMark= ", x, "BMIJohn= ", y);
// // console.log("Has Mark got a higher BMI? ", x >= y);//Has Mark got a higher BMI? true
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's (${markBMI})`);
// } else {
//     console.log(`John's BMI is higher (${johnBMI})`);
// }

////////////////////////////////////////////////////////////////////////


// -----------------------------
// let popSmall = 50;

// if (popSmall > 33) {
//     console.log("Portugal's population is above average")
// } else {
//     console.log(`Portugal's population is ${33 - popSmall} million below average`)
// }

// popSmall = 13;
// if (popSmall > 33) {
//     console.log("Portugal's population is above average")
// } else {
//     console.log(`Portugal's population is ${33 - popSmall} million below average`)
// }

// popSmall = 130;
// if (popSmall > 33) {
//     console.log("Portugal's population is above average")
// } else {
//     console.log(`Portugal's population is ${33 - popSmall} million below average`)
// }

// convertion - WE want to convert from one type to anothr
// const inputYear = '1997';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 24);

// console.log(Number(`Slavi`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //coertion avtomatichno convertva ot string to a number

// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3);
// console.log("23" / "2");

//  + converts to String
//  -, *, /,< , >  converts to number

// let n = '1' + 1; // string 11
// n = n - 1; // number 10 , ako beshe + togava string 111
// console.log(n);
// let x = '9' - '5'; // 4
// let y = '19' - '13' + '17'; // 617 STING !
// let q = '19' - '13' + 17; // 23
// let e = '123' < 57; // false
// let z = 5 + 6 + '4' + 9 - 4 - 2; // 1143
// console.log(x);
// console.log(y);
// console.log(q);
// console.log(e);
// console.log(z);
////////////////////////////////////////////////////////////////

// 5 flasy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean('neshto')); // true e shtoto ne e blank sting !!!
// console.log(Boolean("")); // false e shtot e blank string !!!
// console.log(Boolean(undefined));
// console.log(Boolean({}));

// const money = 110;
// if (money) {
//     console.log("CALM!");
// } else {
//     console.log("PANIK!");
// }
// const age = 18;
// if (age === 18) { console.log(`You have become an adult! (strict equality!!!)`) };

// if (age == 18) { console.log(`You have become an adult (loose equality!!!)`) }; // ONY  use this !!!

// const favourite = Number(prompt(`What is your favourite number?`))
// console.log(favourite);

// if (favourite === 69) {
//     console.log(`Thats the best number 🥵! `)
// } else if (favourite === 666) {
//     console.log(`Calling hell?👿😈💀`)
// } else if (favourite === 14) {
//     console.log(`Thats cool too🥶`)
// }
// else {
//     console.log(`Booring ...😪 `)
// }
// if (favourite !== 69) {
//     console.log(`try 69 or 666 🤔 `)
// }
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours == 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else {
//     console.log(`No borders!`);
// }
////////////////////////////////////////////////////////////////////
// logical operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sara moje da kara`);
// } else {
//     console.log(`Drug trqbva da kara...`);
// }
// const isTired = false; // C

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sara moje da kara`);
// } else {
//     console.log(`Drug trqbva da kara...`);
// }

// //homework
// const english = false;
// const population = 40;
// const isNotIsland = true;

// if (english && isNotIsland && population < 50) {
//     console.log(`Moje da jivee`);
// } else {
//     console.log(`Ne shte`);
// }

////////////////////////////////////////////////////////////////////
//Challenge #3
//1
// let avgdolphins = (96 + 108 + 89) / 3;
// let avgkoalas = (88 + 91 + 110) / 3;
// console.log(`Avg. Dolphins score: ${avgdolphins}
// Avg. Koalas score: ${avgkoalas}`);

// if (avgdolphins < avgkoalas) {
//     console.log(`Koalas have higher avg score !`);
// } else if (avgdolphins > avgkoalas) {
//     console.log(`Dolphins have higher avg score !`);
// } else {
//     console.log(`Its a Draw !`);
// }
//2 i 3
// const avgdolphins = (96 + 108 + 89.) / 3;
// const avgkoalas = (88 + 91 + 110) / 3;
// console.log(`Avg. Dolphins score: ${avgdolphins}
// Avg. Koalas score: ${avgkoalas}`);

// if (avgkoalas > avgdolphins && avgkoalas >= 100) {
//     console.log(`Koalas win !`);
// } else if (avgdolphins > avgkoalas && avgdolphins >= 100) {
//     console.log(`Dolphins win !`);
// } else if (avgdolphins === avgkoalas && avgdolphins >= 100 && avgkoalas >= 100) {
//     console.log(`Its a Draw !`);
// }
// else {
//     console.log(`Both teams failed !`)
// }
////////////////////////////////////////////////////////////////////
//switch
// let day = "saturday";

// switch (day) {
//     case 'monday': // day === monday
//         console.log("Plan");
//         console.log("Go to coding setup");
//         break;
//     case 'tuesday':
//         console.log("Prepare");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//     case 'friday':
//         console.log('record vids');
//         break;
//     case 'saturday':
//     case 'saturday':
//         console.log('weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }
// if (day === "monday") {
//     console.log("day 1");
// } else if (day === "tuesday") {
//     console.log('day 2');
// } else if (day === "wednesday") {
//     console.log("day 3");
// } else if (day === "thursday") {
//     console.log('day 4');
// } else if (day === "friday") {
//     console.log('day 5');
// } else {
//     console.log("weekend");
// }
//////////////////////////////////////////////////////////////////
//homework
// const language = 'arabic';
// switch (language) {
//     case ('chinese'):
//     case ('mandarin'):
//         console.log(`Chinese MOST number of native speakers!'`);
//         break;
//     case ('spanish'):
//         cpnsole.log("2nd place in number of native speakers");
//         break;
//     case ('english'):
//         console.log('3rd place');
//         break;
//     case ('hindi'):
//         console.log('4rth place');
//         break;
//     case ('arabic'):
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too');

// }
///////////////////////////////////////////////////////////////////////
//Ternary operator
// const age = 18;
// age >= 18 ? console.log('IMA PIENIE') : console.log('NEMA PIENIE')

// const drink = age >= 19 ? 'drink' : 'no drink'
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
// Challenge #4
// let population = 11;
// avg = population >= 33 ? 'above' : 'below';
// //console.log(population > 33 ? 'above avg' : 'below avg');
// console.log(`Bulgaria's population is ${avg} average!`);
//answer ??
// console.log(
//     `${country}'s population is ${population > 33 ? "above" : "below"}average`
// );
//Challenge #4 with if else
// let bill = 22;
// let sTip = 15;
// let hTip = 20;
// x = (sTip / 100) * bill;
// y = (hTip / 100) * bill;

// if (bill >= 50 && bill <= 300) {
//     // console.log(`Your price with a standart/lower tip: `);
//     console.log(`Your price is: ${x}lv. with a standart tip of ${sTip}%`);
// } else if (bill < 50) {
//     console.log(`Your price is lower than 50lv, but you still have to pay with a standert tip of ${sTip}`)
// } else {
//     // console.log(`Higher price with a higher tip: `);
//     console.log(`Your price is: ${y}lv. with a heigher tip of ${hTip}%`);
// }
///////////////////////////////////////////////////////////////////////////

