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

eval("//problem: these elements created in JS will not show up on the HTML webpage\nfunction loadHeader(){\n    const contentDiv = document.querySelector('#content');\n\n    //header content start\n    const header = document.createElement('div');\n    header.classList.add('header');\n    \n    const header_content = document.createElement('div');\n    header_content.classList.add('header_content');\n    const topRtitle = document.createElement('p');\n    topRtitle.innerText = \"Tim's Diner\";\n    header_content.appendChild(topRtitle);\n\n    const header_menu = document.createElement('div');\n    header_menu.classList.add('header_menu');    \n    const menus = document.createElement('p');\n    menus.innerText = \"Menus\";\n    header_menu.appendChild(menus);\n    const locations = document.createElement('p');\n    locations.innerText = \"Locations\";\n    header_menu.appendChild(locations);\n    const giftcards = document.createElement('p');\n    giftcards.innerText = \"Gift Cards\";\n    header_menu.appendChild(giftcards);\n    const careers = document.createElement('p');\n    careers.innerText = \"Careers\";\n    header_menu.appendChild(careers);\n\n    const header_order = document.createElement('div');\n    header_order.classList.add('header_order');\n    const order_btn = document.createElement('button');\n    const orderNow = document.createElement('p');\n    orderNow.innerText = \"ORDER NOW\";\n    order_btn.appendChild(orderNow);\n    header_order.appendChild(order_btn);\n    \n    header.appendChild(header_content);\n    header.appendChild(header_menu);\n    header.appendChild(header_order);\n    console.log('headers have been appended!');\n\n    contentDiv.appendChild(header);\n    //end of header content\n}\n\n//main section start\nfunction loadMainSec(){\n    const contentDiv = document.querySelector('#content');\n    \n    const main_sec = document.createElement('div');\n    main_sec.classList.add('main_sec');\n\n    const appetizers = document.createElement('div');\n    const appetizers_title = document.createElement('p');\n    appetizers_title.innerText = \"Appetizers\";\n    \n    const truffle_fries = document.createElement('div');\n    truffle_fries.classList.add('menu_item');\n    const truffle_name_price = document.createElement('div');\n    const truffle_name = document.createElement('p');\n    const truffle_price = document.createElement('p');\n    truffle_name.innerText = \"Truffle Fries\";\n    truffle_price.innerText = \"$8\";\n    const truffle_ingredients = document.createElement('p');\n    truffle_ingredients.innerText = \"truffle, herbs, grana padano, garlic aioli\";\n\n    appetizers.appendChild(appetizers_title);\n    truffle_name_price.appendChild(truffle_name);\n    truffle_name_price.appendChild(truffle_price);\n    truffle_fries.appendChild(truffle_name_price);\n    truffle_fries.appendChild(truffle_ingredients);\n\n    const chicken_wings = document.createElement('div');\n    chicken_wings.classList.add('menu_item');\n    const chicken_wings_name_price = document.createElement('div');\n    const chicken_wings_name = document.createElement('p');\n    const chicken_wings_price = document.createElement('p');\n    chicken_wings_name.innerText = \"Chicken Wings\";\n    chicken_wings_price.innerText = \"50c / wing\";\n    const chicken_wings_ingredients = document.createElement('p');\n    chicken_wings_ingredients.innerText = \"sweet & sour, creamy parmesan dip\";\n\n    chicken_wings_name_price.appendChild(chicken_wings_name);\n    chicken_wings_name_price.appendChild(chicken_wings_price);\n    chicken_wings.appendChild(chicken_wings_name_price);\n    chicken_wings.appendChild(chicken_wings_ingredients);\n    \n    appetizers.appendChild(truffle_fries);\n    appetizers.appendChild(chicken_wings);\n    main_sec.appendChild(appetizers);\n\n\n    contentDiv.appendChild(main_sec);\n}\n\nloadHeader();\nloadMainSec();\n\n//# sourceURL=webpack://res_page/./src/index.js?");

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