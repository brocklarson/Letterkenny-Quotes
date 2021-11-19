import { background, headerSetup, footerSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

const main = document.querySelector('main');

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    favoriteQuotes();
    document.getElementById('favoriteBtn').focus();

})();

function favoriteQuotes() {
    quoteLib.filter(element => {
        if (element.favorite === true) main.appendChild(createCards(element.quote, element.quoter, true));
    })

}