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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/gutenberg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js");

var iterableToArrayLimit = __webpack_require__(/*! @babel/runtime/helpers/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableRest = __webpack_require__(/*! @babel/runtime/helpers/nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js");

var iterableToArray = __webpack_require__(/*! @babel/runtime/helpers/iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableSpread = __webpack_require__(/*! @babel/runtime/helpers/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/dequal/lite/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
/*! exports provided: dequal */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequal", function() { return dequal; });
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");

var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.__cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.__cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        var isValidatingKey = key ? 'validating@' + key : '';
        return [key, args, errorKey, isValidatingKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal/lite */ "./node_modules/dequal/lite/index.mjs");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");
/* harmony import */ var _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/web-preset */ "./node_modules/swr/esm/libs/web-preset.js");



// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_1__["default"]();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function () { },
    onSuccess: function () { },
    onError: function () { },
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: dequal_lite__WEBPACK_IMPORTED_MODULE_0__["dequal"],
    fetcher: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].fetcher,
    isOnline: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].isOnline,
    isDocumentVisible: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].isDocumentVisible,
    isPaused: function () { return false; }
};

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRInfinite, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__["useSWRInfinite"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        if (args[i] === null) {
            key += '@null';
            continue;
        }
        var _hash = void 0;
        if (typeof args[i] !== 'object' && typeof args[i] !== 'function') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/web-preset.js":
/*!*************************************************!*\
  !*** ./node_modules/swr/esm/libs/web-preset.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isOnline() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
/* harmony default export */ __webpack_exports__["default"] = ({
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher
});


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
/*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
/*! exports provided: useSWRInfinite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return useSWRInfinite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey, fn, config = {};
    if (args.length >= 1) {
        getKey = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"]), config);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, defaultFetcher = config.fetcher, extraConfig = __rest(config, ["initialSize", "revalidateAll", "persistSize", "fetcher"]);
    if (typeof fn === 'undefined') {
        // use the global fetcher
        // we have to convert the type here
        fn = defaultFetcher;
    }
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), rerender = _d[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'context@' + firstPageKey;
    }
    // page count is cached as well, so when navigating the list can be restored
    var pageCountCacheKey = null;
    var cachedPageSize;
    if (firstPageKey) {
        pageCountCacheKey = 'size@' + firstPageKey;
        cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountCacheKey);
    }
    var pageCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(cachedPageSize || initialSize);
    var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // every time the key changes, we reset the page size if it's not persisted
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (didMountRef.current) {
            if (!persistSize) {
                pageCountRef.current = initialSize;
            }
        }
        else {
            didMountRef.current = true;
        }
        // initialSize isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstPageKey]);
    // keep the data inside a ref
    var dataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    // actual swr of all pages
    var swr = Object(_use_swr__WEBPACK_IMPORTED_MODULE_3__["default"])(firstPageKey ? ['many', firstPageKey] : null, function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldFetchPage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(contextCacheKey) || {}, originalData = _a.originalData, force = _a.force;
                    data = [];
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageCountRef.current)) return [3 /*break*/, 8];
                    _b = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageKey);
                    shouldFetchPage = revalidateAll ||
                        force ||
                        typeof pageData === 'undefined' ||
                        (typeof force === 'undefined' &&
                            i === 0 &&
                            typeof dataRef.current !== 'undefined') ||
                        (originalData && !config.compare(originalData[i], pageData));
                    if (!shouldFetchPage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // update dataRef
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        dataRef.current = swr.data;
    }, [swr.data]);
    var mutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { originalData: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling `mutate()`, we revalidate all pages
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { force: true });
        }
        return swr.mutate(data, shouldRevalidate);
    }, 
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contextCacheKey]);
    // extend the SWR API
    var size = pageCountRef.current;
    var setSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (arg) {
        if (typeof arg === 'function') {
            pageCountRef.current = arg(pageCountRef.current);
        }
        else if (typeof arg === 'number') {
            pageCountRef.current = arg;
        }
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountCacheKey, pageCountRef.current);
        rerender(function (v) { return !v; });
        return mutate(function (v) { return v; });
    }, [mutate, pageCountCacheKey]);
    // Use getter functions to avoid unnecessary re-renders caused by triggering all the getters of the returned swr object
    var swrInfinite = { size: size, setSize: setSize, mutate: mutate };
    Object.defineProperties(swrInfinite, {
        error: {
            get: function () { return swr.error; },
            enumerable: true
        },
        data: {
            get: function () { return swr.data; },
            enumerable: true
        },
        // revalidate will be deprecated in the 1.x release
        // because mutate() covers the same use case of revalidate().
        // This remains only for backward compatibility
        revalidate: {
            get: function () { return swr.revalidate; },
            enumerable: true
        },
        isValidating: {
            get: function () { return swr.isValidating; },
            enumerable: true
        }
    });
    return swrInfinite;
}



