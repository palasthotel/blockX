/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gutenberg/auto/auto-ssr.js":
/*!****************************************!*\
  !*** ./src/gutenberg/auto/auto-ssr.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/store */ "./src/gutenberg/data/store.js");


setInterval(() => {
  const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_data_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME);

  if (store.isRequesting()) {
    return;
  }

  if (store.getQueue().length < 1) {
    return;
  }

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_data_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).fetchSSR((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPostId());
}, 300);

/***/ }),

/***/ "./src/gutenberg/blocks/block-x.js":
/*!*****************************************!*\
  !*** ./src/gutenberg/blocks/block-x.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/panels */ "./src/gutenberg/components/panels.js");
/* harmony import */ var _components_BlockContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlockContext */ "./src/gutenberg/components/BlockContext.js");
/* harmony import */ var _components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ServerSideRenderQueue */ "./src/gutenberg/components/ServerSideRenderQueue.js");
/* harmony import */ var _hooks_use_context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-context.js */ "./src/gutenberg/hooks/use-context.js");
/* harmony import */ var _hooks_use_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-settings */ "./src/gutenberg/hooks/use-settings.js");
/* harmony import */ var _hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-preview-mode */ "./src/gutenberg/hooks/use-preview-mode.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib */ "./src/lib.ts");












(0,_lib__WEBPACK_IMPORTED_MODULE_10__.registerServerSideRenderQueue)(_components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_lib__WEBPACK_IMPORTED_MODULE_10__.registerUseBlock)(_hooks_use_context_js__WEBPACK_IMPORTED_MODULE_7__.useBlock);

for (const block of BlockX.blocks) {
  const {
    id,
    title,
    category,
    registerBlockTypeArgs,
    contentStructure
  } = block; // ------------------------------
  // build default values
  // ------------------------------

  const defaultValues = {};

  for (const {
    defaultValue,
    key,
    options
  } of contentStructure) {
    if (typeof defaultValue !== typeof undefined) {
      defaultValues[key] = defaultValue;
    } else if (typeof options === typeof [] && options.length > 0 && typeof options[0].value === typeof "") {
      defaultValues[key] = options[0].value;
    }
  } // ------------------------------
  // register block type
  // ------------------------------


  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(id, { ...registerBlockTypeArgs,
    edit: props => {
      var _blockProps$className, _attributes$content, _attributes$content2;

      const {
        className,
        setAttributes,
        attributes
      } = props;
      const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(); // for local state changes 

      const [localChangeState, setLocalChangeState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});

      const changeLocalState = (key, value) => {
        setLocalChangeState(_state => ({ ...localChangeState,
          [key]: value
        }));
      };

      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // set once so attributes will always be present
        setContent({ ...defaultValues,
          ...attributes.content,
          ...localChangeState
        });
      }, []);
      (0,_hooks_use_settings__WEBPACK_IMPORTED_MODULE_8__.useAutoSaveTimeout)(() => {
        setContent({ ...attributes.content,
          ...localChangeState
        });
      }, localChangeState); // apply local changes to contents

      const setContent = content => {
        setAttributes({
          content
        });
        setLocalChangeState({});
      };

      const Preview = BlockXComponents[id] || _components_ServerSideRenderQueue__WEBPACK_IMPORTED_MODULE_6__["default"];
      const previewMode = (0,_hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_9__.usePreviewMode)();
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_BlockContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
        blockId: id,
        contentStructure: contentStructure,
        defaultValues: defaultValues,
        attributes: attributes,
        content: attributes.content,
        setContent: setContent,
        changeLocalState: changeLocalState,
        localChanges: localChangeState
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_panels__WEBPACK_IMPORTED_MODULE_4__["default"], {
        definition: contentStructure,
        content: attributes.content,
        setContent: setContent
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
        className: `${(_blockProps$className = blockProps.className) !== null && _blockProps$className !== void 0 ? _blockProps$className : ""} preview-mode-${previewMode.toLowerCase()}`
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_BlockContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
        blockId: id,
        contentStructure: contentStructure,
        defaultValues: defaultValues,
        attributes: attributes,
        content: (_attributes$content = attributes.content) !== null && _attributes$content !== void 0 ? _attributes$content : defaultValues,
        setContent: setContent,
        changeLocalState: changeLocalState,
        localChanges: localChangeState
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Preview, {
        block: id,
        attributes: attributes // for ssr
        ,
        content: (_attributes$content2 = attributes.content) !== null && _attributes$content2 !== void 0 ? _attributes$content2 : defaultValues // for js preview

      }))));
    }
  });
}

/***/ }),

/***/ "./src/gutenberg/components/AutoCompleteTextControl.js":
/*!*************************************************************!*\
  !*** ./src/gutenberg/components/AutoCompleteTextControl.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-utils */ "./src/gutenberg/hooks/use-utils.js");
/* harmony import */ var _AutoCompleteTextControl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoCompleteTextControl.css */ "./src/gutenberg/components/AutoCompleteTextControl.css");
/* harmony import */ var _PopoverTextControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopoverTextControl */ "./src/gutenberg/components/PopoverTextControl.js");






const AutoCompleteTextControl = _ref => {
  let {
    label,
    useCompletion,
    renderItem,
    messageSearching = "Searching...",
    messageNothingFound = "Nothing found."
  } = _ref;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_hooks_use_utils__WEBPACK_IMPORTED_MODULE_1__.useEscapeKey)(() => {
    setIsVisible(false);
  }, [isVisible], isVisible);
  const [items, isResolving] = useCompletion(state);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PopoverTextControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    onChange: value => {
      setIsVisible(true);
      setState(value);
    },
    onFocus: () => setIsVisible(true),
    showPopover: isVisible,
    isLoading: isResolving
  }, items.length > 0 ? items.map(item => renderItem(item)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "blockx--auto-complete__no-results"
  }, isResolving ? messageSearching : messageNothingFound));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteTextControl);

/***/ }),

/***/ "./src/gutenberg/components/AutoSuggestTextControl.js":
/*!************************************************************!*\
  !*** ./src/gutenberg/components/AutoSuggestTextControl.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-utils */ "./src/gutenberg/hooks/use-utils.js");
/* harmony import */ var _AutoCompleteTextControl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoCompleteTextControl.css */ "./src/gutenberg/components/AutoCompleteTextControl.css");
/* harmony import */ var _PopoverTextControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopoverTextControl */ "./src/gutenberg/components/PopoverTextControl.js");






const AutoSuggestTextControl = _ref => {
  let {
    label,
    value,
    isLoading,
    items,
    onChange,
    renderItem
  } = _ref;
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_hooks_use_utils__WEBPACK_IMPORTED_MODULE_1__.useEscapeKey)(() => {
    setIsVisible(false);
  }, [isVisible], isVisible);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PopoverTextControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    value: value,
    onChange: onChange,
    onFocus: () => setIsVisible(true),
    showPopover: items.length > 0 && isVisible,
    isLoading: isLoading
  }, items.map(item => renderItem(item, () => setIsVisible(false))));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoSuggestTextControl);

/***/ }),

/***/ "./src/gutenberg/components/BlockContext.js":
/*!**************************************************!*\
  !*** ./src/gutenberg/components/BlockContext.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const {
  getBlockContext
} = __webpack_require__(/*! ../utils/context */ "./src/gutenberg/utils/context.js");

const BlockContext = _ref => {
  let {
    blockId,
    contentStructure,
    defaultValues,
    attributes,
    content,
    setContent,
    changeLocalState,
    localChanges,
    children
  } = _ref;
  const Context = getBlockContext();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {
    value: {
      blockId,
      contentStructure,
      defaultValues,
      attributes,
      content,
      setContent,
      changeLocalState,
      localChanges,
      dirtyState: { ...content,
        ...localChanges
      }
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (BlockContext);

/***/ }),

/***/ "./src/gutenberg/components/LockedTextControl.js":
/*!*******************************************************!*\
  !*** ./src/gutenberg/components/LockedTextControl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LockedTextControl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LockedTextControl.css */ "./src/gutenberg/components/LockedTextControl.css");




const LockedTextControl = _ref => {
  let {
    label,
    value,
    onUnlock
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "blockx--locked-text-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: label,
    value: value,
    readOnly: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "blockx--locked-text-control__icon",
    onClick: onUnlock
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "no"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LockedTextControl);

/***/ }),

/***/ "./src/gutenberg/components/PopoverTextControl.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/PopoverTextControl.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PopoverTextControl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopoverTextControl.css */ "./src/gutenberg/components/PopoverTextControl.css");




const PopoverTextControl = _ref => {
  let {
    label,
    value,
    onChange,
    onFocus,
    isLoading = false,
    showPopover = false,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "blockx--popover-text-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blockx--popover-text-control__input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: label,
    value: value,
    onChange: onChange,
    onFocus: onFocus
  }), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "blockx--popover-text-control__spinner-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))), showPopover ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    focusOnMount: false,
    position: "bottom center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blockx--popover-text-control__popover"
  }, children)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (PopoverTextControl);

/***/ }),

/***/ "./src/gutenberg/components/ServerSideRenderQueue.js":
/*!***********************************************************!*\
  !*** ./src/gutenberg/components/ServerSideRenderQueue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/gutenberg/hooks/use-store.js");
/* harmony import */ var _ServerSideRenderQueue_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServerSideRenderQueue.css */ "./src/gutenberg/components/ServerSideRenderQueue.css");







const LoadingWrapper = _ref => {
  let {
    isLoading,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blockx--ssr__wrapper"
  }, children, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "loader"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)));
};

const ServerSideRenderQueue = _ref2 => {
  let {
    block,
    content,
    attributes
  } = _ref2;

  if (typeof attributes === "undefined") {
    // fallback to old behavior
    console.warn("Using content attribute with ServerSideRenderQueue is deprecated. Please provide the complete attribute object of the block.");
    attributes = {
      content
    };
  }

  const html = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useSSR)(block, attributes);
  const isRequesting = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useIsRequestingBlock)(block, attributes);
  const isInRenderQueue = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useIsInRenderQueue)(block, attributes);
  const isLoading = isRequesting || isInRenderQueue;

  if (false === html) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadingWrapper, {
      isLoading: isLoading
    }, ";", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Error loading block: %s'), block)));
  }

  if (typeof html === typeof undefined) {
    const msg = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block rendered as empty.');

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadingWrapper, {
      isLoading: isLoading
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, null, !isLoading ? msg : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Loading")));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadingWrapper, {
    isLoading: isLoading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
    key: "html"
  }, html));
};

/* harmony default export */ __webpack_exports__["default"] = (ServerSideRenderQueue);

/***/ }),

/***/ "./src/gutenberg/components/content-structure.js":
/*!*******************************************************!*\
  !*** ./src/gutenberg/components/content-structure.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets */ "./src/gutenberg/components/widgets/index.js");



const ContentStructure = _ref => {
  let {
    items,
    value,
    savedState = {},
    onChange,
    parentPath = ""
  } = _ref;
  return items.map((item, index) => {
    const widget = typeof _widgets__WEBPACK_IMPORTED_MODULE_1__["default"][item.type] !== "undefined" ? _widgets__WEBPACK_IMPORTED_MODULE_1__["default"][item.type] : window.BlockXComponents.widgets[item.type];

    if (typeof widget !== typeof undefined) {
      const Widget = widget;

      const _value = typeof value[item.key] !== typeof undefined ? value[item.key] : item.defaultValue;

      const _savedState = typeof savedState[item.key] !== typeof undefined ? savedState[item.key] : undefined;

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Widget, {
        key: `${index}-${item.key}`,
        definition: { ...item,
          parentPath
        },
        value: _value,
        savedState: _savedState,
        onChange: _value => onChange(item.key, _value)
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      key: item.key
    }, "Type ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, item.type), " not implemented");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ContentStructure);

/***/ }),

/***/ "./src/gutenberg/components/panels.js":
/*!********************************************!*\
  !*** ./src/gutenberg/components/panels.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-translation */ "./src/gutenberg/hooks/use-translation.js");
/* harmony import */ var _content_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-structure */ "./src/gutenberg/components/content-structure.js");
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-context */ "./src/gutenberg/hooks/use-context.js");






const Panels = _ref => {
  let {
    definition,
    content,
    setContent
  } = _ref;
  const {
    btn_apply_changes
  } = (0,_hooks_use_translation__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    localChanges,
    changeLocalState
  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_4__.useBlock)();

  const applyChanges = () => {
    setContent({ ...content,
      ...localChanges
    });
  };

  const handleApplyChangesClick = () => applyChanges(); // collect panels


  const panels = [];
  let activePanel = {
    label: undefined,
    opened: undefined,
    contentStructure: []
  };

  for (const item of definition) {
    if (item.type === "panel") {
      if (activePanel.contentStructure.length) {
        panels.push({ ...activePanel
        });
      }

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

  if (activePanel.contentStructure.length > 0) panels.push(activePanel);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, panels.map((panel, panelIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    key: panelIndex,
    title: panel.label,
    initialOpen: panel.opened
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_structure__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: panel.contentStructure,
    value: { ...content,
      ...localChanges
    },
    savedState: content,
    onChange: (key, value) => {
      changeLocalState(key, value);
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    disabled: Object.keys(localChanges).length === 0,
    onClick: handleApplyChangesClick
  }, btn_apply_changes)));
};

/* harmony default export */ __webpack_exports__["default"] = (Panels);

/***/ }),

