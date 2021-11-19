import { background, headerSetup, footerSetup, profilePic, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    profilePic();
    document.getElementById('searchBtn').focus();
})();

const buttonFunction = (() => {
    const searchBar = document.getElementById('searchBar');
    const quotesContainer = document.getElementById('quotesContainer')

    let searchTimer;
    searchBar.addEventListener('input', (e) => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            searchQuotes();
        }, 300);
    });

    function searchQuotes() {
        const search = searchBar.value.toLowerCase();

        removeCards();
        if (search) {
            removePics();
            findMatches(search);
        } else {
            removeCards();
            addPics();
        }
    }

    function findMatches(search) {
        quoteLib.filter(element => {
            if (element.quote.toLowerCase().includes(search) || element.quoter.some(el => el.toLowerCase().includes(search))) {
                quotesContainer.appendChild(createCards(element.quote, element.quoter, element.favorite));
            }
        });
    }

    function addPics() {
        document.getElementById('profilePicContainer').classList.remove('hide');
    }

    function removePics() {
        document.getElementById('profilePicContainer').classList.add('hide');
    }

    function removeCards() {
        const cards = document.querySelectorAll('.quote-card');
        cards.forEach(card => card.remove());
    }
})();