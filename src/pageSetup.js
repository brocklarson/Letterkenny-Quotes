import bgImg from './images/bg.jpg';
import bgLogo from './images/dog-logo.png';
import wayneImg from './images/wayne.png';
import darylImg from './images/daryl.png';
import danImg from './images/dan.png';
import coachImg from './images/coach.png';
import gailImg from './images/gail.png';
import katyImg from './images/katy.png';
import glenImg from './images/glen.png';
import mcmurrayImg from './images/mcmurray.png';
import tanisImg from './images/tanis.png';
import reillyJonesyImg from './images/reilly-jonesy.jpg';
import shoresyImg from './images/shoresy.png';
import stewartImg from './images/stewart.png';
import * as ClipboardJS from 'clipboard';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { quoteLib } from './quotes.js';
import { events } from './pubsub.js';

const pageInit = () => {
    preloader();
    background();
    headerSetup();
    footerSetup();
}

const preloader = () => {
    const preloader = document.querySelector('.preloader');

    const img = new Image();
    img.classList.add('preloader-img');
    img.src = bgLogo;

    preloader.appendChild(img);

    window.onload = function() {
        preloader.classList.add('hide');
    }
}

const background = () => {
    const bgContainer = document.createElement('div');
    bgContainer.classList.add('background');

    const background = new Image();
    background.classList.add('homepage-background');
    background.src = bgImg;

    const shadow = document.createElement('div');
    shadow.classList.add('shadow');

    const logo = new Image();
    logo.classList.add('background-logo');
    logo.src = bgLogo;

    document.body.appendChild(bgContainer);
    bgContainer.appendChild(background);
    bgContainer.appendChild(shadow);
    bgContainer.appendChild(logo);
};

const headerSetup = () => {
    const header = document.querySelector('header');

    const title = document.createElement('div');
    title.classList.add('app-title');
    const titleText = document.createElement('p');
    titleText.innerText = 'Letterkenny Quotes';

    const settings = document.createElement('div');
    settings.id = 'settingsBtn';
    settings.classList.add('header-icon');
    const settingsSpan = document.createElement('span');
    settingsSpan.classList.add('material-icons');
    settingsSpan.innerText = 'settings';

    header.appendChild(title);
    header.appendChild(settings);
    title.appendChild(titleText);
    settings.appendChild(settingsSpan);
};

const footerSetup = () => {
    const footer = document.querySelector('footer');

    const home = document.createElement('button');
    home.id = 'homeBtn';
    home.classList.add('footer-buttons');
    const homeSpan = document.createElement('span');
    homeSpan.classList.add('material-icons');
    homeSpan.innerText = 'wb_sunny';

    const favorite = document.createElement('button');
    favorite.id = 'favoriteBtn';
    favorite.classList.add('footer-buttons');
    const favoriteSpan = document.createElement('span');
    favoriteSpan.classList.add('material-icons');
    favoriteSpan.innerText = 'favorite';

    const search = document.createElement('button');
    search.id = 'searchBtn';
    search.classList.add('footer-buttons');
    const searchSpan = document.createElement('span');
    searchSpan.classList.add('material-icons');
    searchSpan.innerText = 'search';

    const random = document.createElement('button');
    random.id = 'rndBtn';
    random.classList.add('footer-buttons');
    const randomSpan = document.createElement('span');
    randomSpan.classList.add('material-icons');
    randomSpan.innerText = 'shuffle';

    footer.appendChild(home);
    footer.appendChild(favorite);
    footer.appendChild(search);
    footer.appendChild(random);
    home.appendChild(homeSpan);
    favorite.appendChild(favoriteSpan);
    search.appendChild(searchSpan)
    random.appendChild(randomSpan);
};

