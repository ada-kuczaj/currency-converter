let formElement = document.querySelector(".js-form");
let userInput = document.querySelector(".js-userInput");
let selectCurrencyIn = document.querySelector(".js-currencyIn");
let selectCurrencyOut = document.querySelector(".js-currencyOut");
let outcome = document.querySelector(".js-outcome");
let buttonCalculate = document.querySelector(".js-buttonCalculate");
let buttonClear = document.querySelector(".js-buttonClear")



selectCurrencyIn.addEventListener("input", () => {
    if (selectCurrencyIn.value === selectCurrencyOut.value) {
        selectCurrencyOut.value = "Wybierz walutę";
    }
});

selectCurrencyOut.addEventListener("input", () => {
    if (selectCurrencyIn.value === selectCurrencyOut.value) {
        selectCurrencyIn.value = "Wybierz walutę";
    }
});


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = userInput.value;
    let initialCurrency = selectCurrencyIn.value;
    let finalCurrency = selectCurrencyOut.value;
    let result = 0;
    let rate = 0;
    let rateEUR = 4.5654;
    let rateUSD = 3.7746;

    switch (initialCurrency + ' ' + finalCurrency) {
        case 'PLN EUR':
            rate = 1 / rateEUR;
            break;
        case 'PLN USD':
            rate = 1 / rateUSD;
            break;
        case 'EUR PLN':
            rate = 1 * rateEUR;
            break;
        case 'USD PLN':
            rate = 1 * rateUSD;
            break;
        case 'USD EUR':
            rate = rateUSD / rateEUR;

            break;
        case 'EUR USD':
            rate = rateEUR / rateUSD;
            break;
    }
    result = amount * rate;
    if (initialCurrency === "NONE" || finalCurrency === "NONE") {
        outcome.innerHTML = "Wybierz walutę do konwersji";
    } else {
        outcome.innerHTML = `${amount} ${initialCurrency} = ${result.toFixed(2)} ${finalCurrency}`;
    }

});

buttonClear.addEventListener("click", () => {
    outcome.innerHTML = "   ";
})