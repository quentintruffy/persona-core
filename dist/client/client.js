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

/***/ "./src/client/client.ts":
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_ServiceContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/ServiceContainer */ \"./src/client/services/ServiceContainer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\non('onClientResourceStart', (resourceName) => __awaiter(void 0, void 0, void 0, function* () {\n    if (GetCurrentResourceName() !== resourceName) {\n        return;\n    }\n    console.log(`onClientResourceStart: ${resourceName}`);\n}));\nonNet('playerConnectedToServer', (playerId, playerName) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(`Le joueur ${playerName} (ID: ${playerId}) s'est connecté au serveur`);\n    const spawnService = _services_ServiceContainer__WEBPACK_IMPORTED_MODULE_0__.client_services.get('spawnService');\n    yield spawnService.spawn();\n}));\n\n\n//# sourceURL=webpack://persona-core/./src/client/client.ts?");

/***/ }),

/***/ "./src/client/services/EntityService.ts":
/*!**********************************************!*\
  !*** ./src/client/services/EntityService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EntityService: () => (/* binding */ EntityService)\n/* harmony export */ });\nclass EntityService {\n    setPosition(entity, position, heading) {\n        SetEntityCoords(entity, position.x, position.y, position.z, false, false, false, false);\n        if (heading !== undefined) {\n            SetEntityHeading(entity, heading);\n        }\n    }\n    setVisible(entity, visible, networkVisible = false) {\n        SetEntityVisible(entity, visible, networkVisible);\n    }\n    freeze(entity, frozen) {\n        FreezeEntityPosition(entity, frozen);\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/EntityService.ts?");

/***/ }),

/***/ "./src/client/services/ModelService.ts":
/*!*********************************************!*\
  !*** ./src/client/services/ModelService.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModelService: () => (/* binding */ ModelService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass ModelService {\n    load(modelName) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve, reject) => {\n                const modelHash = GetHashKey(modelName);\n                if (!modelHash) {\n                    return reject(new Error(`Modèle ${modelName} introuvable`));\n                }\n                if (!IsModelInCdimage(modelHash)) {\n                    return reject(new Error(`Modèle ${modelName} n'est pas dans le cdimage`));\n                }\n                RequestModel(modelHash);\n                const checkModel = setInterval(() => {\n                    if (HasModelLoaded(modelHash)) {\n                        clearInterval(checkModel);\n                        resolve(modelHash);\n                    }\n                }, 100);\n            });\n        });\n    }\n    release(modelHash) {\n        SetModelAsNoLongerNeeded(modelHash);\n    }\n    isLoaded(modelHash) {\n        return HasModelLoaded(modelHash);\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/ModelService.ts?");

/***/ }),

/***/ "./src/client/services/PlayerService.ts":
/*!**********************************************!*\
  !*** ./src/client/services/PlayerService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerService: () => (/* binding */ PlayerService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass PlayerService {\n    constructor(entityService) {\n        this.entityService = entityService;\n    }\n    getId() {\n        return PlayerId();\n    }\n    getPedId() {\n        return PlayerPedId();\n    }\n    setModel(modelHash) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const playerId = this.getId();\n            SetPlayerModel(playerId, modelHash);\n            yield new Promise((resolve) => setTimeout(resolve, 100));\n            return this.getPedId();\n        });\n    }\n    setControl(hasControl, flags = 0) {\n        SetPlayerControl(this.getId(), hasControl, flags);\n    }\n    resurrect(position, heading) {\n        NetworkResurrectLocalPlayer(position.x, position.y, position.z, heading, this.getId(), false);\n    }\n    clearTasks() {\n        ClearPedTasksImmediately(this.getPedId());\n    }\n    resetCamera() {\n        SetGameplayCamRelativeHeading(0);\n    }\n    setupDefaultAppearance() {\n        SetPedDefaultComponentVariation(this.getPedId());\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/PlayerService.ts?");

/***/ }),