/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var IS_SERVER = typeof window === 'undefined' ||
    // @ts-ignore
    !!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER
    ? null
    : window['requestAnimationFrame'] || (function (f) { return setTimeout(f, 1); });
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = (function () {
    var ts = 0;
    return function () { return ++ts; };
})();
// setup DOM events listeners for `focus` and `reconnect` actions
if (!IS_SERVER &&
    window.addEventListener &&
    typeof document !== 'undefined' &&
    typeof document.addEventListener !== 'undefined') {
    var revalidate_1 = function (revalidators) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].isDocumentVisible() || !_config__WEBPACK_IMPORTED_MODULE_1__["default"].isOnline())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    // focus revalidate
    document.addEventListener('visibilitychange', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    window.addEventListener('focus', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    // reconnect revalidate
    window.addEventListener('online', function () { return revalidate_1(RECONNECT_REVALIDATORS); }, false);
}
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        var currentIsValidating = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};
var broadcastState = function (key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error, isValidating);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update global timestamps
                        ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === 'function') {
                        // `_data` is a function, call it passing current cache value
                        try {
                            _data = _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
                        }
                        catch (err) {
                            error = err;
                        }
                    }
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 5];
                    // `_data` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function () {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] ||
                            beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error)
                                throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    if (typeof data !== 'undefined') {
                        // update cached data
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data);
                    }
                    // always update or reset the error
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!!isAsyncMutation) return [3 /*break*/, 8];
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    return [4 /*yield*/, 0
                        // we skip broadcasting if there's another mutation happened synchronously
                    ];
                case 7:
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    _b.sent();
                    // we skip broadcasting if there's another mutation happened synchronously
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    _b.label = 8;
                case 8:
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2], keyValidating = _a[3];
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"]), config);
    var configRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(config);
    useIsomorphicLayoutEffect(function () {
        configRef.current = config;
    });
    if (typeof fn === 'undefined') {
        // use the global fetcher
        fn = config.fetcher;
    }
    var resolveData = function () {
        var cachedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        return typeof cachedData === 'undefined' ? config.initialData : cachedData;
    };
    var initialData = resolveData();
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    var initialIsValidating = !!_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(stateRef.current.data);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), rerender = _b[1];
    var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            if (stateRef.current[k] === payload[k]) {
                continue;
            }
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current)
                return;
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // do unmount check for callbacks
    var eventsCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (unmountedRef.current)
            return;
        if (!initialMountedRef.current)
            return;
        if (key !== keyRef.current)
            return;
        (_a = configRef.current)[event].apply(_a, params);
    }, [key]);
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        return mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function (revalidators, callback) {
        if (!callback)
            return;
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
    };
    var removeRevalidator = function (revlidators, callback) {
        if (revlidators[key]) {
            var revalidators = revlidators[key];
            var index = revalidators.indexOf(callback);
            if (index >= 0) {
                // 10x faster than splice
                // https://jsperf.com/array-remove-by-index
                revalidators[index] = revalidators[revalidators.length - 1];
                revalidators.pop();
            }
        }
    };
    // start a revalidation
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var loading, shouldDeduping, newData, startAt, newState, err_2, retryCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        if (configRef.current.isPaused())
                            return [2 /*return*/, false];
                        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, true);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        }
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsCallback('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsCallback('onSuccess', newData, key, config);
                        _a.label = 5;
                    case 5:
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        if (CONCURRENT_PROMISES_TS[key] > startAt) {
                            return [2 /*return*/, false];
                        }
                        // if there're other mutations(s), overlapped with the current revalidation:
                        // case 1:
                        //   req------------------>res
                        //       mutate------>end
                        // case 2:
                        //         req------------>res
                        //   mutate------>end
                        // case 3:
                        //   req------------------>res
                        //       mutate-------...---------->
                        // we have to ignore the revalidation result (res) because it's no longer fresh.
                        // meanwhile, a new revalidation should be triggered when the mutation ends.
                        if (MUTATION_TS[key] &&
                            // case 1
                            (startAt <= MUTATION_TS[key] ||
                                // case 2
                                startAt <= MUTATION_END_TS[key] ||
                                // case 3
                                MUTATION_END_TS[key] === 0)) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, newState.error, false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        if (configRef.current.isPaused()) {
                            dispatch({
                                isValidating: false
                            });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_2, false);
                            }
                        }
                        // events and retry
                        eventsCallback('onError', err_2, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsCallback('onErrorRetry', err_2, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount: retryCount }));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, 
    // dispatch is immutable, and `eventsCallback`, `fnArgs`, `keyErr`, and `keyValidating` are based on `key`,
    // so we can them from the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // useSWR('key', () => fetch('/api/'), { suspense: true })
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key) {
            keyRef.current = key;
        }
        if (!config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined' && !IS_SERVER) {
                // delay revalidate if there's cache
                // to not block the rendering
                rAF(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        var pending = false;
        var onFocus = function () {
            if (pending || !configRef.current.revalidateOnFocus)
                return;
            pending = true;
            softRevalidate();
            setTimeout(function () { return (pending = false); }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function () {
            if (configRef.current.revalidateOnReconnect) {
                softRevalidate();
            }
        };
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== 'undefined' &&
                stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        addRevalidator(FOCUS_REVALIDATORS, onFocus);
        addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            removeRevalidator(FOCUS_REVALIDATORS, onFocus);
            removeRevalidator(RECONNECT_REVALIDATORS, onReconnect);
            removeRevalidator(CACHE_REVALIDATORS, onUpdate);
        };
    }, [key, revalidate]);
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (configRef.current.refreshWhenHidden ||
                                configRef.current.isDocumentVisible()) &&
                            (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Read the latest refreshInterval
                        if (configRef.current.refreshInterval && timer) {
                            timer = setTimeout(tick, configRef.current.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (configRef.current.refreshInterval) {
            timer = setTimeout(tick, configRef.current.refreshInterval);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return key ? stateRef.current.isValidating : false;
                },
                enumerable: true
            }
        });
        return state;
        // `boundMutate` is immutable, and the immutability of `revalidate` depends on `key`
        // so we can omit them from the deps array,
        // but we put it to enable react-hooks/exhaustive-deps rule.
        // `initialData` and `initialError` are not initial values
        // because they are changed during the lifecycle
        // so we should add them in the deps array.
    }, [revalidate, initialData, initialError, boundMutate, key]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined') {
            latestData = initialData;
        }
        if (typeof latestError === 'undefined') {
            latestError = initialError;
        }
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                // in this revalidate, should not rerender
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            // revalidate will be deprecated in the 1.x release
            // because mutate() covers the same use case of revalidate().
            // This remains only for backward compatibility
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    return memoizedState;
}
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

/***/ "./src/script/gutenberg.js":
/*!*********************************!*\
  !*** ./src/script/gutenberg.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gutenberg_blocks_block_x_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/blocks/block-x.js */ "./src/script/gutenberg/blocks/block-x.js");
/* harmony import */ var _gutenberg_auto_auto_ssr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/auto/auto-ssr.js */ "./src/script/gutenberg/auto/auto-ssr.js");
/* harmony import */ var _gutenberg_auto_auto_ssr_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gutenberg_auto_auto_ssr_js__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default.a.use(function (options, next) {
  options.headers = _objectSpread(_objectSpread({}, options.headers || {}), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "Block-X-Editor", true));
  return next(options);
});



/***/ }),

/***/ "./src/script/gutenberg/auto/auto-ssr.js":
/*!***********************************************!*\
  !*** ./src/script/gutenberg/auto/auto-ssr.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! @wordpress/data */ "@wordpress/data"),
    select = _require.select,
    dispatch = _require.dispatch;

var _require2 = __webpack_require__(/*! ../data/store */ "./src/script/gutenberg/data/store.js"),
    STORE_NAME = _require2.STORE_NAME;

setInterval(function () {
  var store = select(STORE_NAME);

  if (store.isRequesting()) {
    return;
  }

  if (store.getQueue().length < 1) {
    return;
  }

  dispatch(STORE_NAME).fetchSSR(select('core/editor').getCurrentPostId());
}, 300);

/***/ }),

/***/ "./src/script/gutenberg/blocks/block-x.js":
/*!************************************************!*\
  !*** ./src/script/gutenberg/blocks/block-x.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_panels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/panels */ "./src/script/gutenberg/components/panels.js");
/* harmony import */ var _components_BlockContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlockContext */ "./src/script/gutenberg/components/BlockContext.js");
/* harmony import */ var _components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ServerSideRenderQueue */ "./src/script/gutenberg/components/ServerSideRenderQueue.js");
/* harmony import */ var _hooks_use_context_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-context.js */ "./src/script/gutenberg/hooks/use-context.js");
/* harmony import */ var _hooks_use_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-settings */ "./src/script/gutenberg/hooks/use-settings.js");





function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var BlockXComponents = window.BlockXComponents = _objectSpread(_objectSpread({}, window.BlockXComponents || {}), {}, {
  // expose so others can use it
  ServerSideRenderQueue: _components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_8__["default"],
  useBlock: _hooks_use_context_js__WEBPACK_IMPORTED_MODULE_9__["useBlock"]
});

var _iterator = _createForOfIteratorHelper(BlockX.blocks),
    _step;

