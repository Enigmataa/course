'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
     <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${mov}€</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //acc.username презаписва acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

createUsernames(accounts);
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //in each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 sec stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrease 1 sec
    time--;
  };
  //set timer to 5 min
  let time = 120;
  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
//Event handler
let currentAccount, timer;
//fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}h`;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  //Basically NE SE REFRESHVA LOGNATOTO v konzolata !
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear inputFields
    inputLoginUsername.value = inputLoginPin.value = '';
    // inputLoginPin.blur();
    //updates UI
    updateUI(currentAccount);
    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  console.log(accounts);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    //adds transfer date
    console.log(recieverAcc);
    currentAccount.movementsDates.push(new Date());
    recieverAcc.movementsDates.push(new Date());
    //updates UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add Movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      //add Loan Date
      // currentAccount.movementsDates.push(new Date());

      //update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});
btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (
    //checks if the acc name and pin are the same as the ones that are gonna be deleted
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //deletion of an account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`Withdrew ${Math.abs(movement)}`);
//   }
// }
// movements.forEach(function () {});
// const a = new Date();
// console.log(a);
// setLocalStorage();
// console.log('Slavi'.at(-1));
// const dogsJ = [3, 5, 2, 12, 7];
// const dogsK = [4, 1, 15, 8, 3];
// const idk = dogsJ.slice(-1);
// const checkDogs = function (dogsJulia, dogsKate) {
//   dogsJulia.splice(0, 2);
//   dogsJulia.splice(-2, 2); // -2 poziciq, 2 broi

//   // dogsKate.splice(0, 2);
//   // dogsKate.splice(-2, 2);

//   console.log(dogsJulia);
//   console.log(dogsKate);
//   // j.splice(0, 1);
//   // j.splice(-2);
//   // dogsJ.slice(0, 1);
//   const dogs = dogsJulia.concat(dogsKate);
//   console.log(dogs);
//   dogsKate.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Kate s Dog number ${i + 1} adult and is ${dog} years old`);
//     } else {
//       console.log(`Kate s Dog number ${i + 1} is still a puppy`);
//     }
//   });
//   const dogs2 = dogsKate.concat(dogsJulia);
//   console.log(dogs2);
//   dogsJulia.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Julia s Dog number ${i + 1} adult and is ${dog} years old`);
//     } else {
//       console.log(`Julia s Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
///////////////////////////////////////////////////////////////////
// console.log(movements);
// //accumulator is like snoballing something
// const balance = movements.reduce(function (accumulator, current, index, array) {
//   console.log(`Iteration ${index}:${accumulator}`);
//   return accumulator + current;
// }, 0);
// console.log(balance);
// //arrow
// const balance3 = movements.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );
// console.log(`Arrow function: ${balance3}`);

// //for loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance);

//Maximum value
// const max = movements.reduce((accumulator, movement) => {
//   if (accumulator > movement) return accumulator;
//   else return movement;
// }, movements[0]);
// console.log(max);
//////////////////challenge////////////////////////////////
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const eurToUsd = 1.1;
// //Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)

//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
//challenge
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements1);

// //equallity
// console.log(movements1.includes(-130));
// //Condition
// const anyDeposits = movements1.some(mov => mov > 1500);
// console.log(anyDeposits);
// //every
// console.log(movements1.every(mov => mov > 0));
// //seperate callback
// const deposit = mov => mov > 0;
// console.log(movements1.some(deposit));
// console.log(movements1.every(deposit));
// console.log(movements1.filter(deposit));
// ///////////////////////////////////////////////////////////challenge4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(
//   (dog, i) => (dogs[i].recFood = Math.trunc(dog.weight ** 0.75 * 28))
// );
// // console.log(dogs);

// //2
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// console.log(dogs[0].curFood);
// console.log(dogs[0].recFood);
// // let firstdogreqfood = dogs[0].weight ** 0.75 * 28;
// // console.log(firstdogreqfood);
// //3
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);
// //4
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// //5
// console.log(dogs.some(dog => dog.curFood === dog.recFood));
// //6
// const checkEatingOk = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOk));
// //7
// console.log(dogs.filter(checkEatingOk));
// //8
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

/////////////////////////////////////////////////////////remainder operator/ остатък
// console.log(5 % 2);
// console.log(5 / 2); // 5=2+2+1
// console.log(8 % 3);
// console.log(8 / 3); // 8=2*3+2
// const isEaven = n => n % 2 === 0;
// console.log(isEaven(8));
// console.log(isEaven(23));
// console.log(isEaven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     //0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'red';
//     //0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// const diameter = 2_141_251_513_578;
// console.log(diameter);

// const price = 233_33;
// console.log(price);
// console.log(Number('241_243')); // не е позволено когато е в string!

// // bigInt
// console.log(946219469649613984618686138568136007007707); //грешка мн е голямо числото
// console.log(946219469649613984618686138568136007007707n); //правилно

// //Create a date
// const now = new Date();
// console.log(now);
// console.log(new Date(`December 24,2015`));
// console.log(new Date(2017, 10, 20, 15, 5));

// console.log(new Date(0)); // UNIX time

// //convert from days to miliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// //3* day,hour,min,sec,milsec
// const ingredients = ['olives', 'spinach'];
// const timer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// console.log(`Loading...`);
// if (ingredients.includes('spinach')) clearTimeout(timer);

// //set timeout
// setInterval(function () {
//   //const now = new Date();
//   console.log(now);
// }, 1000);
