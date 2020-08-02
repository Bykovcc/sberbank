/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Buttons.jsx":
/*!********************************!*\
  !*** ./components/Buttons.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/Context */ "./hoc/Context.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Buttons = function Buttons() {
  var _useStateValue = Object(_hoc_Context__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      inputValue = _useStateValue2$.inputValue,
      telValue = _useStateValue2$.telValue,
      telError = _useStateValue2$.telError,
      buttonError = _useStateValue2$.buttonError,
      dispatch = _useStateValue2[1];
  /* получаем данные из localStorage при загрузке страницы */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var storageValue = localStorage.getItem('product');
    var storageTel = localStorage.getItem('telephone');
    dispatchValueStorage(storageValue);
    dispatchTelStorage(storageTel);
  }, []);
  /* проверка заполнения полей */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (inputValue.length < 1 || telValue.length < 1) {
      dispatchButtonError('заполните все поля');
    } else {
      dispatchButtonError('');
    }
  }, [inputValue, telValue]);

  var dispatchValueStorage = function dispatchValueStorage(text) {
    dispatch({
      type: 'setInputValue',
      payload: text || ''
    });
  };

  var dispatchTelStorage = function dispatchTelStorage(text) {
    dispatch({
      type: 'setTelValue',
      payload: text || ''
    });
  };

  var dispatchButtonError = function dispatchButtonError(text) {
    dispatch({
      type: 'setButtonError',
      payload: text
    });
  };
  /* сохранение данных в localStorage и отправка на сервер */


  var save = function save() {
    dispatchButtonError('');
    localStorage.setItem('product', inputValue);
    localStorage.setItem('telephone', telValue);
    var data = {
      'product': inputValue,
      'telephone': telValue
    };
    fetch('http://somebd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      console.log(res.status);
    })["catch"](function (error) {
      return console.error(error);
    });
  };
  /* очистка полей */


  var clear = function clear() {
    dispatchValueStorage('');
    dispatchTelStorage('');
    localStorage.clear();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "buttons__button buttons__button--save",
    onClick: save,
    disabled: Boolean(buttonError + telError)
  }, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "buttons__button buttons__button--clear",
    onClick: clear
  }, "\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "error"
  }, buttonError));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./components/Hint.jsx":
/*!*****************************!*\
  !*** ./components/Hint.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/Context */ "./hoc/Context.jsx");
/* harmony import */ var _functions_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/unique */ "./functions/unique.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Hint = function Hint() {
  var _useStateValue = Object(_hoc_Context__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      inputValue = _useStateValue2[0].inputValue,
      dispatch = _useStateValue2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      hintsArr = _useState2[0],
      setHintsArr = _useState2[1];
  /* список ulr для отправки запроса */


  var urls = ["./data/base_1.json", "./data/base_2.json", "./data/base_3.json"];
  /* минимальное количество подсказок для приостановки запросов */

  var minHints = 5;
  /* минимальное количество символов для отправки запроса и поиска подсказок */

  var minInputValue = 2;
  var hintsArrNew = [];
  var k = 0;
  /* старт отправки запросов и обработки данных */

  var search = function search() {
    if (inputValue.length >= minInputValue) {
      fetchData(urls[k]).then(function (data) {
        return dataHandler(data);
      });
    } else {
      setHintsArr([]);
    }
  };
  /* запрос по url */


  var fetchData = function fetchData(url) {
    return fetch(url).then(function (res) {
      return res.json();
    }).then(function (result) {
      return result.text;
    }, function (error) {
      console.log(error);
    });
  };
  /* обработка данных и поиск подсказок */


  var dataHandler = function dataHandler(data) {
    var newData = data.filter(function (item) {
      return item.toLowerCase().startsWith(inputValue.toLowerCase());
    });
    hintsArrNew.push.apply(hintsArrNew, _toConsumableArray(newData));
    k++;

    if (hintsArrNew.length < minHints && urls.length > k) {
      fetchData(urls[k]).then(function (data) {
        return dataHandler(data);
      });
    } else {
      setHintsArr(hintsArrNew);
    }
  };
  /* выбор значения из подсказок */


  var getText = function getText(item) {
    dispatchValue(item);
    setHintsArr([]);
  };

  var dispatchValue = function dispatchValue(text) {
    dispatch({
      type: 'setInputValue',
      payload: text
    });
  };
  /* рендер списка подсказок */


  var renderList = hintsArr.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: Object(_functions_unique__WEBPACK_IMPORTED_MODULE_2__["unique"])(),
      className: "hint__string",
      onClick: function onClick() {
        return getText(item);
      }
    }, item);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hint"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "input",
    value: inputValue,
    onChange: function onChange(e) {
      return dispatchValue(e.target.value);
    },
    onKeyUp: search,
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0430\u0440\u043E\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043B\u0438"
  }), hintsArr.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hint__list"
  }, renderList) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Hint);

