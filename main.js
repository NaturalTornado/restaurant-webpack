/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/greeting.js":
/*!*************************!*\
  !*** ./src/greeting.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greeting: () => (/* binding */ greeting)\n/* harmony export */ });\n// greeting.js\r\nconst greeting = \"Hello, Restaurant!\";\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JlZXRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZ3JlZXRpbmcuanM/NjU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBncmVldGluZy5qc1xyXG5leHBvcnQgY29uc3QgZ3JlZXRpbmcgPSBcIkhlbGxvLCBSZXN0YXVyYW50IVwiO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/greeting.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.js */ \"./src/greeting.js\");\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _menu_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-module.js */ \"./src/menu-module.js\");\n// index.js\r\n\r\n\r\nconsole.log(_greeting_js__WEBPACK_IMPORTED_MODULE_0__.greeting);\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    \r\n    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); \r\n    \r\n   // menuModule();\r\n\r\n\r\n});\r\n\r\n\r\nfunction clearContent() {\r\n    const content = document.querySelector('#content');\r\n    content.innerHTML = ''; // Clear existing content\r\n}\r\n\r\n\r\nfunction init() {\r\n    const homeButton = document.getElementById('Home');\r\n    const menuButton = document.getElementById('Menu');\r\n    const linksButton = document.getElementById('Links');\r\n    const aboutButton = document.getElementById('About');\r\n\r\n\r\n    homeButton.addEventListener('click', ()=> {\r\n        clearContent();\r\n        (0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        console.log('welcome home!');\r\n    \r\n    });\r\n\r\n    menuButton.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_menu_module_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n        console.log('menu!');\r\n\r\n    });\r\n\r\n\r\n\r\n};\r\n\r\n\r\n\r\n//document.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\ninit();\r\n\r\n//});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ3lDO0FBQ3pDO0FBQ0EsWUFBWSxrREFBUTtBQUNwQjtBQUN1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBUTtBQUNoQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC5qc1xyXG5pbXBvcnQgeyBncmVldGluZyB9IGZyb20gXCIuL2dyZWV0aW5nLmpzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhncmVldGluZyk7XHJcblxyXG5pbXBvcnQgIGxvYWRQYWdlICBmcm9tIFwiLi9wYWdlbG9hZC5qc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsb2FkUGFnZSgpOyBcclxuICAgIFxyXG4gICAvLyBtZW51TW9kdWxlKCk7XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKTtcclxuICAgIGNvbnN0IGxpbmtzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xpbmtzJyk7XHJcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpO1xyXG5cclxuXHJcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgbG9hZFBhZ2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2VsY29tZSBob21lIScpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIG1lbnVsb2FkKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZW51IScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59O1xyXG5cclxuaW1wb3J0IG1lbnVsb2FkIGZyb20gXCIuL21lbnUtbW9kdWxlLmpzXCI7XHJcblxyXG4vL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbmluaXQoKTtcclxuXHJcbi8vfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-module.js":
