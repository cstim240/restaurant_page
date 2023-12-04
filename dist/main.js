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

eval("//problem: these elements created in JS will not show up on the HTML webpage\nfunction loadHeader(){\n    const contentDiv = document.querySelector('#content');\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n    \n    const header_content = document.createElement('div');\n    header_content.classList.add('header_content');\n    const topRtitle = document.createElement('p');\n    topRtitle.innerText = \"Tim's Diner\";\n    header_content.appendChild(topRtitle);\n\n    const header_menu = document.createElement('div');\n    header_menu.classList.add('header_menu');    \n    const menus = document.createElement('p');\n    menus.innerText = \"Menus\";\n    header_menu.appendChild(menus);\n    const locations = document.createElement('p');\n    locations.innerText = \"Locations\";\n    header_menu.appendChild(locations);\n    const giftcards = document.createElement('p');\n    giftcards.innerText = \"Gift Cards\";\n    header_menu.appendChild(giftcards);\n    const careers = document.createElement('p');\n    careers.innerText = \"Careers\";\n    header_menu.appendChild(careers);\n\n    const header_order = document.createElement('div');\n    header_order.classList.add('header_order');\n    const order_btn = document.createElement('button');\n    const orderNow = document.createElement('p');\n    orderNow.innerText = \"ORDER NOW\";\n    order_btn.appendChild(orderNow);\n    header_order.appendChild(order_btn);\n    \n    header.appendChild(header_content);\n    header.appendChild(header_menu);\n    header.appendChild(header_order);\n    console.log('headers have been appended!');\n\n    contentDiv.appendChild(header);\n}\n\nloadHeader();\n\n//# sourceURL=webpack://res_page/./src/index.js?");

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