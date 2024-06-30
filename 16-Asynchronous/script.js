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