try {
  var _loop = function _loop() {
    var _step$value = _step.value,
        id = _step$value.id,
        title = _step$value.title,
        category = _step$value.category,
        registerBlockTypeArgs = _step$value.registerBlockTypeArgs,
        contentStructure = _step$value.contentStructure;
    // ------------------------------
    // build default values
    // ------------------------------
    var defaultValues = {};

    var _iterator2 = _createForOfIteratorHelper(contentStructure),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
            defaultValue = _step2$value.defaultValue,
            key = _step2$value.key,
            options = _step2$value.options;

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(defaultValue) !== ( true ? "undefined" : undefined)) {
          defaultValues[key] = defaultValue;
        } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(options) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()([]) && options.length > 0 && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(options[0].value) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("")) {
          defaultValues[key] = options[0].value;
        }
      } // ------------------------------
      // register block type
      // ------------------------------

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])(id, _objectSpread(_objectSpread({}, registerBlockTypeArgs), {}, {
      title: title,
      category: category,
      attributes: {
        content: {
          type: 'object',
          default: defaultValues
        }
      },
      edit: function edit(props) {
        var className = props.className,
            setAttributes = props.setAttributes,
            attributes = props.attributes;
        var autoSaveTimeout = Object(_hooks_use_settings__WEBPACK_IMPORTED_MODULE_10__["useAutoSaveTimeout"])(); // for local state changes 

        var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
            _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
            localChangeState = _useState2[0],
            setLocalChangeState = _useState2[1];

        var changeLocalState = function changeLocalState(key, value) {
          setLocalChangeState(function (_state) {
            return _objectSpread(_objectSpread({}, localChangeState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, value));
          });
        };

        Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
          var timeoutId = null;

          if (Object.keys(localChangeState).length !== 0 && autoSaveTimeout > 100) {
            timeoutId = setTimeout(function () {
              setContent(_objectSpread(_objectSpread({}, attributes.content), localChangeState));
            }, autoSaveTimeout);
          }

          return function () {
            return clearTimeout(timeoutId);
          };
        }, [JSON.stringify(localChangeState)]); // apply local changes to contents

        var setContent = function setContent(content) {
          setAttributes({
            content: content
          });
          setLocalChangeState({});
        };

        var Preview = BlockXComponents[id] || _components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_8__["default"];
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_BlockContext__WEBPACK_IMPORTED_MODULE_7__["default"], {
          blockId: id,
          contentStructure: contentStructure,
          defaultValues: defaultValues,
          attributes: attributes,
          content: attributes.content,
          setContent: setContent,
          changeLocalState: changeLocalState,
          localChanges: localChangeState
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_panels__WEBPACK_IMPORTED_MODULE_6__["default"], {
          definition: contentStructure,
          content: attributes.content,
          setContent: setContent
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
          className: className
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_BlockContext__WEBPACK_IMPORTED_MODULE_7__["default"], {
          blockId: id,
          contentStructure: contentStructure,
          defaultValues: defaultValues,
          attributes: attributes,
          content: attributes.content,
          setContent: setContent,
          changeLocalState: changeLocalState,
          localChanges: localChangeState
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Preview, {
          block: id,
          attributes: attributes // for ssr
          ,
          content: attributes.content // for js preview

        }))));
      }
    }));
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/script/gutenberg/components/BlockContext.js":
/*!*********************************************************!*\
  !*** ./src/script/gutenberg/components/BlockContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _require = __webpack_require__(/*! ../utils/context */ "./src/script/gutenberg/utils/context.js"),
    getBlockContext = _require.getBlockContext;

var BlockContext = function BlockContext(_ref) {
  var blockId = _ref.blockId,
      contentStructure = _ref.contentStructure,
      defaultValues = _ref.defaultValues,
      attributes = _ref.attributes,
      content = _ref.content,
      setContent = _ref.setContent,
      changeLocalState = _ref.changeLocalState,
      localChanges = _ref.localChanges,
      children = _ref.children;
  var Context = getBlockContext();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Context.Provider, {
    value: {
      blockId: blockId,
      contentStructure: contentStructure,
      defaultValues: defaultValues,
      attributes: attributes,
      content: content,
      setContent: setContent,
      changeLocalState: changeLocalState,
      localChanges: localChanges,
      dirtyState: _objectSpread(_objectSpread({}, content), localChanges)
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (BlockContext);

/***/ }),

/***/ "./src/script/gutenberg/components/ServerSideRenderQueue.css":
/*!*******************************************************************!*\
  !*** ./src/script/gutenberg/components/ServerSideRenderQueue.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script/gutenberg/components/ServerSideRenderQueue.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/ServerSideRenderQueue.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/gutenberg/hooks/use-store.js");
/* harmony import */ var _ServerSideRenderQueue_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServerSideRenderQueue.css */ "./src/script/gutenberg/components/ServerSideRenderQueue.css");
/* harmony import */ var _ServerSideRenderQueue_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ServerSideRenderQueue_css__WEBPACK_IMPORTED_MODULE_5__);








var LoadingWrapper = function LoadingWrapper(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "blockx--ssr__wrapper"
  }, children, isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "loader"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null)));
};

var ServerSideRenderQueue = function ServerSideRenderQueue(_ref2) {
  var block = _ref2.block,
      content = _ref2.content,
      attributes = _ref2.attributes;

  if (typeof attributes === "undefined") {
    // fallback to old behavior
    console.warn("Using content attribute with ServerSideRenderQueue is deprecated. Please provide the complete attribute object of the block.");
    attributes = {
      content: content
    };
  }

  var html = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useSSR"])(block, attributes);
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useIsRequestingBlock"])(block, attributes);
  var isInRenderQueue = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useIsInRenderQueue"])(block, attributes);
  var isLoading = isRequesting || isInRenderQueue;

  if (false === html) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(LoadingWrapper, {
      isLoading: isLoading
    }, ";", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Error loading block: %s'), block)));
  }

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(html) === ( true ? "undefined" : undefined)) {
    var msg = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block rendered as empty.');

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(LoadingWrapper, {
      isLoading: isLoading
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], null, !isLoading ? msg : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Loading")));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(LoadingWrapper, {
    isLoading: isLoading
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], {
    key: "html"
  }, html));
};

/* harmony default export */ __webpack_exports__["default"] = (ServerSideRenderQueue);

/***/ }),

/***/ "./src/script/gutenberg/components/content-structure.js":
/*!**************************************************************!*\
  !*** ./src/script/gutenberg/components/content-structure.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets */ "./src/script/gutenberg/components/widgets/index.js");




var ContentStructure = function ContentStructure(_ref) {
  var items = _ref.items,
      value = _ref.value,
      _onChange = _ref.onChange;
  return items.map(function (item, index) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_widgets__WEBPACK_IMPORTED_MODULE_2__["default"][item.type]) !== ( true ? "undefined" : undefined)) {
      var Widget = _widgets__WEBPACK_IMPORTED_MODULE_2__["default"][item.type];

      var _value = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value[item.key]) !== ( true ? "undefined" : undefined) ? value[item.key] : item.defaultValue;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Widget, {
        key: "".concat(index, "-").concat(item.key),
        definition: item,
        value: _value,
        onChange: function onChange(_value) {
          return _onChange(item.key, _value);
        }
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      key: item.key
    }, "Type ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, item.type), " not implemented");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ContentStructure);

/***/ }),

/***/ "./src/script/gutenberg/components/panels.js":
/*!***************************************************!*\
  !*** ./src/script/gutenberg/components/panels.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-translation */ "./src/script/gutenberg/hooks/use-translation.js");
/* harmony import */ var _content_structure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-structure */ "./src/script/gutenberg/components/content-structure.js");
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-context */ "./src/script/gutenberg/hooks/use-context.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Panels = function Panels(_ref) {
  var definition = _ref.definition,
      content = _ref.content,
      setContent = _ref.setContent;

  var _useTranslation = Object(_hooks_use_translation__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      btn_apply_changes = _useTranslation.btn_apply_changes;

  var _useBlock = Object(_hooks_use_context__WEBPACK_IMPORTED_MODULE_5__["useBlock"])(),
      localChanges = _useBlock.localChanges,
      changeLocalState = _useBlock.changeLocalState;

  var applyChanges = function applyChanges() {
    setContent(_objectSpread(_objectSpread({}, content), localChanges));
  };

  var handleApplyChangesClick = function handleApplyChangesClick() {
    return applyChanges();
  }; // collect panels


  var panels = [];
  var activePanel = {
    label: undefined,
    opened: undefined,
    contentStructure: []
  };

  var _iterator = _createForOfIteratorHelper(definition),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item.type === "panel") {
        panels.push(_objectSpread({}, activePanel));
        panels.push({
          label: item.label,
          opened: item.opened,
          contentStructure: item.contentStructure
        });
        activePanel.contentStructure = [];
        continue;
      }

      activePanel.contentStructure.push(item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (activePanel.contentStructure.length > 0) panels.push(activePanel);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, panels.map(function (panel, panelIndex) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      key: panelIndex,
      title: panel.label,
      initialOpen: panel.opened
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_content_structure__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: panel.contentStructure,
      value: _objectSpread(_objectSpread({}, content), localChanges),
      onChange: function onChange(key, value) {
        changeLocalState(key, value);
      }
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSecondary: true,
    disabled: Object.keys(localChanges).length === 0,
    onClick: handleApplyChangesClick
  }, btn_apply_changes)));
};