/***/ "./src/gutenberg/components/widgets/AutoSuggestWidget.js":
/*!***************************************************************!*\
  !*** ./src/gutenberg/components/widgets/AutoSuggestWidget.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AutoSuggestTextControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AutoSuggestTextControl */ "./src/gutenberg/components/AutoSuggestTextControl.js");
/* harmony import */ var _hooks_use_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-ajax */ "./src/gutenberg/hooks/use-ajax.js");
/* harmony import */ var _AutoSuggestWidget_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutoSuggestWidget.css */ "./src/gutenberg/components/widgets/AutoSuggestWidget.css");






const AutoSuggestWidget = _ref => {
  let {
    definition,
    value,
    savedState,
    onChange,
    renderItem
  } = _ref;
  const {
    label,
    key,
    parentPath
  } = definition;
  const {
    setQuery,
    results,
    isLoading
  } = (0,_hooks_use_ajax__WEBPACK_IMPORTED_MODULE_2__.useAjax)(`${parentPath}${key}`);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof value === "string" && value !== "" && value !== savedState) {
      setQuery(value);
    }
  }, [value, savedState]);

  const _renderItem = typeof renderItem === "function" ? renderItem : (item, closePopover) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.value,
      onClick: () => {
        onChange(item.value);
        closePopover();
      },
      className: "blockx-auto-suggest__suggestion"
    }, item.value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AutoSuggestTextControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label,
    value: value,
    items: results,
    isLoading: isLoading,
    onChange: onChange,
    renderItem: _renderItem
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AutoSuggestWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/DividerWidget.js":
/*!***********************************************************!*\
  !*** ./src/gutenberg/components/widgets/DividerWidget.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const DividerWidget = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null);

/* harmony default export */ __webpack_exports__["default"] = (DividerWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/HiddenWidget.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/HiddenWidget.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HiddenWidget = () => null;

/* harmony default export */ __webpack_exports__["default"] = (HiddenWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/InfoWidget.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/widgets/InfoWidget.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const InfoWidget = _ref => {
  let {
    definition
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, definition.text);
};

/* harmony default export */ __webpack_exports__["default"] = (InfoWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/ListOfWidget.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/ListOfWidget.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-structure */ "./src/gutenberg/components/content-structure.js");
/* harmony import */ var _ListOfWidget_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListOfWidget.css */ "./src/gutenberg/components/widgets/ListOfWidget.css");






const ListOfWidget = _ref => {
  let {
    definition,
    value,
    savedState,
    onChange
  } = _ref;
  const {
    label,
    key,
    parentPath
  } = definition;

  const onAdd = () => {
    const newItem = {};
    definition.contentStructure.forEach(widget => {
      newItem[widget.key] = definition === null || definition === void 0 ? void 0 : definition.defaultValues[widget.key];
    });
    onChange([...value, newItem]);
  };

  const onClear = () => {
    onChange([]);
  };

  const onChangeItem = (index, widgetKey, widgetValue) => {
    const newValue = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(value);
    newValue[index][widgetKey] = widgetValue;
    onChange(newValue);
  };

  const onSwitchPositions = (indexA, indexB) => {
    onChange(value.map((item, index) => {
      if (index === indexA) {
        return { ...value[indexB]
        };
      }

      if (index === indexB) {
        return { ...value[indexA]
        };
      }

      return item;
    }));
  };

  const onUp = index => onSwitchPositions(index, index - 1);

  const onDown = index => onSwitchPositions(index, index + 1);

  const onDeleteItem = index => {
    onChange(value.filter((item, i) => i !== index));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "blockx-list-of-widget",
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blockx-list-of-widget__body"
  }, value.map((instanceValue, index) => {
    const itemSavedState = Array.isArray(savedState) && savedState.length > index ? savedState[index] : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "blockx-list-of-widget__item",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "blockx-list-of-widget__item--control blockx-list-of-widget__item--control-top"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      icon: "arrow-up",
      isSecondary: true,
      isSmall: true,
      disabled: index === 0,
      onClick: () => onUp(index)
    }, "Up")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_structure__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: definition.contentStructure,
      value: instanceValue,
      savedState: itemSavedState,
      parentPath: parentPath + key + ".",
      onChange: (widgetKey, widgetValue) => onChangeItem(index, widgetKey, widgetValue)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "blockx-list-of-widget__item--control blockx-list-of-widget__item--control-bottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      icon: "arrow-down",
      isSecondary: true,
      isSmall: true,
      disabled: index >= value.length - 1,
      onClick: () => onDown(index)
    }, "Down"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      icon: "trash",
      isSecondary: true,
      isSmall: true,
      isDestructive: true,
      disabled: value.length === 0,
      onClick: () => onDeleteItem(index)
    }, "Delete item")));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blockx-list-of-widget__control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "plus",
    isSecondary: true,
    isSmall: true,
    onClick: onAdd
  }, "Add list item"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/***/ "./src/gutenberg/components/widgets/MediaWidget.js":
/*!*********************************************************!*\
  !*** ./src/gutenberg/components/widgets/MediaWidget.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-translation */ "./src/gutenberg/hooks/use-translation.js");
/* harmony import */ var _hooks_use_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-media */ "./src/gutenberg/hooks/use-media.js");
/* harmony import */ var _MediaWidget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaWidget.css */ "./src/gutenberg/components/widgets/MediaWidget.css");








const MediaPreviewWrapper = _ref => {
  let {
    type = "any",
    isLoading = false,
    error = "",
    children
  } = _ref;
  const loading = isLoading ? "blockx-media-widget__preview--is-loading" : "";
  const hasError = error !== "" ? "blockx-media-widget__preview--has-error" : "";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `blockx-media-widget__preview--item blockx-media-widget__preview--${type} ${loading} ${hasError}`
  }, children, hasError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "blockx-media-widget__preview--error"
  }, error));
};

const MediaPreview = _ref2 => {
  var _media$title;

  let {
    ID,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth
  } = _ref2;
  const {
    not_found
  } = (0,_hooks_use_translation__WEBPACK_IMPORTED_MODULE_4__.useTranslationWidgetMedia)();
  const {
    media,
    isLoading
  } = (0,_hooks_use_media__WEBPACK_IMPORTED_MODULE_5__.useMedia)(ID);

  if (isLoading) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPreviewWrapper, {
      isLoading: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "spinner is-active"
    }));
  }

  if ((media === null || media === void 0 ? void 0 : media.media_type) === "image") {
    var _media$media_details, _media$media_details$, _media$media_details$2;

    if (!(media !== null && media !== void 0 && (_media$media_details = media.media_details) !== null && _media$media_details !== void 0 && (_media$media_details$ = _media$media_details.sizes) !== null && _media$media_details$ !== void 0 && (_media$media_details$2 = _media$media_details$.thumbnail) !== null && _media$media_details$2 !== void 0 && _media$media_details$2.source_url)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "blockx-media-widget__404"
      }, not_found);
    }

    const width = media.media_details.width;
    const height = media.media_details.height;
    let restrictionInfo = [];

    if (minWidth > 0 && width < minWidth) {
      restrictionInfo.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, `width ${width}px < min width ${minWidth}px`, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)));
    }

    if (minHeight > 0 && height < minHeight) {
      restrictionInfo.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, `height ${height}px < min height ${minHeight}px`, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)));
    }

    if (maxWidth > 0 && width > maxWidth) {
      restrictionInfo.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, `width ${width}px > max width ${maxWidth}px`, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)));
    }

    if (maxHeight > 0 && height > maxHeight) {
      restrictionInfo.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, `height ${height}px > max height ${maxHeight}px`, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPreviewWrapper, {
      type: "image",
      error: restrictionInfo.length ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, restrictionInfo) : ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: media.media_details.sizes.thumbnail.source_url
    }));
  }

  if (!(media !== null && media !== void 0 && media.source_url)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "blockx-media-widget__404"
    }, not_found);
  }

  const title = media !== null && media !== void 0 && (_media$title = media.title) !== null && _media$title !== void 0 && _media$title.rendered ? media.title.rendered : media.source_url;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPreviewWrapper, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: media.source_url,
    target: "_blank"
  }, title)));
};

const SizeRestrictionInfo = props => {
  const {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  } = props;
  const hasSizeRestriction = minWidth > 0 || maxWidth > 0 || minHeight > 0 || maxHeight > 0;
  if (!hasSizeRestriction) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "description"
  }, minWidth > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Min width: ", minWidth, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)), maxWidth > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Max width: ", maxWidth, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)), minHeight > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Min height: ", minHeight, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)), maxHeight > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Max height: ", maxHeight, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null)));
};

