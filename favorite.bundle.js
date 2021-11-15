/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageSetup.js":
/*!**************************!*\
  !*** ./src/pageSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "background": () => (/* binding */ background),
/* harmony export */   "headerSetup": () => (/* binding */ headerSetup),
/* harmony export */   "footerSetup": () => (/* binding */ footerSetup),
/* harmony export */   "profilePic": () => (/* binding */ profilePic)
/* harmony export */ });
/* harmony import */ var _images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bg.jpg */ "./src/images/bg.jpg");
/* harmony import */ var _images_dog_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dog-logo.png */ "./src/images/dog-logo.png");
/* harmony import */ var _images_wayne_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wayne.png */ "./src/images/wayne.png");
/* harmony import */ var _images_daryl_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/daryl.png */ "./src/images/daryl.png");
/* harmony import */ var _images_dan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dan.png */ "./src/images/dan.png");
/* harmony import */ var _images_coach_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/coach.png */ "./src/images/coach.png");
/* harmony import */ var _images_gail_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/gail.png */ "./src/images/gail.png");
/* harmony import */ var _images_katy_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/katy.png */ "./src/images/katy.png");
/* harmony import */ var _images_glen_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/glen.png */ "./src/images/glen.png");
/* harmony import */ var _images_mcmurray_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/mcmurray.png */ "./src/images/mcmurray.png");
/* harmony import */ var _images_tanis_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/tanis.png */ "./src/images/tanis.png");
/* harmony import */ var _images_reilly_jonesy_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/reilly-jonesy.png */ "./src/images/reilly-jonesy.png");
/* harmony import */ var _images_shoresy_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/shoresy.png */ "./src/images/shoresy.png");
/* harmony import */ var _images_stewart_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/stewart.png */ "./src/images/stewart.png");















const background = () => {
    const bgContainer = document.createElement('div');
    bgContainer.classList.add('background');

    const background = new Image();
    background.classList.add('homepage-background');
    background.src = _images_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const shadow = document.createElement('div');
    shadow.classList.add('shadow');

    const logo = new Image();
    logo.classList.add('background-logo');
    logo.src = _images_dog_logo_png__WEBPACK_IMPORTED_MODULE_1__;

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

const profilePic = () => {
    const container = document.getElementById('profilePicContainer');

    const profiles = [_images_wayne_png__WEBPACK_IMPORTED_MODULE_2__, _images_katy_png__WEBPACK_IMPORTED_MODULE_7__, _images_daryl_png__WEBPACK_IMPORTED_MODULE_3__, _images_dan_png__WEBPACK_IMPORTED_MODULE_4__, _images_shoresy_png__WEBPACK_IMPORTED_MODULE_12__, _images_glen_png__WEBPACK_IMPORTED_MODULE_8__, _images_gail_png__WEBPACK_IMPORTED_MODULE_6__, _images_reilly_jonesy_png__WEBPACK_IMPORTED_MODULE_11__, _images_mcmurray_png__WEBPACK_IMPORTED_MODULE_9__, _images_coach_png__WEBPACK_IMPORTED_MODULE_5__, _images_tanis_png__WEBPACK_IMPORTED_MODULE_10__, _images_stewart_png__WEBPACK_IMPORTED_MODULE_13__];
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



/***/ }),

/***/ "./src/quotes.js":
/*!***********************!*\
  !*** ./src/quotes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quoteLib": () => (/* binding */ quoteLib)
/* harmony export */ });
/* harmony import */ var _quoteList_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quoteList.json */ "./src/quoteList.json");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



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
let quoteList = _quoteList_json__WEBPACK_IMPORTED_MODULE_0__.quoteList;
let quoteLib = [];

function createLib() {
    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('quoteLib') && (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('quoteLib').length > 0) {
        quoteList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('quoteLib');
    }
    quoteList.forEach((item) => {
        quoteLib.push(new Quotes(item.quote, item.quoter, item.favorite));
    })
}

createLib();
console.log(quoteLib);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage)
/* harmony export */ });
function updateLocalStorage(name, data) {
    if (_storageAvailable('localStorage')) {
        localStorage.setItem(name, JSON.stringify(data));
    }
}

function getLocalStorage(data) {
    if (_storageAvailable('localStorage')) {
        if (localStorage.getItem(data)) {
            return JSON.parse(localStorage.getItem(data));
        }
    }
}

function _storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}



/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57d874ae01ba9d7626d9.jpg";

/***/ }),

/***/ "./src/images/coach.png":
/*!******************************!*\
  !*** ./src/images/coach.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4575dd7570394419afe.png";

/***/ }),

/***/ "./src/images/dan.png":
/*!****************************!*\
  !*** ./src/images/dan.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31619be76e19ad35e04d.png";

/***/ }),

/***/ "./src/images/daryl.png":
/*!******************************!*\
  !*** ./src/images/daryl.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6d5f9e285c59673cdc1.png";

/***/ }),

/***/ "./src/images/dog-logo.png":
/*!*********************************!*\
  !*** ./src/images/dog-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a39ddbbb27cf4d64bf47.png";

/***/ }),

/***/ "./src/images/gail.png":
/*!*****************************!*\
  !*** ./src/images/gail.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee49736fc084b07279df.png";

/***/ }),

/***/ "./src/images/glen.png":
/*!*****************************!*\
  !*** ./src/images/glen.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e108582c83e0e7933b3c.png";

/***/ }),

/***/ "./src/images/katy.png":
/*!*****************************!*\
  !*** ./src/images/katy.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873417058ab445169057.png";

/***/ }),

/***/ "./src/images/mcmurray.png":
/*!*********************************!*\
  !*** ./src/images/mcmurray.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9530824a280157001050.png";

/***/ }),

/***/ "./src/images/reilly-jonesy.png":
/*!**************************************!*\
  !*** ./src/images/reilly-jonesy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c28d1b08d0135fac5da6.png";

/***/ }),

/***/ "./src/images/shoresy.png":
/*!********************************!*\
  !*** ./src/images/shoresy.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9520bbf3f3bdb58fc943.png";

/***/ }),

/***/ "./src/images/stewart.png":
/*!********************************!*\
  !*** ./src/images/stewart.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cce6a46a7d88fb5bab84.png";

/***/ }),

/***/ "./src/images/tanis.png":
/*!******************************!*\
  !*** ./src/images/tanis.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2434d3795a0a8d4bcbc9.png";

/***/ }),

/***/ "./src/images/wayne.png":
/*!******************************!*\
  !*** ./src/images/wayne.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b0b4d14166612da3d09.png";

/***/ }),

