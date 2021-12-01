import { pageSetup, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';
import { events } from './pubsub';


const favoritesPage = (() => {
    //Cache DOM
    const main = document.querySelector('main');
    events.subscribe('updateFavorite', updateFavorite);

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

    function updateFavorite() {
        removeCards();
        favoriteQuotes();
    }

    function removeCards() {
        let i = 0
        while (main.firstChild && i < 1000) {
            main.removeChild(main.firstChild);
            i++;
        }
    }

})();