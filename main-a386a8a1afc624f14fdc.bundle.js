/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/News.js":
/*!************************!*\
  !*** ./src/js/News.js ***!
  \************************/
/*! exports provided: WebDevNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebDevNews\", function() { return WebDevNews; });\n\r\nclass WebDevNews {\r\n\tconstructor() {\r\n\t\tthis.pageSize = 3;\r\n\t\tthis.currentPage = 1;\r\n\t\tthis.articlesArray = [];\r\n\t\tthis.newArticlesArray = [];\r\n\r\n\r\n\t\tthis.articlesCatalog = null;\r\n\t\tthis.loadButton = null;\r\n\t\tthis.loader = null;\r\n\t\tthis.search = null;\r\n\t\tthis.searchButton = null;\r\n\r\n\t\tthis.CORS_ANYWHRERE = \"https://cors-anywhere.herokuapp.com\";\r\n\t\tthis.API = \"https://newsapi.org/\";\r\n\t\tthis.API_VERSION = \"v2\";\r\n\t\tthis.API_RESOURCE = \"everything?\";\r\n\t\tthis.API_QUERY = \"javascript, web\";\r\n\t\tthis.API_KEY = \"edf3df56d9af43b3ab64e0effbbba0c9\";\r\n\r\n\t\tthis.API_ENDPOINT = `${this.CORS_ANYWHRERE}/${this.API}/${this.API_VERSION}/${this.API_RESOURCE}q=${this.API_QUERY}&apiKey=${this.API_KEY}`;\r\n\r\n\t\tthis.UISelectors = {\r\n            content: \"[data-content]\",\r\n            button: \"[data-button]\",\r\n\t\t\tloader: \"[data-loader]\",\r\n\t\t\tsearch: 'search',\r\n\t\t\tarticle: \"[data-article]\",\r\n\t\t\tsearchButton: \"[data-search]\" \r\n\t\t};\r\n\t}\r\n\r\n\tinitializeArticlesCatalog() {\r\n        this.articlesCatalog = document.querySelector(this.UISelectors.content);\r\n        this.loadButton = document.querySelector(this.UISelectors.button);\r\n\t\tthis.loader = document.querySelector(this.UISelectors.loader);\r\n\t\tthis.search = document.getElementById(this.UISelectors.search);\r\n\t\tthis.searchButton = document.querySelector(this.UISelectors.searchButton);\r\n\r\n\t\tthis.addEventListeners();\r\n\r\n\t\tthis.pullArticles();\r\n    }\r\n    \r\n    addEventListeners() {\r\n\t\tthis.loadButton.addEventListener('click', () => this.pullArticles());\r\n\t\tthis.searchButton.addEventListener('click', () => this.filterArticles());\r\n\t}\r\n\r\n\tasync pullArticles() {\r\n\t\tthis.toggleShowElement(this.loader, this.loadButton);\r\n\t\tconst { articles } = await this.fetchData(`${this.API_ENDPOINT}&page=${this.currentPage}&pageSize=${this.pageSize}`);\r\n\t\tthis.toggleShowElement(this.loader, this.loadButton);\r\n\r\n\t\tthis.articlesArray = [...this.articlesArray, ...articles]\r\n\t\tthis.newArticlesArray = [...articles];\r\n\r\n\t\tthis.createArticlesCatalog(this.newArticlesArray);\r\n\t\tthis.currentPage++;\r\n\r\n\t\tconsole.log(articles);\r\n    }\r\n    \r\n    toggleShowElement(...elements) {\r\n\t\telements.forEach(element => element.classList.toggle('hide'));\r\n\t}\r\n\r\n\tasync fetchData(url) {\r\n        const response = await fetch(url);\r\n        const parsedResponse = await response.json();\r\n        return parsedResponse;\r\n\t}\r\n\r\n\tcreateArticlesCatalog(articles) {\r\n\t\tthis.articlesCatalog.insertAdjacentHTML('beforeend', [\r\n\t\t\tarticles.map((article) => this.createArticle(article)).join(\"\"),\r\n\t\t]);\r\n\t}\r\n\r\n\tcreateArticle({\r\n\t\tsource: { name, id },\r\n\t\tauthor,\r\n        urlToImage,\r\n        title,\r\n\t\tpublishedAt,\r\n\t\tcontent,\r\n\t\turl,\r\n\t}) {\r\n\t\treturn `\r\n            <article class=\"article\" id=${id} data-article>\r\n                <header class=\"article__header\">\r\n                    <h2 class=\"article__heading\">\r\n                        ${name}\r\n                    </h2>\r\n                    <p class=\"article__author\"> Autor: \r\n                    ${author ? author : \"Brak autora 😔\"}\r\n                    </p>\r\n                    </header>\r\n                    <p class=\"article__date\">Data opublikowania: ${publishedAt.slice(0, 10)}</p>\r\n                    <img class=\"article__image\" src=\"${urlToImage}\" alt=\"Zdjęcie artykułu.\"\"/>\r\n                    <p class=\"article__title\">${title}</p>\r\n                    <p class=\"article__content\">${\r\n\t\t\t\t\t\tcontent ? content : \"Brak opisu artykułu 😟\"\r\n\t\t\t\t\t}</p>\r\n                    <a class=\"article__link\"href=\"${url}\" target=\"_blank\">Czytaj cały artykuł &#8594;</a>\r\n            </article>\r\n        `;\r\n\t};\r\n\r\n\tfilterArticles() {\r\n\t\tconst searchQuery = this.search.value.toLowerCase();\r\n\r\n\t\tsearchQuery.length \r\n\t\t\t? this.loadButton.classList.add('hide')\r\n\t\t\t: this.loadButton.classList.remove('hide');\r\n\r\n\t\tdocument.querySelectorAll(this.UISelectors.article).forEach((el) => el.classList.remove('hide'));\r\n\t\t\r\n\t\tconst filteredArticles = this.articlesArray.filter(({title}) => !title.toLowerCase().includes(searchQuery));\r\n\r\n\t\tfilteredArticles.forEach(({source: {id}}) => document.getElementById(id).classList.add(\"hide\"));\r\n\t}\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/News.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ \"./src/js/News.js\");\n\r\n\r\n\r\n\r\nconst articlesCatalog = new _News__WEBPACK_IMPORTED_MODULE_1__[\"WebDevNews\"]();\r\narticlesCatalog.initializeArticlesCatalog();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });