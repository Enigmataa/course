'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// hours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

//with optional chaining
//   console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open??'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //methods
//   console.log(restaurant.order?.(0, 1) ?? 'Method Does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method Does not exist');
// //arrays
// const users = [{ name: 'Slavi', email: 'email@abv.bg' }];
// console.log(users[0]?.name ?? 'user array empty');

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 22, c: 21 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested obj
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(...arr1, ...arr2);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(2, 45, 3, 6, 1);
// add(4, 1, 6, 88, 1, 3, 5);

// const x = [23, 5, 7];
// add(...x);
///////////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructoring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

//Use any data type, return any date type, short-circuiting
// console.log('----OR----');
// console.log(3 || 'slavi');
// console.log('' || 'slavi');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// console.log(0 && 'Slavi');
// console.log(7 && 'Slavi');
// console.log('Hello' && 23 && null && 'idk');

// //example:
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// //its the same as:
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
///////////////////////////////////////
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //Nullish:null and undefined(NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
/////////////////////////////////////////
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Capri',
//   owner: 'Giovanni',
// };
// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //nullish assignment operator(null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////Challenge

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
// },
// t1: function () {
//   let t1Name = this.team1;
//   let t1Players = this.players[0];
//   return { name: t1Name, players: t1Players };

//   // console.log(t1Name, t1Players);
// },
// };

// console.log(game.t1());
// (game.team1, game.players[0]);
// console.log(team1);
// console.log(team1);

// console.log(game.team1.gk);

// const players1 = game.players[0];
// const players2 = game.players[1];
// game.team1 = {
//   name: game.team1,
//   gk: players1[0],
//   fieldPlayers: players1.slice(1),
// };

// game.team2 = {
//   name: game.team2,
//   gk: players2[0],
//   fieldPlayers: players2.slice(1),
// };

// console.log(game);

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Slavi', 'Niki'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('neshto', 'vtoro neshto', 'idk,');
// // printGoals('Daves', 'Muller');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team1 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}:${item[1]}`);
// // }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// console.log(...menu.entries());

//SETS
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
// ]);
// console.log(orderSet);

// console.log(new Set('Slavi'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear(); //deletes all
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(new Set('idfk').size);

//MAPS
// const rest = new Map();
// rest.set('name', 'Siluet');
// rest.set(1, 'Italy, France');

// console.log(rest.set(2, 'BG, Germany'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 9;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// console.log(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
//////////////////////////////////////
// const idk =
//   'iskam mn pari! Trea izkaram kursa i da zapochna tuk za da izkaravam mn pari!';
// console.log(idk.slice(0, idk.indexOf()));

// console.log(idk.slice(idk.lastIndexOf(' ') + 1));

// console.log(idk.slice(-2));

// console.log(idk.slice(1, -1));
//////////////////////////////////////////
// const ime = 'sLaVyAn';
// const imeLower = ime.toLowerCase();
// const imeCorrect = ime[0].toUpperCase() + imeLower.slice(1);

// console.log(ime);
// console.log(imeLower);
// console.log(imeCorrect);

// const priceGB = '101,50$';
// const priceUS = priceGB.replace('$', '€').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'vs passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
//////////////////////////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '❗' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(40);
  console.log(output);
  // flights.replaceAll(';', ' ');
}
// console.log(flight);
