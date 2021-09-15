/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let hidepass = document.getElementById(\"pass\");\r\nlet box = document.getElementById(\"numberBox\");\r\nlet btn = document.getElementById(\"subbtn\");\r\n\r\nbtn.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  if (box.value == 71) {\r\n    hidepass.style.display = \"block\";\r\n    hidepass.innerText =\r\n      \"/ ` 9 - ROPE ` jack 5 drip fruit EGG fruit music 8 & COFFEE\";\r\n    console.log(box.value);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;