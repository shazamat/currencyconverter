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

    console.log(result.Valute.UZS.Value)
}

