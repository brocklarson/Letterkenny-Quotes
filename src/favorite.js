import { pageSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

const favoritesPage = (() => {
    //Cache DOM
    const main = document.querySelector('main');

    (function setupPage() {
        pageSetup();
        favoriteQuotes();
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.getElementById('favoriteBtn').classList.add('active');
    })();

    function favoriteQuotes() {
        quoteLib.filter(element => {
            if (element.favorite === true) main.appendChild(createCards(element.quote, element.quotee, true));
        })

    }

})();