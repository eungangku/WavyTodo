const quoteTextElem = document.querySelector("#quote-text");
const quoteAuthorElem = document.querySelector("#quote-author");

function showQuotes(quotes) {
    const QuoteRandint = Math.floor(Math.random() * quotes.length);
    quoteTextElem.innerText = quotes[QuoteRandint].quote;
    quoteAuthorElem.innerText = quotes[QuoteRandint].author;
}

fetch("https://raw.githubusercontent.com/eungangku/VanilaJS/main/js/quotes.json").then(response => response.json()).then(data => {
    showQuotes(data);
});