/* harmony default export */ __webpack_exports__["default"] = (Panels);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/DividerWidget.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/DividerWidget.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var DividerWidget = function DividerWidget() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null);
};

/* harmony default export */ __webpack_exports__["default"] = (DividerWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/HiddenWidget.js":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/HiddenWidget.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HiddenWidget = function HiddenWidget() {
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (HiddenWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/ListOfWidget.css":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/ListOfWidget.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/ListOfWidget.js":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/ListOfWidget.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_structure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-structure */ "./src/script/gutenberg/components/content-structure.js");
/* harmony import */ var _ListOfWidget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListOfWidget.css */ "./src/script/gutenberg/components/widgets/ListOfWidget.css");
/* harmony import */ var _ListOfWidget_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ListOfWidget_css__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ListOfWidget = function ListOfWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["definition", "value", "onChange"]);

  var onAdd = function onAdd() {
    var newItem = {};
    definition.contentStructure.forEach(function (widget) {
      newItem[widget.key] = definition === null || definition === void 0 ? void 0 : definition.defaultValues[widget.key];
    });
    onChange([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value), [newItem]));
  };

  var onClear = function onClear() {
    onChange([]);
  };

  var onChangeItem = function onChangeItem(index, widgetKey, widgetValue) {
    var newValue = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value);

    newValue[index][widgetKey] = widgetValue;
    onChange(newValue);
  };

  var onSwitchPositions = function onSwitchPositions(indexA, indexB) {
    onChange(value.map(function (item, index) {
      if (index === indexA) {
        return _objectSpread({}, value[indexB]);
      }

      if (index === indexB) {
        return _objectSpread({}, value[indexA]);
      }

      return item;
    }));
  };

  var onUp = function onUp(index) {
    return onSwitchPositions(index, index - 1);
  };

  var onDown = function onDown(index) {
    return onSwitchPositions(index, index + 1);
  };

  var onDeleteItem = function onDeleteItem(index) {
    onChange(value.filter(function (item, i) {
      return i !== index;
    }));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    className: "blockx-list-of-widget",
    label: definition.label
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "blockx-list-of-widget__body"
  }, value.map(function (instanceValue, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "blockx-list-of-widget__item",
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "blockx-list-of-widget__item--control blockx-list-of-widget__item--control-top"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      icon: "arrow-up",
      isSecondary: true,
      isSmall: true,
      disabled: index === 0,
      onClick: function onClick() {
        return onUp(index);
      }
    }, "Up")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_content_structure__WEBPACK_IMPORTED_MODULE_5__["default"], {
      items: definition.contentStructure,
      value: instanceValue,
      onChange: function onChange(widgetKey, widgetValue) {
        return onChangeItem(index, widgetKey, widgetValue);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "blockx-list-of-widget__item--control blockx-list-of-widget__item--control-bottom"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      icon: "arrow-down",
      isSecondary: true,
      isSmall: true,
      disabled: index >= value.length - 1,
      onClick: function onClick() {
        return onDown(index);
      }
    }, "Down"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      icon: "trash",
      isSecondary: true,
      isSmall: true,
      isDestructive: true,
      disabled: value.length === 0,
      onClick: function onClick() {
        return onDeleteItem(index);
      }
    }, "Delete item")));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "blockx-list-of-widget__control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: "plus",
    isSecondary: true,
    isSmall: true,
    onClick: onAdd
  }, "Add list item"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: "trash",
    isSecondary: true,
    isSmall: true,
    isDestructive: true,
    disabled: value.length === 0,
    onClick: onClear
  }, "Delete all items")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListOfWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/MediaWidget.css":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/MediaWidget.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/MediaWidget.js":
/*!****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/MediaWidget.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-translation */ "./src/script/gutenberg/hooks/use-translation.js");
/* harmony import */ var _hooks_use_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-media */ "./src/script/gutenberg/hooks/use-media.js");
/* harmony import */ var _MediaWidget_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MediaWidget.css */ "./src/script/gutenberg/components/widgets/MediaWidget.css");
/* harmony import */ var _MediaWidget_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MediaWidget_css__WEBPACK_IMPORTED_MODULE_5__);







var MediaPreviewWrapper = function MediaPreviewWrapper(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "any" : _ref$type,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
  var loading = isLoading ? "blockx-media-widget__preview--is-loading" : "";
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "blockx-media-widget__preview--item blockx-media-widget__preview--".concat(type, " ").concat(loading)
  }, children);
};

var MediaPreview = function MediaPreview(_ref2) {
  var _media$title;

  var ID = _ref2.ID;

  var _useTranslationWidget = Object(_hooks_use_translation__WEBPACK_IMPORTED_MODULE_3__["useTranslationWidgetMedia"])(),
      not_found = _useTranslationWidget.not_found;

  var _useMedia = Object(_hooks_use_media__WEBPACK_IMPORTED_MODULE_4__["useMedia"])(ID),
      media = _useMedia.media,
      isLoading = _useMedia.isLoading;

  if (isLoading) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPreviewWrapper, {
      isLoading: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "spinner is-active"
    }));
  }

  if ((media === null || media === void 0 ? void 0 : media.media_type) === "image") {
    var _media$media_details, _media$media_details$, _media$media_details$2;

    if (!(media !== null && media !== void 0 && (_media$media_details = media.media_details) !== null && _media$media_details !== void 0 && (_media$media_details$ = _media$media_details.sizes) !== null && _media$media_details$ !== void 0 && (_media$media_details$2 = _media$media_details$.thumbnail) !== null && _media$media_details$2 !== void 0 && _media$media_details$2.source_url)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "blockx-media-widget__404"
      }, not_found);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPreviewWrapper, {
      type: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: media.media_details.sizes.thumbnail.source_url
    }));
  }

  if (!(media !== null && media !== void 0 && media.source_url)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "blockx-media-widget__404"
    }, not_found);
  }

  var title = media !== null && media !== void 0 && (_media$title = media.title) !== null && _media$title !== void 0 && _media$title.rendered ? media.title.rendered : media.source_url;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPreviewWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: media.source_url,
    target: "_blank"
  }, title)));
};

var MediaWidget = function MediaWidget(_ref3) {
  var definition = _ref3.definition,
      value = _ref3.value,
      onChange = _ref3.onChange;
  var label = definition.label,
      mediaTypes = definition.mediaTypes,
      multiple = definition.multiple,
      mediaUploadTitle = definition.mediaUploadTitle;

  var _useTranslationWidget2 = Object(_hooks_use_translation__WEBPACK_IMPORTED_MODULE_3__["useTranslationWidgetMedia"])(),
      no_permission = _useTranslationWidget2.no_permission;

  var handleSelection = function handleSelection(value) {
    if (Array.isArray(value)) {
      onChange(value.map(function (media) {
        return media.id;
      }));
    } else {
      onChange(value.id);
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "blockx-media-widget ".concat(multiple ? "blockx-media-widget__multiple" : "")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], {
    fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "$", no_permission)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "blockx-media-widget__control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: mediaUploadTitle.length > 0 ? mediaUploadTitle : undefined,
    allowedTypes: mediaTypes.length > 0 ? mediaTypes : undefined,
    multiple: multiple,
    gallery: false,
    value: value,
    onSelect: handleSelection,
    render: function render(_ref4) {
      var open = _ref4.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          return open();
        }
      }, label);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "blockx-media-widget__preview"
  }, Array.isArray(value) ? value.map(function (id) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPreview, {
      key: id,
      ID: id
    });
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPreview, {
    ID: value
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/NumberWidget.js":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/NumberWidget.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var NumberWidget = function NumberWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: definition.label,
    value: value,
    onChange: onChange,
    type: "number"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NumberWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/PostWidget.css":
/*!****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/PostWidget.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/PostWidget.js":
/*!***************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/PostWidget.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends/index.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-utils.js */ "./src/script/gutenberg/hooks/use-utils.js");
/* harmony import */ var _hooks_use_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-posts */ "./src/script/gutenberg/hooks/use-posts.js");
/* harmony import */ var _PostWidget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostWidget.css */ "./src/script/gutenberg/components/widgets/PostWidget.css");
/* harmony import */ var _PostWidget_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PostWidget_css__WEBPACK_IMPORTED_MODULE_6__);









