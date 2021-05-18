{
    const currencyInSelector = document.querySelector(".js-currencyIn");
    const currencyOutSelector = document.querySelector(".js-currencyOut");

    const resetWhenSameValues = (element) => {
        if (currencyInSelector.value === currencyOutSelector.value) {
            element.value = "NONE";
        }
    };

    const selectCurrency = () => {
        currencyInSelector.addEventListener("input", () => {
            resetWhenSameValues(currencyOutSelector);
        });

        currencyOutSelector.addEventListener("input", () => {
            resetWhenSameValues(currencyInSelector);
        });
    };
    selectCurrency();

    const getCurrencyRate = () => {
        const rateEUR = 4.5654;
        const rateUSD = 3.7746;

        switch (currencyInSelector.value + " " + currencyOutSelector.value) {
            case "PLN EUR":
                return 1 / rateEUR;

            case "PLN USD":
                return 1 / rateUSD;

            case "EUR PLN":
                return 1 * rateEUR;

            case "USD PLN":
                return 1 * rateUSD;

            case "USD EUR":
                return rateUSD / rateEUR;

            case "EUR USD":
                return rateEUR / rateUSD;
        }
    };
    getCurrencyRate();

    const updateResultText = () => {
        let outcome = document.querySelector(".js-outcome");
        let userInput = document.querySelector(".js-userInput");
        let amount = userInput.value;

        let rate = getCurrencyRate(
            currencyInSelector.value,
            currencyOutSelector.value
        );

        result = amount * rate;
        if (
            currencyInSelector.value === "NONE" ||
            currencyOutSelector.value === "NONE"
        ) {
            outcome.innerHTML = "Wybierz walutę do konwersji";
        } else {
            outcome.innerHTML = `${amount} ${currencyInSelector.value
                } = ${result.toFixed(2)} ${currencyOutSelector.value}`;
        }
    };
    updateResultText();

    const onFormSubmit = (event) => {
        event.preventDefault();
        getCurrencyRate();
        updateResultText();
    };

    const clearForm = () => {
        let outcome = document.querySelector(".js-outcome");
        outcome.innerHTML = "   ";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

        const buttonClear = document.querySelector(".js-buttonClear");
        buttonClear.addEventListener("click", clearForm);
    };
    init();
}