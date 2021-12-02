import { pageSetup, profilePic, createCards } from './pageSetup.js';
import { quoteLib } from './quotes.js';

const searchPage = (() => {
    let searchTimer;

    (function pageInit() {
        pageSetup();
        profilePic();
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.getElementById('searchBtn').classList.add('active');
    })();


    //Cache DOM
    const searchBar = document.getElementById('searchBar');
    const searchBarContainer = document.querySelector('.search-bar-container');
    const quotesContainer = document.getElementById('quotesContainer');
    const profilePics = document.querySelectorAll('.profile-pic');
    const backButton = document.getElementById('backButtonContainer');

    searchBar.addEventListener('input', handleSearchbar);
    profilePics.forEach(picture => picture.addEventListener('click', handlePicClick));

    function handleSearchbar() {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            searchBarSearch();
        }, 300);
    }

    function searchBarSearch() {
        const searchText = searchBar.value.toLowerCase();

        removeCards();
        if (searchText) {
            removePics();
            matchingQuote(searchText);
            matchingQuotee(searchText);
        } else {
            removeCards();
            addPics();
        }
    }

    function handlePicClick(event) {
        const id = event.target.id
        if (id === 'reillyJonesy') {
            pictureSearch('reilly');
            pictureSearch('jonesy');
        } else {
            pictureSearch(id);
        }
    }

    function pictureSearch(quotee) {
        searchBarContainer.classList.add('hide');
        removeCards();
        matchingQuotee(quotee);
        removePics();
        addBackButton();
    }

    function matchingQuote(search) {
        quoteLib.filter(element => {
            if (element.quote.toLowerCase().includes(search)) {
                quotesContainer.appendChild(createCards(element.quote, element.quotee, element.favorite));
            }
        });
    }

    function matchingQuotee(search) {
        quoteLib.filter(element => {
            if (element.quotee.some(el => el.toLowerCase().includes(search))) {
                quotesContainer.appendChild(createCards(element.quote, element.quotee, element.favorite));
            }
        });

    }

    function addPics() {
        profilePics.forEach(pic => pic.parentNode.classList.remove('hide'));
    }

    function removePics() {
        profilePics.forEach(pic => {
            pic.parentNode.classList.add('hide')
        });

    }

    function removeCards() {
        const cards = document.querySelectorAll('.quote-card');
        cards.forEach(card => card.remove());
    }

    function addBackButton() {
        backButton.classList.remove('hide');
        backButton.querySelector('span').addEventListener('click', returnHome);
    }

    function returnHome() {
        backButton.classList.add('hide')
        backButton.querySelector('span').removeEventListener('click', returnHome);
        removeCards();
        addPics();
        searchBarContainer.classList.remove('hide');
    }

})();