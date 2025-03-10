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

/***/ "./src/jobs/metrodriver/server.ts":
/*!****************************************!*\
  !*** ./src/jobs/metrodriver/server.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MetroDriverServer: () => (/* binding */ MetroDriverServer)\n/* harmony export */ });\n/* harmony import */ var _types_AbstractJob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/AbstractJob */ \"./src/jobs/types/AbstractJob.ts\");\n\nclass MetroDriverServer extends _types_AbstractJob__WEBPACK_IMPORTED_MODULE_0__.AbstractJob {\n    onInit() { }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/jobs/metrodriver/server.ts?");

/***/ }),

/***/ "./src/jobs/phone/server.ts":
/*!**********************************!*\
  !*** ./src/jobs/phone/server.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PhoneServer: () => (/* binding */ PhoneServer)\n/* harmony export */ });\n/* harmony import */ var _types_AbstractJob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/AbstractJob */ \"./src/jobs/types/AbstractJob.ts\");\n\nclass PhoneServer extends _types_AbstractJob__WEBPACK_IMPORTED_MODULE_0__.AbstractJob {\n    onInit() { }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/jobs/phone/server.ts?");

/***/ }),

/***/ "./src/jobs/types/AbstractJob.ts":
/*!***************************************!*\
  !*** ./src/jobs/types/AbstractJob.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbstractJob: () => (/* binding */ AbstractJob)\n/* harmony export */ });\nclass AbstractJob {\n    constructor(name, side) {\n        this._manifest = null;\n        this.name = name;\n        this.side = side;\n    }\n    init() {\n        this.log(`Initialisation (${this.side})`);\n        this.onInit();\n    }\n    setManifest(manifest) {\n        this._manifest = manifest;\n    }\n    get manifest() {\n        return this._manifest;\n    }\n    log(message, ...args) {\n        console.log(`[Job:${this.name}:${this.side}] ${message}`, ...args);\n    }\n    error(message, ...args) {\n        console.error(`[Job:${this.name}:${this.side}] ERROR: ${message}`, ...args);\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/jobs/types/AbstractJob.ts?");

/***/ }),

/***/ "./src/jobs/types/IJob.ts":
/*!********************************!*\
  !*** ./src/jobs/types/IJob.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JobSide: () => (/* binding */ JobSide)\n/* harmony export */ });\nvar JobSide;\n(function (JobSide) {\n    JobSide[\"CLIENT\"] = \"client\";\n    JobSide[\"SERVER\"] = \"server\";\n    JobSide[\"SHARED\"] = \"shared\";\n})(JobSide || (JobSide = {}));\n\n\n//# sourceURL=webpack://persona-core/./src/jobs/types/IJob.ts?");

/***/ }),

/***/ "./src/jobs/types/JobRegistry.ts":
/*!***************************************!*\
  !*** ./src/jobs/types/JobRegistry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JobRegistry: () => (/* binding */ JobRegistry)\n/* harmony export */ });\n/* harmony import */ var _IJob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IJob */ \"./src/jobs/types/IJob.ts\");\n\nclass JobRegistry {\n    constructor() {\n        this._clientJobs = new Map();\n        this._serverJobs = new Map();\n    }\n    static get instance() {\n        if (!JobRegistry._instance) {\n            JobRegistry._instance = new JobRegistry();\n        }\n        return JobRegistry._instance;\n    }\n    registerClientJob(name, jobClass) {\n        if (this._clientJobs.has(name)) {\n            console.warn(`Un job client avec le nom \"${name}\" existe déjà`);\n            return;\n        }\n        try {\n            const job = new jobClass(name, _IJob__WEBPACK_IMPORTED_MODULE_0__.JobSide.CLIENT);\n            this._clientJobs.set(name, job);\n            console.log(`Job client \"${name}\" enregistré avec succès`);\n        }\n        catch (error) {\n            console.error(`Erreur lors de l'enregistrement du job client \"${name}\":`, error);\n        }\n    }\n    registerServerJob(name, jobClass) {\n        if (this._serverJobs.has(name)) {\n            console.warn(`Un job serveur avec le nom \"${name}\" existe déjà`);\n            return;\n        }\n        try {\n            const job = new jobClass(name, _IJob__WEBPACK_IMPORTED_MODULE_0__.JobSide.SERVER);\n            this._serverJobs.set(name, job);\n            console.log(`Job serveur \"${name}\" enregistré avec succès`);\n        }\n        catch (error) {\n            console.error(`Erreur lors de l'enregistrement du job serveur \"${name}\":`, error);\n        }\n    }\n    initClientJobs() {\n        console.log(`Initialisation de ${this._clientJobs.size} jobs client...`);\n        for (const [name, job] of this._clientJobs) {\n            try {\n                job.init();\n            }\n            catch (error) {\n                console.error(`Erreur lors de l'initialisation du job client \"${name}\":`, error);\n            }\n        }\n    }\n    initServerJobs() {\n        console.log(`Initialisation de ${this._serverJobs.size} jobs serveur...`);\n        for (const [name, job] of this._serverJobs) {\n            try {\n                job.init();\n            }\n            catch (error) {\n                console.error(`Erreur lors de l'initialisation du job serveur \"${name}\":`, error);\n            }\n        }\n    }\n    getClientJob(name) {\n        return this._clientJobs.get(name);\n    }\n    getServerJob(name) {\n        return this._serverJobs.get(name);\n    }\n    get clientJobs() {\n        return this._clientJobs;\n    }\n    get serverJobs() {\n        return this._serverJobs;\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/jobs/types/JobRegistry.ts?");

/***/ }),

/***/ "./src/server/job-register.ts":
/*!************************************!*\
  !*** ./src/server/job-register.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jobs_metrodriver_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jobs/metrodriver/server */ \"./src/jobs/metrodriver/server.ts\");\n/* harmony import */ var _jobs_phone_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jobs/phone/server */ \"./src/jobs/phone/server.ts\");\n/* harmony import */ var _jobs_types_JobRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jobs/types/JobRegistry */ \"./src/jobs/types/JobRegistry.ts\");\n\n\n\nconst registry = _jobs_types_JobRegistry__WEBPACK_IMPORTED_MODULE_2__.JobRegistry.instance;\nregistry.registerServerJob('metrodriver', _jobs_metrodriver_server__WEBPACK_IMPORTED_MODULE_0__.MetroDriverServer);\nregistry.registerServerJob('phone', _jobs_phone_server__WEBPACK_IMPORTED_MODULE_1__.PhoneServer);\nregistry.initServerJobs();\n\n\n//# sourceURL=webpack://persona-core/./src/server/job-register.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _job_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-register */ \"./src/server/job-register.ts\");\n\non('playerConnecting', (name, setKickReason, deferrals) => {\n    console.log(`${name} est en train de se connecter...`);\n    TriggerClientEvent('playerConnectedToServer', source, name);\n});\non('playerDropped', (reason) => {\n    console.log(`a quitté le serveur. Raison: ${reason}`);\n});\nonNet('playerEntered', () => {\n    console.log(`est connecté sur le serveur !`);\n});\n\n\n//# sourceURL=webpack://persona-core/./src/server/server.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;