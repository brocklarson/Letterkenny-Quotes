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
import reillyJonesyImg from './images/reilly-jonesy.png';
import shoresyImg from './images/shoresy.png';
import stewartImg from './images/stewart.png';

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

    const favorite = document.createElement('div');
    favorite.id = 'setFavoriteBtn';
    favorite.classList.add('favorite-container', 'header-icon');
    const favoriteSpan = document.createElement('span');
    favoriteSpan.classList.add('material-icons-outlined');
    favoriteSpan.innerText = 'favorite_border'

    const copy = document.createElement('div');
    copy.id = 'copyBtn';
    copy.classList.add('copy-container', 'header-icon');
    const copySpan = document.createElement('span');
    copySpan.classList.add('material-icons-outlined');
    copySpan.innerText = 'content_copy'


    header.appendChild(title);
    header.appendChild(favorite);
    header.appendChild(copy);
    title.appendChild(titleText);
    favorite.appendChild(favoriteSpan);
    copy.appendChild(copySpan);
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
    favorite_a.href = 'index.html';
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

const profilePic = () => {
    const container = document.getElementById('profilePicContainer');

    const profiles = [wayneImg, katyImg, darylImg, danImg, shoresyImg, glenImg, gailImg, reillyJonesyImg, mcmurrayImg, coachImg, tanisImg, stewartImg];
    profiles.forEach(profile => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('pic-border');

        const img = new Image();
        img.classList.add('profile-pic');
        img.src = profile;

        container.appendChild(imgContainer);
        imgContainer.appendChild(img);
    })
};

export { background, headerSetup, footerSetup, profilePic };