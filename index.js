/// <reference types="jquery" />
const date = $("#date-selector").val();
const selectButton = $("#select");
const baseCurrency = $("#base-currency").val();

let myHeaders = new Headers();
myHeaders.append("apikey", "LGpPW5F47olBdyLHC1yEvAZFk0WZf2w3");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

selectButton.click(() => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/${date}&base=${baseCurrency}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      $("#status").text(`${result.base} rates on ${result.date}`);
      $("ul").html("");
      Object.keys(result.rates)
        .forEach((moneda) => {
          $("ul").append($(`<li>${moneda}: ${result.rates[moneda]}</li>`));
        })
        .catch((error) => console.log("error", error));
    });
});

let removeOldData = () => {
  $("li").forEach(remove()); // modify this later
};
