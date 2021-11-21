import { pageSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

const homepage = (() => {

    (function setupPage() {
        pageSetup();
        setQuoteOfDay();
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.getElementById('homeBtn').classList.add('active');
    })();

    function setQuoteOfDay() {
        const main = document.querySelector('main')
        const index = getQuoteNum();
        const quote = quoteLib[index].quote;
        const quotee = quoteLib[index].quotee;
        const favorite = quoteLib[index].favorite;
        main.appendChild(createCards(quote, quotee, favorite));
    }

    function getQuoteNum() {
        const epoch = new Date(2000, 1, 1);
        const today = new Date();
        const diffInDays = Math.ceil((today - epoch) / (24 * 60 * 60 * 1000));
        const index = diffInDays % quoteLib.length;
        return index;
    }

})();