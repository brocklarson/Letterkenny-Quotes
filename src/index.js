import { background, headerSetup, footerSetup } from './pageSetup.js';
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
    const quote = document.getElementById('quote');
    const quoters = document.getElementById('quoters');
    const copyBtn = document.getElementById('copyBtn');
    const setFavoriteBtn = document.getElementById('setFavoriteBtn');
    const rndBtn = document.getElementById('rndBtn');

    //Events
    setFavoriteBtn.addEventListener('click', setAsFavorite);

    (function setQuoteOfDay() {
        const index = getQuoteNum();
        quote.innerText = quoteLib[index].quote;
        quoters.innerText = quoteLib[index].quoter.join(', ');
        checkFavorite();
    })();

    function checkFavorite() {
        const favoriteBtn = document.querySelector('#setFavoriteBtn span')
        if (quoteLib[getQuoteNum()].favorite === true) {
            favoriteBtn.innerText = 'favorite';
        } else {
            favoriteBtn.innerText = 'favorite_border';
        }
    }

    function getQuoteNum() {
        const epoch = new Date(2000, 1, 1);
        const today = new Date();
        const diffInDays = Math.ceil((today - epoch) / (24 * 60 * 60 * 1000));
        const index = diffInDays % quoteLib.length;
        return index;
    }

    function setAsFavorite() {
        quoteLib[getQuoteNum()].setFavorite();
        updateLocalStorage('quoteLib', quoteLib);
        checkFavorite();
    }

})();