/***/ "./src/client/services/ServiceContainer.ts":
/*!*************************************************!*\
  !*** ./src/client/services/ServiceContainer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServiceContainer: () => (/* binding */ ServiceContainer),\n/* harmony export */   client_services: () => (/* binding */ client_services)\n/* harmony export */ });\n/* harmony import */ var _EntityService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityService */ \"./src/client/services/EntityService.ts\");\n/* harmony import */ var _ModelService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelService */ \"./src/client/services/ModelService.ts\");\n/* harmony import */ var _PlayerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerService */ \"./src/client/services/PlayerService.ts\");\n/* harmony import */ var _SpawnService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpawnService */ \"./src/client/services/SpawnService.ts\");\n/* harmony import */ var _UIService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UIService */ \"./src/client/services/UIService.ts\");\n\n\n\n\n\nclass ServiceContainer {\n    constructor() {\n        this.services = new Map();\n    }\n    register(name, service) {\n        this.services.set(name, service);\n    }\n    get(name) {\n        const service = this.services.get(name);\n        if (!service) {\n            throw new Error(`Service '${name}' non trouvé dans le conteneur`);\n        }\n        return service;\n    }\n}\nconst initializeServices = () => {\n    const container = new ServiceContainer();\n    const modelService = new _ModelService__WEBPACK_IMPORTED_MODULE_1__.ModelService();\n    const entityService = new _EntityService__WEBPACK_IMPORTED_MODULE_0__.EntityService();\n    const uiService = new _UIService__WEBPACK_IMPORTED_MODULE_4__.UIService();\n    container.register('modelService', modelService);\n    container.register('entityService', entityService);\n    container.register('uiService', uiService);\n    const playerService = new _PlayerService__WEBPACK_IMPORTED_MODULE_2__.PlayerService(entityService);\n    container.register('playerService', playerService);\n    const spawnService = new _SpawnService__WEBPACK_IMPORTED_MODULE_3__.SpawnService(modelService, entityService, uiService, playerService);\n    container.register('spawnService', spawnService);\n    return container;\n};\nconst client_services = initializeServices();\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/ServiceContainer.ts?");

/***/ }),

/***/ "./src/client/services/SpawnService.ts":
/*!*********************************************!*\
  !*** ./src/client/services/SpawnService.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpawnService: () => (/* binding */ SpawnService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass SpawnService {\n    constructor(modelService, entityService, uiService, playerService) {\n        this.modelService = modelService;\n        this.entityService = entityService;\n        this.uiService = uiService;\n        this.playerService = playerService;\n        this.defaultConfig = {\n            position: { x: -269.4, y: -955.3, z: 31.2 },\n            heading: 205.0,\n            model: 'mp_m_freemode_01',\n            fadeInDuration: 500,\n            visible: true,\n            resurrect: true,\n        };\n    }\n    getDefaultConfig() {\n        return Object.assign({}, this.defaultConfig);\n    }\n    spawn() {\n        return __awaiter(this, arguments, void 0, function* (config = {}) {\n            try {\n                const spawnConfig = Object.assign(Object.assign({}, this.defaultConfig), config);\n                const { position, heading, model, fadeInDuration, visible, resurrect } = spawnConfig;\n                yield this.uiService.fadeOut(0);\n                this.uiService.hideLoadingScreens();\n                const modelHash = yield this.modelService.load(model);\n                const ped = yield this.playerService.setModel(modelHash);\n                this.entityService.setPosition(ped, position, heading);\n                if (visible) {\n                    this.entityService.setVisible(ped, true, false);\n                }\n                if (resurrect) {\n                    this.playerService.resurrect(position, heading);\n                    this.playerService.clearTasks();\n                }\n                this.playerService.resetCamera();\n                this.entityService.freeze(ped, false);\n                this.playerService.setControl(true, 0);\n                this.playerService.setupDefaultAppearance();\n                this.modelService.release(modelHash);\n                yield this.uiService.fadeIn(fadeInDuration);\n            }\n            catch (error) {\n                console.error(\"Erreur lors de l'initialisation du joueur:\", error);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/SpawnService.ts?");

/***/ }),

/***/ "./src/client/services/UIService.ts":
/*!******************************************!*\
  !*** ./src/client/services/UIService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UIService: () => (/* binding */ UIService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass UIService {\n    fadeIn(duration) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve) => {\n                DoScreenFadeIn(duration);\n                setTimeout(resolve, duration);\n            });\n        });\n    }\n    fadeOut(duration) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve) => {\n                DoScreenFadeOut(duration);\n                setTimeout(resolve, duration);\n            });\n        });\n    }\n    hideLoadingScreens() {\n        ShutdownLoadingScreen();\n        ShutdownLoadingScreenNui();\n    }\n}\n\n\n//# sourceURL=webpack://persona-core/./src/client/services/UIService.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/client.ts");
/******/ 	
/******/ })()
;