var PostSearchResult = function PostSearchResult(_ref) {
  var ID = _ref.ID,
      post_title = _ref.post_title,
      onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "blockx-post",
    onClick: onClick
  }, post_title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("i", {
    className: "description"
  }, "ID: ", ID));
};

var SearchPost = function SearchPost(_ref2) {
  var label = _ref2.label,
      post_types = _ref2.post_types,
      post_status = _ref2.post_status,
      use_context = _ref2.use_context,
      onFound = _ref2.onFound;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var _useFetchPosts = Object(_hooks_use_posts__WEBPACK_IMPORTED_MODULE_5__["useFetchPosts"])(state, post_types, post_status, use_context),
      posts = _useFetchPosts.posts,
      isLoading = _useFetchPosts.isLoading;

  Object(_hooks_use_utils_js__WEBPACK_IMPORTED_MODULE_4__["useEscapeKey"])(function () {
    setIsVisible(false);
  }, [isVisible], isVisible);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    className: "blockx--search-post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "blockx--search-posts__input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: label,
    value: state,
    onChange: function onChange(value) {
      setIsVisible(true);
      setState(value);
    },
    onFocus: function onFocus() {
      return setIsVisible(true);
    }
  }), isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "blockx--search-post__spinner-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null))), isVisible ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
    focusOnMount: false,
    position: "bottom center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "blockx--search-post__popover"
  }, posts.length > 0 ? posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PostSearchResult, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: post.ID
    }, post, {
      onClick: function onClick() {
        return onFound(post.ID);
      }
    }));
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "blockx--search-post__no-results"
  }, isLoading ? "Searching..." : "No posts found."))) : null);
};

var LockedPost = function LockedPost(_ref3) {
  var label = _ref3.label,
      post_id = _ref3.post_id,
      onUnlock = _ref3.onUnlock;

  var _usePost = Object(_hooks_use_posts__WEBPACK_IMPORTED_MODULE_5__["usePost"])(post_id),
      post = _usePost.post;

  var _post$post_title = post.post_title,
      post_title = _post$post_title === void 0 ? post_id : _post$post_title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    className: "blockx--locked-post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: label,
    value: post_title,
    readOnly: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "blockx--locked-post__icon",
    onClick: onUnlock
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "no"
  })));
};

var PostWidget = function PostWidget(_ref4) {
  var definition = _ref4.definition,
      value = _ref4.value,
      onChange = _ref4.onChange,
      instance = _ref4.instance;

  if (!value) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SearchPost, {
      label: definition.label,
      post_types: definition.post_types,
      post_status: definition.post_status,
      use_context: definition.use_context,
      instance: instance,
      onFound: onChange
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(LockedPost, {
    label: definition.label,
    post_id: value,
    onUnlock: function onUnlock() {
      return onChange("");
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/ReadonlyWidget.js":
/*!*******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/ReadonlyWidget.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var ReadonlyWidget = function ReadonlyWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: definition.label,
    type: "text",
    readOnly: true,
    value: value
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ReadonlyWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/SelectWidget.js":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/SelectWidget.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var SelectWidget = function SelectWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;
  var label = definition.label,
      options = definition.options;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: label,
    value: value,
    onChange: onChange,
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/TaxQueryWidget.js":
/*!*******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/TaxQueryWidget.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_taxonomy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-taxonomy.js */ "./src/script/gutenberg/hooks/use-taxonomy.js");
/* harmony import */ var _hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-translation.js */ "./src/script/gutenberg/hooks/use-translation.js");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/select.js */ "./src/script/gutenberg/utils/select.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var findTermByName = function findTermByName(name, terms) {
  return terms.find(function (_t) {
    return _t.name === name;
  });
};

var findTermBySlug = function findTermBySlug(slug, terms) {
  return terms.find(function (_t) {
    return _t.slug === slug;
  });
};

var findTermById = function findTermById(id, terms) {
  return terms.find(function (_t) {
    return _t.id === id;
  });
};

var findTerm = function findTerm(s, terms) {
  return findTermById(s, terms) || findTermBySlug(s, terms) || findTermByName(s, terms);
};

var ConditionControl = function ConditionControl(_ref) {
  var taxonomies = _ref.taxonomies,
      value = _ref.value,
      _onChange = _ref.onChange;
  var _value$taxonomy = value.taxonomy,
      taxonomy = _value$taxonomy === void 0 ? taxonomies[0] : _value$taxonomy,
      _value$termIds = value.termIds,
      termIds = _value$termIds === void 0 ? [] : _value$termIds,
      _value$operator = value.operator,
      operator = _value$operator === void 0 ? "OR" : _value$operator;

  var _useTranslationWidget = Object(_hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_6__["useTranslationWidgetTaxQuery"])(),
      label_taxonomy = _useTranslationWidget.label_taxonomy,
      label_add_terms = _useTranslationWidget.label_add_terms,
      label_operator = _useTranslationWidget.label_operator;

  var taxonomyTerms = Object(_hooks_use_taxonomy_js__WEBPACK_IMPORTED_MODULE_5__["useFetchTaxonomyTerms"])(taxonomy); // ------------------------------------------------
  // auto select default taxonomy effect
  // ------------------------------------------------

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!taxonomies.map(function (tax) {
      return tax.value;
    }).includes(taxonomy)) {
      _onChange(_objectSpread(_objectSpread({}, value), {}, {
        taxonomy: taxonomies[0].value
      }));
    }
  }, [taxonomy, taxonomies]); // ------------------------------------------------
  // taxonomy token field changed
  // ------------------------------------------------

  var handleChangeTerms = function handleChangeTerms(_terms) {
    var newTerms = _terms.map(function (t) {
      var search = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(t) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()("") ? t : t.value;

      var _term = findTerm(search, taxonomyTerms);

      return _term ? _term.id : search;
    });

    _onChange(_objectSpread(_objectSpread({}, value), {}, {
      termIds: newTerms
    }));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: label_taxonomy,
    options: taxonomies,
    value: taxonomy,
    onChange: function onChange(taxonomy) {
      return _onChange(_objectSpread(_objectSpread({}, value), {}, {
        taxonomy: taxonomy
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FormTokenField"], {
    label: label_add_terms,
    value: termIds.map(function (t) {
      var taxonomyTerm = findTerm(t, taxonomyTerms);
      return taxonomyTerm ? taxonomyTerm.name : t;
    }),
    suggestions: taxonomyTerms.map(function (t) {
      return t.name;
    }),
    onChange: handleChangeTerms
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: label_operator,
    value: operator,
    options: ['IN', 'NOT IN', 'AND'].map(function (i) {
      return Object(_utils_select_js__WEBPACK_IMPORTED_MODULE_7__["buildOption"])(i, i);
    }),
    onChange: function onChange(_operator) {
      _onChange(_objectSpread(_objectSpread({}, value), {}, {
        operator: _operator
      }));
    }
  })));
};

var ConditionWrapper = function ConditionWrapper(_ref2) {
  var children = _ref2.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    style: {
      background: "rgba(0, 0, 0, 0.02)",
      padding: 8,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      marginBottom: 5,
      marginLeft: -10,
      marginRight: -10
    }
  }, children);
};