/*!****************************!*\
  !*** ./src/menu-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuSection (title, items) {\r\n\r\n    const section = document.createElement(\"div\");\r\n    const sectionTitle = document.createElement('h2');\r\n    \r\n    // section.classList.add('menu-section');\r\n\r\n    sectionTitle.textContent = title;\r\n    section.appendChild(sectionTitle);\r\n\r\n\r\n        //section.style.backgroundColor = 'gray';\r\n        section.style.fontSize = '24px';\r\n        section.style.fontWeight = '600';\r\n        section.style.color = 'white';\r\n        \r\n    const itemList = document.createElement('ul');\r\n    items.forEach(item => {\r\n\r\n        const listItem = document.createElement('li');\r\n        listItem.textContent = item;\r\n        itemList.appendChild(listItem);\r\n\r\n    });\r\n\r\n    section.appendChild(itemList);\r\n\r\n    return section;\r\n\r\n}\r\n\r\nfunction menuload () {\r\n\r\n    const content = document.querySelector('#content');\r\n    content.innerHTML = '';\r\n\r\n\r\n    const appetizers = createMenuSection('Appetizers', ['Mozzarella Sticks', 'Garlic Bread']);\r\n    const entrees = createMenuSection('Entrees', ['Spaghetti', 'Lasagna']);\r\n    const drinks = createMenuSection('Drinks', ['Wine', 'Beer', 'Soda']);\r\n    const dessert = createMenuSection('Dessert', ['Ice Cream', 'Cake', 'Pie']);\r\n\r\n    content.appendChild(appetizers);\r\n    content.appendChild(entrees);\r\n    content.appendChild(drinks);\r\n    content.appendChild(dessert);\r\n    \r\n//  menuBox.classList.add = menuBox;\r\n//  menuBox.style.display = flex;\r\n//  menuBox.style.flexDirection = column;\r\n//  menuBox.style.justifyContent = spacebetween;\r\n//  menuBox.style.border = solid;\r\n//  menuBox.style.borderWidth = 8;\r\n//  menuBox.style.backgroundColor = lightgray;\r\n\r\n\r\n    //const MenuButton = document.getElementById(\"Menu\");\r\n\r\n    //MenuButton.style.borderRadius = 4px;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuload);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQztBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LW1vZHVsZS5qcz9kOGRjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uICh0aXRsZSwgaXRlbXMpIHtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBcclxuICAgIC8vIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XHJcblxyXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XHJcblxyXG5cclxuICAgICAgICAvL3NlY3Rpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xyXG4gICAgICAgIHNlY3Rpb24uc3R5bGUuZm9udFNpemUgPSAnMjRweCc7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XHJcbiAgICAgICAgc2VjdGlvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuXHJcbiAgICByZXR1cm4gc2VjdGlvbjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVsb2FkICgpIHtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cclxuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBjcmVhdGVNZW51U2VjdGlvbignQXBwZXRpemVycycsIFsnTW96emFyZWxsYSBTdGlja3MnLCAnR2FybGljIEJyZWFkJ10pO1xyXG4gICAgY29uc3QgZW50cmVlcyA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdFbnRyZWVzJywgWydTcGFnaGV0dGknLCAnTGFzYWduYSddKTtcclxuICAgIGNvbnN0IGRyaW5rcyA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdEcmlua3MnLCBbJ1dpbmUnLCAnQmVlcicsICdTb2RhJ10pO1xyXG4gICAgY29uc3QgZGVzc2VydCA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdEZXNzZXJ0JywgWydJY2UgQ3JlYW0nLCAnQ2FrZScsICdQaWUnXSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJzKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cmVlcyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rcyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xyXG4gICAgXHJcbi8vICBtZW51Qm94LmNsYXNzTGlzdC5hZGQgPSBtZW51Qm94O1xyXG4vLyAgbWVudUJveC5zdHlsZS5kaXNwbGF5ID0gZmxleDtcclxuLy8gIG1lbnVCb3guc3R5bGUuZmxleERpcmVjdGlvbiA9IGNvbHVtbjtcclxuLy8gIG1lbnVCb3guc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBzcGFjZWJldHdlZW47XHJcbi8vICBtZW51Qm94LnN0eWxlLmJvcmRlciA9IHNvbGlkO1xyXG4vLyAgbWVudUJveC5zdHlsZS5ib3JkZXJXaWR0aCA9IDg7XHJcbi8vICBtZW51Qm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGxpZ2h0Z3JheTtcclxuXHJcblxyXG4gICAgLy9jb25zdCBNZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNZW51XCIpO1xyXG5cclxuICAgIC8vTWVudUJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSA0cHg7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51bG9hZDtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu-module.js\n");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant_photo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-photo.png */ \"./src/restaurant-photo.png\");\n\r\n\r\n\r\nfunction loadPage () {\r\n    \r\n    const content = document.getElementById('content');\r\n\r\n    const image = document.createElement('img');\r\n\r\n  const menu = document.getElementById('Menu');\r\n\r\n  menu.style.backgroundColor = \"red\";\r\n\r\n  //  image.src = RestaurantPhoto;\r\n    image.alt = 'photo of a restaurant';\r\n\r\n    content.style.backgroundImage = `url(${_restaurant_photo_png__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    content.style.backgroundSize = 'contain';\r\n\r\n    const headline = document.createElement('div');\r\n\r\n    headline.classList.add('headline');\r\n    headline.textContent = \"That's A Spicy Meat-A-Ball!\";\r\n\r\n\r\n    headline.style.fontSize = '48px';\r\n    headline.style.color = 'white';\r\n    headline.style.border = \"solid\";\r\n    headline.style.borderColor = \"black\";\r\n    headline.style.borderWidth= \"12px\";\r\n    \r\n\r\n\r\n    content.appendChild(image);\r\n    content.appendChild(headline);\r\n   // content.style.backgroundColor = \"green\";\r\n\r\n    const home = document.getElementById('Home');\r\n\r\n    home.style.backgroundColor = \"gray\";\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtEQUFlLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9wYWdlbG9hZC5qcz9iYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVzdGF1cmFudFBob3RvIGZyb20gJy4vcmVzdGF1cmFudC1waG90by5wbmcnO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UgKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKTtcclxuXHJcbiAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG5cclxuICAvLyAgaW1hZ2Uuc3JjID0gUmVzdGF1cmFudFBob3RvO1xyXG4gICAgaW1hZ2UuYWx0ID0gJ3Bob3RvIG9mIGEgcmVzdGF1cmFudCc7XHJcblxyXG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7UmVzdGF1cmFudFBob3RvfSlgO1xyXG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcclxuXHJcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XHJcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiVGhhdCdzIEEgU3BpY3kgTWVhdC1BLUJhbGwhXCI7XHJcblxyXG5cclxuICAgIGhlYWRsaW5lLnN0eWxlLmZvbnRTaXplID0gJzQ4cHgnO1xyXG4gICAgaGVhZGxpbmUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgaGVhZGxpbmUuc3R5bGUuYm9yZGVyID0gXCJzb2xpZFwiO1xyXG4gICAgaGVhZGxpbmUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICBoZWFkbGluZS5zdHlsZS5ib3JkZXJXaWR0aD0gXCIxMnB4XCI7XHJcbiAgICBcclxuXHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICAgLy8gY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XHJcblxyXG4gICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pageload.js\n");

/***/ }),

/***/ "./src/restaurant-photo.png":
/*!**********************************!*\
  !*** ./src/restaurant-photo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7adf861e4eeae87f5a6e.png";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;