/***/ }),

/***/ "./components/Telephone.jsx":
/*!**********************************!*\
  !*** ./components/Telephone.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/Context */ "./hoc/Context.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Telephone = function Telephone() {
  var _useStateValue = Object(_hoc_Context__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      telValue = _useStateValue2$.telValue,
      telError = _useStateValue2$.telError,
      dispatch = _useStateValue2[1];
  /* валидация введённых символов */


  var validation = function validation(e) {
    var keyCode = e.keyCode || e.which;
    var keyValue = String.fromCharCode(keyCode);
    if (!/^[0-9\s()+-]+$/.test(keyValue)) event.preventDefault();
  };
  /* валидация длинны номера */


  var getTel = function getTel(e) {
    dispatchTel(e.target.value);
    var strLen = telValue.replace(/\D+/g, '').length;

    if (strLen < 7) {
      dispatchTelError('номер слишком короткий');
    } else {
      dispatchTelError('');
    }
  };

  var dispatchTelError = function dispatchTelError(text) {
    dispatch({
      type: 'setTelError',
      payload: text
    });
  };

  var dispatchTel = function dispatchTel(text) {
    dispatch({
      type: 'setTelValue',
      payload: text
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "telephone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    className: "input",
    placeholder: "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440",
    value: telValue,
    onChange: function onChange(e) {
      return dispatchTel(e.target.value);
    },
    onKeyUp: function onKeyUp(e) {
      return getTel(e);
    },
    onKeyPress: function onKeyPress(e) {
      return validation(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "error"
  }, telError));
};

/* harmony default export */ __webpack_exports__["default"] = (Telephone);

/***/ }),

/***/ "./functions/unique.js":
/*!*****************************!*\
  !*** ./functions/unique.js ***!
  \*****************************/
/*! exports provided: unique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
var unique = function unique() {
  return Math.random();
};

/***/ }),

/***/ "./hoc/Context.jsx":
/*!*************************!*\
  !*** ./hoc/Context.jsx ***!
  \*************************/
/*! exports provided: StateContext, StateProvider, useStateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var StateProvider = function StateProvider(_ref) {
  var reducer = _ref.reducer,
      initialState = _ref.initialState,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
};
var useStateValue = function useStateValue() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StateContext);
};

/***/ }),

/***/ "./hoc/reducer.jsx":
/*!*************************!*\
  !*** ./hoc/reducer.jsx ***!
  \*************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'setInputValue':
      return _objectSpread(_objectSpread({}, state), {}, {
        inputValue: action.payload
      });

    case 'setTelValue':
      return _objectSpread(_objectSpread({}, state), {}, {
        telValue: action.payload
      });

    case 'setTelError':
      return _objectSpread(_objectSpread({}, state), {}, {
        telError: action.payload
      });

    case 'setButtonError':
      return _objectSpread(_objectSpread({}, state), {}, {
        buttonError: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc/Context */ "./hoc/Context.jsx");
/* harmony import */ var _hoc_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoc/reducer */ "./hoc/reducer.jsx");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Hint */ "./components/Hint.jsx");
/* harmony import */ var _components_Telephone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Telephone */ "./components/Telephone.jsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Buttons */ "./components/Buttons.jsx");









var App = function App() {
  var initialState = {
    inputValue: '',
    telValue: '',
    telError: '',
    buttonError: ''
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Context__WEBPACK_IMPORTED_MODULE_3__["StateProvider"], {
    initialState: initialState,
    reducer: _hoc_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hint__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Telephone__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map