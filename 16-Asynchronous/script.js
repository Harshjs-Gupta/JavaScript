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

/* Hard coded */
/* const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      // console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      return response.json();
    })
    .then((data) => {
      // console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      // else {
      //   getNeighbourData(neighbour);
      // }

      //country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      // console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      return response.json();
    })
    .then((data) => {
      // console.log(data);
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}; */

/* Efficient coded */
// const getCountryData = function (country) {
//   //country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     "Country not found!"
//   )
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders ? data[0].borders[0] : undefined;

//       if (!neighbour) throw new Error("No neighbour found!");
//       // else {
//       //   getNeighbourData(neighbour);
//       // }

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not found!"
//       );
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0], "neighbour");
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", function () {
//   getCountryData("bharat");
// });

////////////////////////////////////
/* LECTURE 255 */
/* Handling rejected promises */
/// For handle rejected promise we use .catch() method is used to

///////////////////////////////////////
// Coding Challenge #1

/* In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474 */

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       // if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       // console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((response) => {
//       // console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.log(`${err.message} 💥`));
// };

// whereAmI(28.6139, 77.2088);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/////////////////////////////////////
/* LECTURE 259 */
/* The event loop practice */

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

////////////////////////////////////////
/* LECTURE 260 */
/* Building a simple promise */
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I wait for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I wait for 1 second"));

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

/* Instead of this ☝️ write like this 👇 */
// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(3);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(4);
//   })
//   .then(() => console.log("4 second passed"));

///////////////////////////////////////////
///////////////////////////////////////////
/* LECTURE 261 */
/* Promisifying the Geolocation API */

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => console.log(position),
//     //   (err) => console.log(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       // if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       // console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((response) => {
//       // console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.log(`${err.message} 💥`));
// };

// btn.addEventListener("click", whereAmI);
