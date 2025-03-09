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

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (() => {

eval("\non('playerConnecting', (name, setKickReason, deferrals) => {\n    console.log(`${name} est en train de se connecter...`);\n    emitNet('playerConnectedToServer', source, name);\n});\non('playerDropped', (reason) => {\n    console.log(`a quitté le serveur. Raison: ${reason}`);\n});\nonNet('playerEntered', () => {\n    console.log(`est connecté sur le serveur !`);\n});\n\n\n//# sourceURL=webpack://persona-core/./src/server/server.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/server/server.ts"]();
/******/ 	
/******/ })()
;