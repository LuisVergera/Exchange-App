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
fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    $("ul").html("");

    Object.keys(result.rates)
      .forEach((moneda) => {
        $("ul").append($(`<li>${moneda}: ${result.rates[moneda]}</li>`));
      })
      .catch((error) => console.log("error", error));
  });
