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
        console.log('Element', event.target, 'is hovered');
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
        lineNumber: 31,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-1.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            onMouseLeave: originalOverlay,
            className: "current",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              zIndex: '-1'
            },
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            id: "overlayBtn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
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
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-2.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            onMouseOver: yes,
            onMouseLeave: originalOverlay,
            className: "current",
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              zIndex: '-1'
            },
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-image-3.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
            lineNumber: 84,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-5.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
            lineNumber: 96,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-6.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Lollipop Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "App Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "See Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
          lineNumber: 110,
          columnNumber: 187
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaWxlcy5qcyJdLCJuYW1lcyI6WyJUaWxlcyIsImNoYW5nZUJhY2tncm91bmQiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJvcGFjaXR5Iiwib3JpZ2luYWxPdmVybGF5IiwiZG9Tb21lVGhpbmciLCJ5ZXMiLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwibWluSGVpZ2h0IiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFFYixXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDekJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsR0FBeUIsR0FBekI7QUFDRDs7QUFDRCxXQUFTQyxlQUFULENBQXlCSixDQUF6QixFQUE0QjtBQUMxQkEsS0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixHQUF6QjtBQUNEOztBQUNELFdBQVNFLFdBQVQsR0FBc0IsQ0FDcEI7QUFDSDs7QUFFRCxXQUFTQyxHQUFULEdBQWM7QUFDVixRQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjs7QUFDUixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeENILGNBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlFLGdCQUFaLENBQTZCLFdBQTdCLEVBQTBDLFlBQVk7QUFDcERDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJDLEtBQUssQ0FBQ2QsTUFBN0IsRUFBcUMsWUFBckM7QUFDRCxPQUZEO0FBR0Q7QUFF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QXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhKO0FBd0ZIOztLQS9HUU4sSztBQW1IVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNDBiZjU5M2M1OTAwMTFiMjlkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmZ1bmN0aW9uIFRpbGVzKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gb3JpZ2luYWxPdmVybGF5KGUpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGRvU29tZVRoaW5nKCl7XHJcbiAgICAgICAgLy9kbyBzb21ldGhpbmdcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24geWVzKCl7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VycmVudCcpXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRWxlbWVudCcsIGV2ZW50LnRhcmdldCwgJ2lzIGhvdmVyZWQnKVxyXG4gIH0pXHJcbn1cclxuXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHBiLTVcIj5SZWNlbnQgV29yazwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgIGxnOmdyaWQtcm93cy0yIGdhcC01IG14LWF1dG8gdGV4dC13aGl0ZSAgbXQtOCAgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyXCIgaWQ9XCJwcm9qZWN0LXdyYXBwZXJcIiBzdHlsZT17e21pbkhlaWdodDogMzAwICsgJ3B4J319IGNsYXNzPVwicHJvamVjdC13cmFwcGVyIHllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTEuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBvbk1vdXNlT3Zlcj17eWVzfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0gY2xhc3NOYW1lPVwiY3VycmVudFwiPkxvbGxpcG9wIE1vYmlsZSBBcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3pJbmRleDogJy0xJ319ID5BcHAgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheUJ0blwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fSBzdHlsZT17e29wYWNpdHk6ICcwJ319PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTIuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBvbk1vdXNlT3Zlcj17eWVzfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0gY2xhc3NOYW1lPVwiY3VycmVudFwiID5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t6SW5kZXg6ICctMSd9fT5BcHAgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWUgUHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uTW91c2VPdmVyPXtjaGFuZ2VCYWNrZ3JvdW5kfSBvbk1vdXNlTGVhdmU9e29yaWdpbmFsT3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3J0Zm9saW8taW1hZ2VzLW5hdGhhbi1yYW1zZGVsbC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2VydmljZS1pbWFnZS0zLmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltZy00LmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25Nb3VzZU92ZXI9e2NoYW5nZUJhY2tncm91bmR9IG9uTW91c2VMZWF2ZT17b3JpZ2luYWxPdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BvcnRmb2xpby1pbWFnZXMtbmF0aGFuLXJhbXNkZWxsLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zZXJ2aWNlLWltZy01LmpwZWdcIiBhbHQ9XCJsb2xsaXBvcFwiIGNsYXNzTmFtZT1cInJlY2VudC13b3JrLWltZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9sbGlwb3AgTW9iaWxlIEFwcDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlZSBQcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbk1vdXNlT3Zlcj17Y2hhbmdlQmFja2dyb3VuZH0gb25Nb3VzZUxlYXZlPXtvcmlnaW5hbE92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9ydGZvbGlvLWltYWdlcy1uYXRoYW4tcmFtc2RlbGwuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3NlcnZpY2UtaW1nLTYuanBlZ1wiIGFsdD1cImxvbGxpcG9wXCIgY2xhc3NOYW1lPVwicmVjZW50LXdvcmstaW1nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Mb2xsaXBvcCBNb2JpbGUgQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2VlIFByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC02IGJvcmRlci1wdXJwbGUtNTAwIGZvbnQtdGhpbiBtdC00IHJvdW5kZWQtZnVsbCBib3JkZXItc29saWQgYm9yZGVyLTIgIHRyYXNuaXRpb24gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctcHVycGxlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIFwiPjxhIGhyZWY9XCIjYWJvdXRcIj5TZWUgYWxsIHByb2plY3RzPC9hPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==