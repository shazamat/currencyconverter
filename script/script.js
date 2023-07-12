const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementUZS = document.querySelector('[data-value="UZS"]');


// fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function (result) {
//     return result.json()
// }).then(function (data) {
//     console.log(data)
// })

getCurrency()
async function getCurrency() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();
    const result = await data;
    console.log(result)

    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;
    rates.UZS = result.Valute.UZS;

    console.log(rates)

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);
    elementUZS.textContent = rates.UZS.Value.toFixed(2);


    if (rates.USD.Value >= rates.USD.Previous) {
        elementUSD.classList.add('top')
    } else {
        elementUSD.classList.add('bottom')
    }

    if (rates.EUR.Value >= rates.EUR.Previous) {
        elementEUR.classList.add('top')
    } else {
        elementEUR.classList.add('bottom')
    }

    if (rates.GBP.Value >= rates.GBP.Previous) {
        elementGBP.classList.add('top')
    } else {
        elementGBP.classList.add('bottom')
    }

    if (rates.UZS.Value >= rates.UZS.Previous) {
        elementUZS.classList.add('top')
    } else {
        elementUZS.classList.add('bottom')
    }

}

