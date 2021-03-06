/// <reference types="jquery" />
let date = $("#date-selector");
const selectButton = $("#select");
let baseCurrency = $("#base-symbols");

let myHeaders = new Headers();
myHeaders.append("apikey", "LGpPW5F47olBdyLHC1yEvAZFk0WZf2w3");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

selectButton.click(() => {
  if (date.val() === "" || baseCurrency.val() === "-Select a currency-") {
    event.stopPropagation();
    $("#status").text("Please select the date and coin").addClass("error");
    return false;
  } else {
    fetch(
      `https://api.apilayer.com/exchangerates_data/${date.val()}&base=${baseCurrency.val()}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        removeOldData();
        $("#status")
          .text(`${result.base} rates on ${result.date}`)
          .attr("class", "");
        // $("ul").html("");
        Object.keys(result.rates).forEach((moneda) => {
          $("ul").append($(`<li>${moneda}: ${result.rates[moneda]}</li>`));
        });
      })
      .catch((error) => console.log("error", error));
  }
});

let removeOldData = () => {
  $("li").remove();
};

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const symbols = result["symbols"];
    Object.keys(symbols).forEach((symbol) => {
      const baseSymbol = document.createElement("option");
      baseSymbol.value = symbol;
      baseSymbol.textContent = symbol + " - " + symbols[symbol];
      $("#base-symbols").append(baseSymbol);
    });
  })
  .catch((error) => console.log("error", error));