/***/ "./src/quoteList.json":
/*!****************************!*\
  !*** ./src/quoteList.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"quoteList":[{"quote":"Christianity is a charcuterie board. Come have some charcuterie with Christ, Jonesy. You\'ll like it. It\'s yummy.","quoter":["Glen"],"favorite":false},{"quote":"Your mom loves butt play like I love Häagen-Dazs, fuck it lets get some ice cream!","quoter":["Shoresy"],"favorite":false},{"quote":"Sing us a song or something. Do a trick. You\'re fucking useless.","quoter":["Wayne"],"favorite":false},{"quote":"Your sister’s hot, Wayne! There I said it! I said it! I regret nothing! I regret nothing!","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Let\'s take about 5 to 10% off\'er over there, Squirrely Dan","quoter":["Wayne"],"favorite":false},{"quote":"You got half your finger cut off one of three ways: bike chain, bandsaw, penalty box door.","quoter":["Wayne"],"favorite":false},{"quote":"If you have a problem with the majestic Canadian Goose, then you have a problem with me.","quoter":["Wayne"],"favorite":false},{"quote":"And he said, \\"Glen, this is your blank canvas, it is pale. It is colorless, it is almost cardboard-like. I want you to give it life, to give it color.\\"","quoter":["Glen"],"favorite":false},{"quote":"Your cousin said he could get a One Direction CD for your sister’s birthday party which is fine but he was a little quick to the draw there.","quoter":["Wayne"],"favorite":false},{"quote":"I am willing to give 69% of my company to a partner, why 69%? Both sides benefit!. Good Enough!","quoter":["Gail"],"favorite":false},{"quote":"I bet, the second you popped out, your mom wished she had a sewn up snapper.","quoter":["Tanis"],"favorite":false},{"quote":"This eau de toilette is enchantingly refreshing on summer days like this.","quoter":["Daryl"],"favorite":false},{"quote":"If I’m an ant I’m operating the seadoo with my antennae.","quoter":["Wayne"],"favorite":false},{"quote":"\\"Play a little 5 on 1\\"\\n\\"Hit the kitchen, mix a batch\\"\\n\\"Feed the ducks\\"\\n\\"Distribute some free literature\\"","quoter":["Daryl","Wayne"],"favorite":false},{"quote":"Wayne, your lips were made for didging, and you’re wasting your lips!","quoter":["Glen"],"favorite":false},{"quote":"Well, I guess the kitten\'s outta the clutch.","quoter":["Glen"],"favorite":false},{"quote":"\\"To be fair, if there\'s one woman who could make me switch teams, she is it.\\"\\n\\"Wait. Glen, switch teams to what?\\"\\n\\"...Catholocism\\"","quoter":["Glen","Katy"],"favorite":false},{"quote":"You’re a cup of baby carrots, ya fucking asshole.","quoter":["Wayne"],"favorite":false},{"quote":"Your mom just liked my Instagram post from 2 years ago in Puerto Vallarta. Tell her I’ll put my swim trunks on for her any time she likes.","quoter":["Shoresy"],"favorite":false},{"quote":"That’s a Texas sized 10-4.","quoter":["Everyone"],"favorite":false},{"quote":"If you chodes walk out of there with all of your chicklets and I\'m a fucking ferret. Piss off","quoter":["Tanis"],"favorite":false},{"quote":"He is otherworldly! He’s got a dome like an Easter Island statue.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"I\'d say give your balls a tug but it looks like your pants are doing that for ya","quoter":["Wayne"],"favorite":false},{"quote":"Goddamn Dickskin cuttin\' into my gin n\' tonic time, that\'s all I know.","quoter":["Mrs. McMurrary"],"favorite":false},{"quote":"Must be fuckin\' nice","quoter":["Squirrely Dan"],"favorite":false},{"quote":"I made your mom so wet, Trudeau had to deploy a 24-hour national guard unit to stack sandbags around my bed.","quoter":["Shoresy"],"favorite":false},{"quote":"You gonna fight with those shades or play pokerstars.com","quoter":["Daryl"],"favorite":false},{"quote":"Do you wanna know what I’d reach into a pirate hooker’s chamber pot before I’d reach in there.","quoter":["Wayne"],"favorite":false},{"quote":"Well nots to be impolite but this gal suggested that maybe I should have some attentions paid to my butthole. That ever happen to you guys?","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Did little Natisha take your last halloween Oreo?? You didn’t get a chance to say goodbye to that delicious orange frosting?","quoter":["Coach"],"favorite":false},{"quote":"Your sister thinks you smoke too much when you’re drinkin’ but your grandpa always said “a smoke and a beer go together like a piss and a fart.”","quoter":["Wayne"],"favorite":false},{"quote":"Oh, I wouldn’t say shit if my mouth was full of it.","quoter":["Shoresy"],"favorite":false},{"quote":"We only got one shot at this. One chance. One win. You know? Vomit on your mom’s spaghetti, or whatever that talking singer says.","quoter":["Coach"],"favorite":false},{"quote":"You must acknowledge the appetite for negativity in today’s world. The misfortune of others, it’s become sustenance.","quoter":["Stewart"],"favorite":false},{"quote":"\\"Nice onesie. Does it come in men’s?\\"\\n\\"Oh I think you come in men enough for all of us\\"","quoter":["Jonesy","Wayne"],"favorite":false},{"quote":"You stopped toe curlin’ in the hot tub ‘cause you heard sperms stay alive in there and you’ve seen Teenage Mutant Ninja Turtles enough times to know how that story ends.","quoter":["Wayne"],"favorite":false},{"quote":"I want to be close to Christ...and Wayne...and Wayne... Who will touch me first; Is it Christ or Wayne...","quoter":["Glen"],"favorite":false},{"quote":"There’s more to life than a little Hulu and you-screw, big brother.","quoter":["Katy"],"favorite":false},{"quote":"“I’m coming, Shoresy!”\\n\\"“Heard the same thing, bud, from your mom seven times, and that’s not even my record, ya fucking loser.”","quoter":["Shoresy"],"favorite":false},{"quote":"All butts are gay, but not all gays have butts.","quoter":["Jonesy"],"favorite":false},{"quote":"I’m here for a normal reason","quoter":["Glen"],"favorite":false},{"quote":"Would the secretary note that aforementioned coat hangers have such been moved, thanks to a very over-zealous beaver.","quoter":["McMurray"],"favorite":false},{"quote":"The Ginger and Boots effed a dead ostrich. Of course I know what the male ones are called! Check my browser history.","quoter":["Glen"],"favorite":false},{"quote":"Hard no.","quoter":["Wayne"],"favorite":false},{"quote":"We’re just speaking hypo-ethically here bud","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Your pal squeezed himself into the same section of a revolving door behind you one time and you’re still pals but like, you’re not about sit beside him at a fuckin’ camp fire.","quoter":["Wayne"],"favorite":false},{"quote":"Fuck you, Jonesy, tell your mom I drained the bank account she set up for me. Top it up so I can get some fucking KFC.","quoter":["Shoresy"],"favorite":false},{"quote":"You came to after having a bar fight. Felt like you got hit by a car, right? But your pal had your back, went on the attack, but it turned off his gal like a night light.","quoter":["Daryl"],"favorite":false},{"quote":"You wish there was a pied piper for possums. But there isn’t, so you’re just gonna have to keep picking ‘em off with a .22.","quoter":["Wayne"],"favorite":false},{"quote":"\\"Look at this kid.\\"\\n\\"Fuckin beauty, this kid.\\"\\n\\"Kid lights lamp.\\"\\n\\"hashtag lamplight\\"","quoter":["Jonesy","Reilly"],"favorite":false},{"quote":"Let’s go easy over there, Squirrely Dan.","quoter":["Wayne"],"favorite":false},{"quote":"Your dad says guys with big trucks have little dinks. And that makes sense cuz you want a real big truck and got a real little dink.","quoter":["Wayne"],"favorite":false},{"quote":"Not my pig, not my farm.","quoter":["Wayne"],"favorite":false},{"quote":"What I said was: I got real long eye lashes. Well I’m surprised no one\'s ever noticed that.","quoter":["Wayne"],"favorite":false},{"quote":"\\"Ever had a cup o\' fart?\\"\\n\\"You can of\' fuck off\\"","quoter":["Daryl, Wayne"],"favorite":false},{"quote":"Never heard it called that. Heard it called spunking a few times though","quoter":["Gail"],"favorite":false},{"quote":"Tarps off boys","quoter":["Jonesy, Reilly"],"favorite":false},{"quote":"Ariana grande looks like she\'s 8 tit fucker, I\'m giving the pre-school a plate number and Gretz\'s daughter is a married woman you classless you piece of shit she wouldn\'t fuck you if you had Mario\'s dangles and Messier\'s dick.","quoter":["Shoresy"],"favorite":false},{"quote":"Yew!","quoter":["Everyone"],"favorite":false},{"quote":"\\"My wife died 3 years ago\\"\\n\\"Yeah, well, one look at you and it\'s clear she\'s in a better place now, you fuckin\' asshole!\\"","quoter":["Coach","Mrs. McMurrary"],"favorite":false},{"quote":"Your little brother put a stink bomb in a nerf gun and fired it at his bus driver. fuck, no more kids table with those big boy moves.","quoter":["Wayne"],"favorite":false},{"quote":"Oh, get off the cross, we need the wood.","quoter":["Wayne"],"favorite":false},{"quote":"Fuck you, Jonesy, your life is so pathetic I get a charity tax break just by hanging around you!","quoter":["Shoresy"],"favorite":false},{"quote":"Fuck you, Betty-Ann, your breath’s so bad it gave me an existential crisis — it made me question my whole life.","quoter":["Shoresy"],"favorite":false},{"quote":"On a scale from one to America, how free are you right now?","quoter":["Katy"],"favorite":false},{"quote":"No such thing as a 6 knuckler, if there was I’d know about it.","quoter":["Gail"],"favorite":false},{"quote":"Oh my gourd!","quoter":["Glen"],"favorite":false},{"quote":"A gal at the bar said she liked how your pants fit but she said it in a baby voice and really she can do that on her own time.","quoter":["Wayne"],"favorite":false},{"quote":"That kid is a polished turd.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Make sure you use that sunscreen ‘cause it’s a great day for hay.","quoter":["Gail"],"favorite":false},{"quote":"Okay Dary. Dary, okay.","quoter":["Wayne"],"favorite":false},{"quote":"Have it your way, shirt-tucker!","quoter":["Stewart"],"favorite":false},{"quote":"Buckle up because they’re fucking ugly. Of course, that’s not to say I have it all my damn self.","quoter":["Wayne"],"favorite":false},{"quote":"You love that movie \'The Fox and the Hound\' so much you can’t bring yourself to kill the fox that’s been getting into the chicken coop. You don’t care if that makes you softer than a Disney matinee.”","quoter":["Squirrely Dan"],"favorite":false},{"quote":"You had a party and there was no piss around the toilet after which most certainly means your friends piss sitting down","quoter":["Wayne"],"favorite":false},{"quote":"\\"I see the muscle shirt came today. Muscles coming tomorrow?\\"\\n\\"Did ya get a tracking number?\\"\\n\\"Oh I hope he got a tracking number.\\"\\n\\"That package is going to be smaller than the one you’re sportin’ now.\\"","quoter":["Wayne","Daryl"],"favorite":false},{"quote":"Well girth is the question mark, what changed? Did I say that?","quoter":["Glen"],"favorite":false},{"quote":"I\'d have a beer","quoter":["Everyone"],"favorite":false},{"quote":"This dog is different. Strong, silent type. Hard worker. No bullshit. Fuck, I\'d do him.","quoter":["Gail"],"favorite":false},{"quote":"That was well brought up. Too bad you weren’t.","quoter":["Katy"],"favorite":false},{"quote":"Get this guy a fuckin\' Puppers","quoter":["Wayne"],"favorite":false},{"quote":"I need to give you one more chance to retract, no questions asked. Before this conversation becomes a confrontation.","quoter":["Gail"],"favorite":false},{"quote":"Hey, can I have your address? I\'ll put a little note in the mail, remind you how fuckin\' useless you are.… Can I grab your email? Oh, I\'ll just get it from your mom.","quoter":["Shoresy"],"favorite":false},{"quote":"I seen Samuel in the laundry room with a cat one time and you just know that little fucker is gonna put it in the dryer.","quoter":["Wayne"],"favorite":false},{"quote":"I mean, just because my name is Reilly doesn’t necessarily mean that I’m a drunken leprechaun.","quoter":["Reilly"],"favorite":false},{"quote":"We are nones of us perfects, and that is what I appreciates about us.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"You could cuts the tension in here with a fuckin\' beach balls","quoter":["Squirrely Dan"],"favorite":false},{"quote":"You’re made of spare parts, aren’t you, bud?","quoter":["Wayne"],"favorite":false},{"quote":"You better fix that divot \'cause Canada Gooses would fix it for you.","quoter":["McMurray"],"favorite":false},{"quote":"Figure it out!","quoter":["Everyone"],"favorite":false},{"quote":"I flick more bean than a Starbucks barista","quoter":["Gail"],"favorite":false},{"quote":"Hey, what\'s up? Kidding, I don\'t give a fuck","quoter":["Tanis"],"favorite":false},{"quote":"The stupidest thing I ever heard in my life is that a baby is smart","quoter":["Wayne"],"favorite":false},{"quote":"You wanna know what, so long as everyone\'s having a good time, ain\'t no reason to be a poopy-pants.","quoter":["Wayne"],"favorite":false},{"quote":"Wanna 68? You go down on me, and I\'ll owe you one","quoter":["Gail"],"favorite":false},{"quote":"To be fair","quoter":["Everyone"],"favorite":false},{"quote":"\\"If DMX was here right now, he\'d hoof you right in the nuts.\\"\\n\\"I think DMX would assume Dary\'d already been hoofed in the nuts.\\"","quoter":["Katy","Wayne"],"favorite":false},{"quote":"Give a man 30 idle seconds and he’s gonna get a boner.","quoter":["Daryl"],"favorite":false},{"quote":"You woke up with your horn looking out the window but ya gotta be at work in 20 so it’s now or never. I should say.","quoter":["Wayne"],"favorite":false},{"quote":"\\"That\'s right! I will exorcise the spirit out of Rold and cast it into heyyyllllll.\\"\\n\\"\\"Exorcise him Glen!\\"\\n\\"\\"What? I don\'t know how do that! I did not think it would come up.\\"","quoter":["Glen"],"favorite":false},{"quote":"Wondrous!","quoter":["Stewart"],"favorite":false},{"quote":"The only animal in the animal kingdom that wants anything to do with Canada gooses… is Canada mooses.","quoter":["Wayne"],"favorite":false},{"quote":"None of it, none of it makes sense.","quoter":["Glen"],"favorite":false},{"quote":"I have never been less embarrassed in all my life.","quoter":["Coach"],"favorite":false},{"quote":"If I know you Wayne, and I am 100% sure I would like to get to know you better...","quoter":["Glen"],"favorite":false},{"quote":"Fuck my entire fucking life, you titfuckers light a match the whole fucking barns going up","quoter":["Shoresy"],"favorite":false},{"quote":"3 things: I hit you, you hit the pavement and I jerk off on your driver’s side door handle.","quoter":["Shoresy"],"favorite":false},{"quote":"We got bits, bits coming out of the ass. Twist bits, drill bits, fucking brad bits. All over the place. You\'re going to have so many bits you can put them in your tits, you can put them in your mouth, you can shake them all around, do a little dance, and all kinds of shit. Bits all over the place. You can have so many you can lick \'em, suck \'em, stick \'em, fuck \'em right in the fuckin... not for me though but somebody else whose into that kind of shit.","quoter":["McMurray"],"favorite":false},{"quote":"And I suggest you let that one marinate.","quoter":["Wayne"],"favorite":false},{"quote":"Look at you. I\'m lovin\' this. You\'re like a shark. I\'m scared. Like a Julie Moore, or like a Jessie Chastain.","quoter":["Glen"],"favorite":false},{"quote":"We need backup, boys.","quoter":["Jonesy"],"favorite":false},{"quote":"Hey! He said simmers down so simmers down! Why don’t you go eat some tartares ya snail-sucking mime lovers?!","quoter":["Squirrely Dan"],"favorite":false},{"quote":"\\"Pump the brakes. You take your shirt off but leave your sunglasses on?\\"\\n\\"What sort of backwards fucking pageantry is that?\\"","quoter":["Daryl","Wayne"],"favorite":false},{"quote":"Oh. Oh, fuck.","quoter":["Wayne"],"favorite":false},{"quote":"If you can be one thing, you should be efficient.","quoter":["Wayne","Katy"],"favorite":false},{"quote":"Do you know what, I don’t want you to kiss and tell, that’s impolite… but I am kind of curious.","quoter":["Wayne"],"favorite":false},{"quote":"It’s a hard life picking stones and pulin’ teats, but as sure as God’s got sandals, it beats fightin’ dudes with treasure trails.","quoter":["Wayne"],"favorite":false},{"quote":"Wayne! How\'s the good \'n\' you bad are you now?","quoter":["McMurray"],"favorite":false},{"quote":"Oh, come on, kitten. I won’t tell anyone.","quoter":["Wayne"],"favorite":false},{"quote":"I’m so upset about my perennials.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"…I’m too fat to run.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Fuckin\' Embarrassing!","quoter":["Coach"],"favorite":false},{"quote":"Oh I’m stomping the brakes, put that idea right through the fucking windshield.","quoter":["Katy"],"favorite":false},{"quote":"Seeing as this is most certainly a one-off event and not a tradition that also falls on some made-up holiday that I couldn’t give a cats queef about, I’m out. There’s happiness calling my name from the bottom of a bottle of Puppers.","quoter":["Wayne"],"favorite":false},{"quote":"That microwave right there was probably touched by Mahatma Ghandi, easy, maybe even Jesus. The proper thing, I guarantee you, is worth $100,00, no problem.","quoter":["McMurray"],"favorite":false},{"quote":"Yeah. Oh, hey, look at you, ground.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"\\"You aesthetician quoth that one for you?\\"\\n\\"You can kiss my aesthetician\\"","quoter":["Wayne","Daryl"],"favorite":false},{"quote":"my safe word is uuuuunnnhhh","quoter":["Gail"],"favorite":false},{"quote":"\\"Fuck you, Jonesy, your mom wants to name the baby after the place it was conceived. Can\'t wait to meet Martha\'s Vineyard Shore.\\"\\n\\"Fuck you, Reilly, your mom wants the same thing. How do I shorten down \'Handicapped Bathroom at Cheesecake Factory in Boca Raton?\'\\"","quoter":["Shoresy"],"favorite":false},{"quote":"It’s always ok to fart when you’re alone. Accept when you’re in elevators. That’s uncouth.","quoter":["Wayne"],"favorite":false},{"quote":"Wheel. Snipe. Celly.","quoter":["Jonesy","Reilly"],"favorite":false},{"quote":"Oh! That\'s a Beyonce seance-ay!","quoter":["Glen"],"favorite":false},{"quote":"You’re 10-ply, bud.","quoter":["Wayne"],"favorite":false},{"quote":"\\"Say Dan, you gonna cold rock a kilt?\\"\\n\\"Like my grandpas and his grandpas before him. A little class, a little sass, and a lot of ass\\"","quoter":["Wayne","Squirrely Dan"],"favorite":false},{"quote":"Hold my spitter","quoter":["Jonesy","Reilly"],"favorite":false},{"quote":"You knew your pal had come into money when he started throwing out perfectly good pistachios like he was above cracking ‘em open with a box cutter like the rest of us.","quoter":["Daryl"],"favorite":false},{"quote":"\\"You aren\'t even religious.\\"\\n\\"Who\'s got that kind of money?\\"","quoter":["Katy","Wayne"],"favorite":false},{"quote":"Your friends are out picking off groundhogs down the side of the road and they want you to come but your dads got the 22 and your gas tank is dry as a fart.","quoter":["Wayne"],"favorite":false},{"quote":"Looking for a tilly? Let\'s have a donnybrook.","quoter":["Reilly"],"favorite":false},{"quote":"It’s like algebra…why you gotta put numbers and letters together? Why can’t you just go fuck yourself?","quoter":["Wayne"],"favorite":false},{"quote":"3 things: I hit you, you hit the pavement, ambulance hits 60.","quoter":["Shoresy"],"favorite":false},{"quote":"Five hole\'s wide open boys","quoter":["Ron"],"favorite":false},{"quote":"Give your balls a tug you titfuckers","quoter":["Shoresy"],"favorite":false},{"quote":"I\'d hammer a cocksuck\'n gin \'n tonic, that\'s all I know.","quoter":["Mrs. McMurrary"],"favorite":false},{"quote":"That kid\'s a polished turd","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Satan has secured his estate, thousands below the asking price.","quoter":["Glen"],"favorite":false},{"quote":"I won’t go down in history but I’ll go down on you.","quoter":["Gail"],"favorite":false},{"quote":"Your sister’s lasagna gave everyone the scoots for weeks up in here.","quoter":["Gail"],"favorite":false},{"quote":"Well, I guess the teddy\'s out of the tickle trunk.","quoter":["Glen"],"favorite":false},{"quote":"Your friend said waking up with an erection is the sign of a healthy male which was fine till you seen him sleep pole to hole with his dog Tim.","quoter":["Wayne"],"favorite":false},{"quote":"What’s up with your body hair, you big shoots? You look like a 12-year-old Dutch girl.","quoter":["Wayne"],"favorite":false},{"quote":"Pitter-patter, let’s get at ‘er.","quoter":["Everyone"],"favorite":false},{"quote":"To what do I owe the pleasure of getting double Dycked?","quoter":["Glen"],"favorite":false},{"quote":"I, McMurray, have a 5.15 inch penis","quoter":["McMurray"],"favorite":false},{"quote":"There’s a gal in the next township who got the stinker removed from a skunk and she keeps it as a pet so that’s pretty much par for the course there, eh.","quoter":["Wayne"],"favorite":false},{"quote":"Got anymore of that electric lettuce? These darts aren’t doing it.","quoter":["Shoresy"],"favorite":false},{"quote":"\\"Do you guys do crossfit?\\"\\n\\"You can cross the fuck off\\"","quoter":["Daryl","Wayne"],"favorite":false},{"quote":"When a friend asks for help, you help \'em","quoter":["Everyone"],"favorite":false},{"quote":"If anybody knows how hot we are, you\'re looking at them","quoter":["Reilly"],"favorite":false},{"quote":"Sounds like your old man should\'ve kicked your ass another time or two","quoter":["Wayne"],"favorite":false},{"quote":"Does someone around here have a problem with Canada Gooses taking Canada deuces?","quoter":["Wayne"],"favorite":false},{"quote":"Penalty\'. P-E-N-E-L-D-Y. \'Penalty\'.","quoter":["McMurray"],"favorite":false},{"quote":"Well, there’s nothing better than a fart. Except for kids falling off bikes, maybe. Fuck, I could watch kids falling off bikes all day, I don’t give a fuck about your kids.","quoter":["Wayne"],"favorite":false},{"quote":"This eau de toilette is enchantingly refreshing on summer days like this","quoter":["Daryl"],"favorite":false},{"quote":"On a scale from one to America, how free are you right now?","quoter":["Katy"],"favorite":false},{"quote":"You know not to be impolite but sometimes a gal will do some kissing on the ears. Which makes me uncomfortable because even though I clean my ears, sometimes a tater will just roll out of there unexpected","quoter":["Wayne"],"favorite":false},{"quote":"How\'re ya now. Good\'n you? Not so bad","quoter":["Everyone"],"favorite":false},{"quote":"Look if you are coming, you better come correct.","quoter":["Gail"],"favorite":false},{"quote":"\\"Here’s a poem. Starlight, star bright, why the fuck you got earrings on?\\"\\n\\"Bet your lobes ain’t the only thing that got a hole punched in ’em.\\"","quoter":["Wayne","Daryl"],"favorite":false},{"quote":"Tim’s, McDonald’s, and the beer store are all closed on Christmas Day. And that’s your whole world right there.","quoter":["Wayne"],"favorite":false},{"quote":"Shoulda heard your mom last night she sounded like a window closing on a tonkanese cats tail like, \'mrow!\'","quoter":["Shoresy"],"favorite":false},{"quote":"\\"I seen Stewart\'s horn\\"\\n\\"What?\\"\\n\\"You seen his impaler?\\"\\n\\"His bobby dangler?\\"\\n\\"Well...\\"\\n\\"You seen his PhD?\\"\\n\\"His WMD?\\"\\n\\"Now, look, fellas...\\"\\n\\"You seen his friendly weapon?\\"\\n\\"His sticky grenade?\\"\\n\\"His ground squirrel?\\"\\n\\"Yeah, I seen his ground squirrel.\\"","quoter":["Wayne","Katy","Daryl","Squrrely Dan"],"favorite":false},{"quote":"Do you ever notice when you go to merge there just happens to be 6 inbreds merging at the exact same time? Come off the ramp and get your fuckin’ foot in it.","quoter":["Daryl"],"favorite":false},{"quote":"Not my forte","quoter":["Katy"],"favorite":false},{"quote":"I though it was pretty funny when I said \'Florida State Seminal Vesicles\' and nobody laughed","quoter":["Wayne"],"favorite":false},{"quote":"There\'s a line around the shop for this popup shop","quoter":["Jonesy"],"favorite":false},{"quote":"You’re pretty good at wrestlin’ there, Katy, and that’s what I appreciates about you.","quoter":["Squirrely Dan"],"favorite":false},{"quote":"\\"I don\'t smoke weed any more.\\"\\n\\"Or any less.\\"","quoter":["Katy","Squirrely Dan"],"favorite":false},{"quote":"Your friend had a clear win in a scrap with a Skid the other night but he put on Chapstick right after which makes it a draw, really.","quoter":["Wayne"],"favorite":false},{"quote":"\\"Where exactly do you want Wayne to touch you?\\"\\n“Well, in my spirit. Where else would I mean?”","quoter":["Katy","Glen"],"favorite":false},{"quote":"Don\'t you remember when that plane had to land on the river in New York \'cause Canada Gooses flew into the engine? It\'s \'cause Canada Gooses likely had intel there was a pedophile or two on board and took matters into their own hands. As they should!","quoter":["Wayne"],"favorite":false},{"quote":"Call me a cake, ‘cause I’ll go straight to your ass, cowboy!","quoter":["Gail"],"favorite":false},{"quote":"If she\'s always listening to your ass acoustics, or even worse, smellin\' \'em, I guarantee she\'ll be slower and slower to crawl into bed with you at night.","quoter":["Wayne"],"favorite":false},{"quote":"\\"How many times you pull your horn today bud?\\"\\n\\"Aww she\'s bashful.\\"\\n\\"Ballpark, 6-8?\\"\\n\\"You\'re a fuckin animal.\\"","quoter":["Wayne","Daryl"],"favorite":false},{"quote":"My cup runneth over!","quoter":["Glen"],"favorite":false},{"quote":"I swing both ways, so if you ever want to invite a girl over... or a guy","quoter":["Tanis"],"favorite":false},{"quote":"\\"It\'s a four leaf clover, make a wish.\\"\\n\\"I wish you weren\'t so fucking awkward, bud\\"","quoter":["Daryl","Wayne"],"favorite":false},{"quote":"I\'d jerk off her dad just to see where she came from.","quoter":["Gail"],"favorite":false},{"quote":"How did you manage to fluff that up?","quoter":["Glen"],"favorite":false},{"quote":"You’re pretty sweet on your new gal but if she forgets to close the third door of your truck before the passenger door one more time it’s f*ck*n’ over I’ve had it.","quoter":["Wayne"],"favorite":false},{"quote":"You fuckin’ serious with that hair?","quoter":["Daryl"],"favorite":false},{"quote":"I can\'t remember the last time five men came in this church so aggressively. Or can I?","quoter":["Glen"],"favorite":false},{"quote":"Do-re-mi, Do-re-miiii, 19, go fuck yourself","quoter":["Daryl","Wayne","Squirrely Dan"],"favorite":false},{"quote":"Closest you’re gettin’ to any action this weekend is givin’ the dairy cow’s teets a good scrubbin’.","quoter":["Wayne"],"favorite":false},{"quote":"Your cousin named his cat Harry Pottery barn which was confusing til you found out he named his bong Samwise Ganja.","quoter":["Wayne"],"favorite":false},{"quote":"\\"I\'ve never been to a pride parade, what\'s it like\\"\\n\\"It\'s like a Santa Claus parade except instead of handing out candy they hand out condoms\\"","quoter":["Tanis"],"favorite":false},{"quote":"Lets set up in Gretzsky\'s office, work my quiet zone","quoter":["Ron"],"favorite":false},{"quote":"Oh, c’mon, where’s your jam, bud?","quoter":["Reilly"],"favorite":false},{"quote":"They\'re just pheasants with better marketing.","quoter":["Coach"],"favorite":false},{"quote":"More of a didjeri-don\'t then..?","quoter":["Glen"],"favorite":false},{"quote":"Ohhhhh. That’s a sin. I’m gonna have to skedaddle.","quoter":["Glen"],"favorite":false},{"quote":"Your life’s so fucking pathetic, I ran a charity 15k to raise awareness for it.","quoter":["Shoresy"],"favorite":false},{"quote":"You must evolve from your primitive thinking!","quoter":["Stewart"],"favorite":false},{"quote":"Buddy you couldn’t wheel a fuckin’ tire down a hill.","quoter":["Wayne"],"favorite":false},{"quote":"A fuckin’ Crossfitter gave you the stink eye flipping tires down the street trying to look hard. Buddy, you’re softer than a Cinnabon sampler.","quoter":["Wayne"],"favorite":false},{"quote":"\\"How many planets are there?\\"\\n\\"8\\"\\n\\"About to be 7 when I Destroy Uranus.\\"","quoter":["Gail"],"favorite":false},{"quote":"Bref-kest","quoter":["Daryl"],"favorite":false},{"quote":"I made an oopsie. Can you tell Jonesy’s mom to pick up Riley’s mom on the way to my place? I doubled booked them by mistake you fucking loser.","quoter":["Shoresy"],"favorite":false},{"quote":"Fuck you, Reilly, your mom ugly cried because she left the lens cap on the camcorder last night.","quoter":["Shoresy"],"favorite":false},{"quote":"There’s some buttfuckery at play here.","quoter":["Wayne"],"favorite":false},{"quote":"If you had as many bucks in your wallet as bucks mounted on your wall you’d have, well, give or take six bucks","quoter":["Wayne"],"favorite":false},{"quote":"If you smelly gamey, you ain’t gonna lay me.","quoter":["Katy"],"favorite":false},{"quote":"There will be MDMA, DMT, PCP, LSD, LED, and probably UFC.","quoter":["Stewart"],"favorite":false},{"quote":"Shoulda heard your mom last night she sounded like my great aunt when I pop in for a surprise visit like, \'oooh!\'","quoter":["Shoresy"],"favorite":false},{"quote":"Your wardrobe color scheme looks like a bipolar spell.","quoter":["McMurray"],"favorite":false},{"quote":"Olympic rules in this shoot-out boys. Order of shooters is me, me, me and then me, again.","quoter":["Dax"],"favorite":false},{"quote":"Is that what you appreciate about me?","quoter":["Katy"],"favorite":false},{"quote":"Not my pig, not my farm.","quoter":["Wayne","Katy"],"favorite":false},{"quote":"There\'s a special place in heaven for animal lovers, that\'s all I know.","quoter":["Mrs. McMurrary"],"favorite":false},{"quote":"I don\'t think I\'ve ever seen anyone so excited to be average","quoter":["Katy"],"favorite":false},{"quote":"You’d best be preparin’ for a Donny Brook if you think I’m going to that super soft birthday party of yours.","quoter":["Wayne"],"favorite":false},{"quote":"Fuck, Lemony Snicket, what A Series of Unfortunate Events you been through, you ugly fuck","quoter":["Jonesy"],"favorite":false},{"quote":"Fine my balls you fucking dandy. Fine \'em. And suck \'em while you\'re at it","quoter":["McMurray"],"favorite":false},{"quote":"Cologne is too expensive, I just use sunscreen - Banana Boat","quoter":["Daryl"],"favorite":false},{"quote":"Allegedly","quoter":["Squirrely Dan"],"favorite":false},{"quote":"Wayne, 100% bullshit \'round here. Got a bidder now, one. Lookin\' at two. Two, and now at lookin\' at three. Three hundred now, can I get a four? Four there now, sold. Four hundred percent bullshit \'round here.","quoter":["Jim Dickens"],"favorite":false},{"quote":"Glen, you have no one else to blame but yourself now","quoter":["Glen"],"favorite":false},{"quote":"Oh, I got so much time for sushi.","quoter":["Wayne"],"favorite":false},{"quote":"I enjoy horizontal refreshment for my vertical smile.","quoter":["Glen"],"favorite":false},{"quote":"Leave the egg painting to the Easter Bunny, you pile of shit!","quoter":["Katy"],"favorite":false},{"quote":"Does a duck with a boner drag weeds?","quoter":["Wayne"],"favorite":false},{"quote":"Fuckin\' fucked your face up from front to Finland in a fairly unfair fashion unfortunately for females…","quoter":["Wayne"],"favorite":false},{"quote":"I\'m nauseated by their hokey hockey hickey shit.","quoter":["Stewart"],"favorite":false},{"quote":"Fuck you, Jonesy, your mom shot cum straight across the room and killed my Siamese fighting fish, threw off the pH levels in my aquarium.","quoter":["Shoresy"],"favorite":false},{"quote":"You seen a ‘coon havin’ sex with a barn cat on top of your truck? Fuck what’s the nature of that David Suzuki.","quoter":["Wayne"],"favorite":false},{"quote":"I’m click-clacking and rack stacking, bitches know I’m packing. I’m the trillest. MEOW!","quoter":["Katy"],"favorite":false},{"quote":"You know I love rippin didje","quoter":["Glen"],"favorite":false},{"quote":"I think we learned a lesson, buddy… which is odd because we\'re normally all about the anti-lesson, buddy.","quoter":["Reilly"],"favorite":false},{"quote":"We got mint cream white paint. You can cream all over the place. All over your ceilings!","quoter":["McMurray"],"favorite":false},{"quote":"You naturally care for a companionship, but I guess there’s a lot worse things than playing a little one-man couch hockey in the dark.","quoter":["Wayne"],"favorite":false},{"quote":"Everyone knows cheese is the milk of christ","quoter":["Glen"],"favorite":false},{"quote":"Your mom pulled the goalie on me and now she\'s preggo. Surprise, son. Go rake the fuckin\' yard.","quoter":["Shoresy"],"favorite":false},{"quote":"Look at this tour de force. This pièce de résistance, this masterpi-ass.","quoter":["Coach"],"favorite":false}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/favorite.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup.js */ "./src/pageSetup.js");
/* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.js */ "./src/quotes.js");



(function pageInit() {
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.background)();
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.headerSetup)();
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.footerSetup)();
    favoriteQuotes();
    document.getElementById('favoriteBtn').focus();

})();

function favoriteQuotes() {
    _quotes_js__WEBPACK_IMPORTED_MODULE_1__.quoteLib.filter(element => {
        if (element.favorite === true) createCards(element.quote, element.quoter);
    })

}

function createCards(quote, quoter) {
    const main = document.querySelector('.favorite-main');

    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');

    const favoriteQuote = document.createElement('p');
    favoriteQuote.classList.add('favorite-quote');
    favoriteQuote.innerText = quote;

    const favoriteQuoters = document.createElement('p');
    favoriteQuoters.classList.add('favorite-quoters');
    favoriteQuoters.innerText = quoter;

    const favoriteBtn = document.createElement('span');
    favoriteBtn.classList.add('material-icons', 'favorite-heart');
    favoriteBtn.innerText = 'favorite';

    main.appendChild(favoriteCard);
    favoriteCard.appendChild(favoriteQuote);
    favoriteCard.appendChild(favoriteQuoters);
    favoriteCard.appendChild(favoriteBtn);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTztBQUNEO0FBQ0E7QUFDSjtBQUNJO0FBQ0Y7QUFDQTtBQUNBO0FBQ1E7QUFDTjtBQUNlO0FBQ1g7QUFDQTs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQUs7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsaURBQU07O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsOENBQVEsRUFBRSw2Q0FBTyxFQUFFLDhDQUFRLEVBQUUsNENBQU0sRUFBRSxpREFBVSxFQUFFLDZDQUFPLEVBQUUsNkNBQU8sRUFBRSx1REFBZSxFQUFFLGlEQUFXLEVBQUUsOENBQVEsRUFBRSwrQ0FBUSxFQUFFLGlEQUFVO0FBQ3JKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklvQztBQUNXOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFjO0FBQzlCOztBQUVBO0FBQ0EsUUFBUSw0REFBZSxnQkFBZ0IsNERBQWU7QUFDdEQsb0JBQW9CLDREQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZzRTtBQUMvQjs7QUFFdkM7QUFDQSxJQUFJLHlEQUFVO0FBQ2QsSUFBSSwwREFBVztBQUNmLElBQUksMERBQVc7QUFDZjtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHVEQUFlO0FBQ25CO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0dGVya2VubnktcXVvdGVzLy4vc3JjL3BhZ2VTZXR1cC5qcyIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvLi9zcmMvcXVvdGVzLmpzIiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvLi9zcmMvZmF2b3JpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnSW1nIGZyb20gJy4vaW1hZ2VzL2JnLmpwZyc7XG5pbXBvcnQgYmdMb2dvIGZyb20gJy4vaW1hZ2VzL2RvZy1sb2dvLnBuZyc7XG5pbXBvcnQgd2F5bmVJbWcgZnJvbSAnLi9pbWFnZXMvd2F5bmUucG5nJztcbmltcG9ydCBkYXJ5bEltZyBmcm9tICcuL2ltYWdlcy9kYXJ5bC5wbmcnO1xuaW1wb3J0IGRhbkltZyBmcm9tICcuL2ltYWdlcy9kYW4ucG5nJztcbmltcG9ydCBjb2FjaEltZyBmcm9tICcuL2ltYWdlcy9jb2FjaC5wbmcnO1xuaW1wb3J0IGdhaWxJbWcgZnJvbSAnLi9pbWFnZXMvZ2FpbC5wbmcnO1xuaW1wb3J0IGthdHlJbWcgZnJvbSAnLi9pbWFnZXMva2F0eS5wbmcnO1xuaW1wb3J0IGdsZW5JbWcgZnJvbSAnLi9pbWFnZXMvZ2xlbi5wbmcnO1xuaW1wb3J0IG1jbXVycmF5SW1nIGZyb20gJy4vaW1hZ2VzL21jbXVycmF5LnBuZyc7XG5pbXBvcnQgdGFuaXNJbWcgZnJvbSAnLi9pbWFnZXMvdGFuaXMucG5nJztcbmltcG9ydCByZWlsbHlKb25lc3lJbWcgZnJvbSAnLi9pbWFnZXMvcmVpbGx5LWpvbmVzeS5wbmcnO1xuaW1wb3J0IHNob3Jlc3lJbWcgZnJvbSAnLi9pbWFnZXMvc2hvcmVzeS5wbmcnO1xuaW1wb3J0IHN0ZXdhcnRJbWcgZnJvbSAnLi9pbWFnZXMvc3Rld2FydC5wbmcnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGJnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtYmFja2dyb3VuZCcpO1xuICAgIGJhY2tncm91bmQuc3JjID0gYmdJbWc7XG5cbiAgICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGFkb3cuY2xhc3NMaXN0LmFkZCgnc2hhZG93Jyk7XG5cbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWxvZ28nKTtcbiAgICBsb2dvLnNyYyA9IGJnTG9nbztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdDb250YWluZXIpO1xuICAgIGJnQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGJnQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoYWRvdyk7XG4gICAgYmdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG59O1xuXG5jb25zdCBoZWFkZXJTZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYXBwLXRpdGxlJyk7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlVGV4dC5pbm5lclRleHQgPSAnTGV0dGVya2VubnkgUXVvdGVzJztcblxuICAgIGNvbnN0IGZhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmF2b3JpdGUuaWQgPSAnc2V0RmF2b3JpdGVCdG4nO1xuICAgIGZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLWNvbnRhaW5lcicsICdoZWFkZXItaWNvbicpO1xuICAgIGNvbnN0IGZhdm9yaXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmYXZvcml0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcbiAgICBmYXZvcml0ZVNwYW4uaW5uZXJUZXh0ID0gJ2Zhdm9yaXRlX2JvcmRlcidcblxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5LmlkID0gJ2NvcHlCdG4nO1xuICAgIGNvcHkuY2xhc3NMaXN0LmFkZCgnY29weS1jb250YWluZXInLCAnaGVhZGVyLWljb24nKTtcbiAgICBjb25zdCBjb3B5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3B5U3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgIGNvcHlTcGFuLmlubmVyVGV4dCA9ICdjb250ZW50X2NvcHknXG5cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29weSk7XG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBmYXZvcml0ZS5hcHBlbmRDaGlsZChmYXZvcml0ZVNwYW4pO1xuICAgIGNvcHkuYXBwZW5kQ2hpbGQoY29weVNwYW4pO1xufTtcblxuY29uc3QgZm9vdGVyU2V0dXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5pZCA9ICdob21lQnRuJztcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1idXR0b25zJyk7XG4gICAgY29uc3QgaG9tZV9hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhvbWVfYS5ocmVmID0gXCJpbmRleC5odG1sXCI7XG4gICAgY29uc3QgaG9tZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaG9tZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBob21lU3Bhbi5pbm5lclRleHQgPSAnd2Jfc3VubnknO1xuXG4gICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmYXZvcml0ZS5pZCA9ICdmYXZvcml0ZUJ0bic7XG4gICAgZmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBmYXZvcml0ZV9hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZhdm9yaXRlX2EuaHJlZiA9ICdmYXZvcml0ZS5odG1sJztcbiAgICBjb25zdCBmYXZvcml0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZmF2b3JpdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgZmF2b3JpdGVTcGFuLmlubmVyVGV4dCA9ICdmYXZvcml0ZSc7XG5cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2guaWQgPSAnc2VhcmNoQnRuJztcbiAgICBzZWFyY2guY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBzZWFyY2hfYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzZWFyY2hfYS5ocmVmID0gJ3NlYXJjaC5odG1sJztcbiAgICBjb25zdCBzZWFyY2hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNlYXJjaFNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBzZWFyY2hTcGFuLmlubmVyVGV4dCA9ICdzZWFyY2gnO1xuXG4gICAgY29uc3QgcmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tLmlkID0gJ3JuZEJ0bic7XG4gICAgcmFuZG9tLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1idXR0b25zJyk7XG4gICAgY29uc3QgcmFuZG9tX2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcmFuZG9tX2EuaHJlZiA9ICdyYW5kb20uaHRtbCc7XG4gICAgY29uc3QgcmFuZG9tU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICByYW5kb21TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgcmFuZG9tU3Bhbi5pbm5lclRleHQgPSAnc2h1ZmZsZSc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmFuZG9tKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVfYSlcbiAgICBob21lX2EuYXBwZW5kQ2hpbGQoaG9tZVNwYW4pO1xuICAgIGZhdm9yaXRlLmFwcGVuZENoaWxkKGZhdm9yaXRlX2EpO1xuICAgIGZhdm9yaXRlX2EuYXBwZW5kQ2hpbGQoZmF2b3JpdGVTcGFuKTtcbiAgICBzZWFyY2guYXBwZW5kQ2hpbGQoc2VhcmNoX2EpO1xuICAgIHNlYXJjaF9hLmFwcGVuZENoaWxkKHNlYXJjaFNwYW4pXG4gICAgcmFuZG9tLmFwcGVuZENoaWxkKHJhbmRvbV9hKTtcbiAgICByYW5kb21fYS5hcHBlbmRDaGlsZChyYW5kb21TcGFuKTtcbn07XG5cbmNvbnN0IHByb2ZpbGVQaWMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGVQaWNDb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2ZpbGVzID0gW3dheW5lSW1nLCBrYXR5SW1nLCBkYXJ5bEltZywgZGFuSW1nLCBzaG9yZXN5SW1nLCBnbGVuSW1nLCBnYWlsSW1nLCByZWlsbHlKb25lc3lJbWcsIG1jbXVycmF5SW1nLCBjb2FjaEltZywgdGFuaXNJbWcsIHN0ZXdhcnRJbWddO1xuICAgIHByb2ZpbGVzLmZvckVhY2gocHJvZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGljLWJvcmRlcicpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1waWMnKTtcbiAgICAgICAgaW1nLnNyYyA9IHByb2ZpbGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH0pXG59O1xuXG5leHBvcnQgeyBiYWNrZ3JvdW5kLCBoZWFkZXJTZXR1cCwgZm9vdGVyU2V0dXAsIHByb2ZpbGVQaWMgfTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuL3F1b3RlTGlzdC5qc29uJztcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmNsYXNzIFF1b3RlcyB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHF1b3RlID0gJycsXG4gICAgICAgIHF1b3RlciA9IFtdLFxuICAgICAgICBmYXZvcml0ZSA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucXVvdGUgPSBxdW90ZVxuICAgICAgICB0aGlzLnF1b3RlciA9IHF1b3RlclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmF2b3JpdGVcbiAgICB9XG5cbiAgICBzZXRGYXZvcml0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmF2b3JpdGUpIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcbiAgICAgICAgZWxzZSB0aGlzLmZhdm9yaXRlID0gdHJ1ZTtcbiAgICB9O1xufVxubGV0IHF1b3RlTGlzdCA9IGRhdGEucXVvdGVMaXN0O1xubGV0IHF1b3RlTGliID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpYigpIHtcbiAgICBpZiAoZ2V0TG9jYWxTdG9yYWdlKCdxdW90ZUxpYicpICYmIGdldExvY2FsU3RvcmFnZSgncXVvdGVMaWInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1b3RlTGlzdCA9IGdldExvY2FsU3RvcmFnZSgncXVvdGVMaWInKTtcbiAgICB9XG4gICAgcXVvdGVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgcXVvdGVMaWIucHVzaChuZXcgUXVvdGVzKGl0ZW0ucXVvdGUsIGl0ZW0ucXVvdGVyLCBpdGVtLmZhdm9yaXRlKSk7XG4gICAgfSlcbn1cblxuY3JlYXRlTGliKCk7XG5jb25zb2xlLmxvZyhxdW90ZUxpYik7XG5leHBvcnQgeyBxdW90ZUxpYiB9IiwiZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKG5hbWUsIGRhdGEpIHtcbiAgICBpZiAoX3N0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgaWYgKF9zdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX3N0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGxldCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSwgZ2V0TG9jYWxTdG9yYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBiYWNrZ3JvdW5kLCBoZWFkZXJTZXR1cCwgZm9vdGVyU2V0dXAgfSBmcm9tICcuL3BhZ2VTZXR1cC5qcyc7XG5pbXBvcnQgeyBxdW90ZUxpYiB9IGZyb20gJy4vcXVvdGVzLmpzJztcblxuKGZ1bmN0aW9uIHBhZ2VJbml0KCkge1xuICAgIGJhY2tncm91bmQoKTtcbiAgICBoZWFkZXJTZXR1cCgpO1xuICAgIGZvb3RlclNldHVwKCk7XG4gICAgZmF2b3JpdGVRdW90ZXMoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2b3JpdGVCdG4nKS5mb2N1cygpO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBmYXZvcml0ZVF1b3RlcygpIHtcbiAgICBxdW90ZUxpYi5maWx0ZXIoZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmZhdm9yaXRlID09PSB0cnVlKSBjcmVhdGVDYXJkcyhlbGVtZW50LnF1b3RlLCBlbGVtZW50LnF1b3Rlcik7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkcyhxdW90ZSwgcXVvdGVyKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1tYWluJyk7XG5cbiAgICBjb25zdCBmYXZvcml0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYXZvcml0ZUNhcmQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtY2FyZCcpO1xuXG4gICAgY29uc3QgZmF2b3JpdGVRdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYXZvcml0ZVF1b3RlLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLXF1b3RlJyk7XG4gICAgZmF2b3JpdGVRdW90ZS5pbm5lclRleHQgPSBxdW90ZTtcblxuICAgIGNvbnN0IGZhdm9yaXRlUXVvdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYXZvcml0ZVF1b3RlcnMuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtcXVvdGVycycpO1xuICAgIGZhdm9yaXRlUXVvdGVycy5pbm5lclRleHQgPSBxdW90ZXI7XG5cbiAgICBjb25zdCBmYXZvcml0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycsICdmYXZvcml0ZS1oZWFydCcpO1xuICAgIGZhdm9yaXRlQnRuLmlubmVyVGV4dCA9ICdmYXZvcml0ZSc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZhdm9yaXRlQ2FyZCk7XG4gICAgZmF2b3JpdGVDYXJkLmFwcGVuZENoaWxkKGZhdm9yaXRlUXVvdGUpO1xuICAgIGZhdm9yaXRlQ2FyZC5hcHBlbmRDaGlsZChmYXZvcml0ZVF1b3RlcnMpO1xuICAgIGZhdm9yaXRlQ2FyZC5hcHBlbmRDaGlsZChmYXZvcml0ZUJ0bik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9