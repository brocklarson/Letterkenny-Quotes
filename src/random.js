import { background, headerSetup, footerSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';
import { updateLocalStorage } from './storage.js';


(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    document.getElementById('rndBtn').focus();
})();

const buttonFunction = (() => {
    //Cache Dom
    const quote = document.getElementById('quote');
    const quoters = document.getElementById('quoters');
    const randQuote = document.getElementById('randQuote');

    //Events
    randQuote.addEventListener('click', setRandQuote)

    function setRandQuote() {
        const main = document.querySelector('main')
        const index = Math.floor(Math.random() * quoteLib.length);
        const quote = quoteLib[index].quote;
        const quoter = quoteLib[index].quoter;

        removeCard();
        main.insertBefore(createCards(quote, quoter), main.firstChild);
    }
    setRandQuote();

    function removeCard() {
        const quoteCard = document.querySelector('.quote-card');
        if (quoteCard) quoteCard.remove();
    }

    function setAsFavorite() {
        const index = quoteLib.findIndex(element => element.quote === quote.innerText);
        quoteLib[index].setFavorite();
        updateLocalStorage('quoteLib', quoteLib)

    }
})();