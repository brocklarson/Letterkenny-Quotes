import { background, headerSetup, footerSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';
import { updateLocalStorage } from './storage.js';

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    document.getElementById('homeBtn').focus();
})();

const buttonFunction = (() => {
    //Cache Dom

    (function setQuoteOfDay() {
        const main = document.querySelector('main')
        const index = getQuoteNum();
        const quote = quoteLib[index].quote;
        const quoter = quoteLib[index].quoter;
        const favorite = quoteLib[index].favorite;
        main.appendChild(createCards(quote, quoter, favorite));
    })();

    function getQuoteNum() {
        const epoch = new Date(2000, 1, 1);
        const today = new Date();
        const diffInDays = Math.ceil((today - epoch) / (24 * 60 * 60 * 1000));
        const index = diffInDays % quoteLib.length;
        return index;
    }

})();