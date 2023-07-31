/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerBoard: () => (/* binding */ computerBoard),\n/* harmony export */   playerBoard: () => (/* binding */ playerBoard),\n/* harmony export */   renderGameBoardOF: () => (/* binding */ renderGameBoardOF)\n/* harmony export */ });\nvar computerBoard = document.getElementById('computerBoard');\nvar playerBoard = document.getElementById('playerBoard'); // Assuming there's an element with the ID 'player-board' in the HTML file\nvar content = document.getElementById('content');\nvar body = document.querySelector('body');\nfunction renderGameBoardOF(elementToAppend) {\n  // TODO: Render the game board here.\n  var totalCells = 9 * 9;\n  for (var i = 0; i < totalCells; i += 1) {\n    var cell = document.createElement('div');\n    var row = Math.floor(i / 9);\n    var col = i % 9;\n    cell.dataset.row = row;\n    cell.dataset.col = col;\n    cell.className = 'cell';\n    cell.style.width = \"50px\";\n    cell.style.height = \"50px\";\n    cell.style.border = \"1px solid black\";\n    cell.style.display = \"inline-block\";\n    cell.style[\"float\"] = 'left';\n    cell.style.cursor = 'pointer';\n    elementToAppend.appendChild(cell);\n  }\n}\nfunction stylingBoards() {\n  body.style.height = '100vh';\n  body.style.margin = '0';\n  content.style.backgroundColor = '#F6F4EB';\n  content.style.display = 'flex';\n  content.style.justifyContent = 'center';\n  content.style.alignItems = 'center';\n  content.style.height = '100vh';\n  content.style.gap = '1.82rem';\n  playerBoard.style.maxWidth = '500px';\n  computerBoard.style.maxWidth = '500px';\n}\nstylingBoards();\n\n//# sourceURL=webpack://odin-battleship/./src/Dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\n(0,_Dom__WEBPACK_IMPORTED_MODULE_0__.renderGameBoardOF)(_Dom__WEBPACK_IMPORTED_MODULE_0__.playerBoard);\n(0,_Dom__WEBPACK_IMPORTED_MODULE_0__.renderGameBoardOF)(_Dom__WEBPACK_IMPORTED_MODULE_0__.computerBoard);\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;