(function() {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mail = __webpack_require__(511);

mail.setApiKey(process.env.SENDGRID_API_KEY);
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: 'ramsdell.28@gmail.com',
    from: 'ramsdell.28@gmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />')
  };
  await mail.send(data);
  res.status(200).json({
    status: 'OK'
  });
});

/***/ }),

/***/ 511:
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
var __webpack_exports__ = (__webpack_exec__(667));
module.exports = __webpack_exports__;

})();