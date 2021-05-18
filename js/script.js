{
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

    const getTargetAmount = () => {

        const selectCurrencyIn = document.querySelector(".js-currencyIn");
        const selectCurrencyOut = document.querySelector(".js-currencyOut");
        const initialCurrency = selectCurrencyIn.value;
        const finalCurrency = selectCurrencyOut.value;
        const rateEUR = 4.5654;
        const rateUSD = 3.7746;

        switch (initialCurrency + ' ' + finalCurrency) {
            case 'PLN EUR':
                return 1 / rateEUR;

            case 'PLN USD':
                return 1 / rateUSD;

            case 'EUR PLN':
                return 1 * rateEUR;

            case 'USD PLN':
                return 1 * rateUSD;

            case 'USD EUR':
                return rateUSD / rateEUR;

            case 'EUR USD':
                return rateEUR / rateUSD;

        }
    }
    getTargetAmount();

    const updateResultText = () => {

        let outcome = document.querySelector(".js-outcome");
        let userInput = document.querySelector(".js-userInput");
        let amount = userInput.value;

        const selectCurrencyIn = document.querySelector(".js-currencyIn");
        const selectCurrencyOut = document.querySelector(".js-currencyOut");
        const initialCurrency = selectCurrencyIn.value;
        const finalCurrency = selectCurrencyOut.value;

        let rate = getTargetAmount(initialCurrency, finalCurrency,);

        result = amount * rate;
        if (initialCurrency === "NONE" || finalCurrency === "NONE") {
            outcome.innerHTML = "Wybierz walutę do konwersji";
        } else {
            outcome.innerHTML = `${amount} ${initialCurrency} = ${result.toFixed(2)} ${finalCurrency}`;
        }
    }
    updateResultText();

    const onFormSubmit = (event) => {
        event.preventDefault();
        getTargetAmount();
        updateResultText();
    }

    const clearForm = () => {
        let outcome = document.querySelector(".js-outcome");
        outcome.innerHTML = "   ";
    }

    const init = () => {        
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

        const buttonClear = document.querySelector(".js-buttonClear")
        buttonClear.addEventListener("click", (clearForm));
    }
    init();
}