const createDOM = (page = 'homepage') => {
    (function init() {
        resetActiveClass();
        determineDOM();
    })();

    function resetActiveClass() {
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    }

    function determineDOM() {
        if (page === 'favorites') favoritesDOM();
        else if (page === 'random') randomDOM();
        else if (page === 'search') searchDOM();
        else if (page === 'settings') settingsModal();
        else homepageDOM();
    }

    function homepageDOM() {
        const main = document.createElement('main');
        main.classList.add('homepage-main');

        const title = document.createElement('h1');
        title.innerText = `Quote of the Day!`;

        document.body.appendChild(main);
        main.appendChild(title);
        document.getElementById('homeBtn').classList.add('active');
    }

    function favoritesDOM() {
        const main = document.createElement('main');
        main.classList.add('favorite-main');
        document.body.appendChild(main);
        document.getElementById('favoriteBtn').classList.add('active');
    }

    function randomDOM() {
        const main = document.createElement('main');
        main.classList.add('random-main');

        const btn = document.createElement('button');
        btn.id = `randQuote`;
        btn.innerText = `Random Quote`;

        document.body.appendChild(main);
        main.appendChild(btn);
        document.getElementById('rndBtn').classList.add('active');
    }

    function searchDOM() {
        const main = document.createElement('main');
        main.classList.add('search-main');

        const searchBarContainer = document.createElement('div');
        searchBarContainer.classList.add('search-bar-container');

        const searchIcon = document.createElement('span');
        searchIcon.classList.add('material-icons-outlined', 'search-bar-icon');
        searchIcon.innerText = `search`;

        const searchBar = document.createElement('input');
        searchBar.classList.add('search-bar');
        searchBar.id = `searchBar`;
        searchBar.setAttribute('type', 'text');
        searchBar.setAttribute('placeHolder', 'Search Quote or Quotee');
        searchBar.setAttribute('autocomplete', 'off');

        const backBtn = document.createElement('div');
        backBtn.id = `backButtonContainer`;
        backBtn.classList.add('back-button-container', 'material-icons-outlined', 'hide');

        const backIcon = document.createElement('span');
        backIcon.innerText = `arrow_back_ios`;

        const picContainer = document.createElement('div');
        picContainer.id = `profilePicContainer`;
        picContainer.classList.add('profile-pic-container');

        const quotesContainer = document.createElement('div');
        quotesContainer.id = `quotesContainer`;
        quotesContainer.classList.add('quotes-container');

        document.body.appendChild(main);
        main.appendChild(searchBarContainer);
        searchBarContainer.appendChild(searchIcon);
        searchBarContainer.appendChild(searchBar);
        main.appendChild(backBtn);
        backBtn.appendChild(backIcon);
        main.appendChild(picContainer);
        main.appendChild(quotesContainer);
        document.getElementById('searchBtn').classList.add('active');
    }

    function settingsModal() {
        const modal = document.createElement('div');
        modal.classList.add('settings-modal');

        const modalBackdrop = document.createElement('div');
        modalBackdrop.classList.add('settings-modal-backdrop');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('material-icons-outlined', 'settings-close');
        closeBtn.innerText = 'close';

        const cardOpacityText = document.createElement('p');
        cardOpacityText.innerText = 'Quote Card Opacity:';
        const opacityCarousel = document.createElement('ul');
        opacityCarousel.classList.add('opacity-carousel');
        const opacityOption1 = document.createElement('li');
        opacityOption1.innerText = 'Less';
        opacityOption1.setAttribute('style', 'background-color: rgba(var(--card-color),0.1);');
        const opacityOption2 = document.createElement('li');
        opacityOption2.innerText = 'Default';
        opacityOption2.setAttribute('style', 'background-color: rgba(var(--card-color),0.3);');
        const opacityOption3 = document.createElement('li');
        opacityOption3.innerText = 'More';
        opacityOption3.setAttribute('style', 'background-color: rgba(var(--card-color),0.6);');
        const opacityOption4 = document.createElement('li');
        opacityOption4.innerText = 'Most';
        opacityOption4.setAttribute('style', 'background-color: rgba(var(--card-color),0.9);');

        const fontSizeText = document.createElement('p');
        fontSizeText.innerText = 'Quote Font Size:';
        const fontSizeCarousel = document.createElement('ul');
        fontSizeCarousel.classList.add('fontSize-carousel');
        const fontSizeOption1 = document.createElement('li');
        fontSizeOption1.innerText = 'Small';
        fontSizeOption1.setAttribute('style', 'font-size: 20px;');
        const fontSizeOption2 = document.createElement('li');
        fontSizeOption2.innerText = 'Default';
        fontSizeOption2.setAttribute('style', 'font-size: 26px;');
        const fontSizeOption3 = document.createElement('li');
        fontSizeOption3.innerText = 'Large';
        fontSizeOption3.setAttribute('style', 'font-size: 32px;');
        const fontSizeOption4 = document.createElement('li');
        fontSizeOption4.innerText = 'Largest';
        fontSizeOption4.setAttribute('style', 'font-size: 40px;');

        const fontColorText = document.createElement('p');
        fontColorText.innerText = 'Quote Font Color:';
        const fontColorCarousel = document.createElement('ul');
        fontColorCarousel.classList.add('fontColor-carousel');
        const fontColorOption1 = document.createElement('li');
        fontColorOption1.innerText = 'Black';
        fontColorOption1.setAttribute('style', 'color: black;');
        const fontColorOption2 = document.createElement('li');
        fontColorOption2.innerText = 'White';
        fontColorOption2.setAttribute('style', 'color: whitesmoke;');
        const fontColorOption3 = document.createElement('li');
        fontColorOption3.innerText = 'Red';
        fontColorOption3.setAttribute('style', 'color: red;');
        const fontColorOption4 = document.createElement('li');
        fontColorOption4.innerText = 'Blue';
        fontColorOption4.setAttribute('style', 'color: blue;');
        const fontColorOption5 = document.createElement('li');
        fontColorOption5.innerText = 'Green';
        fontColorOption5.setAttribute('style', 'color: green;');
        const fontColorOption6 = document.createElement('li');
        fontColorOption6.innerText = 'Brown';
        fontColorOption6.setAttribute('style', 'color: #5b1c01;');

        const iconColorText = document.createElement('p');
        iconColorText.innerText = 'Quote Card Icon Color:';
        const iconColorCarousel = document.createElement('ul');
        iconColorCarousel.classList.add('iconColor-carousel');
        const iconColorOption1 = document.createElement('li');
        iconColorOption1.innerText = 'Black';
        iconColorOption1.setAttribute('style', 'color: black;');
        const iconColorOption2 = document.createElement('li');
        iconColorOption2.innerText = 'White';
        iconColorOption2.setAttribute('style', 'color: whitesmoke;');
        const iconColorOption3 = document.createElement('li');
        iconColorOption3.innerText = 'Red';
        iconColorOption3.setAttribute('style', 'color: red;');
        const iconColorOption4 = document.createElement('li');
        iconColorOption4.innerText = 'Blue';
        iconColorOption4.setAttribute('style', 'color: blue;');
        const iconColorOption5 = document.createElement('li');
        iconColorOption5.innerText = 'Green';
        iconColorOption5.setAttribute('style', 'color: green;');
        const iconColorOption6 = document.createElement('li');
        iconColorOption6.innerText = 'Brown';
        iconColorOption6.setAttribute('style', 'color: #5b1c01;');

        const defaultsBtn = document.createElement('btn');
        defaultsBtn.classList.add('defaults-btn');
        defaultsBtn.innerText = 'Restore Defaults';

        const suggestion = document.createElement('a');
        suggestion.innerText = 'Suggest a quote or a correction';
        suggestion.href = 'https://forms.gle/P39TXYQiaRqe6W269';
        suggestion.setAttribute('target', '_blank');

        document.body.appendChild(modalBackdrop);
        document.body.appendChild(modal);
        modal.appendChild(closeBtn);
        modal.appendChild(cardOpacityText);
        modal.appendChild(opacityCarousel);
        opacityCarousel.appendChild(opacityOption1);
        opacityCarousel.appendChild(opacityOption2);
        opacityCarousel.appendChild(opacityOption3);
        opacityCarousel.appendChild(opacityOption4);
        modal.appendChild(fontSizeText);
        modal.appendChild(fontSizeCarousel);
        fontSizeCarousel.appendChild(fontSizeOption1);
        fontSizeCarousel.appendChild(fontSizeOption2);
        fontSizeCarousel.appendChild(fontSizeOption3);
        fontSizeCarousel.appendChild(fontSizeOption4);
        modal.appendChild(fontColorText);
        modal.appendChild(fontColorCarousel);
        fontColorCarousel.appendChild(fontColorOption1);
        fontColorCarousel.appendChild(fontColorOption2);
        fontColorCarousel.appendChild(fontColorOption3);
        fontColorCarousel.appendChild(fontColorOption4);
        fontColorCarousel.appendChild(fontColorOption5);
        fontColorCarousel.appendChild(fontColorOption6);
        modal.appendChild(iconColorText);
        modal.appendChild(iconColorCarousel);
        iconColorCarousel.appendChild(iconColorOption1);
        iconColorCarousel.appendChild(iconColorOption2);
        iconColorCarousel.appendChild(iconColorOption3);
        iconColorCarousel.appendChild(iconColorOption4);
        iconColorCarousel.appendChild(iconColorOption5);
        iconColorCarousel.appendChild(iconColorOption6);
        modal.appendChild(defaultsBtn);
        modal.appendChild(suggestion);
    }
}