const MediaWidget = _ref3 => {
  let {
    definition,
    value,
    onChange
  } = _ref3;
  const {
    label,
    mediaTypes,
    multiple,
    mediaUploadTitle
  } = definition;
  const {
    no_permission
  } = (0,_hooks_use_translation__WEBPACK_IMPORTED_MODULE_4__.useTranslationWidgetMedia)();

  const handleSelection = value => {
    if (Array.isArray(value)) {
      onChange(value.map(media => media.id));
    } else {
      onChange(value.id);
    }
  };

  const handleDeleteAll = () => {
    if (Array.isArray(value)) {
      onChange([]);
    } else {
      onChange("");
    }
  };

  const isNotEmpty = Array.isArray(value) && value.length > 0 || value !== "";
  const isEmpty = !isNotEmpty;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `blockx-media-widget ${multiple ? "blockx-media-widget__multiple" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, {
    fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, "$", no_permission)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "blockx-media-widget__control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    title: mediaUploadTitle.length > 0 ? mediaUploadTitle : undefined,
    allowedTypes: mediaTypes.length > 0 ? mediaTypes : undefined,
    multiple: multiple,
    gallery: false,
    value: value,
    onSelect: handleSelection,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isSecondary: true,
        onClick: () => open()
      }, label);
    }
  }), isNotEmpty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "trash",
    className: "blockx-media-widget__btn-clear",
    onClick: handleDeleteAll
  })), isEmpty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SizeRestrictionInfo, definition), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "blockx-media-widget__preview"
  }, Array.isArray(value) ? value.map(id => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPreview, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: id
  }, definition, {
    ID: id
  }))) : value ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPreview, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ID: value
  }, definition)) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/NumberWidget.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/NumberWidget.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);




const NumberWidget = _ref => {
  let {
    definition,
    value,
    onChange
  } = _ref;

  const handleChange = value => {
    if (value && definition.max && value > definition.max) {
      return;
    }

    if (value && definition.min && value < definition.min) {
      return;
    }

    onChange(value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: definition.label,
    value: value,
    onChange: handleChange,
    type: "number",
    help: definition.help
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NumberWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/PostWidget.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/widgets/PostWidget.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-posts */ "./src/gutenberg/hooks/use-posts.js");
/* harmony import */ var _PostWidget_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostWidget.css */ "./src/gutenberg/components/widgets/PostWidget.css");
/* harmony import */ var _LockedTextControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LockedTextControl */ "./src/gutenberg/components/LockedTextControl.js");
/* harmony import */ var _hooks_use_completion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-completion */ "./src/gutenberg/hooks/use-completion.js");
/* harmony import */ var _AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AutoCompleteTextControl */ "./src/gutenberg/components/AutoCompleteTextControl.js");








const PostSearchResult = _ref => {
  let {
    ID,
    post_title,
    onClick
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "blockx-post",
    onClick: onClick
  }, post_title, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "description"
  }, "ID: ", ID));
};

const SearchPost = _ref2 => {
  let {
    label,
    post_types,
    post_status,
    use_context,
    onFound
  } = _ref2;
  const useCompletion = (0,_hooks_use_completion__WEBPACK_IMPORTED_MODULE_5__.usePostsCompletionFactory)(post_types, post_status, use_context);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: label,
    useCompletion: useCompletion,
    renderItem: post => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PostSearchResult, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: post.ID
      }, post, {
        onClick: () => onFound(post.ID)
      }));
    }
  });
};

const LockedPost = _ref3 => {
  let {
    label,
    post_id,
    onUnlock
  } = _ref3;
  const {
    post
  } = (0,_hooks_use_posts__WEBPACK_IMPORTED_MODULE_2__.usePost)(post_id);
  const {
    post_title = post_id
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_LockedTextControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: label,
    value: post_title,
    onUnlock: onUnlock
  });
};

const PostWidget = _ref4 => {
  let {
    definition,
    value,
    onChange,
    instance
  } = _ref4;

  if (!value) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SearchPost, {
      label: definition.label,
      post_types: definition.post_types,
      post_status: definition.post_status,
      use_context: definition.use_context,
      instance: instance,
      onFound: onChange
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LockedPost, {
    label: definition.label,
    post_id: value,
    onUnlock: () => onChange("")
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/ReadonlyWidget.js":
/*!************************************************************!*\
  !*** ./src/gutenberg/components/widgets/ReadonlyWidget.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const ReadonlyWidget = _ref => {
  let {
    definition,
    value
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: definition.label,
    type: "text",
    readOnly: true,
    value: value,
    help: definition.help
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ReadonlyWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/SelectWidget.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/SelectWidget.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const SelectWidget = _ref => {
  let {
    definition,
    value,
    onChange
  } = _ref;
  const {
    label,
    options
  } = definition;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: label,
    value: value,
    onChange: onChange,
    options: options,
    multiple: definition.multiple
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/TaxQueryWidget.js":
/*!************************************************************!*\
  !*** ./src/gutenberg/components/widgets/TaxQueryWidget.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_taxonomy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-taxonomy.js */ "./src/gutenberg/hooks/use-taxonomy.js");
/* harmony import */ var _hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-translation.js */ "./src/gutenberg/hooks/use-translation.js");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/select.js */ "./src/gutenberg/utils/select.js");
/* harmony import */ var _TaxQueryWidget_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaxQueryWidget.css */ "./src/gutenberg/components/widgets/TaxQueryWidget.css");
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/selectors */ "./src/gutenberg/utils/selectors.js");









const ConditionControl = _ref => {
  let {
    taxonomies,
    value,
    onChange
  } = _ref;
  const {
    taxonomy = taxonomies[0],
    termIds = [],
    operator = "OR"
  } = value;
  const {
    label_taxonomy,
    label_add_terms,
    label_operator
  } = (0,_hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_3__.useTranslationWidgetTaxQuery)();
  const [tokenInput, setTokenInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [searchTermsInput, setSearchTermsInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    terms: taxonomyTerms,
    isResolving: isResolvingTaxonomyTerms
  } = (0,_hooks_use_taxonomy_js__WEBPACK_IMPORTED_MODULE_2__.useFetchTaxonomyTerms)(taxonomy, searchTermsInput);
  const {
    terms: selectedTerms,
    isResolving: isResolvingSelectedTerms
  } = (0,_hooks_use_taxonomy_js__WEBPACK_IMPORTED_MODULE_2__.useFetchTaxonomyTermsByIds)(taxonomy, termIds); // ------------------------------------------------
  // auto select default taxonomy effect
  // ------------------------------------------------

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!taxonomies.map(tax => tax.value).includes(taxonomy)) {
      onChange({ ...value,
        taxonomy: taxonomies[0].value
      });
    }
  }, [taxonomy, taxonomies]); // ------------------------------------------------
  // suggestions
  // ------------------------------------------------

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let requestTimeout = setTimeout(() => {
      setSearchTermsInput(tokenInput);
    }, 600);
    return () => clearTimeout(requestTimeout);
  }, [termIds, tokenInput]); // ------------------------------------------------
  // taxonomy token field changed
  // ------------------------------------------------

  const handleChangeTerms = _terms => {
    const newTerms = _terms.map(t => {
      const search = typeof t === typeof "" ? t : t.value;

      const _term = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_6__.findTerm)(search, taxonomyTerms) || (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_6__.findTerm)(search, selectedTerms);

      return _term ? _term.id : search;
    });

    onChange({ ...value,
      termIds: newTerms
    });
  };

  const handleTokenInputChange = value => {
    setTokenInput(value);
  };

  const cls = ["blockx--tax-query"];
  if (isResolvingTaxonomyTerms) cls.push("is-resolving-search");
  if (isResolvingSelectedTerms) cls.push("is-resolving-selection");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: cls.join(" ")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: label_taxonomy,
    options: taxonomies,
    value: taxonomy,
    onChange: taxonomy => onChange({ ...value,
      taxonomy
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: label_add_terms,
    value: termIds.map(t => {
      const taxonomyTerm = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_6__.findTerm)(t, selectedTerms);
      return taxonomyTerm ? taxonomyTerm.name : t;
    }),
    onInputChange: handleTokenInputChange,
    suggestions: taxonomyTerms.map(t => t.name),
    onChange: handleChangeTerms
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: label_operator,
    value: operator,
    options: ['IN', 'NOT IN', 'AND'].map(i => (0,_utils_select_js__WEBPACK_IMPORTED_MODULE_4__.buildOption)(i, i)),
    onChange: _operator => {
      onChange({ ...value,
        operator: _operator
      });
    }
  })));
};

const ConditionWrapper = _ref2 => {
  let {
    children
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

const ConditionGroup = _ref3 => {
  let {
    taxonomies,
    value,
    onChange
  } = _ref3;
  const {
    toggle_AND_description,
    toggle_OR_description,
    btn_add_taxonomy,
    btn_delete_taxonomy
  } = (0,_hooks_use_translation_js__WEBPACK_IMPORTED_MODULE_3__.useTranslationWidgetTaxQuery)();
  const {
    taxonomies: tax = [],
    relation = "OR"
  } = value;

  const handleChange = _value => onChange(_value.taxonomies.length >= 1 ? _value : undefined);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tax.map((_tax, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConditionWrapper, {
      key: i
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConditionControl, {
      taxonomies: taxonomies,
      value: _tax,
      onChange: changedTax => {
        handleChange({ ...value,
          taxonomies: tax.map((c, j) => i === j ? changedTax : c)
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isDestructive: true,
      isSmall: true,
      onClick: () => {
        handleChange({ ...value,
          taxonomies: tax.map((c, j) => j === i ? null : c).filter(c => c != null)
        });
      }
    }, btn_delete_taxonomy));
  }), tax.length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: 10
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: relation,
    help: relation === "AND" ? toggle_AND_description : toggle_OR_description,
    checked: relation === "AND",
    onChange: checked => {
      handleChange({ ...value,
        relation: checked ? "AND" : "OR"
      });
    }
  })) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true,
    isSmall: true,
    onClick: () => {
      handleChange({
        relation,
        taxonomies: [...tax, {}]
      });
    },
    style: {
      width: "100%",
      textAlign: "center",
      display: "inline-block"
    }
  }, btn_add_taxonomy));
};

const TaxQueryWidget = _ref4 => {
  let {
    definition,
    value,
    onChange
  } = _ref4;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: definition.label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ConditionGroup, {
    taxonomies: definition.taxonomies,
    value: value,
    onChange: onChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxQueryWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/TaxonomyTermWidget.js":
/*!****************************************************************!*\
  !*** ./src/gutenberg/components/widgets/TaxonomyTermWidget.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-taxonomy */ "./src/gutenberg/hooks/use-taxonomy.js");
/* harmony import */ var _utils_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/selectors */ "./src/gutenberg/utils/selectors.js");
/* harmony import */ var _LockedTextControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LockedTextControl */ "./src/gutenberg/components/LockedTextControl.js");
/* harmony import */ var _AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AutoCompleteTextControl */ "./src/gutenberg/components/AutoCompleteTextControl.js");
/* harmony import */ var _hooks_use_completion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-completion */ "./src/gutenberg/hooks/use-completion.js");
/* harmony import */ var _TaxonomyTermWidget_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyTermWidget.css */ "./src/gutenberg/components/widgets/TaxonomyTermWidget.css");










const MultipleTaxonomyTerms = _ref => {
  let {
    definition,
    value,
    onChange
  } = _ref;
  const {
    label,
    taxonomy
  } = definition;
  const [tokenInput, setTokenInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [searchTermsInput, setSearchTermsInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const termIds = Array.isArray(value) ? value : typeof value !== 'undefined' ? [value] : [];
  const {
    terms: taxonomyTerms,
    isResolving: isResolvingTaxonomyTerms
  } = (0,_hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__.useFetchTaxonomyTerms)(taxonomy, searchTermsInput);
  const {
    terms: selectedTerms,
    isResolving: isResolvingSelectedTerms
  } = (0,_hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__.useFetchTaxonomyTermsByIds)(taxonomy, termIds); // ------------------------------------------------
  // suggestions
  // ------------------------------------------------

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let requestTimeout = setTimeout(() => {
      setSearchTermsInput(tokenInput);
    }, 600);
    return () => clearTimeout(requestTimeout);
  }, [termIds, tokenInput]);

  const handleTokenInputChange = _value => {
    setTokenInput(_value);
  };

  const handleChangeTerms = _terms => {
    const newTerms = _terms.map(t => {
      const search = typeof t === typeof "" ? t : t.value;

      const _term = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_3__.findTerm)(search, taxonomyTerms) || (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_3__.findTerm)(search, selectedTerms);

      return _term ? _term.id : search;
    });

    onChange(newTerms);
  };

  const currentValue = termIds.map(t => {
    const taxonomyTerm = (0,_utils_selectors__WEBPACK_IMPORTED_MODULE_3__.findTerm)(t, selectedTerms);
    return taxonomyTerm ? taxonomyTerm.name : t;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: label,
    value: currentValue,
    onInputChange: handleTokenInputChange,
    suggestions: taxonomyTerms.map(t => t.name),
    onChange: handleChangeTerms
  });
};

const LockedTerm = _ref2 => {
  let {
    label,
    term_id,
    taxonomy,
    onUnlock
  } = _ref2;
  const {
    term,
    isResolving
  } = (0,_hooks_use_taxonomy__WEBPACK_IMPORTED_MODULE_2__.useFetchTaxonomyTermById)(taxonomy, term_id);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_LockedTextControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: label,
    value: term ? term.name : isResolving ? "..." : "?",
    onUnlock: onUnlock
  });
};

const SingleTaxonomyTerm = _ref3 => {
  let {
    definition,
    value,
    onChange
  } = _ref3;
  const {
    label,
    taxonomy
  } = definition;
  const useCompletion = (0,_hooks_use_completion__WEBPACK_IMPORTED_MODULE_6__.useTaxonomyTermsCompletionFactory)(taxonomy);

  if (value) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LockedTerm, {
      label: label,
      term_id: value,
      taxonomy: taxonomy,
      onUnlock: () => onChange("")
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    useCompletion: useCompletion,
    renderItem: item => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: item.id,
        onClick: () => onChange(item.id),
        className: "blockx-taxonomy-term__suggestion"
      }, item.name);
    }
  });
};

const TaxonomyTerm = _ref4 => {
  let {
    definition,
    value,
    onChange
  } = _ref4;
  const {
    multiple = false
  } = definition;

  if (multiple) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MultipleTaxonomyTerms, {
      definition: definition,
      value: value,
      onChange: onChange
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SingleTaxonomyTerm, {
    definition: definition,
    value: value,
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaxonomyTerm);

/***/ }),

/***/ "./src/gutenberg/components/widgets/TextWidget.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/widgets/TextWidget.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const textCounter = (length, maxChars) => {
  if (typeof maxChars !== "number" || maxChars <= 0) {
    return "";
  }

  return `${length}/${maxChars}`;
};

const TextWidget = _ref => {
  let {
    definition,
    value,
    onChange
  } = _ref;
  const {
    label,
    help = "",
    rows,
    max_chars
  } = definition;

  const onChangeValue = value => {
    if (typeof max_chars === "number" && value.length > max_chars) {
      return;
    }

    onChange(value);
  };

  const textCount = textCounter(value.length, max_chars);

  if (typeof rows !== 'number' || rows === 1) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: label,
      value: value,
      onChange: onChangeValue,
      help: `${textCount} ${help}`
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: label,
    value: value,
    onChange: onChangeValue,
    rows: rows,
    help: `${textCount} ${help}`
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/TextareaWidget.js":
/*!************************************************************!*\
  !*** ./src/gutenberg/components/widgets/TextareaWidget.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextWidget */ "./src/gutenberg/components/widgets/TextWidget.js");



const TextareaWidget = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TextWidget__WEBPACK_IMPORTED_MODULE_1__["default"], props);

/* harmony default export */ __webpack_exports__["default"] = (TextareaWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/ToggleWidget.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/ToggleWidget.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const getStateLabel = (label, isOn) => {
  return typeof label === typeof {} ? isOn ? label.on : label.off : typeof label === typeof "" ? label : null;
};

const ToggleWidget = _ref => {
  let {
    definition,
    value,
    onChange
  } = _ref;
  const {
    label,
    help
  } = definition;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: getStateLabel(label, value),
    help: getStateLabel(help, value),
    checked: value,
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/UrlWidget.js":
/*!*******************************************************!*\
  !*** ./src/gutenberg/components/widgets/UrlWidget.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AutoSuggestWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoSuggestWidget */ "./src/gutenberg/components/widgets/AutoSuggestWidget.js");
/* harmony import */ var _UrlWidget_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UrlWidget.css */ "./src/gutenberg/components/widgets/UrlWidget.css");





const UrlWidget = props => {
  const {
    onChange
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_AutoSuggestWidget__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    renderItem: (item, closePopover) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: item.value,
        onClick: () => {
          onChange(item.value);
          closePopover();
        },
        className: "blockx-url__suggestion"
      }, item.label, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", null, item.value));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UrlWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/UserWidget.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/widgets/UserWidget.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-users */ "./src/gutenberg/hooks/use-users.js");
/* harmony import */ var _UserWidget_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserWidget.css */ "./src/gutenberg/components/widgets/UserWidget.css");
/* harmony import */ var _LockedTextControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LockedTextControl */ "./src/gutenberg/components/LockedTextControl.js");
/* harmony import */ var _AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AutoCompleteTextControl */ "./src/gutenberg/components/AutoCompleteTextControl.js");
/* harmony import */ var _hooks_use_completion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-completion */ "./src/gutenberg/hooks/use-completion.js");








const UserSearchResult = _ref => {
  let {
    id,
    name,
    onClick
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "blockx-user",
    onClick: onClick
  }, name, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "description"
  }, "id: ", id));
};

const SearchUser = _ref2 => {
  let {
    label,
    roles,
    use_context,
    onFound
  } = _ref2;
  const useCompletion = (0,_hooks_use_completion__WEBPACK_IMPORTED_MODULE_6__.useUsersCompletionFactory)(roles, use_context);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_AutoCompleteTextControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    useCompletion: useCompletion,
    renderItem: user => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(UserSearchResult, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: user.id
      }, user, {
        onClick: () => onFound(user.id)
      }));
    },
    messageNothingFound: "No users found."
  });
};

const LockedUser = _ref3 => {
  let {
    label,
    user_id,
    onUnlock
  } = _ref3;
  const {
    user
  } = (0,_hooks_use_users__WEBPACK_IMPORTED_MODULE_2__.useUser)(user_id);
  const {
    name = user_id
  } = user;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_LockedTextControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: label,
    value: name,
    onUnlock: onUnlock
  });
};

const UserWidget = _ref4 => {
  let {
    definition,
    value,
    onChange,
    instance
  } = _ref4;

  if (!value) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SearchUser, {
      label: definition.label,
      roles: definition.roles,
      use_context: definition.use_context,
      instance: instance,
      onFound: onChange
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LockedUser, {
    label: definition.label,
    user_id: value,
    onUnlock: () => onChange("")
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserWidget);

/***/ }),

/***/ "./src/gutenberg/components/widgets/index.js":
/*!***************************************************!*\
  !*** ./src/gutenberg/components/widgets/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberWidget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberWidget.js */ "./src/gutenberg/components/widgets/NumberWidget.js");
/* harmony import */ var _PostWidget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostWidget.js */ "./src/gutenberg/components/widgets/PostWidget.js");
/* harmony import */ var _UserWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserWidget.js */ "./src/gutenberg/components/widgets/UserWidget.js");
/* harmony import */ var _SelectWidget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectWidget.js */ "./src/gutenberg/components/widgets/SelectWidget.js");
/* harmony import */ var _TaxQueryWidget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaxQueryWidget.js */ "./src/gutenberg/components/widgets/TaxQueryWidget.js");
/* harmony import */ var _TaxonomyTermWidget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaxonomyTermWidget.js */ "./src/gutenberg/components/widgets/TaxonomyTermWidget.js");
/* harmony import */ var _TextWidget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextWidget.js */ "./src/gutenberg/components/widgets/TextWidget.js");
/* harmony import */ var _TextareaWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextareaWidget */ "./src/gutenberg/components/widgets/TextareaWidget.js");
/* harmony import */ var _ToggleWidget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToggleWidget.js */ "./src/gutenberg/components/widgets/ToggleWidget.js");
/* harmony import */ var _HiddenWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HiddenWidget.js */ "./src/gutenberg/components/widgets/HiddenWidget.js");
/* harmony import */ var _DividerWidget_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DividerWidget.js */ "./src/gutenberg/components/widgets/DividerWidget.js");
/* harmony import */ var _ReadonlyWidget_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReadonlyWidget.js */ "./src/gutenberg/components/widgets/ReadonlyWidget.js");
/* harmony import */ var _MediaWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MediaWidget */ "./src/gutenberg/components/widgets/MediaWidget.js");
/* harmony import */ var _ListOfWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ListOfWidget */ "./src/gutenberg/components/widgets/ListOfWidget.js");
/* harmony import */ var _AutoSuggestWidget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AutoSuggestWidget */ "./src/gutenberg/components/widgets/AutoSuggestWidget.js");
/* harmony import */ var _UrlWidget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UrlWidget */ "./src/gutenberg/components/widgets/UrlWidget.js");
/* harmony import */ var _InfoWidget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./InfoWidget */ "./src/gutenberg/components/widgets/InfoWidget.js");

















const widgets = {
  text: _TextWidget_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  textarea: _TextareaWidget__WEBPACK_IMPORTED_MODULE_7__["default"],
  number: _NumberWidget_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  toggle: _ToggleWidget_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  select: _SelectWidget_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  taxonomy_term: _TaxonomyTermWidget_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  tax_query: _TaxQueryWidget_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  post: _PostWidget_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _UserWidget_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  hidden: _HiddenWidget_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  divider: _DividerWidget_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  info: _InfoWidget__WEBPACK_IMPORTED_MODULE_16__["default"],
  readonly: _ReadonlyWidget_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  media: _MediaWidget__WEBPACK_IMPORTED_MODULE_12__["default"],
  url: _UrlWidget__WEBPACK_IMPORTED_MODULE_15__["default"],
  auto_suggest: _AutoSuggestWidget__WEBPACK_IMPORTED_MODULE_14__["default"],
  list_of: _ListOfWidget__WEBPACK_IMPORTED_MODULE_13__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (widgets);

/***/ }),

/***/ "./src/gutenberg/composedBlocks/composedBlocks-x.js":
/*!**********************************************************!*\
  !*** ./src/gutenberg/composedBlocks/composedBlocks-x.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _register_composedBlocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-composedBlocks.js */ "./src/gutenberg/composedBlocks/register-composedBlocks.js");

 //registerBlockType(slotMetaData, slotSettings);

for (const composedBlock of BlockX.composedBlocks) {
  const {
    meta,
    settings
  } = (0,_register_composedBlocks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(composedBlock);
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(meta, settings);
}

/***/ }),

/***/ "./src/gutenberg/composedBlocks/register-composedBlocks.js":
/*!*****************************************************************!*\
  !*** ./src/gutenberg/composedBlocks/register-composedBlocks.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-preview-mode */ "./src/gutenberg/hooks/use-preview-mode.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_composedBlock_block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/composedBlock/block.json */ "./public/assets/composedBlock/block.json");





const useInnerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseInnerBlocksProps;

function getComposedBlocksClasses(type, previewMode) {
  const classes = ["blockx__composed-block", `blockx__composed-block--${type.replace("/", "_")}`];

  if (previewMode) {
    classes.push(`preview-mode-${previewMode}`);
  }

  return classes;
}

const build = composedBlock => {
  const composedBlockMeta = { ..._public_assets_composedBlock_block_json__WEBPACK_IMPORTED_MODULE_3__,
    name: composedBlock.id,
    title: composedBlock.title,
    style: composedBlock.style,
    editorStyle: composedBlock.editorStyle,
    templates: composedBlock.templates,
    allowedBlocks: composedBlock.allowedBlocks,
    templateLock: composedBlock.templateLock,
    orientation: composedBlock.orientation
  };
  if (composedBlock.category) composedBlockMeta.category = composedBlock.category;
  if (composedBlock.icon) composedBlockMeta.icon = composedBlock.icon;
  const type = composedBlockMeta.name;
  return {
    meta: composedBlockMeta,
    settings: {
      category: composedBlockMeta.category,
      icon: composedBlockMeta.icon,
      transforms: [],
      edit: props => {
        const previewMode = (0,_hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_1__.usePreviewMode)();
        const classes = getComposedBlocksClasses(type, previewMode);
        const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
          className: classes.join(" ")
        });
        const innerBlocksProps = useInnerBlocksProps(blockProps, {
          allowedBlocks: composedBlockMeta.allowedBlocks,
          template: composedBlockMeta.templates,
          templateLock: composedBlockMeta.templateLock,
          orientation: composedBlockMeta.orientation,
          renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
        });
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
      },
      save: _ref => {
        let {
          attributes
        } = _ref;
        const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
        const classes = [blockProps.className, ...getComposedBlocksClasses(type)];
        blockProps.className = classes.join(" ");
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (build);

/***/ }),

/***/ "./src/gutenberg/containers/container-x.js":
/*!*************************************************!*\
  !*** ./src/gutenberg/containers/container-x.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_slot_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/assets/slot/block.json */ "./public/assets/slot/block.json");
/* harmony import */ var _register_slot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-slot.js */ "./src/gutenberg/containers/register-slot.js");
/* harmony import */ var _register_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-container.js */ "./src/gutenberg/containers/register-container.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_public_assets_slot_block_json__WEBPACK_IMPORTED_MODULE_1__, _register_slot_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

for (const container of BlockX.containers) {
  const {
    meta,
    settings
  } = (0,_register_container_js__WEBPACK_IMPORTED_MODULE_3__["default"])(container);
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(meta, settings);
}

/***/ }),

/***/ "./src/gutenberg/containers/register-container.js":
/*!********************************************************!*\
  !*** ./src/gutenberg/containers/register-container.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-preview-mode */ "./src/gutenberg/hooks/use-preview-mode.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_container_block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/container/block.json */ "./public/assets/container/block.json");





const ALLOWED_BLOCKS = ['blockx/slot'];
const useInnerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseInnerBlocksProps;

function getContainerClasses(type, previewMode) {
  const classes = ["blockx__container", `blockx__container--c${type}`];

  if (previewMode) {
    classes.push(`preview-mode-${previewMode}`);
  }

  return classes;
}

const build = container => {
  const containerMeta = { ..._public_assets_container_block_json__WEBPACK_IMPORTED_MODULE_3__,
    name: container.id,
    title: container.title,
    style: container.style,
    editorStyle: container.editorStyle
  };
  const template = container.columns.map(weight => {
    return ["blockx/slot", {
      weight
    }];
  });
  const denominator = container.columns.reduce((sum, value) => sum + value, 0);
  const type = container.columns.map(discriminator => `${discriminator}d${denominator}`).join("-");
  return {
    meta: containerMeta,
    settings: {
      icon: "layout",
      transforms: [],
      edit: props => {
        const previewMode = (0,_hooks_use_preview_mode__WEBPACK_IMPORTED_MODULE_1__.usePreviewMode)();
        const classes = getContainerClasses(type, previewMode);
        const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
          className: classes.join(" ")
        });
        const innerBlocksProps = useInnerBlocksProps(blockProps, {
          allowedBlocks: ALLOWED_BLOCKS,
          template,
          orientation: 'horizontal',
          renderAppender: false
        });
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
      },
      save: _ref => {
        let {
          attributes
        } = _ref;
        const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
        const classes = [blockProps.className, ...getContainerClasses(type)];
        blockProps.className = classes.join(" ");
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (build);

/***/ }),

/***/ "./src/gutenberg/containers/register-slot.js":
/*!***************************************************!*\
  !*** ./src/gutenberg/containers/register-slot.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



const useInnerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseInnerBlocksProps;
const settings = {
  edit: props => {
    const {
      clientId,
      attributes
    } = props;
    const {
      columnsIds,
      hasChildBlocks,
      rootClientId
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
      const {
        getBlockOrder,
        getBlockRootClientId
      } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
      const rootId = getBlockRootClientId(clientId);
      return {
        hasChildBlocks: getBlockOrder(clientId).length > 0,
        rootClientId: rootId,
        columnsIds: getBlockOrder(rootId)
      };
    }, [clientId]);
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "blockx__slot"
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
      // templateLock,
      renderAppender: hasChildBlocks ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
  },
  save: () => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    blockProps.className = `${blockProps.className} blockx__slot`;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./src/gutenberg/data/ajax.js":
/*!************************************!*\
  !*** ./src/gutenberg/data/ajax.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWidgetAjax": function() { return /* binding */ fetchWidgetAjax; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

const fetchWidgetAjax = (blockId, widgetKeyFullPath, params) => {
  const parts = [];

  for (const key in params) {
    const value = params[key];
    parts.push(`${key}=${value}`);
  }

  const queryParams = parts.length > 0 ? `?${parts.join("&")}` : "";
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `/blockx/v1/ajax/${blockId}/${widgetKeyFullPath}${queryParams}`
  });
};

/***/ }),

/***/ "./src/gutenberg/data/store.js":
/*!*************************************!*\
  !*** ./src/gutenberg/data/store.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);

 // ---------------------------------------------
// caching
// ---------------------------------------------

const SSR_CACHE_KEY = "blockx-ssr-cache";
const SSR_CACHE_TIMESTAMPS_KEY = "blockx-ssr-cache-timestamps";

const getExpiredCache = () => {
  return JSON.parse(localStorage.getItem(SSR_CACHE_TIMESTAMPS_KEY) || "{}");
};

const setExpiredCache = map => {
  return localStorage.setItem(SSR_CACHE_TIMESTAMPS_KEY, JSON.stringify(map));
};

const setCache = function (blocks) {
  let expiresInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  const map = getExpiredCache();
  const now = Date.now();

  for (const hash in blocks) {
    map[hash] = now + 1000 * expiresInSeconds;
  }

  setExpiredCache(map);
  localStorage.setItem(SSR_CACHE_KEY, JSON.stringify(blocks));
};

const getCache = () => {
  return JSON.parse(localStorage.getItem(SSR_CACHE_KEY) || "{}");
}; // cleanup expired caches


const expiredMap = getExpiredCache();
const now = Date.now();

for (const hash in expiredMap) {
  if (expiredMap[hash] < now) {
    delete expiredMap[hash];
  }

  setExpiredCache(expiredMap);
}

const validHashes = Object.keys(expiredMap);
const blocksCache = getCache();

for (const hash in blocksCache) {
  if (!validHashes.includes(hash)) {
    delete blocksCache[hash];
  }
}

setCache(blocksCache); // ---------------------------------------------
// default store state
// ---------------------------------------------

const getHash = (blockId, attributes) => {
  // unescape and encode needed for hash function to work
  return btoa(`${blockId}-${unescape(encodeURIComponent(JSON.stringify(attributes)))}`);
};

const DEFAULT_STATE = {
  isRequesting: false,
  blocks: getCache(),
  queue: {}
}; // ---------------------------------------------
// api actions
// ---------------------------------------------

const SSR_FETCH = (post_id, blocks) => ({
  type: 'SSR_FETCH',
  path: `/blockx/v1/ssr`,
  data: {
    post_id,
    blocks
  }
}); // ---------------------------------------------
// action generators
// ---------------------------------------------


const actionNone = () => ({
  type: 'none'
});

const ACTION_SET_IS_REQUESTING = 'SET_IS_REQUESTING';

const actionIsRequesting = isRequesting => ({
  type: ACTION_SET_IS_REQUESTING,
  isRequesting
});

const ACTION_ADD_TO_QUEUE = "ADD_TO_QUEUE";

const actionAddToQueue = (hash, block) => ({
  type: ACTION_ADD_TO_QUEUE,
  hash,
  block
});

const ACTION_REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";

const actionRemoveFromQueue = hashes => ({
  type: ACTION_REMOVE_FROM_QUEUE,
  hashes
});

const ACTION_SET_BLOCKS = 'SET_BLOCKS';

const actionSetBlocks = renderedBlocks => ({
  type: ACTION_SET_BLOCKS,
  blocks: renderedBlocks
}); // ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------


const actions = {
  addToQueue: (blockId, attributes) => {
    const block = {
      id: blockId,
      attributes
    };
    return actionAddToQueue(getHash(blockId, attributes), block);
  },

  *fetchSSR(post_id) {
    // check queue
    const queue = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(STORE_NAME).getQueueMap();

    if (Object.keys(queue).length < 1) {
      return actionNone();
    } // fetch blocks from queue


    yield actionIsRequesting(true);
    const result = yield SSR_FETCH(post_id, queue);
    yield actionSetBlocks(result); // remove fetched blocks from queue

    yield actionRemoveFromQueue(Object.keys(queue));
    return actionIsRequesting(false);
  }

}; // ------------------------------------------------------
// register our custom store
// ------------------------------------------------------

const STORE_NAME = 'block-x';
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(STORE_NAME, {
  // ------------------------------------------------------
  // reduce actions to new state
  // ------------------------------------------------------
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    let action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case ACTION_SET_IS_REQUESTING:
        return { ...state,
          isRequesting: action.isRequesting
        };

      case ACTION_SET_BLOCKS:
        const blocks = { ...state.blocks,
          ...action.blocks
        };
        setCache(blocks);
        return { ...state,
          blocks
        };

      case ACTION_ADD_TO_QUEUE:
        return { ...state,
          queue: { ...state.queue,
            [action.hash]: action.block
          }
        };

      case ACTION_REMOVE_FROM_QUEUE:
        return { ...state,
          queue: Object.keys(state.queue).filter(hash => !action.hashes.includes(hash)).map(hash => state.queue[hash])
        };
    }

    return state;
  },

  // ------------------------------------------------------
  // public actions that can be used with dispatch
  // ------------------------------------------------------
  actions,
  // ------------------------------------------------------
  // selectors that can be used with select
  // ------------------------------------------------------
  selectors: {
    isRequesting(state, blockId, attributes) {
      // is requesting something
      if (typeof blockId === typeof undefined || typeof attributes === typeof undefined) {
        return state.isRequesting;
      } // is requesting specific block configuration


      return state.isRequesting && typeof state.queue[getHash(blockId, attributes)] !== typeof undefined;
    },

    isInQueue(state, blockId, attributes) {
      return typeof state.queue[getHash(blockId, attributes)] !== typeof undefined;
    },

    getQueueMap(state) {
      return state.queue;
    },

    getQueue(state) {
      return Object.values(state.queue);
    },

    getBlocks(state) {
      return state.blocks;
    },

    getBlock(state, blockId, attributes) {
      return state.blocks[getHash(blockId, attributes)];
    }

  },
  // ----------------------------------------------------------------
  //  controls will be executed as side effects of generator actions
  // ----------------------------------------------------------------
  controls: {
    SSR_FETCH(action) {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path,
        data: action.data,
        method: "POST"
      });
    }

  }
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store);

/***/ }),

/***/ "./src/gutenberg/data/taxonomy.js":
/*!****************************************!*\
  !*** ./src/gutenberg/data/taxonomy.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isResolvingTaxonomyTerms": function() { return /* binding */ isResolvingTaxonomyTerms; },
/* harmony export */   "getTaxonomyTerms": function() { return /* binding */ getTaxonomyTerms; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const isResolvingTaxonomyTerms = (taxonomy, query) => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/data').isResolving('core', 'getEntityRecords', ['taxonomy', taxonomy, query]);
};
const getTaxonomyTerms = (taxonomy, query) => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core').getEntityRecords('taxonomy', taxonomy, query) || [];
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-ajax.js":
/*!*****************************************!*\
  !*** ./src/gutenberg/hooks/use-ajax.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAjax": function() { return /* binding */ useAjax; }
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _use_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-utils.js */ "./src/gutenberg/hooks/use-utils.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ajax */ "./src/gutenberg/data/ajax.js");
/* harmony import */ var _use_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-context */ "./src/gutenberg/hooks/use-context.js");





const ajaxCache = {};

const ajaxFetcher = async (widgetKeyFullPath, blockId, query) => {
  // build url path
  const cacheKey = `${blockId}/${widgetKeyFullPath}?${query}`;
  if (typeof ajaxCache[cacheKey] === typeof []) return ajaxCache[cacheKey]; // execute query and cache results

  const response = await (0,_data_ajax__WEBPACK_IMPORTED_MODULE_3__.fetchWidgetAjax)(blockId, widgetKeyFullPath, {
    query
  });
  ajaxCache[cacheKey] = response;
  return response;
};

const useAjax = widgetKeyFullPath => {
  const {
    blockId
  } = (0,_use_context__WEBPACK_IMPORTED_MODULE_4__.useBlock)();
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const debouncedQuery = (0,_use_utils_js__WEBPACK_IMPORTED_MODULE_1__.useDebounce)(query, 600);
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(query !== "" ? [widgetKeyFullPath, blockId, debouncedQuery] : null, ajaxFetcher);
  return {
    setQuery,
    results: data || [],
    isLoading: !error && !data && query !== "",
    isError: error
  };
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-completion.js":
/*!***********************************************!*\
  !*** ./src/gutenberg/hooks/use-completion.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTaxonomyTermsCompletionFactory": function() { return /* binding */ useTaxonomyTermsCompletionFactory; },
/* harmony export */   "usePostsCompletionFactory": function() { return /* binding */ usePostsCompletionFactory; },
/* harmony export */   "useUsersCompletionFactory": function() { return /* binding */ useUsersCompletionFactory; }
/* harmony export */ });
/* harmony import */ var _use_taxonomy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-taxonomy */ "./src/gutenberg/hooks/use-taxonomy.js");
/* harmony import */ var _use_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-posts */ "./src/gutenberg/hooks/use-posts.js");
/* harmony import */ var _use_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-users */ "./src/gutenberg/hooks/use-users.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);



 // hooks for AutoCompletionTextControl
// TODO: check for performance issues

const useTaxonomyTermsCompletionFactory = taxonomy => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(query => {
  const {
    terms,
    isResolving
  } = (0,_use_taxonomy__WEBPACK_IMPORTED_MODULE_0__.useFetchTaxonomyTerms)(taxonomy, query);
  return [terms, isResolving];
}, [taxonomy]);
const usePostsCompletionFactory = (post_types, post_status, use_context) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(query => {
  const {
    posts,
    isLoading
  } = (0,_use_posts__WEBPACK_IMPORTED_MODULE_1__.useFetchPosts)(query, post_types, post_status, use_context);
  return [posts, isLoading];
}, [post_types, post_status, use_context]);
const useUsersCompletionFactory = (roles, use_context) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(query => {
  const {
    users,
    isLoading
  } = (0,_use_users__WEBPACK_IMPORTED_MODULE_2__.useFetchUsers)(query, roles, use_context);
  return [users, isLoading];
}, [roles, use_context]);

/***/ }),

/***/ "./src/gutenberg/hooks/use-context.js":
/*!********************************************!*\
  !*** ./src/gutenberg/hooks/use-context.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBlock": function() { return /* binding */ useBlock; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ "./src/gutenberg/utils/context.js");


const useBlock = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0,_utils_context__WEBPACK_IMPORTED_MODULE_1__.getBlockContext)());

/***/ }),

/***/ "./src/gutenberg/hooks/use-media.js":
/*!******************************************!*\
  !*** ./src/gutenberg/hooks/use-media.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMedia": function() { return /* binding */ useMedia; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");

 //----------------------------------------
// fetch single media post
//----------------------------------------

const mediaCache = {};

const mediaFetcher = async ID => {
  if (typeof ID === typeof "" && ID.length === 0) return null;
  if (typeof ID === typeof 1 && ID <= 0) return null;
  const mediaFromCache = mediaCache[ID];
  if (typeof mediaFromCache === typeof {} && typeof mediaFromCache.type !== typeof undefined) return mediaFromCache;
  const media = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: "/wp/v2/media/" + ID
  });

  if (typeof media === typeof {} && media.id === ID) {
    mediaCache[ID] = media;
  }

  return media;
};

const useMedia = ID => {
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(ID, mediaFetcher);
  return {
    media: data || {},
    isLoading: !error && !data
  };
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-posts.js":
/*!******************************************!*\
  !*** ./src/gutenberg/hooks/use-posts.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePost": function() { return /* binding */ usePost; },
/* harmony export */   "useFetchPosts": function() { return /* binding */ useFetchPosts; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _use_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-context.js */ "./src/gutenberg/hooks/use-context.js");
/* harmony import */ var _use_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-utils.js */ "./src/gutenberg/hooks/use-utils.js");



 //----------------------------------------
// fetch single post
//----------------------------------------

const postsCache = {};

const postFetcher = async ID => {
  const cachedPost = postsCache[ID];
  if (typeof cachedPost === typeof {} && typeof cachedPost.post_title !== typeof undefined) return cachedPost;
  const post = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: "/blockx/v1/get/" + ID
  });

  if (typeof post === typeof {} && post.ID) {
    postsCache[ID] = { ...(postsCache[ID] || {}),
      ...post
    };
  }

  return post;
};

const usePost = ID => {
  // fetch!
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(ID, postFetcher);
  return {
    post: data || {},
    isLoading: !error && !data
  };
}; //----------------------------------------
// query for posts
//----------------------------------------

const postsQueryCache = {};

const postsQueryFetcher = data => async () => {
  // do not execute empty search
  if (data.length === 0) return []; // build url path

  const path = `/blockx/v1/query`;
  const cacheKey = JSON.stringify(data);
  if (typeof postsQueryCache[cacheKey] === typeof []) return postsQueryCache[cacheKey]; // execute query and cache results

  const posts = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'POST',
    path,
    data
  });
  postsQueryCache[cacheKey] = posts;

  for (const post of posts) {
    postsCache[post.ID] = post;
  }

  return posts;
};

const buildQueryParams = (search, post_types, post_status, instance) => {
  return {
    s: search,
    post_type: post_types.join(','),
    post_status: post_status.join(','),
    block_instance: instance
  };
};

const useFetchPosts = (s, post_types, post_status, use_context) => {
  const {
    blockId,
    dirtyState
  } = (0,_use_context_js__WEBPACK_IMPORTED_MODULE_2__.useBlock)();
  const debounced = (0,_use_utils_js__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(s, 600);
  const context = use_context ? {
    blockId,
    content: dirtyState
  } : {
    blockId
  };
  const queryParams = buildQueryParams(debounced, post_types, post_status, { ...context
  });
  const query = JSON.stringify(queryParams);
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(query, postsQueryFetcher(queryParams));
  return {
    posts: data || [],
    isLoading: !error && !data
  };
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-preview-mode.js":
/*!*************************************************!*\
  !*** ./src/gutenberg/hooks/use-preview-mode.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePreviewMode": function() { return /* binding */ usePreviewMode; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const usePreviewMode = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/edit-post').__experimentalGetPreviewDeviceType(), []);

/***/ }),

/***/ "./src/gutenberg/hooks/use-settings.js":
/*!*********************************************!*\
  !*** ./src/gutenberg/hooks/use-settings.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAutoSaveTimeout": function() { return /* binding */ useAutoSaveTimeout; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const useAutoSaveTimeout = (fn, changes) => {
  const autoSaveTimeout = BlockX.settings.auto_save_timeout;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let timeoutId = null;

    if (Object.keys(changes).length !== 0 && autoSaveTimeout > 100) {
      timeoutId = setTimeout(() => {
        fn();
      }, autoSaveTimeout);
    }

    return () => clearTimeout(timeoutId);
  }, [JSON.stringify(changes)]);
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-store.js":
/*!******************************************!*\
  !*** ./src/gutenberg/hooks/use-store.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRequesting": function() { return /* binding */ useIsRequesting; },
/* harmony export */   "useIsInRenderQueue": function() { return /* binding */ useIsInRenderQueue; },
/* harmony export */   "useIsRequestingBlock": function() { return /* binding */ useIsRequestingBlock; },
/* harmony export */   "useSSR": function() { return /* binding */ useSSR; }
/* harmony export */ });
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/store.js */ "./src/gutenberg/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




const useSelectStore = function (selector) {
  let deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => selector(select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME)), deps);
};

const useStoreDispatch = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME);

const useIsRequesting = () => {
  return useSelectStore(state => state.isRequesting(), []);
};
const useIsInRenderQueue = (blockId, attributes) => {
  return useSelectStore(state => state.isInQueue(blockId, attributes), [blockId, attributes]);
};
const useIsRequestingBlock = (blockId, attributes) => {
  return useSelectStore(state => state.isRequesting(blockId, attributes), [blockId, attributes]);
};
const useSSR = (blockId, attributes) => {
  const html = useSelectStore(state => state.getBlock(blockId, attributes), [blockId, attributes]);
  const dispatch = useStoreDispatch();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch.addToQueue(blockId, attributes);
  }, [blockId, JSON.stringify(attributes)]);
  return html;
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-taxonomy.js":
/*!*********************************************!*\
  !*** ./src/gutenberg/hooks/use-taxonomy.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchTaxonomyTerms": function() { return /* binding */ useFetchTaxonomyTerms; },
/* harmony export */   "useFetchTaxonomyTermsByIds": function() { return /* binding */ useFetchTaxonomyTermsByIds; },
/* harmony export */   "useFetchTaxonomyTermById": function() { return /* binding */ useFetchTaxonomyTermById; },
/* harmony export */   "useFetchTaxonomyTermsAsOptionsWithDefaultAny": function() { return /* binding */ useFetchTaxonomyTermsAsOptionsWithDefaultAny; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/select */ "./src/gutenberg/utils/select.js");
/* harmony import */ var _use_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-translation */ "./src/gutenberg/hooks/use-translation.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_taxonomy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/taxonomy */ "./src/gutenberg/data/taxonomy.js");






const useFetchTaxonomyTermsQuery = (taxonomy, query, deps) => {
  const isResolving = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => (0,_data_taxonomy__WEBPACK_IMPORTED_MODULE_4__.isResolvingTaxonomyTerms)(taxonomy, query), [taxonomy, ...deps]);
  const [terms, setTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setTerms((0,_data_taxonomy__WEBPACK_IMPORTED_MODULE_4__.getTaxonomyTerms)(taxonomy, query));
  }, [isResolving, taxonomy, ...deps]);
  return {
    terms,
    isResolving
  };
};

const useFetchTaxonomyTerms = function (taxonomy, search) {
  let per_page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
  return useFetchTaxonomyTermsQuery(taxonomy, {
    per_page,
    search
  }, [search, per_page]);
};
const useFetchTaxonomyTermsByIds = (taxonomy, termIds) => {
  return useFetchTaxonomyTermsQuery(taxonomy, {
    include: termIds
  }, [termIds.join(",")]);
};
const useFetchTaxonomyTermById = (taxonomy, termId) => {
  const {
    terms,
    isResolving
  } = useFetchTaxonomyTermsByIds(taxonomy, [termId]);
  return {
    term: terms.length === 1 ? terms[0] : null,
    isResolving
  };
};
const useFetchTaxonomyTermsAsOptionsWithDefaultAny = taxonomy => {
  const {
    terms
  } = useFetchTaxonomyTerms(taxonomy, "", -1);
  const {
    term_select_any
  } = (0,_use_translation__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return [(0,_utils_select__WEBPACK_IMPORTED_MODULE_1__.buildOption)("", term_select_any), ...terms.map(_ref => {
    let {
      name,
      id
    } = _ref;
    return (0,_utils_select__WEBPACK_IMPORTED_MODULE_1__.buildOption)(id, name);
  })];
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-translation.js":
/*!************************************************!*\
  !*** ./src/gutenberg/hooks/use-translation.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTranslation": function() { return /* binding */ useTranslation; },
/* harmony export */   "useTranslationWidgetTaxQuery": function() { return /* binding */ useTranslationWidgetTaxQuery; },
/* harmony export */   "useTranslationWidgetMedia": function() { return /* binding */ useTranslationWidgetMedia; }
/* harmony export */ });
const useTranslation = component => {
  return typeof component === typeof "" ? BlockX.i18n[component] : BlockX.i18n;
};
const useTranslationWidgetTaxQuery = () => {
  return useTranslation("widget_tax_query");
};
const useTranslationWidgetMedia = () => {
  return useTranslation("widget_media");
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-users.js":
/*!******************************************!*\
  !*** ./src/gutenberg/hooks/use-users.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUser": function() { return /* binding */ useUser; },
/* harmony export */   "useFetchUsers": function() { return /* binding */ useFetchUsers; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var _use_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-context.js */ "./src/gutenberg/hooks/use-context.js");
/* harmony import */ var _use_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-utils.js */ "./src/gutenberg/hooks/use-utils.js");



 //----------------------------------------
// fetch single user
//----------------------------------------

const usersCache = {};

const userFetcher = async id => {
  const cachedUser = usersCache[id];
  if (typeof cachedUser === typeof {} && typeof cachedUser.name !== typeof undefined) return cachedUser;
  const user = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: "/wp/v2/users/" + id
  });

  if (typeof user === typeof {} && user.id) {
    usersCache[id] = { ...(usersCache[id] || {}),
      ...user
    };
  }

  return user;
};

const useUser = id => {
  // fetch!
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(id, userFetcher);
  return {
    user: data || {},
    isLoading: !error && !data
  };
}; //----------------------------------------
// query for users
//----------------------------------------

const usersQueryCache = {};

const usersQueryFetcher = data => async () => {
  // do not execute empty search
  if (data.length === 0) return []; // build url path

  const path = `/wp/v2/users`;
  const query = [];

  for (const queryKey in data) {
    query.push(`${queryKey}=${data[queryKey]}`);
  }

  const queryString = query.join('&');
  const cacheKey = queryString;
  if (typeof usersQueryCache[cacheKey] === typeof []) return usersQueryCache[cacheKey]; // execute query and cache results

  const users = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${path}?${queryString}`
  });
  usersQueryCache[cacheKey] = users;

  for (const user of users) {
    usersCache[user.id] = user;
  }

  return users;
};

