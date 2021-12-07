import { pageInit, createCards, profilePic, createDOM } from './pageSetup.js';
import { quoteLib } from './quotes.js';
import { events } from './pubsub';

const homepage = () => {
    (function init() {
        createDOM('homepage');
        setQuoteOfDay();
    })();

    function setQuoteOfDay() {
        const main = document.querySelector('main')
        const index = getQuoteNum();
        const quote = quoteLib[index].quote;
        const quotee = quoteLib[index].quotee;
        const favorite = quoteLib[index].favorite;
        main.appendChild(createCards(quote, quotee, favorite));
    }

    function getQuoteNum() {
        const epoch = new Date(2000, 1, 1);
        const today = new Date();
        const diffInDays = Math.ceil((today - epoch) / (24 * 60 * 60 * 1000));
        const index = diffInDays % quoteLib.length;
        return index;
    }
};

const favoritesPage = () => {
    //Events
    events.subscribe('updateFavorite', updateFavorite);

    (function init() {
        createDOM('favorites');
        favoriteQuotes();
    })();

    function favoriteQuotes() {
        const main = document.querySelector('main');
        quoteLib.filter(element => {
            if (element.favorite === true) main.appendChild(createCards(element.quote, element.quotee, true));
        })
    }

    function updateFavorite() {
        //Check if on the favorites page
        //Subscribed event could call this when liking a quote
        const main = document.querySelector('main');
        if (!main.classList.contains('favorite-main')) return;

        removeCards();
        favoriteQuotes();
    }

    function removeCards() {
        const main = document.querySelector('main');
        let i = 0
        while (main.firstChild && i < 1000) {
            main.removeChild(main.firstChild);
            i++;
        }
    }
};

const randomPage = () => {
    (function init() {
        createDOM('random');
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

};

const searchPage = () => {
    let searchTimer;

    (function init() {
        createDOM('search');
        profilePic();
    })();

    //Cache DOM
    const searchBar = document.getElementById('searchBar');
    const searchBarContainer = document.querySelector('.search-bar-container');
    const quotesContainer = document.getElementById('quotesContainer');
    const profilePics = document.querySelectorAll('.profile-pic');
    const backButton = document.getElementById('backButtonContainer');

    //Events
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

};

const settings = () => {
    (function init() {
        createDOM('settings');
    })();

    //Cache DOM
    const modalBackdrop = document.querySelector('.settings-modal-backdrop');
    const settingsModal = document.querySelector('.settings-modal');
    const closeBtn = document.querySelector('.settings-close');


    //Events
    modalBackdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    function closeModal() {
        settingsModal.remove();
        modalBackdrop.remove();
    }
}

const setupPage = (() => {
    (function init() {
        pageInit();
        homepage();
        settings();
    })();

    //Cache DOM
    const footerBtns = document.querySelectorAll('.footer-buttons');
    const settingsBtn = document.getElementById('settingsBtn');

    //Events
    footerBtns.forEach(btn => {
        btn.addEventListener('click', changePage);
    });
    settingsBtn.addEventListener('click', () => { settings() });

    function changePage(event) {
        const clickedBtn = event.currentTarget.id;

        resetDOM();
        selectPage();

        function selectPage() {
            if (clickedBtn === 'favoriteBtn') favoritesPage();
            else if (clickedBtn === 'searchBtn') searchPage();
            else if (clickedBtn === 'rndBtn') randomPage();
            else homepage();
        }
    }

    function resetDOM() {
        const main = document.querySelector('main');
        main.remove();
    }
})();