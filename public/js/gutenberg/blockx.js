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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/script/gutenberg.js":
/*!*********************************!*\
  !*** ./src/script/gutenberg.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gutenberg_blocks_block_x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gutenberg/blocks/block-x.js */ "./src/script/gutenberg/blocks/block-x.js");
//import './gutenberg/blocks/rss--preview.js';


/***/ }),

/***/ "./src/script/gutenberg/blocks/block-x.js":
/*!************************************************!*\
  !*** ./src/script/gutenberg/blocks/block-x.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_panels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/panels */ "./src/script/gutenberg/components/panels.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var BlockXComponents = window.BlockXComponents || {};

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

    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])(id, _objectSpread(_objectSpread({}, registerBlockTypeArgs), {}, {
      title: title,
      category: category,
      attributes: {
        content: {
          type: 'object',
          default: defaultValues
        }
      },
      edit: function edit(props) {
        var isSelected = props.isSelected,
            className = props.className,
            setAttributes = props.setAttributes,
            attributes = props.attributes;

        var setContent = function setContent(content) {
          console.log("set attributes", content);
          setAttributes({
            content: content
          });
        };

        var Preview = BlockXComponents[id] || _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_panels__WEBPACK_IMPORTED_MODULE_6__["default"], {
          definition: contentStructure,
          content: attributes.content,
          setContent: setContent
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
          className: className
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Preview, {
          block: id,
          attributes: attributes // for ssr
          ,
          content: attributes.content // for js preview

        })));
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

/***/ "./src/script/gutenberg/components/content-structure.js":
/*!**************************************************************!*\
  !*** ./src/script/gutenberg/components/content-structure.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets */ "./src/script/gutenberg/components/widgets/index.js");




var ContentStructure = function ContentStructure(_ref) {
  var items = _ref.items,
      value = _ref.value,
      _onChange = _ref.onChange;
  return items.map(function (item) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_widgets__WEBPACK_IMPORTED_MODULE_2__["default"][item.type]) !== ( true ? "undefined" : undefined)) {
      var Widget = _widgets__WEBPACK_IMPORTED_MODULE_2__["default"][item.type];

      var _value = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value[item.key]) !== ( true ? "undefined" : undefined) ? value[item.key] : item.defaultValue;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Widget, {
        key: item.key,
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets */ "./src/script/gutenberg/components/widgets/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useTranslation */ "./src/script/gutenberg/hooks/useTranslation.js");
/* harmony import */ var _content_structure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-structure */ "./src/script/gutenberg/components/content-structure.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Panels = function Panels(_ref) {
  var definition = _ref.definition,
      content = _ref.content,
      setContent = _ref.setContent;

  var _useTranslation = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      btn_apply_changes = _useTranslation.btn_apply_changes;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      state = _useState2[0],
      _setState = _useState2[1];

  var setState = function setState(key, value) {
    return _setState(function (_state) {
      return _objectSpread(_objectSpread({}, _state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    });
  };

  var applyChanges = function applyChanges() {
    console.log("apply", state, "to", content);
    setContent(_objectSpread(_objectSpread({}, content), state));

    _setState({});
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, panels.map(function (panel, panelIndex) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      key: panelIndex,
      title: panel.label,
      initialOpen: panel.opened
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_content_structure__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: panel.contentStructure,
      value: _objectSpread(_objectSpread({}, content), state),
      onChange: function onChange(key, value) {
        console.log(key, value);
        setState(key, value);
      }
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    disabled: Object.keys(state).length === 0,
    onClick: handleApplyChangesClick
  }, btn_apply_changes)));
};

/* harmony default export */ __webpack_exports__["default"] = (Panels);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/index.js":
/*!**********************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_widget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-widget.js */ "./src/script/gutenberg/components/widgets/number-widget.js");
/* harmony import */ var _post_widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-widget.js */ "./src/script/gutenberg/components/widgets/post-widget.js");
/* harmony import */ var _select_widget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-widget.js */ "./src/script/gutenberg/components/widgets/select-widget.js");
/* harmony import */ var _tax_query_widget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-query-widget.js */ "./src/script/gutenberg/components/widgets/tax-query-widget.js");
/* harmony import */ var _taxonomy_term_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxonomy-term.js */ "./src/script/gutenberg/components/widgets/taxonomy-term.js");
/* harmony import */ var _text_widget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-widget.js */ "./src/script/gutenberg/components/widgets/text-widget.js");
/* harmony import */ var _toggle_widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-widget.js */ "./src/script/gutenberg/components/widgets/toggle-widget.js");







