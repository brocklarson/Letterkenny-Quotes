class Quotes {
    constructor(
        quote = '',
        quoter = [],
        favorite = false
    ) {
        this.quote = quote
        this.quoter = quoter
        this.favorite = favorite
    }

    setFavorite() {
        if (this.favorite) this.favorite = false;
        else this.favorite = true;
    };
}


let quoteLib = [];

function createLib() {
    quoteList.forEach((item) => {
        quoteLib.push(new Quotes(item.quote, item.quoter, item.favorite));
    })
}
const quoteList = [{
    quote: `If you have a problem with the majestic Canadian Goose, then you have a problem with me.`,
    quoter: [`Wayne`],
    favorite: false
}]

createLib();

export { quoteLib }