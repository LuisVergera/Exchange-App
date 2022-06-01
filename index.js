/// <reference types="jquery" />

let myHeaders = new Headers();
myHeaders.append("apikey", "LGpPW5F47olBdyLHC1yEvAZFk0WZf2w3");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  $(
    `
  https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}`,
    requestOptions
  )
)
  .then((response) => response.json())
  .then((result) => {
    Object.keys(result.rate).forEach((moneda) => {

    }
  )})
  .catch((error) => console.log("error", error));

const fromCurrencyList = $("from-currency");

for (let i = 0; i< )