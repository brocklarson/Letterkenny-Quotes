import { background, headerSetup, footerSetup } from './pageSetup.js';
import { quoteLib } from './quotes.js';

(function init() {
    background();
    headerSetup();
    footerSetup();
})();

const quote = document.getElementById('quote');
const quoters = document.getElementById('quoters');

const randNum = Math.floor(Math.random() * quoteLib.length);

quote.innerText = quoteLib[randNum].quote;
quoters.innerText = quoteLib[randNum].quoter.join(', ');