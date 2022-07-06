'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function () {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   //AJAX Call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//     console.log(data);

//     //Render country 2

//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2[0]);
//     });
//   });
// };
// getCountryAndNeighbour('portugal');
// setTimeout(() => {
//   console.log(`1 second have passed `);
//   setTimeout(() => {
//     console.log(`2 seconds have passed `);
//     setTimeout(() => {
//       console.log(`3 seconds have passed `);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
/////////////////////////////////////////////////////
//error
// const getJSON = function (url, errorMsg = `Something went wrong`) {
//   fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Country not found `
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = `data[0].borders[0]`;

//       if (!neighbour) throw new Error('No neighbour found!');
//       //country2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`something went wrong ${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//error^
//////////////////////////////////////////////////////
const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })

    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      //country2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`something went wrong ${err.message}.Try again!`);
    })
    .finally(() => {});
};

getCountryData('portugal');

/////////////////////////////////////////////////////
//challenge
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${response.status})`);

      return res.json();
    })

    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} problemche`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

//////PROMISES///////////////////////////////////////
// console.log(`1`);
// setTimeout(() => console.log(`4 `), 0);
// Promise.resolve(`3`).then(res => console.log(res));
// Promise.resolve(`5`).then(res => {
//   // for (let i = 0; i < 618648868; i++) {}
//   console.log(res);
// });
// console.log(`2 `);
// console.log(`6`);

//`consumer function
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`you win`);
//     } else {
//       reject(`Your lost your money`);
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// //Promisifying  setTimoeout
// const time = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// time(5)
//   .then(() => {
//     console.log(`1 seconds later`);
//     return time(1);
//   })
//   .then(() => {
//     console.log(`2 seconds later`);
//     return time(2);
//   })
//   .then(() => {
//     console.log(`3 seconds later`);
//     return time(3);
//   })
//   .then(() => {
//     console.log(`4 seconds later`);
//     return time(4);
//   })
//   .then(() => console.log(`5 seconds later`));

// Promise.resolve(`abc`).then(x => console.log(x));
// Promise.reject(`new`).catch(x => console.log(x));
