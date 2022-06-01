/// <reference types="jquery" />
const selectButton = $("select");
const fromCurrency = $("from-currency");
const toCurrency = $("to-Currency");

let myHeaders = new Headers();
myHeaders.append("apikey", "LGpPW5F47olBdyLHC1yEvAZFk0WZf2w3");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  (`
  https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}`,
  requestOptions)
)
  .then((response) => response.json())
  .then((result) => {
    Object.keys(result.rate).forEach((moneda) => {
      $("from-currency").append($(`<option>${moneda}>`));
    });
  })
  .catch((error) => console.log("error", error));

//const fromCurrencyList = $("from-currency");

fetch(
  (`
  https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}`,
  requestOptions)
)
  .then((response) => response.json())
  .then((result) => {
    Object.keys(result.rate).forEach((moneda) => {
      $("from-currency").append($(`<option>${moneda}>`));
    });
  })
  .catch((error) => console.log("error", error));