const buildQueryParams = (search, roles, instance) => {
  return {
    search: search,
    roles: roles.join(','),
    block_instance: instance
  };
};

const useFetchUsers = (search, roles, use_context) => {
  const {
    blockId,
    dirtyState
  } = (0,_use_context_js__WEBPACK_IMPORTED_MODULE_2__.useBlock)();
  const debounced = (0,_use_utils_js__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(search, 600);
  const context = use_context ? {
    blockId,
    content: dirtyState
  } : {
    blockId
  };
  const queryParams = buildQueryParams(debounced, roles, { ...context
  });
  const query = JSON.stringify(queryParams);
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(query, usersQueryFetcher(queryParams));
  return {
    users: data || [],
    isLoading: !error && !data
  };
};

/***/ }),

/***/ "./src/gutenberg/hooks/use-utils.js":
/*!******************************************!*\
  !*** ./src/gutenberg/hooks/use-utils.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebounce": function() { return /* binding */ useDebounce; },
/* harmony export */   "useEscapeKey": function() { return /* binding */ useEscapeKey; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
const useEscapeKey = function (callback) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!enabled) return;

    const onKeyDown = _ref => {
      let {
        key
      } = _ref;
      if (key === "Escape") callback();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, dependencies);
};

/***/ }),

/***/ "./src/gutenberg/utils/context.js":
/*!****************************************!*\
  !*** ./src/gutenberg/utils/context.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockContext": function() { return /* binding */ getBlockContext; }
