import { background, headerSetup, footerSetup } from './pageSetup.js';
import { quoteLib } from './quotes.js';

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    favoriteQuotes();
    document.getElementById('favoriteBtn').focus();

})();

function favoriteQuotes() {
    quoteLib.filter(element => {
        if (element.favorite === true) createCards(element.quote, element.quoter);
    })

}

function createCards(quote, quoter) {
    const main = document.querySelector('.favorite-main');

    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');

    const favoriteQuote = document.createElement('p');
    favoriteQuote.classList.add('favorite-quote');
    favoriteQuote.innerText = quote;

    const favoriteQuoters = document.createElement('p');
    favoriteQuoters.classList.add('favorite-quoters');
    favoriteQuoters.innerText = quoter;

    const favoriteBtn = document.createElement('span');
    favoriteBtn.classList.add('material-icons', 'favorite-heart');
    favoriteBtn.innerText = 'favorite';

    main.appendChild(favoriteCard);
    favoriteCard.appendChild(favoriteQuote);
    favoriteCard.appendChild(favoriteQuoters);
    favoriteCard.appendChild(favoriteBtn);
}