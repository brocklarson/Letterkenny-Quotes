import { background, headerSetup, footerSetup } from './pageSetup.js';
import { quoteLib } from './quotes.js';

(function pageInit() {
    background();
    headerSetup();
    footerSetup();
    document.getElementById('homeBtn').focus();
})();

const buttonFunction = (() => {
    //Cache Dom
    const quote = document.getElementById('quote');
    const quoters = document.getElementById('quoters');
    const copyBtn = document.getElementById('copyBtn');
    const setFavoriteBtn = document.getElementById('setFavoriteBtn');
    const rndBtn = document.getElementById('rndBtn');

    //Events
    copyBtn.addEventListener('click', function() {
        copyTextToClipboard(quote.innerText);
    });
    setFavoriteBtn.addEventListener('click', function() {
        quoteLib[getQuoteNum()].setFavorite();
    });
    rndBtn.addEventListener('click', setRandQuote);

    (function setQuoteOfDay() {
        const index = getQuoteNum();
        quote.innerText = quoteLib[index].quote;
        quoters.innerText = quoteLib[index].quoter.join(', ');
    })();

    function getQuoteNum() {
        const epoch = new Date(2000, 1, 1);
        const today = new Date();
        const diffInDays = Math.ceil((today - epoch) / (24 * 60 * 60 * 1000));
        const index = diffInDays % quoteLib.length;
        return index;
    }

    function setRandQuote() {
        document.querySelector('h1').innerText = `Random Quote`
        const index = Math.floor(Math.random() * quoteLib.length);
        console.log(index);
        quote.innerText = quoteLib[index].quote;
        quoters.innerText = quoteLib[index].quoter.join(', ');
    }

    //COPY TO CLIPBOARD
    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
})();