/* harmony export */ });
const Contexts = {};

const getContext = function (name) {
  let initValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (typeof Contexts[name] === typeof undefined) {
    Contexts[name] = React.createContext(initValue);
  }

  return Contexts[name];
};

const getBlockContext = () => getContext("block");

/***/ }),

/***/ "./src/gutenberg/utils/select.js":
/*!***************************************!*\
  !*** ./src/gutenberg/utils/select.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildOption": function() { return /* binding */ buildOption; }
/* harmony export */ });
const buildOption = (value, label) => ({
  value,
  label
});

/***/ }),

/***/ "./src/gutenberg/utils/selectors.js":
/*!******************************************!*\
  !*** ./src/gutenberg/utils/selectors.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTermByName": function() { return /* binding */ findTermByName; },
/* harmony export */   "findTermBySlug": function() { return /* binding */ findTermBySlug; },
/* harmony export */   "findTermById": function() { return /* binding */ findTermById; },
/* harmony export */   "findTerm": function() { return /* binding */ findTerm; }
/* harmony export */ });
const findTermByName = (name, terms) => terms.find(_t => _t.name === name);
const findTermBySlug = (slug, terms) => terms.find(_t => _t.slug === slug);
const findTermById = (id, terms) => terms.find(_t => _t.id === id);
const findTerm = (s, terms) => findTermById(s, terms) || findTermBySlug(s, terms) || findTermByName(s, terms);