var ConditionGroup = function ConditionGroup(_ref3) {
  var taxonomies = _ref3.taxonomies,
      value = _ref3.value,
      onChange = _ref3.onChange;

  var _useTranslationWidget2 = Object(_hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_6__["useTranslationWidgetTaxQuery"])(),
      toggle_AND_description = _useTranslationWidget2.toggle_AND_description,
      toggle_OR_description = _useTranslationWidget2.toggle_OR_description,
      btn_add_taxonomy = _useTranslationWidget2.btn_add_taxonomy,
      btn_delete_taxonomy = _useTranslationWidget2.btn_delete_taxonomy;

  var _value$taxonomies = value.taxonomies,
      tax = _value$taxonomies === void 0 ? [] : _value$taxonomies,
      _value$relation = value.relation,
      relation = _value$relation === void 0 ? "OR" : _value$relation;

  var handleChange = function handleChange(_value) {
    return onChange(_value.taxonomies.length >= 1 ? _value : undefined);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, tax.map(function (_tax, i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ConditionWrapper, {
      key: i
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ConditionControl, {
      taxonomies: taxonomies,
      value: _tax,
      onChange: function onChange(changedTax) {
        handleChange(_objectSpread(_objectSpread({}, value), {}, {
          taxonomies: tax.map(function (c, j) {
            return i === j ? changedTax : c;
          })
        }));
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      isDestructive: true,
      isSmall: true,
      onClick: function onClick() {
        handleChange(_objectSpread(_objectSpread({}, value), {}, {
          taxonomies: tax.map(function (c, j) {
            return j === i ? null : c;
          }).filter(function (c) {
            return c != null;
          })
        }));
      }
    }, btn_delete_taxonomy));
  }), tax.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    style: {
      marginTop: 10
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: relation,
    help: relation === "AND" ? toggle_AND_description : toggle_OR_description,
    checked: relation === "AND",
    onChange: function onChange(checked) {
      handleChange(_objectSpread(_objectSpread({}, value), {}, {
        relation: checked ? "AND" : "OR"
      }));
    }
  })) : null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    isSmall: true,
    onClick: function onClick() {
      handleChange({
        relation: relation,
        taxonomies: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tax), [{}])
      });
    },
    style: {
      width: "100%",
      textAlign: "center",
      display: "inline-block"
    }
  }, btn_add_taxonomy));
};

var TaxQueryWidget = function TaxQueryWidget(_ref4) {
  var definition = _ref4.definition,
      value = _ref4.value,
      onChange = _ref4.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: definition.label
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ConditionGroup, {
    taxonomies: definition.taxonomies,
    value: value,
    onChange: onChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxQueryWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/TaxonomyTermWidget.js":
/*!***********************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/TaxonomyTermWidget.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-taxonomy */ "./src/script/gutenberg/hooks/use-taxonomy.js");




var TaxonomyTerm = function TaxonomyTerm(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;
  var label = definition.label,
      taxonomy = definition.taxonomy;
  var taxonomyTermOptions = Object(_hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__["useFetchTaxonomyTermsAsOptionsWithDefaultAny"])(taxonomy); // mutliple with checkbox control!
  // https://developer.wordpress.org/block-editor/components/checkbox-control/

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: label,
    value: value,
    onChange: onChange,
    options: taxonomyTermOptions
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaxonomyTerm);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/TextWidget.js":
/*!***************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/TextWidget.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var TextWidget = function TextWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;

  if (typeof definition.rows !== 'number' || definition.rows === 1) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: definition.label,
      value: value,
      onChange: onChange,
      help: definition.help
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    label: definition.label,
    value: value,
    onChange: onChange,
    rows: definition.rows,
    help: definition.help
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/TextareaWidget.js":
/*!*******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/TextareaWidget.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextWidget */ "./src/script/gutenberg/components/widgets/TextWidget.js");



var TextareaWidget = function TextareaWidget(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_TextWidget__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (TextareaWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/ToggleWidget.js":
/*!*****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/ToggleWidget.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var getStateLabel = function getStateLabel(label, isOn) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(label) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) ? isOn ? label.on : label.off : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(label) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("") ? label : null;
};

var ToggleWidget = function ToggleWidget(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;
  var label = definition.label,
      help = definition.help;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: getStateLabel(label, value),
    help: getStateLabel(help, value),
    checked: value,
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/index.js":
/*!**********************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberWidget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberWidget.js */ "./src/script/gutenberg/components/widgets/NumberWidget.js");
/* harmony import */ var _PostWidget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostWidget.js */ "./src/script/gutenberg/components/widgets/PostWidget.js");
/* harmony import */ var _SelectWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectWidget.js */ "./src/script/gutenberg/components/widgets/SelectWidget.js");
/* harmony import */ var _TaxQueryWidget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaxQueryWidget.js */ "./src/script/gutenberg/components/widgets/TaxQueryWidget.js");
/* harmony import */ var _TaxonomyTermWidget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaxonomyTermWidget.js */ "./src/script/gutenberg/components/widgets/TaxonomyTermWidget.js");
/* harmony import */ var _TextWidget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextWidget.js */ "./src/script/gutenberg/components/widgets/TextWidget.js");
/* harmony import */ var _TextareaWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextareaWidget */ "./src/script/gutenberg/components/widgets/TextareaWidget.js");
/* harmony import */ var _ToggleWidget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToggleWidget.js */ "./src/script/gutenberg/components/widgets/ToggleWidget.js");
/* harmony import */ var _HiddenWidget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HiddenWidget.js */ "./src/script/gutenberg/components/widgets/HiddenWidget.js");
/* harmony import */ var _DividerWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DividerWidget.js */ "./src/script/gutenberg/components/widgets/DividerWidget.js");
/* harmony import */ var _ReadonlyWidget_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReadonlyWidget.js */ "./src/script/gutenberg/components/widgets/ReadonlyWidget.js");
/* harmony import */ var _MediaWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MediaWidget */ "./src/script/gutenberg/components/widgets/MediaWidget.js");
/* harmony import */ var _ListOfWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ListOfWidget */ "./src/script/gutenberg/components/widgets/ListOfWidget.js");













var widgets = {
  text: _TextWidget_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  textarea: _TextareaWidget__WEBPACK_IMPORTED_MODULE_6__["default"],
  number: _NumberWidget_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  toggle: _ToggleWidget_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  select: _SelectWidget_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  taxonomy_term: _TaxonomyTermWidget_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  tax_query: _TaxQueryWidget_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _PostWidget_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  hidden: _HiddenWidget_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  divider: _DividerWidget_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  readonly: _ReadonlyWidget_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  media: _MediaWidget__WEBPACK_IMPORTED_MODULE_11__["default"],
  list_of: _ListOfWidget__WEBPACK_IMPORTED_MODULE_12__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (widgets);

/***/ }),

/***/ "./src/script/gutenberg/data/store.js":
/*!********************************************!*\
  !*** ./src/script/gutenberg/data/store.js ***!
  \********************************************/
