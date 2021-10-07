/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n\nmail.setApiKey(process.env.SENDGRID_API_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const body = JSON.parse(req.body);\n  const message = `\n    Name: ${body.name}\\r\\n\n    Email: ${body.email}\\r\\n\n    Message: ${body.message}\n  `;\n  const data = {\n    to: 'ramsdell.28@gmail.com',\n    from: 'ramsdell.28@gmail.com',\n    subject: `New message from ${body.name}`,\n    text: message,\n    html: message.replace(/\\r\\n/g, '<br />')\n  };\n  await mail.send(data);\n  res.status(200).json({\n    status: 'OK'\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbIm1haWwiLCJyZXF1aXJlIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJyZXEiLCJyZXMiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJyZXBsYWNlIiwic2VuZCIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsc0NBQUQsQ0FBcEI7O0FBRUFELElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQTNCO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0UsSUFBZixDQUFiO0FBRUEsUUFBTUcsT0FBTyxHQUFJO0FBQ25CLFlBQVlILElBQUksQ0FBQ0ksSUFBSztBQUN0QixhQUFhSixJQUFJLENBQUNLLEtBQU07QUFDeEIsZUFBZUwsSUFBSSxDQUFDRyxPQUFRO0FBQzVCLEdBSkU7QUFNQSxRQUFNRyxJQUFJLEdBQUc7QUFDWEMsTUFBRSxFQUFFLHVCQURPO0FBRVhDLFFBQUksRUFBRSx1QkFGSztBQUdYQyxXQUFPLEVBQUcsb0JBQW1CVCxJQUFJLENBQUNJLElBQUssRUFINUI7QUFJWE0sUUFBSSxFQUFFUCxPQUpLO0FBS1hRLFFBQUksRUFBRVIsT0FBTyxDQUFDUyxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLFFBQXpCO0FBTEssR0FBYjtBQVFBLFFBQU1wQixJQUFJLENBQUNxQixJQUFMLENBQVVQLElBQVYsQ0FBTjtBQUVBUCxLQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxVQUFNLEVBQUU7QUFBVixHQUFyQjtBQUNELENBcEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IG1haWwgPSByZXF1aXJlKCdAc2VuZGdyaWQvbWFpbCcpO1xuXG5tYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5TRU5ER1JJRF9BUElfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICBjb25zdCBtZXNzYWdlID0gYFxuICAgIE5hbWU6ICR7Ym9keS5uYW1lfVxcclxcblxuICAgIEVtYWlsOiAke2JvZHkuZW1haWx9XFxyXFxuXG4gICAgTWVzc2FnZTogJHtib2R5Lm1lc3NhZ2V9XG4gIGA7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0bzogJ3JhbXNkZWxsLjI4QGdtYWlsLmNvbScsXG4gICAgZnJvbTogJ3JhbXNkZWxsLjI4QGdtYWlsLmNvbScsXG4gICAgc3ViamVjdDogYE5ldyBtZXNzYWdlIGZyb20gJHtib2R5Lm5hbWV9YCxcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGh0bWw6IG1lc3NhZ2UucmVwbGFjZSgvXFxyXFxuL2csICc8YnIgLz4nKSxcbiAgfTtcblxuICBhd2FpdCBtYWlsLnNlbmQoZGF0YSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6ICdPSycgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sendgrid/mail");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();