/***/ }),

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerEditorView": function() { return /* reexport safe */ _lib_editor_view__WEBPACK_IMPORTED_MODULE_0__.registerEditorView; },
/* harmony export */   "getEditorView": function() { return /* reexport safe */ _lib_editor_view__WEBPACK_IMPORTED_MODULE_0__.getEditorView; },
/* harmony export */   "registerEditorWidget": function() { return /* reexport safe */ _lib_editor_widget__WEBPACK_IMPORTED_MODULE_1__.registerEditorWidget; },
/* harmony export */   "getEditorWidget": function() { return /* reexport safe */ _lib_editor_widget__WEBPACK_IMPORTED_MODULE_1__.getEditorWidget; },
/* harmony export */   "registerServerSideRenderQueue": function() { return /* reexport safe */ _lib_ssrq__WEBPACK_IMPORTED_MODULE_2__.registerServerSideRenderQueue; },
/* harmony export */   "getServerSideRenderQueueComponent": function() { return /* reexport safe */ _lib_ssrq__WEBPACK_IMPORTED_MODULE_2__.getServerSideRenderQueueComponent; },
/* harmony export */   "registerUseBlock": function() { return /* reexport safe */ _lib_use_block__WEBPACK_IMPORTED_MODULE_3__.registerUseBlock; },
/* harmony export */   "useBlock": function() { return /* reexport safe */ _lib_use_block__WEBPACK_IMPORTED_MODULE_3__.useBlock; }
/* harmony export */ });
/* harmony import */ var _lib_editor_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/editor-view */ "./src/lib/editor-view.ts");
/* harmony import */ var _lib_editor_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/editor-widget */ "./src/lib/editor-widget.ts");
/* harmony import */ var _lib_ssrq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ssrq */ "./src/lib/ssrq.ts");
/* harmony import */ var _lib_use_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/use-block */ "./src/lib/use-block.ts");





/***/ }),

/***/ "./src/lib/editor-view.ts":
/*!********************************!*\
  !*** ./src/lib/editor-view.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerEditorView": function() { return /* binding */ registerEditorView; },
/* harmony export */   "getEditorView": function() { return /* binding */ getEditorView; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/lib/store.ts");
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id */ "./src/lib/id.ts");


const registerEditorView = (id, component) => (0,_store__WEBPACK_IMPORTED_MODULE_0__.set)("editorViews", (0,_id__WEBPACK_IMPORTED_MODULE_1__.blockIdToString)(id), component);
const getEditorView = id => {
  var _get;

  return (_get = (0,_store__WEBPACK_IMPORTED_MODULE_0__.get)((0,_id__WEBPACK_IMPORTED_MODULE_1__.blockIdToString)(id), "editorViews")) !== null && _get !== void 0 ? _get : (0,_store__WEBPACK_IMPORTED_MODULE_0__.getDeprecated)((0,_id__WEBPACK_IMPORTED_MODULE_1__.blockIdToString)(id));
};

/***/ }),

/***/ "./src/lib/editor-widget.ts":
/*!**********************************!*\
  !*** ./src/lib/editor-widget.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerEditorWidget": function() { return /* binding */ registerEditorWidget; },
/* harmony export */   "getEditorWidget": function() { return /* binding */ getEditorWidget; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/lib/store.ts");

const registerEditorWidget = (id, component) => (0,_store__WEBPACK_IMPORTED_MODULE_0__.set)("widgets", id, component);
const getEditorWidget = id => {
  var _window, _window$BlockXCompone, _window$BlockXCompone2;

  return (_window = window) === null || _window === void 0 ? void 0 : (_window$BlockXCompone = _window.BlockXComponents) === null || _window$BlockXCompone === void 0 ? void 0 : (_window$BlockXCompone2 = _window$BlockXCompone.widgets) === null || _window$BlockXCompone2 === void 0 ? void 0 : _window$BlockXCompone2[id];
};

/***/ }),

/***/ "./src/lib/id.ts":
/*!***********************!*\
  !*** ./src/lib/id.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockId": function() { return /* binding */ blockId; },
/* harmony export */   "blockIdToString": function() { return /* binding */ blockIdToString; }
/* harmony export */ });
const blockId = (namespace, name) => ({
  namespace,
  name
});
const blockIdToString = id => `${id.namespace}/${id.name}`;

/***/ }),

/***/ "./src/lib/ssrq.ts":
/*!*************************!*\
  !*** ./src/lib/ssrq.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerServerSideRenderQueue": function() { return /* binding */ registerServerSideRenderQueue; },
/* harmony export */   "getServerSideRenderQueueComponent": function() { return /* binding */ getServerSideRenderQueueComponent; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/lib/store.ts");

const registerServerSideRenderQueue = component => {
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.set)("utils", "ssrq", component);
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.setDeprecated)("ServerSideRenderQueue", component);
};
const getServerSideRenderQueueComponent = () => (0,_store__WEBPACK_IMPORTED_MODULE_0__.get)("utils", "ssrq");

/***/ }),