/*! exports provided: STORE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // ---------------------------------------------
// caching
// ---------------------------------------------

var SSR_CACHE_KEY = "blockx-ssr-cache";
var SSR_CACHE_TIMESTAMPS_KEY = "blockx-ssr-cache-timestamps";

var getExpiredCache = function getExpiredCache() {
  return JSON.parse(localStorage.getItem(SSR_CACHE_TIMESTAMPS_KEY) || "{}");
};

var setExpiredCache = function setExpiredCache(map) {
  return localStorage.setItem(SSR_CACHE_TIMESTAMPS_KEY, JSON.stringify(map));
};

var setCache = function setCache(blocks) {
  var expiresInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var map = getExpiredCache();
  var now = Date.now();

  for (var hash in blocks) {
    map[hash] = now + 1000 * expiresInSeconds;
  }

  setExpiredCache(map);
  localStorage.setItem(SSR_CACHE_KEY, JSON.stringify(blocks));
};

var getCache = function getCache() {
  return JSON.parse(localStorage.getItem(SSR_CACHE_KEY) || "{}");
}; // cleanup expired caches


var expiredMap = getExpiredCache();
var now = Date.now();

for (var hash in expiredMap) {
  if (expiredMap[hash] < now) {
    delete expiredMap[hash];
  }

  setExpiredCache(expiredMap);
}

var validHashes = Object.keys(expiredMap);
var blocksCache = getCache();

for (var _hash in blocksCache) {
  if (!validHashes.includes(_hash)) {
    delete blocksCache[_hash];
  }
}

setCache(blocksCache); // ---------------------------------------------
// default store state
// ---------------------------------------------

var getHash = function getHash(blockId, attributes) {
  return btoa("".concat(blockId, "-").concat(JSON.stringify(attributes)));
};

var DEFAULT_STATE = {
  isRequesting: false,
  blocks: getCache(),
  queue: {}
}; // ---------------------------------------------
// api actions
// ---------------------------------------------

var SSR_FETCH = function SSR_FETCH(post_id, blocks) {
  return {
    type: 'SSR_FETCH',
    path: "/blockx/v1/ssr",
    data: {
      post_id: post_id,
      blocks: blocks
    }
  };
}; // ---------------------------------------------
// action generators
// ---------------------------------------------


var actionNone = function actionNone() {
  return {
    type: 'none'
  };
};

var ACTION_SET_IS_REQUESTING = 'SET_IS_REQUESTING';

var actionIsRequesting = function actionIsRequesting(isRequesting) {
  return {
    type: ACTION_SET_IS_REQUESTING,
    isRequesting: isRequesting
  };
};

var ACTION_ADD_TO_QUEUE = "ADD_TO_QUEUE";

var actionAddToQueue = function actionAddToQueue(hash, block) {
  return {
    type: ACTION_ADD_TO_QUEUE,
    hash: hash,
    block: block
  };
};

var ACTION_REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";

var actionRemoveFromQueue = function actionRemoveFromQueue(hashes) {
  return {
    type: ACTION_REMOVE_FROM_QUEUE,
    hashes: hashes
  };
};

var ACTION_SET_BLOCKS = 'SET_BLOCKS';

var actionSetBlocks = function actionSetBlocks(renderedBlocks) {
  return {
    type: ACTION_SET_BLOCKS,
    blocks: renderedBlocks
  };
}; // ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------


var actions = {
  addToQueue: function addToQueue(blockId, attributes) {
    var block = {
      id: blockId,
      attributes: attributes
    };
    return actionAddToQueue(getHash(blockId, attributes), block);
  },
  fetchSSR: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function fetchSSR(post_id) {
    var queue, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function fetchSSR$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // check queue
            queue = store.getState().queue;

            if (!(Object.keys(queue).length < 1)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", actionNone());

          case 3:
            _context.next = 5;
            return actionIsRequesting(true);

          case 5:
            _context.next = 7;
            return SSR_FETCH(post_id, queue);

          case 7:
            result = _context.sent;
            _context.next = 10;
            return actionSetBlocks(result);

          case 10:
            _context.next = 12;
            return actionRemoveFromQueue(Object.keys(queue));

          case 12:
            return _context.abrupt("return", actionIsRequesting(false));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, fetchSSR);
  })
}; // ------------------------------------------------------
// register our custom store
// ------------------------------------------------------

var STORE_NAME = 'block-x';
var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["registerStore"])(STORE_NAME, {
  // ------------------------------------------------------
  // reduce actions to new state
  // ------------------------------------------------------
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case ACTION_SET_IS_REQUESTING:
        return _objectSpread(_objectSpread({}, state), {}, {
          isRequesting: action.isRequesting
        });

      case ACTION_SET_BLOCKS:
        var blocks = _objectSpread(_objectSpread({}, state.blocks), action.blocks);

        setCache(blocks);
        return _objectSpread(_objectSpread({}, state), {}, {
          blocks: blocks
        });

      case ACTION_ADD_TO_QUEUE:
        return _objectSpread(_objectSpread({}, state), {}, {
          queue: _objectSpread(_objectSpread({}, state.queue), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, action.hash, action.block))
        });

      case ACTION_REMOVE_FROM_QUEUE:
        return _objectSpread(_objectSpread({}, state), {}, {
          queue: Object.keys(state.queue).filter(function (hash) {
            return !action.hashes.includes(hash);
          }).map(function (hash) {
            return state.queue[hash];
          })
        });
    }

    return state;
  },
  // ------------------------------------------------------
  // public actions that can be used with dispatch
  // ------------------------------------------------------
  actions: actions,
  // ------------------------------------------------------
  // selectors that can be used with select
  // ------------------------------------------------------
  selectors: {
    isRequesting: function isRequesting(state, blockId, attributes) {
      // is requesting something
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(blockId) === ( true ? "undefined" : undefined) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes) === ( true ? "undefined" : undefined)) {
        return state.isRequesting;
      } // is requesting specific block configuration


      return state.isRequesting && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(state.queue[getHash(blockId, attributes)]) !== ( true ? "undefined" : undefined);
    },
    isInQueue: function isInQueue(state, blockId, attributes) {
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(state.queue[getHash(blockId, attributes)]) !== ( true ? "undefined" : undefined);
    },
    getQueue: function getQueue(state) {
      return Object.values(state.queue);
    },
    getBlocks: function getBlocks(state) {
      return state.blocks;
    },
    getBlock: function getBlock(state, blockId, attributes) {
      return state.blocks[getHash(blockId, attributes)];
    }
  },
  // ----------------------------------------------------------------
  //  controls will be executed as side effects of generator actions
  // ----------------------------------------------------------------
  controls: {
    SSR_FETCH: function SSR_FETCH(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: action.path,
        data: action.data,
        method: "POST"
      });
    }
  }
});

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-context.js":
/*!***************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-context.js ***!
  \***************************************************/
/*! exports provided: useBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBlock", function() { return useBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ "./src/script/gutenberg/utils/context.js");


var useBlock = function useBlock() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Object(_utils_context__WEBPACK_IMPORTED_MODULE_1__["getBlockContext"])());
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-media.js":
/*!*************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-media.js ***!
  \*************************************************/
/*! exports provided: useMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //----------------------------------------
// fetch single post
//----------------------------------------

var mediaCache = {};

var mediaFetcher = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(ID) {
    var cachedMedia, media;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(ID) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()("") && ID.length === 0)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(ID) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(1) && ID <= 0)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", null);

          case 4:
            cachedMedia = mediaCache[ID];

            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(cachedMedia) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()({}) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(cachedMedia.type) !== ( true ? "undefined" : undefined))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", cachedMedia);

          case 7:
            _context.next = 9;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              path: "/wp/v2/media/" + ID
            });

          case 9:
            media = _context.sent;

            if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(media) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()({}) && media.id === ID) {
              cachedMedia[ID] = _objectSpread(_objectSpread({}, cachedMedia[ID] || {}), media);
            }

            return _context.abrupt("return", media);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mediaFetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

var useMedia = function useMedia(ID) {
  // fetch!
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(ID, mediaFetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    media: data || {},
    isLoading: !error && !data
  };
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-posts.js":
/*!*************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-posts.js ***!
  \*************************************************/
/*! exports provided: usePost, useFetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePost", function() { return usePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPosts", function() { return useFetchPosts; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _use_context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-context.js */ "./src/script/gutenberg/hooks/use-context.js");
/* harmony import */ var _use_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-utils.js */ "./src/script/gutenberg/hooks/use-utils.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //----------------------------------------
// fetch single post
//----------------------------------------

var postsCache = {};