const createCards = (quote, quotee, favorite = false) => {

    const quoteCard = document.createElement('div');
    quoteCard.classList.add('quote-card');

    const cardQuote = document.createElement('p');
    cardQuote.classList.add('card-quote');
    cardQuote.innerText = quote;

    const cardQuotees = document.createElement('p');
    cardQuotees.classList.add('card-quotees');
    cardQuotees.innerText = `- ${quotee.join(', ')}`;

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('card-icon-container');

    const favoriteBtn = document.createElement('span');
    favoriteBtn.classList.add('material-icons', 'card-heart');
    if (favorite) favoriteBtn.innerText = 'favorite';
    else favoriteBtn.innerText = 'favorite_border';
    favoriteBtn.addEventListener('click', setAsFavorite);

    const copyBtn = document.createElement('span');
    copyBtn.classList.add('material-icons-outlined', 'card-copy');
    copyBtn.innerText = 'content_copy';

    quoteCard.appendChild(cardQuote);
    quoteCard.appendChild(cardQuotees);
    quoteCard.appendChild(iconContainer);
    iconContainer.appendChild(favoriteBtn);
    iconContainer.appendChild(copyBtn);

    (function setupClipboardJS() {
        const clipboard = new ClipboardJS('.card-copy', {
            target: function(trigger) {
                return trigger.parentNode.parentNode.firstChild;
            }
        });

        clipboard.on('success', function(e) {
            e.clearSelection();
        });
    })();

    (function setupTooltip() {
        tippy(copyBtn, {
            content: 'Quote Copied',
            placement: 'bottom',
            trigger: 'click',
            hideOnClick: 'false',
            onShow(instance) {
                setTimeout(() => {
                    instance.hide();
                }, 1500);
            }
        });
    })();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const shareBtn = document.createElement('span');
        shareBtn.classList.add('material-icons-outlined', 'card-share');
        shareBtn.innerText = 'share';
        iconContainer.appendChild(shareBtn);

        const shareData = {
            text: `"${quote}" -${quotee.join(', ')}, Letterkenny\n\n`,
            url: 'https://brocklarson.github.io/Letterkenny-Quotes/'
        }

        shareBtn.addEventListener('click', async() => {
            try {
                await navigator.share(shareData)
            } catch (err) {
                window.alert('Could not share using this device. Make sure you are using a mobile device with permissions to share!\n\nError: ' + err);
            }
        });
    }

    function setAsFavorite() {
        const index = quoteLib.findIndex(element => element.quote === quote);
        quoteLib[index].setFavorite();
        updateFavoriteIcon(index);
        events.publish('updateFavorite', ['quoteLib', quoteLib]);
    }

    function updateFavoriteIcon(index) {
        if (quoteLib[index].favorite) favoriteBtn.innerText = 'favorite';
        else favoriteBtn.innerText = 'favorite_border';
    }

    return quoteCard;
}

const profilePic = () => {
    const container = document.getElementById('profilePicContainer');

    const pictureSet = [
        { source: wayneImg, name: 'wayne' },
        { source: katyImg, name: 'katy' },
        { source: darylImg, name: 'daryl' },
        { source: danImg, name: 'dan' },
        { source: shoresyImg, name: 'shoresy' },
        { source: glenImg, name: 'glen' },
        { source: gailImg, name: 'gail' },
        { source: reillyJonesyImg, name: 'reillyJonesy' },
        { source: mcmurrayImg, name: 'mcmurray' },
        { source: coachImg, name: 'coach' },
        { source: tanisImg, name: 'tanis' },
        { source: stewartImg, name: 'stewart' }
    ];

    pictureSet.forEach(picture => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('pic-border');

        const img = new Image();
        img.classList.add('profile-pic');
        img.src = picture.source;
        img.id = picture.name;

        container.appendChild(imgContainer);
        imgContainer.appendChild(img);
    })
};


export { pageInit, profilePic, createCards, createDOM };