/***/ "./src/lib/store.ts":
/*!**************************!*\
  !*** ./src/lib/store.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "setDeprecated": function() { return /* binding */ setDeprecated; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getDeprecated": function() { return /* binding */ getDeprecated; }
/* harmony export */ });
const set = (path, key, object) => {
  var _window$BlockXCompone;

  window.BlockXComponents = { ...(window.BlockXComponents || {}),
    [path]: { ...(((_window$BlockXCompone = window.BlockXComponents) === null || _window$BlockXCompone === void 0 ? void 0 : _window$BlockXCompone[path]) || {}),
      [key]: object
    }
  };
};
const setDeprecated = (key, object) => {
  console.warn("DEPRECATION WARNING: Please use @palastotel/blockx.");
  window.BlockXComponents = { ...(window.BlockXComponents || {}),
    [key]: object
  };
};
const get = (path, key) => {
  var _window, _window$BlockXCompone2, _window$BlockXCompone3;

  return (_window = window) === null || _window === void 0 ? void 0 : (_window$BlockXCompone2 = _window.BlockXComponents) === null || _window$BlockXCompone2 === void 0 ? void 0 : (_window$BlockXCompone3 = _window$BlockXCompone2[path]) === null || _window$BlockXCompone3 === void 0 ? void 0 : _window$BlockXCompone3[key];
};
const getDeprecated = key => {
  var _window$BlockXCompone4, _window2;

  const ob = (_window$BlockXCompone4 = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.BlockXComponents) !== null && _window$BlockXCompone4 !== void 0 ? _window$BlockXCompone4 : {};

  if (ob[key] != undefined) {
    console.warn("DEPRECATION WARNING: " + "please use @palasthotel/blockx utils for blockx custom javascripts. " + "All ohter registrations will be break with BlockX Version 2.0");
    return ob === null || ob === void 0 ? void 0 : ob[key];
  }

  return;
};

/***/ }),

/***/ "./src/lib/use-block.ts":
/*!******************************!*\
  !*** ./src/lib/use-block.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUseBlock": function() { return /* binding */ registerUseBlock; },
/* harmony export */   "useBlock": function() { return /* binding */ useBlock; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/lib/store.ts");

const registerUseBlock = fn => {
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.set)("utils", "useBlocks", fn);
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.setDeprecated)("useBlock", fn);
};
const useBlock = _store__WEBPACK_IMPORTED_MODULE_0__.get.bind(undefined, "utils", "useBlock");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./src/gutenberg/components/AutoCompleteTextControl.css":
/*!**************************************************************!*\
  !*** ./src/gutenberg/components/AutoCompleteTextControl.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/LockedTextControl.css":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/LockedTextControl.css ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/PopoverTextControl.css":
/*!*********************************************************!*\
  !*** ./src/gutenberg/components/PopoverTextControl.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/ServerSideRenderQueue.css":
/*!************************************************************!*\
  !*** ./src/gutenberg/components/ServerSideRenderQueue.css ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/AutoSuggestWidget.css":
/*!****************************************************************!*\
  !*** ./src/gutenberg/components/widgets/AutoSuggestWidget.css ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/ListOfWidget.css":
/*!***********************************************************!*\
  !*** ./src/gutenberg/components/widgets/ListOfWidget.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/MediaWidget.css":
/*!**********************************************************!*\
  !*** ./src/gutenberg/components/widgets/MediaWidget.css ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/PostWidget.css":
/*!*********************************************************!*\
  !*** ./src/gutenberg/components/widgets/PostWidget.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/TaxQueryWidget.css":
/*!*************************************************************!*\
  !*** ./src/gutenberg/components/widgets/TaxQueryWidget.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/TaxonomyTermWidget.css":
/*!*****************************************************************!*\
  !*** ./src/gutenberg/components/widgets/TaxonomyTermWidget.css ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/UrlWidget.css":
/*!********************************************************!*\
  !*** ./src/gutenberg/components/widgets/UrlWidget.css ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg/components/widgets/UserWidget.css":
/*!*********************************************************!*\
  !*** ./src/gutenberg/components/widgets/UserWidget.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gutenberg.scss":
/*!****************************!*\
  !*** ./src/gutenberg.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/swr/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/swr/dist/index.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SWRConfig": function() { return /* binding */ SWRConfig; },
/* harmony export */   "default": function() { return /* binding */ useSWR; },
/* harmony export */   "mutate": function() { return /* binding */ mutate; },
/* harmony export */   "unstable_serialize": function() { return /* binding */ unstable_serialize; },
/* harmony export */   "useSWRConfig": function() { return /* binding */ useSWRConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var noop = function () { };
// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
var UNDEFINED = ( /*#__NOINLINE__*/noop());
var OBJECT = Object;
var isUndefined = function (v) { return v === UNDEFINED; };
var isFunction = function (v) { return typeof v == 'function'; };
var mergeObjects = function (a, b) { return OBJECT.assign({}, a, b); };
var STR_UNDEFINED = 'undefined';
// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
var hasWindow = function () { return typeof window != STR_UNDEFINED; };
var hasDocument = function () { return typeof document != STR_UNDEFINED; };
var hasRequestAnimationFrame = function () {
    return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
};

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.
var stableHash = function (arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result)
            return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for (index = 0; index < arg.length; index++) {
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            // Object, sort keys.
            result = '#';
            var keys = OBJECT.keys(arg).sort();
            while (!isUndefined((index = keys.pop()))) {
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    }
    else {
        result = isDate
            ? arg.toJSON()
            : type == 'symbol'
                ? arg.toString()
                : type == 'string'
                    ? JSON.stringify(arg)
                    : '' + arg;
    }
    return result;
};

/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var hasWin = hasWindow();
var hasDoc = hasDocument();
// For node and React Native, `add/removeEventListener` doesn't exist on window.
var onWindowEvent = hasWin && window.addEventListener
    ? window.addEventListener.bind(window)
    : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener
    ? window.removeEventListener.bind(window)
    : noop;
var offDocumentEvent = hasDoc
    ? document.removeEventListener.bind(document)
    : noop;
var isVisible = function () {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
var initFocus = function (callback) {
    // focus revalidate
    onDocumentEvent('visibilitychange', callback);
    onWindowEvent('focus', callback);
    return function () {
        offDocumentEvent('visibilitychange', callback);
        offWindowEvent('focus', callback);
    };
};
var initReconnect = function (callback) {
    // revalidate on reconnected
    var onOnline = function () {
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    var onOffline = function () {
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return function () {
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
var preset = {
    isOnline: isOnline,
    isVisible: isVisible
};
var defaultConfigOptions = {
    initFocus: initFocus,
    initReconnect: initReconnect
};

var IS_SERVER = !hasWindow() || 'Deno' in window;
// Polyfill requestAnimationFrame
var rAF = function (f) {
    return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
var navigatorConnection = typeof navigator !== 'undefined' &&
    navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
var slowConnection = !IS_SERVER &&
    navigatorConnection &&
    (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) ||
        navigatorConnection.saveData);

var serialize = function (key) {
    if (isFunction(key)) {
        try {
            key = key();
        }
        catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    var args = [].concat(key);
    // If key is not falsy, or not an empty array, hash it.
    key =
        typeof key == 'string'
            ? key
            : (Array.isArray(key) ? key.length : key)
                ? stableHash(key)
                : '';
    var infoKey = key ? '$swr$' + key : '';
    return [key, args, infoKey];
};

// Global state used to deduplicate requests and store listeners
var SWRGlobalState = new WeakMap();

var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;

var broadcastState = function (cache, key, data, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) { broadcast = true; }
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], FETCH = _a[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    // Cache was populated, update states of all hooks.
    if (broadcast && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](data, error, isValidating);
        }
    }
    // If we also need to revalidate, only do it for the first hook.
    if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(function () {
                return cache.get(key);
            });
        }
    }
    return cache.get(key);
};

// Global timestamp.
var __timestamp = 0;
var getTimestamp = function () { return ++__timestamp; };

var internalMutate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
                    options = typeof _opts === 'boolean' ? { revalidate: _opts } : _opts || {};
                    populateCache = isUndefined(options.populateCache)
                        ? true
                        : options.populateCache;
                    revalidate = options.revalidate !== false;
                    rollbackOnError = options.rollbackOnError !== false;
                    customOptimisticData = options.optimisticData;
                    _a = serialize(_key), key = _a[0], keyInfo = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    _b = SWRGlobalState.get(cache), MUTATION = _b[2];
                    // If there is no new data provided, revalidate the key with current state.
                    if (args.length < 3) {
                        // Revalidate and broadcast state.
                        return [2 /*return*/, broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
                    }
                    data = _data;
                    beforeMutationTs = getTimestamp();
                    MUTATION[key] = [beforeMutationTs, 0];
                    hasCustomOptimisticData = !isUndefined(customOptimisticData);
                    rollbackData = cache.get(key);
                    // Do optimistic data update.
                    if (hasCustomOptimisticData) {
                        optimisticData = isFunction(customOptimisticData)
                            ? customOptimisticData(rollbackData)
                            : customOptimisticData;
                        cache.set(key, optimisticData);
                        broadcastState(cache, key, optimisticData);
                    }
                    if (isFunction(data)) {
                        // `data` is a function, call it passing current cache value.
                        try {
                            data = data(cache.get(key));
                        }
                        catch (err) {
                            // If it throws an error synchronously, we shouldn't update the cache.
                            error = err;
                        }
                    }
                    if (!(data && isFunction(data.then))) return [3 /*break*/, 2];
                    return [4 /*yield*/, data.catch(function (err) {
                            error = err;
                        })
                        // Check if other mutations have occurred since we've started this mutation.
                        // If there's a race we don't update cache or broadcast the change,
                        // just return the data.
                    ];
                case 1:
                    // This means that the mutation is async, we need to check timestamps to
                    // avoid race conditions.
                    data = _c.sent();
                    // Check if other mutations have occurred since we've started this mutation.
                    // If there's a race we don't update cache or broadcast the change,
                    // just return the data.
                    if (beforeMutationTs !== MUTATION[key][0]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    else if (error && hasCustomOptimisticData && rollbackOnError) {
                        // Rollback. Always populate the cache in this case but without
                        // transforming the data.
                        populateCache = true;
                        data = rollbackData;
                        cache.set(key, rollbackData);
                    }
                    _c.label = 2;
                case 2:
                    // If we should write back the cache after request.
                    if (populateCache) {
                        if (!error) {
                            // Transform the result into data.
                            if (isFunction(populateCache)) {
                                data = populateCache(data, rollbackData);
                            }
                            // Only update cached data if there's no error. Data can be `undefined` here.
                            cache.set(key, data);
                        }
                        // Always update or reset the error.
                        cache.set(keyInfo, mergeObjects(cache.get(keyInfo), { error: error }));
                    }
                    // Reset the timestamp to mark the mutation has ended.
                    MUTATION[key][1] = getTimestamp();
                    return [4 /*yield*/, broadcastState(cache, key, data, error, UNDEFINED, revalidate, !!populateCache)
                        // Throw error or return data
                    ];
                case 3:
                    res = _c.sent();
                    // Throw error or return data
                    if (error)
                        throw error;
                    return [2 /*return*/, populateCache ? res : data];
            }
        });
    });
};

var revalidateAllKeys = function (revalidators, type) {
    for (var key in revalidators) {
        if (revalidators[key][0])
            revalidators[key][0](type);
    }
};
var initCache = function (provider, options) {
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that bound to
    // the cache.
    // Provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        var EVENT_REVALIDATORS = {};
        var mutate = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        // Update the state if it's new, or the provider has been extended.
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate]);
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        if (!IS_SERVER) {
            // When listening to the native events for auto revalidations,
            // we intentionally put a delay (setTimeout) here to make sure they are
            // fired after immediate JavaScript executions, which can possibly be
            // React's state updates.
            // This avoids some unnecessary revalidations such as
            // https://github.com/vercel/swr/issues/1680.
            var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = function () {
                releaseFocus_1 && releaseFocus_1();
                releaseReconnect_1 && releaseReconnect_1();
                // When un-mounting, we need to remove the cache provider from the state
                // storage too because it's a side-effect. Otherwise when re-mounting we
                // will not re-register those event listeners.
                SWRGlobalState.delete(provider);
            };
        }
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [provider, mutate, unmount];
    }
    return [provider, SWRGlobalState.get(provider)[4]];
};

