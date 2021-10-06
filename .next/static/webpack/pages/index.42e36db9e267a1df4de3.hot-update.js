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

  function yes() {
    var current = document.querySelector('.current');
    var nextSibling = current.nextElementSibling;
    console.log(nextSibling);
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
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-1.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            onMouseLeave: originalOverlay,
            className: "current",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            onMouseOver: changeBackground,
            onMouseLeave: originalOverlay,
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "overlayBtn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-2.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            className: "yes",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-image-3.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-5.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
            lineNumber: 87,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-6.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
          lineNumber: 101,
          columnNumber: 187
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaWxlcy5qcyJdLCJuYW1lcyI6WyJUaWxlcyIsImNoYW5nZUJhY2tncm91bmQiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJvcGFjaXR5Iiwib3JpZ2luYWxPdmVybGF5IiwieWVzIiwiY3VycmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY29uc29sZSIsImxvZyIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBRWIsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQ3pCQSxLQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLEdBQXpCO0FBQ0Q7O0FBQ0QsV0FBU0MsZUFBVCxDQUF5QkosQ0FBekIsRUFBNEI7QUFDMUJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsR0FBeUIsR0FBekI7QUFDRDs7QUFDRCxXQUFTRSxHQUFULEdBQWU7QUFDYixRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkO0FBQ0EsUUFBSUMsV0FBVyxHQUFHSCxPQUFPLENBQUNJLGtCQUExQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNEOztBQUVILHNCQUdJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsc0VBQWY7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFDLGlCQUF0QjtBQUF3QyxZQUFFLEVBQUMsaUJBQTNDO0FBQTZELGVBQUssRUFBRTtBQUFDSSxxQkFBUyxFQUFFLE1BQU07QUFBbEIsV0FBcEU7QUFBNkYsbUJBQU0scUJBQW5HO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsdUJBQVcsRUFBRWQsZ0JBQXRDO0FBQXdELHdCQUFZLEVBQUVLO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLGVBQUcsRUFBQywrRkFBVDtBQUF5RyxlQUFHLEVBQUMsVUFBN0c7QUFBd0gscUJBQVMsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBSSx1QkFBVyxFQUFFQyxHQUFqQjtBQUFzQix3QkFBWSxFQUFFRCxlQUFwQztBQUFxRCxxQkFBUyxFQUFDLFNBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyx1QkFBVyxFQUFFTCxnQkFBaEI7QUFBa0Msd0JBQVksRUFBRUssZUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFLLGNBQUUsRUFBQyxZQUFSO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWFJO0FBQUEsK0JBQ0k7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUMsaUJBQXRCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsdUJBQVcsRUFBRUwsZ0JBQXRDO0FBQXdELHdCQUFZLEVBQUVLLGVBQXRFO0FBQXVGLGlCQUFLLEVBQUU7QUFBQ0QscUJBQU8sRUFBRTtBQUFWO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLGVBQUcsRUFBQywrRkFBVDtBQUF5RyxlQUFHLEVBQUMsVUFBN0c7QUFBd0gscUJBQVMsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBSSx1QkFBVyxFQUFFRSxHQUFqQjtBQUFzQixxQkFBUyxFQUFDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkosZUF5Qkk7QUFBQSwrQkFDSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyxpQkFBdEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5Qix1QkFBVyxFQUFFTixnQkFBdEM7QUFBd0Qsd0JBQVksRUFBRUs7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssZUFBRyxFQUFDLGlHQUFUO0FBQTJHLGVBQUcsRUFBQyxVQUEvRztBQUEwSCxxQkFBUyxFQUFDO0FBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSixlQXFDSTtBQUFBLCtCQUNJO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFDLGlCQUF0QjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQXlCLHVCQUFXLEVBQUVMLGdCQUF0QztBQUF3RCx3QkFBWSxFQUFFSztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxlQUFHLEVBQUMsK0ZBQVQ7QUFBeUcsZUFBRyxFQUFDLFVBQTdHO0FBQXdILHFCQUFTLEVBQUM7QUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNKLGVBaURJO0FBQUEsK0JBQ0k7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUMsaUJBQXRCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsdUJBQVcsRUFBRUwsZ0JBQXRDO0FBQXdELHdCQUFZLEVBQUVLO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLGVBQUcsRUFBQywrRkFBVDtBQUF5RyxlQUFHLEVBQUMsVUFBN0c7QUFBd0gscUJBQVMsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqREosZUE2REk7QUFBQSwrQkFDSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyw0QkFBdEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5Qix1QkFBVyxFQUFFTCxnQkFBdEM7QUFBd0Qsd0JBQVksRUFBRUs7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUssZUFBRyxFQUFDLCtGQUFUO0FBQXlHLGVBQUcsRUFBQyxVQUE3RztBQUF3SCxxQkFBUyxFQUFDO0FBQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQWdGUTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFDLG1KQUFsQjtBQUFBLCtCQUFzSztBQUFHLGNBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhKO0FBd0ZIOztLQXRHUU4sSztBQTBHVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MmUzNmRiOWUyNjdhMWRmNGRlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmZ1bmN0aW9uIFRpbGVzKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gb3JpZ2luYWxPdmVybGF5KGUpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHllcygpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Jyk7XHJcbiAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gY3VycmVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV4dFNpYmxpbmcpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgcGItNVwiPlJlY2VudCBXb3JrPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyAgbGc6Z3JpZC1yb3dzLTIgZ2FwLTUgbXgtYXV0byB0ZXh0LXdoaXRlICBtdC04ICBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIiBpZD1cInByb2plY3Qtd3JhcHBlclwiIHN0eWxlPXt7bWluSGVpZ2h0OiAzMDAgKyAncHgnfX0gY2xhc3M9XCJwcm9qZWN0LXdyYXBwZXIgeWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWctMS5qcGVnXCIgYWx0PVwibG9sbGlwb3BcIiBjbGFzc05hbWU9XCJyZWNlbnQtd29yay1pbWdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uTW91c2VPdmVyPXt5ZXN9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fSBjbGFzc05hbWU9XCJjdXJyZW50XCI+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlCdG5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0gc3R5bGU9e3tvcGFjaXR5OiAnMCd9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltZy0yLmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgb25Nb3VzZU92ZXI9e3llc30gY2xhc3NOYW1lPVwieWVzXCIgPkxvbGxpcG9wIE1vYmlsZSBBcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BcHAgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWUgUHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWFnZS0zLmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltZy00LmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltZy01LmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTYuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC02IGJvcmRlci1wdXJwbGUtNTAwIGZvbnQtdGhpbiBtdC00IHJvdW5kZWQtZnVsbCBib3JkZXItc29saWQgYm9yZGVyLTIgIHRyYXNuaXRpb24gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctcHVycGxlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIFwiPjxhIGhyZWY9XCIjYWJvdXRcIj5TZWUgYWxsIHByb2plY3RzPC9hPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==