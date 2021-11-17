import { background, headerSetup, footerSetup, profilePic } from './pageSetup.js';
import { quoteLib } from './quotes.js';

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    profilePic();
    document.getElementById('setFavoriteBtn').classList.add('hide');
    document.getElementById('searchBtn').focus();

})();