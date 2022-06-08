/// <reference types="jquery" />
let date = $("#date-selector");
const selectButton = $("#select");
let baseCurrency = $("#base-currency");

let myHeaders = new Headers();
myHeaders.append("apikey", "LGpPW5F47olBdyLHC1yEvAZFk0WZf2w3");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

selectButton.click(() => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/${date.val()}&base=${baseCurrency.val()}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      removeOldData();
      $("#status").text(`${result.base} rates on ${result.date}`);
      $("ul").html("");
      Object.keys(result.rates).forEach((moneda) => {
        $("ul").append($(`<li>${moneda}: ${result.rates[moneda]}</li>`));
      });
    })
    .catch((error) => console.log("error", error));
});

let removeOldData = () => {
  $("li").remove();
};

///select form function
