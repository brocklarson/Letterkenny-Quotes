import { pageSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

const randomPage = (() => {
    (function pageInit() {
        pageSetup();
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.getElementById('rndBtn').classList.add('active');
    })();

    //Cache Dom
    const randQuote = document.getElementById('randQuote');

    //Events
    randQuote.addEventListener('click', setRandQuote)

    function setRandQuote() {
        const main = document.querySelector('main')
        const index = Math.floor(Math.random() * quoteLib.length);
        const quote = quoteLib[index].quote;
        const quotee = quoteLib[index].quotee;
        const favorite = quoteLib[index].favorite;

        removeCard();
        main.insertBefore(createCards(quote, quotee, favorite), main.firstChild);
    }
    setRandQuote();

    function removeCard() {
        const quoteCard = document.querySelector('.quote-card');
        if (quoteCard) quoteCard.remove();
    }

})();