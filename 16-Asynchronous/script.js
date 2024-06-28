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