var widgets = {
  text: _text_widget_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  number: _number_widget_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  toggle: _toggle_widget_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  select: _select_widget_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  taxonomy_term: _taxonomy_term_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  tax_query: _tax_query_widget_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _post_widget_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (widgets);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/number-widget.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/number-widget.js ***!
  \******************************************************************/
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

/***/ "./src/script/gutenberg/components/widgets/post-widget.js":
/*!****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/post-widget.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var PostWidget = function PostWidget(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (PostWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/select-widget.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/select-widget.js ***!
  \******************************************************************/
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

/***/ "./src/script/gutenberg/components/widgets/tax-query-widget.js":
/*!*********************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/tax-query-widget.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useTaxonomy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useTaxonomy.js */ "./src/script/gutenberg/hooks/useTaxonomy.js");
/* harmony import */ var _hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTranslation.js */ "./src/script/gutenberg/hooks/useTranslation.js");
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

  var _useTranslationWidget = Object(_hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_6__["useTranslationWidgetTaxQuery"])(),
      label_taxonomy = _useTranslationWidget.label_taxonomy,
      label_add_terms = _useTranslationWidget.label_add_terms,
      label_operator = _useTranslationWidget.label_operator;

  var taxonomyTerms = Object(_hooks_useTaxonomy_js__WEBPACK_IMPORTED_MODULE_5__["useFetchTaxonomyTerms"])(taxonomy); // ------------------------------------------------
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
    }); //console.debug(terms, "=> change to => ",_terms, "results in", {taxonomy, terms:newTerms})


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

  var _useTranslationWidget2 = Object(_hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_6__["useTranslationWidgetTaxQuery"])(),
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

/***/ "./src/script/gutenberg/components/widgets/taxonomy-term.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/taxonomy-term.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTaxonomy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTaxonomy */ "./src/script/gutenberg/hooks/useTaxonomy.js");




var TaxonomyTerm = function TaxonomyTerm(_ref) {
  var definition = _ref.definition,
      value = _ref.value,
      onChange = _ref.onChange;
  var label = definition.label,
      taxonomy = definition.taxonomy;
  var taxonomyTermOptions = Object(_hooks_useTaxonomy__WEBPACK_IMPORTED_MODULE_2__["useFetchTaxonomyTermsAsOptionsWithDefaultAny"])(taxonomy); // mutliple with checkbox control!
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

/***/ "./src/script/gutenberg/components/widgets/text-widget.js":
/*!****************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/text-widget.js ***!
  \****************************************************************/
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: definition.label,
    value: value,
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextWidget);

/***/ }),

/***/ "./src/script/gutenberg/components/widgets/toggle-widget.js":
/*!******************************************************************!*\
  !*** ./src/script/gutenberg/components/widgets/toggle-widget.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
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

/***/ "./src/script/gutenberg/hooks/useTaxonomy.js":
/*!***************************************************!*\
  !*** ./src/script/gutenberg/hooks/useTaxonomy.js ***!
  \***************************************************/
/*! exports provided: useFetchTaxonomyTerms, useFetchTaxonomyTermsAsOptionsWithDefaultAny */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchTaxonomyTerms", function() { return useFetchTaxonomyTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchTaxonomyTermsAsOptionsWithDefaultAny", function() { return useFetchTaxonomyTermsAsOptionsWithDefaultAny; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/select */ "./src/script/gutenberg/utils/select.js");
/* harmony import */ var _useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useTranslation */ "./src/script/gutenberg/hooks/useTranslation.js");




var useFetchTaxonomyTerms = function useFetchTaxonomyTerms(taxonomy) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return select('core').getEntityRecords('taxonomy', taxonomy, {
      per_page: -1
    }) || [];
  }, [taxonomy]);
};
var useFetchTaxonomyTermsAsOptionsWithDefaultAny = function useFetchTaxonomyTermsAsOptionsWithDefaultAny(taxonomy) {
  var terms = useFetchTaxonomyTerms(taxonomy);

  var _useTranslation = Object(_useTranslation__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      term_select_any = _useTranslation.term_select_any;

  return [Object(_utils_select__WEBPACK_IMPORTED_MODULE_2__["buildOption"])("", term_select_any)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(terms.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return Object(_utils_select__WEBPACK_IMPORTED_MODULE_2__["buildOption"])(id, name);
  })));
};

/***/ }),

/***/ "./src/script/gutenberg/hooks/useTranslation.js":
/*!******************************************************!*\
  !*** ./src/script/gutenberg/hooks/useTranslation.js ***!
  \******************************************************/
/*! exports provided: useTranslation, useTranslationWidgetTaxQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslation", function() { return useTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslationWidgetTaxQuery", function() { return useTranslationWidgetTaxQuery; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var useTranslation = function useTranslation(component) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(component) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("") ? BlockX.i18n[component] : BlockX.i18n;
};
var useTranslationWidgetTaxQuery = function useTranslationWidgetTaxQuery() {
  return useTranslation("widget_tax_query");
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

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blockx.map