var postFetcher = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(ID) {
    var cachedPost, post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cachedPost = postsCache[ID];

            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(cachedPost) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()({}) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(cachedPost.post_title) !== ( true ? "undefined" : undefined))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", cachedPost);

          case 3:
            _context.next = 5;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              path: "/blockx/v1/get/" + ID
            });

          case 5:
            post = _context.sent;

            if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(post) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()({}) && post.ID) {
              postsCache[ID] = _objectSpread(_objectSpread({}, postsCache[ID] || {}), post);
            }

            return _context.abrupt("return", post);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postFetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

var usePost = function usePost(ID) {
  // fetch!
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(ID, postFetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    post: data || {},
    isLoading: !error && !data
  };
}; //----------------------------------------
// query for posts
//----------------------------------------

var postsQueryCache = {};

var postsQueryFetcher = function postsQueryFetcher(data) {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
    var path, cacheKey, posts, _iterator, _step, post;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(data.length === 0)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", []);

          case 2:
            // build url path
            path = "/blockx/v1/query";
            cacheKey = JSON.stringify(data);

            if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(postsQueryCache[cacheKey]) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()([]))) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", postsQueryCache[cacheKey]);

          case 6:
            _context2.next = 8;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'POST',
              path: path,
              data: data
            });

          case 8:
            posts = _context2.sent;
            postsQueryCache[cacheKey] = posts;
            _iterator = _createForOfIteratorHelper(posts);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                post = _step.value;
                postsCache[post.ID] = post;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context2.abrupt("return", posts);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};

var buildQueryParams = function buildQueryParams(search, post_types, post_status, instance) {
  return {
    s: search,
    post_type: post_types.join(','),
    post_status: post_status.join(','),
    block_instance: instance
  };
};

var useFetchPosts = function useFetchPosts(s, post_types, post_status, use_context) {
  var _useBlock = Object(_use_context_js__WEBPACK_IMPORTED_MODULE_6__["useBlock"])(),
      blockId = _useBlock.blockId,
      dirtyState = _useBlock.dirtyState;

  var debounced = Object(_use_utils_js__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(s, 600);
  var context = use_context ? {
    blockId: blockId,
    content: dirtyState
  } : {
    blockId: blockId
  };
  var queryParams = buildQueryParams(debounced, post_types, post_status, _objectSpread({}, context));
  var query = JSON.stringify(queryParams);

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(query, postsQueryFetcher(queryParams)),
      data = _useSWR2.data,
      error = _useSWR2.error;

  return {
    posts: data || [],
    isLoading: !error && !data
  };
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-settings.js":
/*!****************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-settings.js ***!
  \****************************************************/
/*! exports provided: useSettings, useAutoSaveTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return useSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAutoSaveTimeout", function() { return useAutoSaveTimeout; });
var useSettings = function useSettings() {
  return BlockX.settings;
};
var useAutoSaveTimeout = function useAutoSaveTimeout() {
  return useSettings().auto_save_timeout;
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-store.js":
/*!*************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-store.js ***!
  \*************************************************/
/*! exports provided: useIsRequesting, useIsInRenderQueue, useIsRequestingBlock, useSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsRequesting", function() { return useIsRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsInRenderQueue", function() { return useIsInRenderQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsRequestingBlock", function() { return useIsRequestingBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSSR", function() { return useSSR; });
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/store.js */ "./src/script/gutenberg/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




var useSelectStore = function useSelectStore(selector) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return selector(select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__["STORE_NAME"]));
  }, deps);
};

var useStoreDispatch = function useStoreDispatch() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_0__["STORE_NAME"]);
};

var useIsRequesting = function useIsRequesting() {
  return useSelectStore(function (state) {
    return state.isRequesting();
  }, []);
};
var useIsInRenderQueue = function useIsInRenderQueue(blockId, attributes) {
  return useSelectStore(function (state) {
    return state.isInQueue(blockId, attributes);
  }, [blockId, attributes]);
};
var useIsRequestingBlock = function useIsRequestingBlock(blockId, attributes) {
  return useSelectStore(function (state) {
    return state.isRequesting(blockId, attributes);
  }, [blockId, attributes]);
};
var useSSR = function useSSR(blockId, attributes) {
  var html = useSelectStore(function (state) {
    return state.getBlock(blockId, attributes);
  }, [blockId, attributes]);
  var dispatch = useStoreDispatch();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch.addToQueue(blockId, attributes);
  }, [blockId, JSON.stringify(attributes)]);
  return html;
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-taxonomy.js":
/*!****************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-taxonomy.js ***!
  \****************************************************/
/*! exports provided: useFetchTaxonomyTerms, useFetchTaxonomyTermsAsOptionsWithDefaultAny */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchTaxonomyTerms", function() { return useFetchTaxonomyTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchTaxonomyTermsAsOptionsWithDefaultAny", function() { return useFetchTaxonomyTermsAsOptionsWithDefaultAny; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/select */ "./src/script/gutenberg/utils/select.js");
/* harmony import */ var _use_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-translation */ "./src/script/gutenberg/hooks/use-translation.js");




var useFetchTaxonomyTerms = function useFetchTaxonomyTerms(taxonomy) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return select('core').getEntityRecords('taxonomy', taxonomy, {
      per_page: -1
    }) || [];
  }, [taxonomy]);
};
var useFetchTaxonomyTermsAsOptionsWithDefaultAny = function useFetchTaxonomyTermsAsOptionsWithDefaultAny(taxonomy) {
  var terms = useFetchTaxonomyTerms(taxonomy);

  var _useTranslation = Object(_use_translation__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      term_select_any = _useTranslation.term_select_any;

  return [Object(_utils_select__WEBPACK_IMPORTED_MODULE_2__["buildOption"])("", term_select_any)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(terms.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return Object(_utils_select__WEBPACK_IMPORTED_MODULE_2__["buildOption"])(id, name);
  })));
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-translation.js":
/*!*******************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-translation.js ***!
  \*******************************************************/
/*! exports provided: useTranslation, useTranslationWidgetTaxQuery, useTranslationWidgetMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslation", function() { return useTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslationWidgetTaxQuery", function() { return useTranslationWidgetTaxQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslationWidgetMedia", function() { return useTranslationWidgetMedia; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var useTranslation = function useTranslation(component) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(component) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("") ? BlockX.i18n[component] : BlockX.i18n;
};
var useTranslationWidgetTaxQuery = function useTranslationWidgetTaxQuery() {
  return useTranslation("widget_tax_query");
};
var useTranslationWidgetMedia = function useTranslationWidgetMedia() {
  return useTranslation("widget_media");
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-utils.js":
/*!*************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-utils.js ***!
  \*************************************************/
/*! exports provided: useDebounce, useEscapeKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEscapeKey", function() { return useEscapeKey; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var useDebounce = function useDebounce(value, delay) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
var useEscapeKey = function useEscapeKey(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!enabled) return;

    var onKeyDown = function onKeyDown(_ref) {
      var key = _ref.key;
      if (key === "Escape") callback();
    };

    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, dependencies);
};

/***/ }),

/***/ "./src/script/gutenberg/utils/context.js":
/*!***********************************************!*\
  !*** ./src/script/gutenberg/utils/context.js ***!
  \***********************************************/
/*! exports provided: getBlockContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockContext", function() { return getBlockContext; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var Contexts = {};

var getContext = function getContext(name) {
  var initValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Contexts[name]) === ( true ? "undefined" : undefined)) {
    Contexts[name] = React.createContext(initValue);
  }

  return Contexts[name];
};

var getBlockContext = function getBlockContext() {
  return getContext("block");
};

/***/ }),

/***/ "./src/script/gutenberg/utils/select.js":
/*!**********************************************!*\
  !*** ./src/script/gutenberg/utils/select.js ***!
  \**********************************************/
/*! exports provided: buildOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildOption", function() { return buildOption; });
var buildOption = function buildOption(value, label) {
  return {
    value: value,
    label: label
  };
};

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blockx.js.map