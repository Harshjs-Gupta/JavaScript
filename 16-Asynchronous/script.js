"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const currencyKey = Object.keys(data.currencies);
  // console.log(currencyKey);
  const currency = data.currencies[currencyKey];
  // console.log(currency.symbol);
  const lang = Object.values(data.languages).join(", ");
  // console.log(lang);

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name"> ${data.name.common} </h3>
            <h4 class="country__region"> ${data.region} </h4>
            <p class="country__row"><span>👫</span> ${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span> ${lang} </p>
            <p class="country__row"><span>💰</span> ${currency.name} (${
    currency.symbol
  }) </p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforebegin", html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMSg = "Something went wrong") {
  return fetch(url).then((response) => {
    // console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMSg} (${response.status})`);
    }

    return response.json();
  });
};

///////////////////////////////////////
/* LECTURE 249 */
/* Our First AJAX Call: XMLHttpRequest */

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // const currencyKey = Object.keys(data.currencies)[0];
//     // // console.log(currencyKey);
//     // const currency = data.currencies[currencyKey];
//     // // console.log(currency.symbol);
//     // const lang = Object.values(data.languages).join(", ");
//     // // console.log(lang);

//     // const html = `<article class="country">
//     //       <img class="country__img" src="${data.flags.png}" />
//     //       <div class="country__data">
//     //         <h3 class="country__name"> ${data.name.common} </h3>
//     //         <h4 class="country__region"> ${data.region} </h4>
//     //         <p class="country__row"><span>👫</span> ${(
//     //           +data.population / 1000000
//     //         ).toFixed(1)}M people</p>
//     //         <p class="country__row"><span>🗣️</span> ${lang} </p>
//     //         <p class="country__row"><span>💰</span> ${currency.name} (${
//     //   currency.symbol
//     // }) </p>
//     //       </div>
//     //     </article>`;

//     // countriesContainer.insertAdjacentHTML("beforebegin", html);

//     renderCountry(data);
//   });
// };

// getCountryData("bharat");
// getCountryData("usa");

///////////////////////////////////////
/* LECTURE 251 */
/* Welcome to callback hell */

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const neighbour = Object.values(data.borders)[0];
//     // console.log(neighbour);
//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(request2.responseText);
//       console.log(data2);

//       //Render country 2
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("bharat");

/* Another example of callback hell */
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////////////////
/* LECTURE 252 */
/* Promises and the fetch API */

/* old way to call API using XMLHttpRequest */
// const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

/* Here we call API using fetch() method */

// const request = fetch("https://restcountries.com/v3.1/name/bharat");
// console.log(request);

///////////////////////////////////////////////////
/* LECTURE 253 */
/* Comsuming Promises */
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);s
//     });
// };

// getCountryData("bharat");
// getCountryData("usa");

//////////////////////////////////////////
/* LECTURE 254 */
/* Chaining Promises */

// const getNeighbourData = (neighbour) => {
//   getJSON(
//     `https://restcountries.com/v3.1/alpha/${neighbour}`,
//     "Country not found!"
//   )
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0], "neighbour");
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     });
// };