// error retry
var onErrorRetry = function (_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    // Exponential backoff
    var timeout = ~~((Math.random() + 0.5) *
        (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
// Default cache provider
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
// Default config
var defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry: onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare: function (currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function () { return false; },
    cache: cache,
    mutate: mutate,
    fallback: {}
}, 
// use web preset by default
preset);

var mergeConfigs = function (a, b) {
    // Need to create a new object to avoid mutating the original here.
    var v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

var SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var SWRConfig$1 = function (props) {
    var value = props.value;
    // Extend parent context values and middleware.
    var extendedConfig = mergeConfigs((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext), value);
    // Should not use the inherited provider.
    var provider = value && value.provider;
    // Use a lazy initialized state to create the cache on first access.
    var cacheContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        return provider
            ? initCache(provider(extendedConfig.cache || cache), value)
            : UNDEFINED;
    })[0];
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(function () { return (cacheContext ? cacheContext[2] : UNDEFINED); }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};

/**
 * An implementation of state with dependency-tracking.
 */
var useStateWithDeps = function (state, unmountedRef) {
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    // If a state property (data, error or isValidating) is accessed by the render
    // function, we mark the property as a dependency so if it is updated again
    // in the future, we trigger a rerender.
    // This is also known as dependency-tracking.
    var stateDependenciesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    /**
     * @param payload To change stateRef, pass the values explicitly to setState:
     * @example
     * ```js
     * setState({
     *   isValidating: false
     *   data: newData // set data to newData
     *   error: undefined // set error to undefined
     * })
     *
     * setState({
     *   isValidating: false
     *   data: undefined // set data to undefined
     *   error: err // set error to err
     * })
     * ```
     */
    var setState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
            var k = _;
            // If the property has changed, update the state and mark rerender as
            // needed.
            if (currentState[k] !== payload[k]) {
                currentState[k] = payload[k];
                // If the property is accessed by the component, a rerender should be
                // triggered.
                if (stateDependenciesRef.current[k]) {
                    shouldRerender = true;
                }
            }
        }
        if (shouldRerender && !unmountedRef.current) {
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update the state reference.
    useIsomorphicLayoutEffect(function () {
        stateRef.current = state;
    });
    return [stateRef, stateDependenciesRef.current, setState];
};

var normalize = function (args) {
    return isFunction(args[1])
        ? [args[0], args[1], args[2] || {}]
        : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};

var useSWRConfig = function () {
    return mergeObjects(defaultConfig, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext));
};

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
var withArgs = function (hook) {
    return function useSWRArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Get the default and inherited configuration.
        var fallbackConfig = useSWRConfig();
        // Normalize arguments.
        var _a = normalize(args), key = _a[0], fn = _a[1], _config = _a[2];
        // Merge configurations.
        var config = mergeConfigs(fallbackConfig, _config);
        // Apply middleware
        var next = hook;
        var use = config.use;
        if (use) {
            for (var i = use.length; i-- > 0;) {
                next = use[i](next);
            }
        }
        return next(key, fn || config.fetcher, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
var subscribeCallback = function (key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function () {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function (_key, fetcher, config) {
    var cache = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], MUTATION = _a[2], FETCH = _a[3];
    // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
    // states such as `error` and `isValidating` inside,
    // all of them are derived from `_key`.
    // `fnArgs` is an array of arguments parsed from the key, which will be passed
    // to the fetcher.
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    // If it's the initial render of this hook.
    var initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Refs to keep the key and config.
    var keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    var fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher);
    var configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    var getConfig = function () { return configRef.current; };
    var isActive = function () { return getConfig().isVisible() && getConfig().isOnline(); };
    var patchFetchInfo = function (info) {
        return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
    };
    // Get the current state that SWR should return.
    var cached = cache.get(key);
    var fallback = isUndefined(fallbackData)
        ? config.fallback[key]
        : fallbackData;
    var data = isUndefined(cached) ? fallback : cached;
    var info = cache.get(keyInfo) || {};
    var error = info.error;
    var isInitialMount = !initialMountedRef.current;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    var shouldRevalidate = function () {
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !isUndefined(revalidateOnMount))
            return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused())
            return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately on mount again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense)
            return isUndefined(data) ? false : config.revalidateIfStale;
        // If there is no stale data, we need to revalidate on mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return isUndefined(data) || config.revalidateIfStale;
    };
    // Resolve the current validating state.
    var resolveValidating = function () {
        if (!key || !fetcher)
            return false;
        if (info.isValidating)
            return true;
        // If it's not mounted yet and it should revalidate on mount, revalidate.
        return isInitialMount && shouldRevalidate();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
        data: data,
        error: error,
        isValidating: isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    var revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (revalidateOpts) { return __awaiter(void 0, void 0, void 0, function () {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFetcher = fetcherRef.current;
                    if (!key ||
                        !currentFetcher ||
                        unmountedRef.current ||
                        getConfig().isPaused()) {
                        return [2 /*return*/, false];
                    }
                    loading = true;
                    opts = revalidateOpts || {};
                    shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                    isCurrentKeyMounted = function () {
                        return !unmountedRef.current &&
                            key === keyRef.current &&
                            initialMountedRef.current;
                    };
                    cleanupState = function () {
                        // Check if it's still the same request before deleting.
                        var requestInfo = FETCH[key];
                        if (requestInfo && requestInfo[1] === startAt) {
                            delete FETCH[key];
                        }
                    };
                    newState = { isValidating: false };
                    finishRequestAndUpdateState = function () {
                        patchFetchInfo({ isValidating: false });
                        // We can only set state if it's safe (still mounted with the same key).
                        if (isCurrentKeyMounted()) {
                            setState(newState);
                        }
                    };
                    // Start fetching. Change the `isValidating` state, update the cache.
                    patchFetchInfo({
                        isValidating: true
                    });
                    setState({ isValidating: true });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    if (shouldStartNewRequest) {
                        // Tell all other hooks to change the `isValidating` state.
                        broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true);
                        // If no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !cache.get(key)) {
                            setTimeout(function () {
                                if (loading && isCurrentKeyMounted()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }, config.loadingTimeout);
                        }
                        // Start the request and save the timestamp.
                        FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                    }
                    _a = FETCH[key], newData = _a[0], startAt = _a[1];
                    return [4 /*yield*/, newData];
                case 2:
                    newData = _b.sent();
                    if (shouldStartNewRequest) {
                        // If the request isn't interrupted, clean it up after the
                        // deduplication interval.
                        setTimeout(cleanupState, config.dedupingInterval);
                    }
                    // If there're other ongoing request(s), started after the current one,
                    // we need to ignore the current one to avoid possible race conditions:
                    //   req1------------------>res1        (current one)
                    //        req2---------------->res2
                    // the request that fired later will always be kept.
                    // The timestamp maybe be `undefined` or a number
                    if (!FETCH[key] || FETCH[key][1] !== startAt) {
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Clear error.
                    patchFetchInfo({
                        error: UNDEFINED
                    });
                    newState.error = UNDEFINED;
                    mutationInfo = MUTATION[key];
                    if (!isUndefined(mutationInfo) &&
                        // case 1
                        (startAt <= mutationInfo[0] ||
                            // case 2
                            startAt <= mutationInfo[1] ||
                            // case 3
                            mutationInfo[1] === 0)) {
                        finishRequestAndUpdateState();
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Deep compare with latest state to avoid extra re-renders.
                    // For local state, compare and assign.
                    if (!compare(stateRef.current.data, newData)) {
                        newState.data = newData;
                    }
                    else {
                        // data and newData are deeply equal
                        // it should be safe to broadcast the stale data
                        newState.data = stateRef.current.data;
                        // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
                        // which takes care of avoiding the re-render
                    }
                    // For global state, it's possible that the key has changed.
                    // https://github.com/vercel/swr/pull/1058
                    if (!compare(cache.get(key), newData)) {
                        cache.set(key, newData);
                    }
                    // Trigger the successful callback if it's the original request.
                    if (shouldStartNewRequest) {
                        if (isCurrentKeyMounted()) {
                            getConfig().onSuccess(newData, key, config);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    cleanupState();
                    // Not paused, we continue handling the error. Otherwise discard it.
                    if (!getConfig().isPaused()) {
                        // Get a new error, don't use deep comparison for errors.
                        patchFetchInfo({ error: err_1 });
                        newState.error = err_1;
                        // Error event and retry logic. Only for the actual request, not
                        // deduped ones.
                        if (shouldStartNewRequest && isCurrentKeyMounted()) {
                            getConfig().onError(err_1, key, config);
                            if ((typeof config.shouldRetryOnError === 'boolean' &&
                                config.shouldRetryOnError) ||
                                (isFunction(config.shouldRetryOnError) &&
                                    config.shouldRetryOnError(err_1))) {
                                // When retrying, dedupe is always enabled
                                if (isActive()) {
                                    // If it's active, stop. It will auto revalidate when refocusing
                                    // or reconnecting.
                                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                                        retryCount: (opts.retryCount || 0) + 1,
                                        dedupe: true
                                    });
                                }
                            }
                        }
                    }
                    return [3 /*break*/, 4];
                case 4:
                    // Mark loading as stopped.
                    loading = false;
                    // Update the current hook's state.
                    finishRequestAndUpdateState();
                    // Here is the source of the request, need to tell all other hooks to
                    // update their states.
                    if (isCurrentKeyMounted() && shouldStartNewRequest) {
                        broadcastState(cache, key, newState.data, newState.error, false);
                    }
                    return [2 /*return*/, true];
            }
        });
    }); }, 
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // Similar to the global mutate, but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    // By using `bind` we don't need to modify the size of the rest arguments.
    // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
    // cast it to any for now.
    internalMutate.bind(UNDEFINED, cache, function () { return keyRef.current; }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update fetcher and config refs.
    useIsomorphicLayoutEffect(function () {
        fetcherRef.current = fetcher;
        configRef.current = config;
    });
    // After mounted or key changed.
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return;
        var keyChanged = key !== keyRef.current;
        var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        // Expose state updater to global event listeners. So we can update hook's
        // internal state from the outside.
        var onStateUpdate = function (updatedData, updatedError, updatedIsValidating) {
            setState(mergeObjects({
                error: updatedError,
                isValidating: updatedIsValidating
            }, 
            // Since `setState` only shallowly compares states, we do a deep
            // comparison here.
            compare(stateRef.current.data, updatedData)
                ? UNDEFINED
                : {
                    data: updatedData
                }));
        };
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        var nextFocusRevalidatedAt = 0;
        var onRevalidate = function (type) {
            if (type == FOCUS_EVENT) {
                var now = Date.now();
                if (getConfig().revalidateOnFocus &&
                    now > nextFocusRevalidatedAt &&
                    isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            }
            else if (type == RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            }
            else if (type == MUTATE_EVENT) {
                return revalidate();
            }
            return;
        };
        var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
        var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // When `key` updates, reset the state to the initial value
        // and trigger a rerender if necessary.
        if (keyChanged) {
            setState({
                data: data,
                error: error,
                isValidating: isValidating
            });
        }
        // Trigger a revalidation.
        if (shouldRevalidate()) {
            if (isUndefined(data) || IS_SERVER) {
                // Revalidate immediately.
                softRevalidate();
            }
            else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                rAF(softRevalidate);
            }
        }
        return function () {
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubUpdate();
            unsubEvents();
        };
    }, [key, revalidate]);
    // Polling
    useIsomorphicLayoutEffect(function () {
        var timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            var interval = isFunction(refreshInterval)
                ? refreshInterval(data)
                : refreshInterval;
            // We only start next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online and not errored.
            if (!stateRef.current.error &&
                (refreshWhenHidden || getConfig().isVisible()) &&
                (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            }
            else {
                // Schedule next interval to check again.
                next();
            }
        }
        next();
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
    // Display debug info in React DevTools.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(data);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
        mutate: boundMutate,
        get data() {
            stateDependencies.data = true;
            return data;
        },
        get error() {
            stateDependencies.error = true;
            return error;
        },
        get isValidating() {
            stateDependencies.isValidating = true;
            return isValidating;
        }
    };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
    value: defaultConfig
});
var unstable_serialize = function (key) { return serialize(key)[0]; };
var useSWR = withArgs(useSWRHandler);

// useSWR




/***/ }),

/***/ "./public/assets/composedBlock/block.json":
/*!************************************************!*\
  !*** ./public/assets/composedBlock/block.json ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"blockx/composedBlock","title":"composedBlock","category":"design","icon":"layout","description":"Adds a composed Block which can be used to insert other Blocks into one new Block","keywords":["composedBlock","innerBlocks"],"textdomain":"blockx","supports":{"html":false},"editorStyle":"blockx_composedBlock_style_editor","style":"blockx_composedBlock_style"}');

/***/ }),

/***/ "./public/assets/container/block.json":
/*!********************************************!*\
  !*** ./public/assets/container/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"blockx/container","title":"Container","category":"design","description":"Adds a container with custom grid.","keywords":["container","row","grid"],"textdomain":"blockx","supports":{"html":false},"editorStyle":"blockx_container_style_editor","style":"blockx_container_style"}');

/***/ }),

/***/ "./public/assets/slot/block.json":
/*!***************************************!*\
  !*** ./public/assets/slot/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"blockx/slot","title":"Slot","icon":"columns","category":"design","description":"A single slot within a container block.","textdomain":"blockx","parent":["blockx/container"],"attributes":{},"supports":{"inserter":false,"reusable":false,"html":false},"editorStyle":"blockx_slot_style_editor","style":"blockx_slot_style"}');

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/gutenberg.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gutenberg_composedBlocks_composedBlocks_x_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/composedBlocks/composedBlocks-x.js */ "./src/gutenberg/composedBlocks/composedBlocks-x.js");
/* harmony import */ var _gutenberg_containers_container_x_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/containers/container-x.js */ "./src/gutenberg/containers/container-x.js");
/* harmony import */ var _gutenberg_blocks_block_x_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/blocks/block-x.js */ "./src/gutenberg/blocks/block-x.js");
/* harmony import */ var _gutenberg_auto_auto_ssr_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutenberg/auto/auto-ssr.js */ "./src/gutenberg/auto/auto-ssr.js");
/* harmony import */ var _gutenberg_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenberg.scss */ "./src/gutenberg.scss");

_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default().use((options, next) => {
  options.headers = { ...(options.headers || {}),
    ["Block-X-Editor"]: true
  };
  return next(options);
});





}();
/******/ })()
;
//# sourceMappingURL=gutenberg.js.map