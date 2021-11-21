import data from './quoteList.json';
import { getLocalStorage } from './storage.js';

class Quotes {
    constructor(
        quote = '',
        quotee = [],
        favorite = false
    ) {
        this.quote = quote
        this.quotee = quotee
        this.favorite = favorite
    }

    setFavorite() {
        if (this.favorite) this.favorite = false;
        else this.favorite = true;
    };
}
let quoteList = data.quoteList;
let quoteLib = [];

function createLib() {
    if (getLocalStorage('quoteLib') && getLocalStorage('quoteLib').length > 0) {
        quoteList = getLocalStorage('quoteLib');
    }
    quoteList.forEach((item) => {
        quoteLib.push(new Quotes(item.quote, item.quotee, item.favorite));
    })
}

createLib();
export { quoteLib }