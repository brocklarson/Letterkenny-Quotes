import { background, headerSetup, footerSetup } from './pageSetup.js';
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
    const copyBtn = document.getElementById('copyBtn');
    const setFavoriteBtn = document.getElementById('setFavoriteBtn');
    const randQuote = document.getElementById('randQuote');

    //Events
    setFavoriteBtn.addEventListener('click', setAsFavorite);
    randQuote.addEventListener('click', setRandQuote)

    function setRandQuote() {
        const index = Math.floor(Math.random() * quoteLib.length);
        quote.innerText = quoteLib[index].quote;
        quoters.innerText = quoteLib[index].quoter.join(', ');
    }
    setRandQuote();

    function setAsFavorite() {
        const index = quoteLib.findIndex(element => element.quote === quote.innerText);
        quoteLib[index].setFavorite();
        updateLocalStorage('quoteLib', quoteLib)

    }
})();