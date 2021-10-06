self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tiles.js":
/*!*****************************!*\
  !*** ./components/Tiles.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\ramsd\\OneDrive\\Desktop\\portfolio\\components\\Tiles.js";


function Tiles() {
  function changeBackground(e) {
    e.target.style.opacity = '1';
  }

  function originalOverlay(e) {
    e.target.style.opacity = '0';
  }

  function doSomeThing() {//do something
  }

  function yes() {
    var elements = document.getElementsByClassName('current');

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('mouseover', function () {
        var current = document.querySelector('.current');
        var prevSiblings = current.previousElementSibling;
        console.log(prevSiblings);
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "font-bold text-3xl pb-5",
        children: "Recent Work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid lg:grid-cols-3  lg:grid-rows-2 gap-5 mx-auto text-white  mt-8  ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper",
          id: "project-wrapper",
          style: {
            minHeight: 300 + 'px'
          },
          "class": "project-wrapper yes",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-1.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            onMouseLeave: originalOverlay,
            className: "current",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              zIndex: '-1'
            },
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "overlayBtn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay,
            style: {
              opacity: '0'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-2.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            onMouseLeave: originalOverlay,
            className: "current",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              zIndex: '-1'
            },
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-image-3.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-5.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: "project-wrapper text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overlay",
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-6.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "py-2 px-6 border-purple-500 font-thin mt-4 rounded-full border-solid border-2  trasnition transition-colors hover:bg-purple-500 hover:text-white ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#about",
          children: "See all projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 187
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_c = Tiles;
/* harmony default export */ __webpack_exports__["default"] = (Tiles);

var _c;

$RefreshReg$(_c, "Tiles");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaWxlcy5qcyJdLCJuYW1lcyI6WyJUaWxlcyIsImNoYW5nZUJhY2tncm91bmQiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJvcGFjaXR5Iiwib3JpZ2luYWxPdmVybGF5IiwiZG9Tb21lVGhpbmciLCJ5ZXMiLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2U2libGluZ3MiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY29uc29sZSIsImxvZyIsIm1pbkhlaWdodCIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBRWIsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQ3pCQSxLQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLEdBQXpCO0FBQ0Q7O0FBQ0QsV0FBU0MsZUFBVCxDQUF5QkosQ0FBekIsRUFBNEI7QUFDMUJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsR0FBeUIsR0FBekI7QUFDRDs7QUFDRCxXQUFTRSxXQUFULEdBQXNCLENBQ3BCO0FBQ0g7O0FBRUQsV0FBU0MsR0FBVCxHQUFjO0FBQ1YsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFNBQWhDLENBQWY7O0FBQ1IsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDSCxjQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRSxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxZQUFZO0FBQ3BELFlBQUlDLE9BQU8sR0FBR0wsUUFBUSxD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UTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFDLG1KQUFsQjtBQUFBLCtCQUFzSztBQUFHLGNBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhKO0FBd0ZIOztLQWpIUU4sSztBQXFIVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjZiN2FlMzc0MDYxYmFmMzQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmZ1bmN0aW9uIFRpbGVzKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gb3JpZ2luYWxPdmVybGF5KGUpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGRvU29tZVRoaW5nKCl7XHJcbiAgICAgICAgLy9kbyBzb21ldGhpbmdcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24geWVzKCl7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VycmVudCcpXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Jyk7XHJcbmxldCBwcmV2U2libGluZ3MgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbmNvbnNvbGUubG9nKHByZXZTaWJsaW5ncyk7XHJcbiAgfSlcclxufVxyXG5cclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgcGItNVwiPlJlY2VudCBXb3JrPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyAgbGc6Z3JpZC1yb3dzLTIgZ2FwLTUgbXgtYXV0byB0ZXh0LXdoaXRlICBtdC04ICBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIiBpZD1cInByb2plY3Qtd3JhcHBlclwiIHN0eWxlPXt7bWluSGVpZ2h0OiAzMDAgKyAncHgnfX0gY2xhc3M9XCJwcm9qZWN0LXdyYXBwZXIgeWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWctMS5qcGVnXCIgYWx0PVwibG9sbGlwb3BcIiBjbGFzc05hbWU9XCJyZWNlbnQtd29yay1pbWdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uTW91c2VPdmVyPXt5ZXN9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fSBjbGFzc05hbWU9XCJjdXJyZW50XCI+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7ekluZGV4OiAnLTEnfX0gPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5QnRuXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWUgUHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9IHN0eWxlPXt7b3BhY2l0eTogJzAnfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWctMi5qcGVnXCIgYWx0PVwibG9sbGlwb3BcIiBjbGFzc05hbWU9XCJyZWNlbnQtd29yay1pbWdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uTW91c2VPdmVyPXt5ZXN9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fSBjbGFzc05hbWU9XCJjdXJyZW50XCIgPkxvbGxpcG9wIE1vYmlsZSBBcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3pJbmRleDogJy0xJ319PkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltYWdlLTMuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTQuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTUuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWctNi5qcGVnXCIgYWx0PVwibG9sbGlwb3BcIiBjbGFzc05hbWU9XCJyZWNlbnQtd29yay1pbWdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkxvbGxpcG9wIE1vYmlsZSBBcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BcHAgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWUgUHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweS0yIHB4LTYgYm9yZGVyLXB1cnBsZS01MDAgZm9udC10aGluIG10LTQgcm91bmRlZC1mdWxsIGJvcmRlci1zb2xpZCBib3JkZXItMiAgdHJhc25pdGlvbiB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1wdXJwbGUtNTAwIGhvdmVyOnRleHQtd2hpdGUgXCI+PGEgaHJlZj1cIiNhYm91dFwiPlNlZSBhbGwgcHJvamVjdHM8L2E+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWxlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9