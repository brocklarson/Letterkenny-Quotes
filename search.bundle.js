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
    },
    {
        quote: `Allegedly`,
        quoter: [`Squirrely Dan`],
        favorite: false
    }
]


createLib();


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
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup.js */ "./src/pageSetup.js");
/* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.js */ "./src/quotes.js");



(function pageInit() {
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.background)();
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.headerSetup)();
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.footerSetup)();
    (0,_pageSetup_js__WEBPACK_IMPORTED_MODULE_0__.profilePic)();
    document.getElementById('searchBtn').focus();

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ087QUFDRDtBQUNBO0FBQ0o7QUFDSTtBQUNGO0FBQ0E7QUFDQTtBQUNRO0FBQ047QUFDZTtBQUNYO0FBQ0E7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFLOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGlEQUFNOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLDhDQUFRLEVBQUUsNkNBQU8sRUFBRSw4Q0FBUSxFQUFFLDRDQUFNLEVBQUUsaURBQVUsRUFBRSw2Q0FBTyxFQUFFLDZDQUFPLEVBQUUsdURBQWUsRUFBRSxpREFBVyxFQUFFLDhDQUFRLEVBQUUsK0NBQVEsRUFBRSxpREFBVTtBQUNySjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNma0Y7QUFDM0M7O0FBRXZDO0FBQ0EsSUFBSSx5REFBVTtBQUNkLElBQUksMERBQVc7QUFDZixJQUFJLDBEQUFXO0FBQ2YsSUFBSSx5REFBVTtBQUNkOztBQUVBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHRlcmtlbm55LXF1b3Rlcy8uL3NyYy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vbGV0dGVya2VubnktcXVvdGVzLy4vc3JjL3F1b3Rlcy5qcyIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGV0dGVya2VubnktcXVvdGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZXR0ZXJrZW5ueS1xdW90ZXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGV0dGVya2VubnktcXVvdGVzLy4vc3JjL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmdJbWcgZnJvbSAnLi9pbWFnZXMvYmcuanBnJztcbmltcG9ydCBiZ0xvZ28gZnJvbSAnLi9pbWFnZXMvZG9nLWxvZ28ucG5nJztcbmltcG9ydCB3YXluZUltZyBmcm9tICcuL2ltYWdlcy93YXluZS5wbmcnO1xuaW1wb3J0IGRhcnlsSW1nIGZyb20gJy4vaW1hZ2VzL2RhcnlsLnBuZyc7XG5pbXBvcnQgZGFuSW1nIGZyb20gJy4vaW1hZ2VzL2Rhbi5wbmcnO1xuaW1wb3J0IGNvYWNoSW1nIGZyb20gJy4vaW1hZ2VzL2NvYWNoLnBuZyc7XG5pbXBvcnQgZ2FpbEltZyBmcm9tICcuL2ltYWdlcy9nYWlsLnBuZyc7XG5pbXBvcnQga2F0eUltZyBmcm9tICcuL2ltYWdlcy9rYXR5LnBuZyc7XG5pbXBvcnQgZ2xlbkltZyBmcm9tICcuL2ltYWdlcy9nbGVuLnBuZyc7XG5pbXBvcnQgbWNtdXJyYXlJbWcgZnJvbSAnLi9pbWFnZXMvbWNtdXJyYXkucG5nJztcbmltcG9ydCB0YW5pc0ltZyBmcm9tICcuL2ltYWdlcy90YW5pcy5wbmcnO1xuaW1wb3J0IHJlaWxseUpvbmVzeUltZyBmcm9tICcuL2ltYWdlcy9yZWlsbHktam9uZXN5LnBuZyc7XG5pbXBvcnQgc2hvcmVzeUltZyBmcm9tICcuL2ltYWdlcy9zaG9yZXN5LnBuZyc7XG5pbXBvcnQgc3Rld2FydEltZyBmcm9tICcuL2ltYWdlcy9zdGV3YXJ0LnBuZyc7XG5cbmNvbnN0IGJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1iYWNrZ3JvdW5kJyk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSBiZ0ltZztcblxuICAgIGNvbnN0IHNoYWRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoYWRvdy5jbGFzc0xpc3QuYWRkKCdzaGFkb3cnKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtbG9nbycpO1xuICAgIGxvZ28uc3JjID0gYmdMb2dvO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiZ0NvbnRhaW5lcik7XG4gICAgYmdDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYmdDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hhZG93KTtcbiAgICBiZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbmNvbnN0IGhlYWRlclNldHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdhcHAtdGl0bGUnKTtcbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9ICdMZXR0ZXJrZW5ueSBRdW90ZXMnO1xuXG4gICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYXZvcml0ZS5pZCA9ICdzZXRGYXZvcml0ZUJ0bic7XG4gICAgZmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtY29udGFpbmVyJywgJ2hlYWRlci1pY29uJyk7XG4gICAgY29uc3QgZmF2b3JpdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZhdm9yaXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgIGZhdm9yaXRlU3Bhbi5pbm5lclRleHQgPSAnZmF2b3JpdGVfYm9yZGVyJ1xuXG4gICAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHkuaWQgPSAnY29weUJ0bic7XG4gICAgY29weS5jbGFzc0xpc3QuYWRkKCdjb3B5LWNvbnRhaW5lcicsICdoZWFkZXItaWNvbicpO1xuICAgIGNvbnN0IGNvcHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvcHlTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG4gICAgY29weVNwYW4uaW5uZXJUZXh0ID0gJ2NvbnRlbnRfY29weSdcblxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb3B5KTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGZhdm9yaXRlLmFwcGVuZENoaWxkKGZhdm9yaXRlU3Bhbik7XG4gICAgY29weS5hcHBlbmRDaGlsZChjb3B5U3Bhbik7XG59O1xuXG5jb25zdCBmb290ZXJTZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmlkID0gJ2hvbWVCdG4nO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBob21lX2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZV9hLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcbiAgICBjb25zdCBob21lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBob21lU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIGhvbWVTcGFuLmlubmVyVGV4dCA9ICd3Yl9zdW5ueSc7XG5cbiAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZhdm9yaXRlLmlkID0gJ2Zhdm9yaXRlQnRuJztcbiAgICBmYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdmb290ZXItYnV0dG9ucycpO1xuICAgIGNvbnN0IGZhdm9yaXRlX2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmF2b3JpdGVfYS5ocmVmID0gJ2luZGV4Lmh0bWwnO1xuICAgIGNvbnN0IGZhdm9yaXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmYXZvcml0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBmYXZvcml0ZVNwYW4uaW5uZXJUZXh0ID0gJ2Zhdm9yaXRlJztcblxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlYXJjaC5pZCA9ICdzZWFyY2hCdG4nO1xuICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdmb290ZXItYnV0dG9ucycpO1xuICAgIGNvbnN0IHNlYXJjaF9hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNlYXJjaF9hLmhyZWYgPSAnc2VhcmNoLmh0bWwnO1xuICAgIGNvbnN0IHNlYXJjaFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VhcmNoU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIHNlYXJjaFNwYW4uaW5uZXJUZXh0ID0gJ3NlYXJjaCc7XG5cbiAgICBjb25zdCByYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByYW5kb20uaWQgPSAncm5kQnRuJztcbiAgICByYW5kb20uY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCByYW5kb21fYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICByYW5kb21fYS5ocmVmID0gJ3JhbmRvbS5odG1sJztcbiAgICBjb25zdCByYW5kb21TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJhbmRvbVNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICByYW5kb21TcGFuLmlubmVyVGV4dCA9ICdzaHVmZmxlJztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChob21lKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyYW5kb20pO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZV9hKVxuICAgIGhvbWVfYS5hcHBlbmRDaGlsZChob21lU3Bhbik7XG4gICAgZmF2b3JpdGUuYXBwZW5kQ2hpbGQoZmF2b3JpdGVfYSk7XG4gICAgZmF2b3JpdGVfYS5hcHBlbmRDaGlsZChmYXZvcml0ZVNwYW4pO1xuICAgIHNlYXJjaC5hcHBlbmRDaGlsZChzZWFyY2hfYSk7XG4gICAgc2VhcmNoX2EuYXBwZW5kQ2hpbGQoc2VhcmNoU3BhbilcbiAgICByYW5kb20uYXBwZW5kQ2hpbGQocmFuZG9tX2EpO1xuICAgIHJhbmRvbV9hLmFwcGVuZENoaWxkKHJhbmRvbVNwYW4pO1xufTtcblxuY29uc3QgcHJvZmlsZVBpYyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZVBpY0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJvZmlsZXMgPSBbd2F5bmVJbWcsIGthdHlJbWcsIGRhcnlsSW1nLCBkYW5JbWcsIHNob3Jlc3lJbWcsIGdsZW5JbWcsIGdhaWxJbWcsIHJlaWxseUpvbmVzeUltZywgbWNtdXJyYXlJbWcsIGNvYWNoSW1nLCB0YW5pc0ltZywgc3Rld2FydEltZ107XG4gICAgcHJvZmlsZXMuZm9yRWFjaChwcm9maWxlID0+IHtcbiAgICAgICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaWMtYm9yZGVyJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLXBpYycpO1xuICAgICAgICBpbWcuc3JjID0gcHJvZmlsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSlcbn07XG5cbmV4cG9ydCB7IGJhY2tncm91bmQsIGhlYWRlclNldHVwLCBmb290ZXJTZXR1cCwgcHJvZmlsZVBpYyB9OyIsImNsYXNzIFF1b3RlcyB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHF1b3RlID0gJycsXG4gICAgICAgIHF1b3RlciA9IFtdLFxuICAgICAgICBmYXZvcml0ZSA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucXVvdGUgPSBxdW90ZVxuICAgICAgICB0aGlzLnF1b3RlciA9IHF1b3RlclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmF2b3JpdGVcbiAgICB9XG5cbiAgICBzZXRGYXZvcml0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmF2b3JpdGUpIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcbiAgICAgICAgZWxzZSB0aGlzLmZhdm9yaXRlID0gdHJ1ZTtcbiAgICB9O1xufVxubGV0IHF1b3RlTGliID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpYigpIHtcbiAgICBxdW90ZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBxdW90ZUxpYi5wdXNoKG5ldyBRdW90ZXMoaXRlbS5xdW90ZSwgaXRlbS5xdW90ZXIsIGl0ZW0uZmF2b3JpdGUpKTtcbiAgICB9KVxufVxuXG5jb25zdCBxdW90ZUxpc3QgPSBbe1xuICAgICAgICBxdW90ZTogYElmIHlvdSBoYXZlIGEgcHJvYmxlbSB3aXRoIHRoZSBtYWplc3RpYyBDYW5hZGlhbiBHb29zZSwgdGhlbiB5b3UgaGF2ZSBhIHByb2JsZW0gd2l0aCBtZS5gLFxuICAgICAgICBxdW90ZXI6IFtgV2F5bmVgXSxcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1b3RlOiBgQWxsZWdlZGx5YCxcbiAgICAgICAgcXVvdGVyOiBbYFNxdWlycmVseSBEYW5gXSxcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuXVxuXG5cbmNyZWF0ZUxpYigpO1xuZXhwb3J0IHsgcXVvdGVMaWIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGJhY2tncm91bmQsIGhlYWRlclNldHVwLCBmb290ZXJTZXR1cCwgcHJvZmlsZVBpYyB9IGZyb20gJy4vcGFnZVNldHVwLmpzJztcbmltcG9ydCB7IHF1b3RlTGliIH0gZnJvbSAnLi9xdW90ZXMuanMnO1xuXG4oZnVuY3Rpb24gcGFnZUluaXQoKSB7XG4gICAgYmFja2dyb3VuZCgpO1xuICAgIGhlYWRlclNldHVwKCk7XG4gICAgZm9vdGVyU2V0dXAoKTtcbiAgICBwcm9maWxlUGljKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpLmZvY3VzKCk7XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9