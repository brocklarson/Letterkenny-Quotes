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
    const home_a = document.createElement('a');
    home_a.href = "index.html";
    const homeSpan = document.createElement('span');
    homeSpan.classList.add('material-icons');
    homeSpan.innerText = 'wb_sunny';

    const favorite = document.createElement('button');
    favorite.id = 'favoriteBtn';
    favorite.classList.add('footer-buttons');
    const favorite_a = document.createElement('a');
    favorite_a.href = 'favorite.html';
    const favoriteSpan = document.createElement('span');
    favoriteSpan.classList.add('material-icons');
    favoriteSpan.innerText = 'favorite';

    const search = document.createElement('button');
    search.id = 'searchBtn';
    search.classList.add('footer-buttons');
    const search_a = document.createElement('a');
    search_a.href = 'search.html';
    const searchSpan = document.createElement('span');
    searchSpan.classList.add('material-icons');
    searchSpan.innerText = 'search';

    const random = document.createElement('button');
    random.id = 'rndBtn';
    random.classList.add('footer-buttons');
    const random_a = document.createElement('a');
    random_a.href = 'random.html';
    const randomSpan = document.createElement('span');
    randomSpan.classList.add('material-icons');
    randomSpan.innerText = 'shuffle';

    footer.appendChild(home);
    footer.appendChild(favorite);
    footer.appendChild(search);
    footer.appendChild(random);
    home.appendChild(home_a)
    home_a.appendChild(homeSpan);
    favorite.appendChild(favorite_a);
    favorite_a.appendChild(favoriteSpan);
    search.appendChild(search_a);
    search_a.appendChild(searchSpan)
    random.appendChild(random_a);
    random_a.appendChild(randomSpan);
};

const pageSetup = () => {
    background();
    headerSetup();
    footerSetup();
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


export { pageSetup, profilePic, createCards };