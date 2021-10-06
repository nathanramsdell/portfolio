(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ramsd_OneDrive_Desktop_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ramsd\\OneDrive\\Desktop\\portfolio\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ramsd_OneDrive_Desktop_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.16 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\r\n.absolute {\n\tposition: absolute;\n}\r\n.relative {\n\tposition: relative;\n}\r\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\r\n.mx-1 {\n\tmargin-left: 0.25rem;\n\tmargin-right: 0.25rem;\n}\r\n.my-12 {\n\tmargin-top: 3rem;\n\tmargin-bottom: 3rem;\n}\r\n.mt-\\[100px\\] {\n\tmargin-top: 100px;\n}\r\n.mt-4 {\n\tmargin-top: 1rem;\n}\r\n.mb-3 {\n\tmargin-bottom: 0.75rem;\n}\r\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\r\n.mt-3 {\n\tmargin-top: 0.75rem;\n}\r\n.mt-8 {\n\tmargin-top: 2rem;\n}\r\n.block {\n\tdisplay: block;\n}\r\n.flex {\n\tdisplay: flex;\n}\r\n.grid {\n\tdisplay: grid;\n}\r\n.h-6 {\n\theight: 1.5rem;\n}\r\n.h-5 {\n\theight: 1.25rem;\n}\r\n.h-\\[64px\\] {\n\theight: 64px;\n}\r\n.w-6\\/12 {\n\twidth: 50%;\n}\r\n.w-full {\n\twidth: 100%;\n}\r\n.w-\\[200px\\] {\n\twidth: 200px;\n}\r\n.w-6 {\n\twidth: 1.5rem;\n}\r\n.w-5 {\n\twidth: 1.25rem;\n}\r\n.w-\\[64px\\] {\n\twidth: 64px;\n}\r\n.flex-grow {\n\tflex-grow: 1;\n}\r\n.cursor-pointer {\n\tcursor: pointer;\n}\r\n.appearance-none {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n}\r\n.grid-cols-2 {\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n}\r\n.grid-cols-1 {\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.flex-col {\n\tflex-direction: column;\n}\r\n.items-center {\n\talign-items: center;\n}\r\n.justify-end {\n\tjustify-content: flex-end;\n}\r\n.justify-center {\n\tjustify-content: center;\n}\r\n.gap-6 {\n\tgap: 1.5rem;\n}\r\n.gap-5 {\n\tgap: 1.25rem;\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.place-self-center {\n\tplace-self: center;\n}\r\n.overflow-hidden {\n\toverflow: hidden;\n}\r\n.rounded-full {\n\tborder-radius: 9999px;\n}\r\n.rounded-lg {\n\tborder-radius: 0.5rem;\n}\r\n.rounded {\n\tborder-radius: 0.25rem;\n}\r\n.border-2 {\n\tborder-width: 2px;\n}\r\n.border-l-2 {\n\tborder-left-width: 2px;\n}\r\n.border-solid {\n\tborder-style: solid;\n}\r\n.border-purple-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(139, 92, 246, var(--tw-border-opacity));\n}\r\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\r\n.bg-purple-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(139, 92, 246, var(--tw-bg-opacity));\n}\r\n.bg-pink-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(252, 231, 243, var(--tw-bg-opacity));\n}\r\n.bg-purple-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(237, 233, 254, var(--tw-bg-opacity));\n}\r\n.bg-indigo-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\r\n.bg-blue-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(219, 234, 254, var(--tw-bg-opacity));\n}\r\n.p-5 {\n\tpadding: 1.25rem;\n}\r\n.p-4 {\n\tpadding: 1rem;\n}\r\n.p-\\[16px\\] {\n\tpadding: 16px;\n}\r\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\r\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\r\n.py-5 {\n\tpadding-top: 1.25rem;\n\tpadding-bottom: 1.25rem;\n}\r\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\r\n.px-6 {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\r\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\r\n.py-7 {\n\tpadding-top: 1.75rem;\n\tpadding-bottom: 1.75rem;\n}\r\n.pb-12 {\n\tpadding-bottom: 3rem;\n}\r\n.pb-5 {\n\tpadding-bottom: 1.25rem;\n}\r\n.text-center {\n\ttext-align: center;\n}\r\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\r\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\r\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\r\n.text-\\[2\\.5rem\\] {\n\tfont-size: 2.5rem;\n}\r\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\r\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\r\n.text-\\[32px\\] {\n\tfont-size: 32px;\n}\r\n.text-\\[2rem\\] {\n\tfont-size: 2rem;\n}\r\n.font-bold {\n\tfont-weight: 700;\n}\r\n.font-thin {\n\tfont-weight: 100;\n}\r\n.leading-normal {\n\tline-height: 1.5;\n}\r\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\r\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n.text-purple-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(139, 92, 246, var(--tw-text-opacity));\n}\r\n.text-pink-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(236, 72, 153, var(--tw-text-opacity));\n}\r\n.text-indigo-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(99, 102, 241, var(--tw-text-opacity));\n}\r\n.text-blue-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\n}\r\n.opacity-0 {\n\topacity: 0;\n}\r\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.ring-4 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-white {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));\n}\r\n.ring-offset-0 {\n\t--tw-ring-offset-width: 0px;\n}\r\n.transition-colors {\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n.tab-content {\r\n  max-height: 0;\r\n  transition: max-height .35s;\r\n  }\r\n  /* :checked - resize to full height */\r\n  .tab input:checked ~ .tab-content {\r\n  max-height: 100vh;\r\n  }\r\n  /* Label formatting when open */\r\n  .tab input:checked + label{\r\n  /*@apply text-xl p-5 border-l-2 border-purple-500 bg-gray-100 text-indigo*/\r\n  font-size: 1.25rem; /*.text-xl*/\r\n  padding: 1.25rem; /*.p-5*/\r\n  border-left-width: 2px; /*.border-l-2*/\r\n  border-color: rgba(139, 92, 246); /*.border-indigo*/\r\n  background-color: #f8fafc; /*.bg-gray-100 */\r\n  color: rgba(139, 92, 246); /*.text-indigo*/\r\n  }\r\n  /* Icon */\r\n  .tab label::after {\r\n  float:right;\r\n  right: 0;\r\n  top: 0;\r\n  display: block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  line-height: 1.5;\r\n  font-size: 1.25rem;\r\n  text-align: center;\r\n  transition: all .35;\r\n  }\r\n  /* Icon formatting - closed */\r\n  .tab input[type=checkbox] + label::after {\r\n  content: \"+\";\r\n  font-weight:bold; /*.font-bold*/\r\n  border-width: 1px; /*.border*/\r\n  border-radius: 9999px; /*.rounded-full */\r\n  border-color: #b8c2cc; /*.border-grey*/\r\n  }\r\n  .tab input[type=radio] + label::after {\r\n  content: \"\\25BE\";\r\n  font-weight:bold; /*.font-bold*/\r\n  border-width: 1px; /*.border*/\r\n  border-radius: 9999px; /*.rounded-full */\r\n  border-color: #b8c2cc; /*.border-grey*/\r\n  }\r\n  /* Icon formatting - open */\r\n  .tab input[type=checkbox]:checked + label::after {\r\n  transform: rotate(315deg);\r\n  background-color: rgba(139, 92, 246); /*.bg-indigo*/\r\n  color: #f8fafc; /*.text-grey-lightest*/\r\n  }\r\n  .tab input[type=radio]:checked + label::after {\r\n  transform: rotateX(180deg);\r\n  background-color: rgba(139, 92, 246); /*.bg-indigo*/\r\n  color: #f8fafc; /*.text-grey-lightest*/\r\n  }\r\n\r\nbody {\r\n  background-color: #f0f4fb;\r\n  font-family: Oxygen, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  letter-spacing: 0.4px;\r\n}\r\n.custom-container{\r\n  max-width: 1450px;\r\n  margin: auto;\r\n  padding: 0 20px;\r\n}\r\n.service-card{\r\n  background-color: #fff;\r\n  display: flex;\r\n  padding: 30px 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n  text-align: center; \r\n}\r\n\r\n.recent-work-img{\r\n  position:absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n.project-wrapper{\r\n  position: relative;\r\n    display: flex;\r\n    overflow: hidden;\r\n    min-height: 300px;\r\n    padding: 30px 14px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    background-color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  opacity: 0;\r\n}\r\n\r\n.testimonial-card{\r\n  display: flex;\r\n  padding: 24px 30px;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  border-radius: 20px;\r\n  background-color: #fff;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n}\r\n.testimonial-details {\r\n  display: flex;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n}\r\n.small-avatar{\r\n  width: 64px;\r\n  height: 64px;\r\n  border-radius: 100%;\r\n  background-image: url(https://uploads-ssl.webflow.com/612c9818426e80489554701c/613e361b6c60bfe81739fb5a_avatar.png);\r\n  background-position: 50% 50%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.avatar-details {\r\n  margin-left: 20px;\r\n}\r\n.quote {\r\n  color: #5f6a8f;\r\n  font-style: italic;\r\n}\r\n.about-me{\r\n  max-width: 890px;\r\n}\r\n.accordian-bx{\r\n  width: 100%;\r\n  max-width: 890px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding: 30px;\r\n  border-radius: 20px;\r\n  background-color: #fff;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n}\r\n\r\n\r\n.contact-form-container{\r\n  background-color: #252b3a;\r\n}\r\n\r\n.project-wrapper:hover h4{\r\n  z-index: 2;\r\n}\r\n.section-margin-bottom{\r\n  margin-bottom: 100px\r\n}\r\n.big-dots {\r\n  position: absolute !important;\r\n  bottom: 0px !important;\r\n  left: 80px;\r\n  z-index: -1;\r\n}\r\n.small-dots{\r\n  position: absolute;\r\n  top: 200px;\r\n  right: 125px;\r\n  z-index: -2;\r\n}\r\n.large-bubble{\r\n  position: absolute;\r\n  bottom: -125px;\r\n  left: -50px;\r\n  z-index: -1;\r\n}\r\n.medium-bubble{\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: 0px;\r\n  z-index: -1;\r\n}\r\n.small-bubble{\r\n  position: absolute;\r\n  top: -125px;\r\n  right: 200px;\r\n  z-index: -1;\r\n}\r\n.hover\\:bg-purple-500:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(139, 92, 246, var(--tw-bg-opacity));\n}\r\n.hover\\:text-gray-300:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\n}\r\n.hover\\:text-white:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n@media (min-width: 768px) {\n\n\t.md\\:grid-cols-4 {\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n\n\t.md\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n}\r\n@media (min-width: 1024px) {\n\n\t.lg\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\n\t.lg\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n\n\t.lg\\:grid-rows-2 {\n\t\tgrid-template-rows: repeat(2, minmax(0, 1fr));\n\t}\n}\r\n", "",{"version":3,"sources":["webpack://styles/globals.css","webpack://styles/%3Cinput%20css%20ZrZmwB%3E","webpack://styles/%3Cinput%20css%20eiTwMB%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n.tab-content {\r\n  max-height: 0;\r\n  -webkit-transition: max-height .35s;\r\n  -o-transition: max-height .35s;\r\n  transition: max-height .35s;\r\n  }\r\n  /* :checked - resize to full height */\r\n  .tab input:checked ~ .tab-content {\r\n  max-height: 100vh;\r\n  }\r\n  /* Label formatting when open */\r\n  .tab input:checked + label{\r\n  /*@apply text-xl p-5 border-l-2 border-purple-500 bg-gray-100 text-indigo*/\r\n  font-size: 1.25rem; /*.text-xl*/\r\n  padding: 1.25rem; /*.p-5*/\r\n  border-left-width: 2px; /*.border-l-2*/\r\n  border-color: rgba(139, 92, 246); /*.border-indigo*/\r\n  background-color: #f8fafc; /*.bg-gray-100 */\r\n  color: rgba(139, 92, 246); /*.text-indigo*/\r\n  }\r\n  /* Icon */\r\n  .tab label::after {\r\n  float:right;\r\n  right: 0;\r\n  top: 0;\r\n  display: block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  line-height: 1.5;\r\n  font-size: 1.25rem;\r\n  text-align: center;\r\n  -webkit-transition: all .35s;\r\n  -o-transition: all .35s;\r\n  transition: all .35;\r\n  }\r\n  /* Icon formatting - closed */\r\n  .tab input[type=checkbox] + label::after {\r\n  content: \"+\";\r\n  font-weight:bold; /*.font-bold*/\r\n  border-width: 1px; /*.border*/\r\n  border-radius: 9999px; /*.rounded-full */\r\n  border-color: #b8c2cc; /*.border-grey*/\r\n  }\r\n  .tab input[type=radio] + label::after {\r\n  content: \"\\25BE\";\r\n  font-weight:bold; /*.font-bold*/\r\n  border-width: 1px; /*.border*/\r\n  border-radius: 9999px; /*.rounded-full */\r\n  border-color: #b8c2cc; /*.border-grey*/\r\n  }\r\n  /* Icon formatting - open */\r\n  .tab input[type=checkbox]:checked + label::after {\r\n  transform: rotate(315deg);\r\n  background-color: rgba(139, 92, 246); /*.bg-indigo*/\r\n  color: #f8fafc; /*.text-grey-lightest*/\r\n  }\r\n  .tab input[type=radio]:checked + label::after {\r\n  transform: rotateX(180deg);\r\n  background-color: rgba(139, 92, 246); /*.bg-indigo*/\r\n  color: #f8fafc; /*.text-grey-lightest*/\r\n  }\r\n\r\nbody {\r\n  background-color: #f0f4fb;\r\n  font-family: Oxygen, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  letter-spacing: 0.4px;\r\n}\r\n.custom-container{\r\n  max-width: 1450px;\r\n  margin: auto;\r\n  padding: 0 20px;\r\n}\r\n.service-card{\r\n  background-color: #fff;\r\n  display: flex;\r\n  padding: 30px 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n  text-align: center; \r\n}\r\n\r\n.recent-work-img{\r\n  position:absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.project-wrapper{\r\n  position: relative;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow: hidden;\r\n    min-height: 300px;\r\n    padding: 30px 14px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    background-color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  opacity: 0;\r\n}\r\n\r\n.testimonial-card{\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 24px 30px;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n  -ms-flex-align: start;\r\n  align-items: flex-start;\r\n  border-radius: 20px;\r\n  background-color: #fff;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n}\r\n.testimonial-details {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-top: 10px;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n.small-avatar{\r\n  width: 64px;\r\n  height: 64px;\r\n  border-radius: 100%;\r\n  background-image: url(https://uploads-ssl.webflow.com/612c9818426e80489554701c/613e361b6c60bfe81739fb5a_avatar.png);\r\n  background-position: 50% 50%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.avatar-details {\r\n  margin-left: 20px;\r\n}\r\n.quote {\r\n  color: #5f6a8f;\r\n  font-style: italic;\r\n}\r\n.about-me{\r\n  max-width: 890px;\r\n}\r\n.accordian-bx{\r\n  width: 100%;\r\n  max-width: 890px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding: 30px;\r\n  border-radius: 20px;\r\n  background-color: #fff;\r\n  box-shadow: 0 30px 40px 0 rgb(145 150 203 / 20%);\r\n}\r\n\r\n\r\n.contact-form-container{\r\n  background-color: #252b3a;\r\n}\r\n\r\n.project-wrapper:hover h4{\r\n  z-index: 2;\r\n}\r\n.section-margin-bottom{\r\n  margin-bottom: 100px\r\n}\r\n.big-dots {\r\n  position: absolute !important;\r\n  bottom: 0px !important;\r\n  left: 80px;\r\n  z-index: -1;\r\n}\r\n.small-dots{\r\n  position: absolute;\r\n  top: 200px;\r\n  right: 125px;\r\n  z-index: -2;\r\n}\r\n.large-bubble{\r\n  position: absolute;\r\n  bottom: -125px;\r\n  left: -50px;\r\n  z-index: -1;\r\n}\r\n.medium-bubble{\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: 0px;\r\n  z-index: -1;\r\n}\r\n.small-bubble{\r\n  position: absolute;\r\n  top: -125px;\r\n  right: 200px;\r\n  z-index: -1;\r\n}\r\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E3MjMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBRlFGLEs7QUFJVCwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFdBQVcsT0FBTyxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxPQUFPLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssYUFBYSxjQUFjLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE1BQU0sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLDRCQUE0QixNQUFNLE9BQU8sdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFdBQVcsV0FBVyxRQUFRLEtBQUssV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sVUFBVSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxVQUFVLE1BQU0sU0FBUyxXQUFXLFlBQVksV0FBVyxPQUFPLFNBQVMsTUFBTSxRQUFRLGFBQWEsUUFBUSxtQkFBbUIsTUFBTSxZQUFZLHFCQUFxQix1QkFBdUIsUUFBUSxTQUFTLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsdUJBQXVCLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxzQkFBc0IsdUJBQXVCLHlCQUF5Qix1QkFBdUIsTUFBTSxLQUFLLFlBQVksdUJBQXVCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLE1BQU0sWUFBWSxNQUFNLFlBQVksdUJBQXVCLHVCQUF1QixNQUFNLEtBQUssWUFBWSx1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkRBQTJELFNBQVM7QUFDcEUseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgdGFpbHdpbmRjc3MgdjIuMi4xNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi8vKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdCAgIHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn0vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqXFxuICogT3ZlcnJpZGUgbGVnYWN5IGZvY3VzIHJlc2V0IGZyb20gTm9ybWFsaXplIHdpdGggbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGVzLlxcbiAqXFxuICogVGhpcyBpcyBhY3R1YWxseSBhbiBpbXByb3ZlbWVudCBvdmVyIHRoZSBuZXcgZGVmYXVsdHMgaW4gRmlyZWZveCBpbiBvdXIgdGVzdGluZyxcXG4gKiBhcyBpdCB0cmlnZ2VycyB0aGUgYmV0dGVyIGZvY3VzIHN0eWxlcyBldmVuIGZvciBsaW5rcywgd2hpY2ggc3RpbGwgdXNlIGEgZG90dGVkXFxuICogb3V0bGluZSBpbiBGaXJlZm94IGJ5IGRlZmF1bHQuXFxuICovXFxuIFxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogYXV0bztcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXHJcXG4uYWJzb2x1dGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxyXFxuLnJlbGF0aXZlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcclxcbi5teC1hdXRvIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcclxcbi5teC0xIHtcXG5cXHRtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcclxcbi5teS0xMiB7XFxuXFx0bWFyZ2luLXRvcDogM3JlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXHJcXG4ubXQtXFxcXFsxMDBweFxcXFxdIHtcXG5cXHRtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxyXFxuLm10LTQge1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxufVxcclxcbi5tYi0zIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXHJcXG4ubWItMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4ubXQtMyB7XFxuXFx0bWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxyXFxuLm10LTgge1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxufVxcclxcbi5ibG9jayB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcclxcbi5mbGV4IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXHJcXG4uZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxyXFxuLmgtNiB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxufVxcclxcbi5oLTUge1xcblxcdGhlaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLmgtXFxcXFs2NHB4XFxcXF0ge1xcblxcdGhlaWdodDogNjRweDtcXG59XFxyXFxuLnctNlxcXFwvMTIge1xcblxcdHdpZHRoOiA1MCU7XFxufVxcclxcbi53LWZ1bGwge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXHJcXG4udy1cXFxcWzIwMHB4XFxcXF0ge1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxyXFxuLnctNiB7XFxuXFx0d2lkdGg6IDEuNXJlbTtcXG59XFxyXFxuLnctNSB7XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcclxcbi53LVxcXFxbNjRweFxcXFxdIHtcXG5cXHR3aWR0aDogNjRweDtcXG59XFxyXFxuLmZsZXgtZ3JvdyB7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXHJcXG4uY3Vyc29yLXBvaW50ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxyXFxuLmFwcGVhcmFuY2Utbm9uZSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcclxcbi5ncmlkLWNvbHMtMiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXHJcXG4uZ3JpZC1jb2xzLTEge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxyXFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXHJcXG4uaXRlbXMtY2VudGVyIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uanVzdGlmeS1lbmQge1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcclxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcclxcbi5nYXAtNiB7XFxuXFx0Z2FwOiAxLjVyZW07XFxufVxcclxcbi5nYXAtNSB7XFxuXFx0Z2FwOiAxLjI1cmVtO1xcbn1cXHJcXG4uc3BhY2UteC0yID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXG59XFxyXFxuLnNwYWNlLXgtNiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygxLjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxufVxcclxcbi5wbGFjZS1zZWxmLWNlbnRlciB7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXHJcXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXHJcXG4ucm91bmRlZC1mdWxsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcclxcbi5yb3VuZGVkLWxnIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcclxcbi5yb3VuZGVkIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXHJcXG4uYm9yZGVyLTIge1xcblxcdGJvcmRlci13aWR0aDogMnB4O1xcbn1cXHJcXG4uYm9yZGVyLWwtMiB7XFxuXFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDJweDtcXG59XFxyXFxuLmJvcmRlci1zb2xpZCB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxyXFxuLmJvcmRlci1wdXJwbGUtNTAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxMzksIDkyLCAyNDYsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1ncmF5LTEwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctcHVycGxlLTUwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1waW5rLTEwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMzEsIDI0MywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctcHVycGxlLTEwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAyMzMsIDI1NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctaW5kaWdvLTEwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMzEsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctYmx1ZS0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMjM0LCAyNTQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLnAtNSB7XFxuXFx0cGFkZGluZzogMS4yNXJlbTtcXG59XFxyXFxuLnAtNCB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxyXFxuLnAtXFxcXFsxNnB4XFxcXF0ge1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcclxcbi5weS0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcclxcbi5weS0yIHtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcclxcbi5weS01IHtcXG5cXHRwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcXG59XFxyXFxuLnB4LTQge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXHJcXG4ucHgtNiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMS41cmVtO1xcbn1cXHJcXG4ucHgtNSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XFxufVxcclxcbi5weS03IHtcXG5cXHRwYWRkaW5nLXRvcDogMS43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcXG59XFxyXFxuLnBiLTEyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG59XFxyXFxuLnBiLTUge1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXHJcXG4udGV4dC1jZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuLnRleHQteGwge1xcblxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxyXFxuLnRleHQtc20ge1xcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcclxcbi50ZXh0LWxnIHtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXHJcXG4udGV4dC1cXFxcWzJcXFxcLjVyZW1cXFxcXSB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxufVxcclxcbi50ZXh0LTN4bCB7XFxuXFx0Zm9udC1zaXplOiAxLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxyXFxuLnRleHQtNXhsIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcclxcbi50ZXh0LVxcXFxbMzJweFxcXFxdIHtcXG5cXHRmb250LXNpemU6IDMycHg7XFxufVxcclxcbi50ZXh0LVxcXFxbMnJlbVxcXFxdIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcclxcbi5mb250LWJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcclxcbi5mb250LXRoaW4ge1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcclxcbi5sZWFkaW5nLW5vcm1hbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxyXFxuLnRleHQtZ3JheS00MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC13aGl0ZSB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXB1cnBsZS01MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDEzOSwgOTIsIDI0NiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXBpbmstNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMzYsIDcyLCAxNTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1pbmRpZ28tNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1ibHVlLTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLm9wYWNpdHktMCB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxyXFxuLnNoYWRvdy1sZyB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcclxcbi5yaW5nLTQge1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoNHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwICMwMDAwKTtcXG59XFxyXFxuLnJpbmctd2hpdGUge1xcblxcdC0tdHctcmluZy1vcGFjaXR5OiAxO1xcblxcdC0tdHctcmluZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxyXFxuLnJpbmctb2Zmc2V0LTAge1xcblxcdC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG59XFxyXFxuLnRyYW5zaXRpb24tY29sb3JzIHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2U7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcbi50YWItY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuMzVzO1xcclxcbiAgfVxcclxcbiAgLyogOmNoZWNrZWQgLSByZXNpemUgdG8gZnVsbCBoZWlnaHQgKi9cXHJcXG4gIC50YWIgaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG4gIC8qIExhYmVsIGZvcm1hdHRpbmcgd2hlbiBvcGVuICovXFxyXFxuICAudGFiIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcXHJcXG4gIC8qQGFwcGx5IHRleHQteGwgcC01IGJvcmRlci1sLTIgYm9yZGVyLXB1cnBsZS01MDAgYmctZ3JheS0xMDAgdGV4dC1pbmRpZ28qL1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtOyAvKi50ZXh0LXhsKi9cXHJcXG4gIHBhZGRpbmc6IDEuMjVyZW07IC8qLnAtNSovXFxyXFxuICBib3JkZXItbGVmdC13aWR0aDogMnB4OyAvKi5ib3JkZXItbC0yKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMzksIDkyLCAyNDYpOyAvKi5ib3JkZXItaW5kaWdvKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7IC8qLmJnLWdyYXktMTAwICovXFxyXFxuICBjb2xvcjogcmdiYSgxMzksIDkyLCAyNDYpOyAvKi50ZXh0LWluZGlnbyovXFxyXFxuICB9XFxyXFxuICAvKiBJY29uICovXFxyXFxuICAudGFiIGxhYmVsOjphZnRlciB7XFxyXFxuICBmbG9hdDpyaWdodDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMS41ZW07XFxyXFxuICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAuMzU7XFxyXFxuICB9XFxyXFxuICAvKiBJY29uIGZvcm1hdHRpbmcgLSBjbG9zZWQgKi9cXHJcXG4gIC50YWIgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIitcXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6Ym9sZDsgLyouZm9udC1ib2xkKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMXB4OyAvKi5ib3JkZXIqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4OyAvKi5yb3VuZGVkLWZ1bGwgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2I4YzJjYzsgLyouYm9yZGVyLWdyZXkqL1xcclxcbiAgfVxcclxcbiAgLnRhYiBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDI1QkVcXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6Ym9sZDsgLyouZm9udC1ib2xkKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMXB4OyAvKi5ib3JkZXIqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4OyAvKi5yb3VuZGVkLWZ1bGwgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2I4YzJjYzsgLyouYm9yZGVyLWdyZXkqL1xcclxcbiAgfVxcclxcbiAgLyogSWNvbiBmb3JtYXR0aW5nIC0gb3BlbiAqL1xcclxcbiAgLnRhYiBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOSwgOTIsIDI0Nik7IC8qLmJnLWluZGlnbyovXFxyXFxuICBjb2xvcjogI2Y4ZmFmYzsgLyoudGV4dC1ncmV5LWxpZ2h0ZXN0Ki9cXHJcXG4gIH1cXHJcXG4gIC50YWIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2KTsgLyouYmctaW5kaWdvKi9cXHJcXG4gIGNvbG9yOiAjZjhmYWZjOyAvKi50ZXh0LWdyZXktbGlnaHRlc3QqL1xcclxcbiAgfVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBPeHlnZW4sIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXHJcXG59XFxyXFxuLmN1c3RvbS1jb250YWluZXJ7XFxyXFxuICBtYXgtd2lkdGg6IDE0NTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtY2FyZHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMzBweCAxNHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAzMHB4IDQwcHggMCByZ2IoMTQ1IDE1MCAyMDMgLyAyMCUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudC13b3JrLWltZ3tcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC13cmFwcGVye1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweCAxNHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC1jYXJke1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDI0cHggMzBweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCAzMHB4IDQwcHggMCByZ2IoMTQ1IDE1MCAyMDMgLyAyMCUpO1xcclxcbn1cXHJcXG4udGVzdGltb25pYWwtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zbWFsbC1hdmF0YXJ7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS82MTJjOTgxODQyNmU4MDQ4OTU1NDcwMWMvNjEzZTM2MWI2YzYwYmZlODE3MzlmYjVhX2F2YXRhci5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uYXZhdGFyLWRldGFpbHMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi5xdW90ZSB7XFxyXFxuICBjb2xvcjogIzVmNmE4ZjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmFib3V0LW1le1xcclxcbiAgbWF4LXdpZHRoOiA4OTBweDtcXHJcXG59XFxyXFxuLmFjY29yZGlhbi1ieHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA4OTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCAzMHB4IDQwcHggMCByZ2IoMTQ1IDE1MCAyMDMgLyAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTJiM2E7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXdyYXBwZXI6aG92ZXIgaDR7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uc2VjdGlvbi1tYXJnaW4tYm90dG9te1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHhcXHJcXG59XFxyXFxuLmJpZy1kb3RzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcclxcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcXHJcXG4gIGxlZnQ6IDgwcHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLnNtYWxsLWRvdHN7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwMHB4O1xcclxcbiAgcmlnaHQ6IDEyNXB4O1xcclxcbiAgei1pbmRleDogLTI7XFxyXFxufVxcclxcbi5sYXJnZS1idWJibGV7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMjVweDtcXHJcXG4gIGxlZnQ6IC01MHB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcbi5tZWRpdW0tYnViYmxle1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMjBweDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLnNtYWxsLWJ1YmJsZXtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEyNXB4O1xcclxcbiAgcmlnaHQ6IDIwMHB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcbi5ob3ZlclxcXFw6YmctcHVycGxlLTUwMDpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6dGV4dC1ncmF5LTMwMDpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6dGV4dC13aGl0ZTpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdC5tZFxcXFw6Z3JpZC1jb2xzLTQge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpncmlkLWNvbHMtMiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5sZ1xcXFw6Z3JpZC1jb2xzLTIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpncmlkLWNvbHMtMyB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOmdyaWQtcm93cy0yIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuXFx0fVxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwWnJabXdCJTNFXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwZWlUd01CJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRUFBYyxDQUFkLDhGQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDs7O0NDY0Msc0JBQXNCO0FEZFQ7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzQkMsZ0JBQWdCO0NBQ2hCLGNBQVc7SUFBWCxXQUFXO0FEdkJFOztBQUFkOzs7Q0FBYzs7QUFBZDtDQ2dDQyxpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLDhCQUE4QixFQUFFLE1BQU07QURqQ3pCOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDtDQzhDQyxTQUFTO0FEOUNJOztBQUFkOztDQUFjOztBQUFkO0NDc0RDOzs7Ozs7Ozs7a0JBU2lCO0FEL0RKOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7Q0M2RUMsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUQ5RVQ7O0FBQWQ7OztDQUFjOztBQUFkOztDQUFjOztBQUFkO0NDMkZDLHlDQUFpQztTQUFqQyxpQ0FBaUM7QUQzRnBCOztBQUFkOztDQUFjOztBQUFkOztDQ29HQyxtQkFBbUI7QURwR047O0FBQWQ7OztDQUFjOztBQUFkOzs7O0NDZ0hDOzs7Ozs7V0FNVSxFQUFFLE1BQU07Q0FDbEIsY0FBYyxFQUFFLE1BQU07QUR2SFQ7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0MrSEMsY0FBYztBRC9IRDs7QUFBZDs7Q0FBYzs7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QUN0QixnREFBZ0Q7QUFDbEQ7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQTFPQTtDR0FBLGtCQUFBO0NBQUEsMERBQUE7QUgrakNBO0FBL2pDQTtDR0FBLG9CQUFBO0NBQUEsa0RBQUE7QUhta0NBO0FBbmtDQTtDR0FBLG9CQUFBO0NBQUEsa0RBQUE7QUh1a0NBO0FBdmtDQTs7Q0dBQTtFQUFBLGdEQUFBO0NINGtDQzs7Q0c1a0NEO0VBQUEsZ0RBQUE7Q0hnbENDO0FBQ0Q7QUFqbENBOztDR0FBO0VBQUEsZ0RBQUE7Q0hzbENDOztDR3RsQ0Q7RUFBQSxnREFBQTtDSDBsQ0M7O0NHMWxDRDtFQUFBLDZDQUFBO0NIOGxDQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuLnRhYi1jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgLjM1cztcXHJcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgLjM1cztcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjM1cztcXHJcXG4gIH1cXHJcXG4gIC8qIDpjaGVja2VkIC0gcmVzaXplIHRvIGZ1bGwgaGVpZ2h0ICovXFxyXFxuICAudGFiIGlucHV0OmNoZWNrZWQgfiAudGFiLWNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuICAvKiBMYWJlbCBmb3JtYXR0aW5nIHdoZW4gb3BlbiAqL1xcclxcbiAgLnRhYiBpbnB1dDpjaGVja2VkICsgbGFiZWx7XFxyXFxuICAvKkBhcHBseSB0ZXh0LXhsIHAtNSBib3JkZXItbC0yIGJvcmRlci1wdXJwbGUtNTAwIGJnLWdyYXktMTAwIHRleHQtaW5kaWdvKi9cXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTsgLyoudGV4dC14bCovXFxyXFxuICBwYWRkaW5nOiAxLjI1cmVtOyAvKi5wLTUqL1xcclxcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDsgLyouYm9yZGVyLWwtMiovXFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2KTsgLyouYm9yZGVyLWluZGlnbyovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjOyAvKi5iZy1ncmF5LTEwMCAqL1xcclxcbiAgY29sb3I6IHJnYmEoMTM5LCA5MiwgMjQ2KTsgLyoudGV4dC1pbmRpZ28qL1xcclxcbiAgfVxcclxcbiAgLyogSWNvbiAqL1xcclxcbiAgLnRhYiBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgZmxvYXQ6cmlnaHQ7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEuNWVtO1xcclxcbiAgaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zNXM7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjM1O1xcclxcbiAgfVxcclxcbiAgLyogSWNvbiBmb3JtYXR0aW5nIC0gY2xvc2VkICovXFxyXFxuICAudGFiIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXHJcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7IC8qLmZvbnQtYm9sZCovXFxyXFxuICBib3JkZXItd2lkdGg6IDFweDsgLyouYm9yZGVyKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDsgLyoucm91bmRlZC1mdWxsICovXFxyXFxuICBib3JkZXItY29sb3I6ICNiOGMyY2M7IC8qLmJvcmRlci1ncmV5Ki9cXHJcXG4gIH1cXHJcXG4gIC50YWIgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwyNUJFXFxcIjtcXHJcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7IC8qLmZvbnQtYm9sZCovXFxyXFxuICBib3JkZXItd2lkdGg6IDFweDsgLyouYm9yZGVyKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDsgLyoucm91bmRlZC1mdWxsICovXFxyXFxuICBib3JkZXItY29sb3I6ICNiOGMyY2M7IC8qLmJvcmRlci1ncmV5Ki9cXHJcXG4gIH1cXHJcXG4gIC8qIEljb24gZm9ybWF0dGluZyAtIG9wZW4gKi9cXHJcXG4gIC50YWIgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksIDkyLCAyNDYpOyAvKi5iZy1pbmRpZ28qL1xcclxcbiAgY29sb3I6ICNmOGZhZmM7IC8qLnRleHQtZ3JleS1saWdodGVzdCovXFxyXFxuICB9XFxyXFxuICAudGFiIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOSwgOTIsIDI0Nik7IC8qLmJnLWluZGlnbyovXFxyXFxuICBjb2xvcjogI2Y4ZmFmYzsgLyoudGV4dC1ncmV5LWxpZ2h0ZXN0Ki9cXHJcXG4gIH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmI7XFxyXFxuICBmb250LWZhbWlseTogT3h5Z2VuLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxyXFxufVxcclxcbi5jdXN0b20tY29udGFpbmVye1xcclxcbiAgbWF4LXdpZHRoOiAxNDUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWNhcmR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTRweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMzBweCA0MHB4IDAgcmdiKDE0NSAxNTAgMjAzIC8gMjAlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi5yZWNlbnQtd29yay1pbWd7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0LXdyYXBwZXJ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweCAxNHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtY2FyZHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMjRweCAzMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDMwcHggNDBweCAwIHJnYigxNDUgMTUwIDIwMyAvIDIwJSk7XFxyXFxufVxcclxcbi50ZXN0aW1vbmlhbC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNtYWxsLWF2YXRhcntcXHJcXG4gIHdpZHRoOiA2NHB4O1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzYxMmM5ODE4NDI2ZTgwNDg5NTU0NzAxYy82MTNlMzYxYjZjNjBiZmU4MTczOWZiNWFfYXZhdGFyLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5hdmF0YXItZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuLnF1b3RlIHtcXHJcXG4gIGNvbG9yOiAjNWY2YThmO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4uYWJvdXQtbWV7XFxyXFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcclxcbn1cXHJcXG4uYWNjb3JkaWFuLWJ4e1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDMwcHggNDBweCAwIHJnYigxNDUgMTUwIDIwMyAvIDIwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWN0LWZvcm0tY29udGFpbmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MmIzYTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtd3JhcHBlcjpob3ZlciBoNHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5zZWN0aW9uLW1hcmdpbi1ib3R0b217XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDBweFxcclxcbn1cXHJcXG4uYmlnLWRvdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxyXFxuICBib3R0b206IDBweCAhaW1wb3J0YW50O1xcclxcbiAgbGVmdDogODBweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uc21hbGwtZG90c3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAwcHg7XFxyXFxuICByaWdodDogMTI1cHg7XFxyXFxuICB6LWluZGV4OiAtMjtcXHJcXG59XFxyXFxuLmxhcmdlLWJ1YmJsZXtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTEyNXB4O1xcclxcbiAgbGVmdDogLTUwcHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLm1lZGl1bS1idWJibGV7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0yMHB4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uc21hbGwtYnViYmxle1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTI1cHg7XFxyXFxuICByaWdodDogMjAwcHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXCIsXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCIsXCIvKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcblxcblxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcblxcbi8qXFxuICogRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxcbiAqL1xcblxcbmhyIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuLyoqXFxuICogVW5kbyB0aGUgYGJvcmRlci1zdHlsZTogbm9uZWAgcmVzZXQgdGhhdCBOb3JtYWxpemUgYXBwbGllcyB0byBpbWFnZXMgc28gdGhhdFxcbiAqIG91ciBgYm9yZGVyLXt3aWR0aH1gIHV0aWxpdGllcyBoYXZlIHRoZSBleHBlY3RlZCBlZmZlY3QuXFxuICpcXG4gKiBUaGUgTm9ybWFsaXplIHJlc2V0IGlzIHVubmVjZXNzYXJ5IGZvciB1cyBzaW5jZSB3ZSBkZWZhdWx0IHRoZSBib3JkZXItd2lkdGhcXG4gKiB0byAwIG9uIGFsbCBlbGVtZW50cy5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9pc3N1ZXMvMzYyXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgI2ExYTFhYSk7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKipcXG4gKiBPdmVycmlkZSBsZWdhY3kgZm9jdXMgcmVzZXQgZnJvbSBOb3JtYWxpemUgd2l0aCBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZXMuXFxuICpcXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxcbiAqIGFzIGl0IHRyaWdnZXJzIHRoZSBiZXR0ZXIgZm9jdXMgc3R5bGVzIGV2ZW4gZm9yIGxpbmtzLCB3aGljaCBzdGlsbCB1c2UgYSBkb3R0ZWRcXG4gKiBvdXRsaW5lIGluIEZpcmVmb3ggYnkgZGVmYXVsdC5cXG4gKi9cXG4gXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7XFxufVxcblxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==