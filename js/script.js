{
    let formElement = document.querySelector(".js-form");
    let userInput = document.querySelector(".js-userInput");
    let outcome = document.querySelector(".js-outcome");

    const selectCurrency = () => {

        const selectCurrencyIn = document.querySelector(".js-currencyIn");
        const selectCurrencyOut = document.querySelector(".js-currencyOut");

        selectCurrencyIn.addEventListener("input", () => {
            if (selectCurrencyIn.value === selectCurrencyOut.value) {
                selectCurrencyOut.value = "NONE";
            }
        });

        selectCurrencyOut.addEventListener("input", () => {
            if (selectCurrencyIn.value === selectCurrencyOut.value) {
                selectCurrencyIn.value = "NONE";
            }
        });
    }
    selectCurrency();

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectCurrencyIn = document.querySelector(".js-currencyIn");
        const selectCurrencyOut = document.querySelector(".js-currencyOut");

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

    const clearForm = () => {
        const outcome = document.querySelector(".js-outcome");
        outcome.innerHTML = "   ";
    }

    const init = () => {
        const buttonClear = document.querySelector(".js-buttonClear")
        buttonClear.addEventListener("click", (clearForm));
    }
    init();
}