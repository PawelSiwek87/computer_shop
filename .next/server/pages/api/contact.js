"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./lib/nodemailer.js":
/*!***************************!*\
  !*** ./lib/nodemailer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transporter\": () => (/* binding */ transporter),\n/* harmony export */   \"mailOptions\": () => (/* binding */ mailOptions)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL_HOST;\nconst pass = process.env.EMAIL_HOST_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n  service: \"gmail\",\n  auth: {\n    user: email,\n    pass\n  }\n});\nconst mailOptions = {\n  from: email //to: 'pawel.siwek87@gmail.com',\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbm9kZW1haWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUExQjtBQUNBLE1BQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGVBQXpCO0FBRU8sTUFBTUMsV0FBVyxHQUFHUCxpRUFBQSxDQUEyQjtBQUNwRFMsRUFBQUEsT0FBTyxFQUFFLE9BRDJDO0FBRXBEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFVixLQURGO0FBRUpJLElBQUFBO0FBRkk7QUFGOEMsQ0FBM0IsQ0FBcEI7QUFRQSxNQUFNTyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLElBQUksRUFBRVosS0FEbUIsQ0FFekI7O0FBRnlCLENBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vbGliL25vZGVtYWlsZXIuanM/ZDZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuY29uc3QgZW1haWwgPSBwcm9jZXNzLmVudi5FTUFJTF9IT1NUO1xyXG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuRU1BSUxfSE9TVF9QQVNTO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6IFwiZ21haWxcIixcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiBlbWFpbCxcclxuICAgIHBhc3MsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgZnJvbTogZW1haWwsXHJcbiAgLy90bzogJ3Bhd2VsLnNpd2VrODdAZ21haWwuY29tJyxcclxufTtcclxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJlbWFpbCIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9IT1NUIiwicGFzcyIsIkVNQUlMX0hPU1RfUEFTUyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwibWFpbE9wdGlvbnMiLCJmcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/nodemailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/nodemailer */ \"(api)/./lib/nodemailer.js\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst CONTACT_MESSAGE_FIELDS = {\n  name: \"Nazwa użytkownika\",\n  email: \"Email\",\n  subject: \"Temat\",\n  message: \"Czynność\"\n};\n\nconst generateEmailContent = data => {\n  const stringData = Object.entries(data).reduce( //usunąć wyświetlanie hasła\n  (str, [key, val]) => str += key != \"password\" ? `${CONTACT_MESSAGE_FIELDS[key]}: \\n${val} \\n \\n` : \"\", \"\");\n\n  const jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n  const accountActivationToken = jwt.sign(data, process.env.JWT_PRIVATE_KEY, {\n    expiresIn: \"20m\"\n  }); //dodać tu zawartość konta  {expiresIn: '20m'}\n\n  let domainWithActivationUrl = process.env.DOMAIN_LINK + \"/accountActivation/\";\n  const activationLink = domainWithActivationUrl.replace(/\\s/g, '') + accountActivationToken;\n  const htmlData = Object.entries(data).reduce((str, [key, val]) => {\n    return str += key != \"password\" ? `<h3 class=\"form-heading\" align=\"left\">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class=\"form-answer\" align=\"left\">${val}</p>` : \"\";\n  }, \"\");\n  return {\n    text: stringData,\n    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset=\"utf-8\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <style type=\"text/css\"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*=\"margin: 16px 0;\"]{margin: 0 !important;}</style> </head> <body style=\"margin: 0 !important; padding: 0 !important; background: #fff\"> <div style=\" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; \" ></div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"> <tr> <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 10px 15px 30px 15px\" class=\"section-padding\" > <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 500px\" class=\"responsive-table\" > <tr> <td> <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr> <td> <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" > <tr> <td style=\" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; \" class=\"padding message-content\" > <h2>Sklep internetowy</h2> <div class=\"form-container\">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table>W celu aktywacji konta kliknij:<br><a href=${activationLink}>${activationLink}</a> </body></html>`\n  };\n};\n\nasync function handler(req, res) {\n  let isError = false;\n  _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default().setApiKey(process.env.SENDGRID_API_KEY); //dodany\n  //console.log(req.body);\n\n  const data = req.body;\n  const msg = {\n    to: data.email,\n    //to,\n    from: process.env.SENDGRID_HOST_MAIL,\n    //from,\n    ...generateEmailContent(data),\n    subject: data.subject\n  }; //setIsModalError(false);\n\n  try {\n    await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default().send(msg);\n    console.log('E-mail został wysłany!');\n  } catch (error) {\n    isError = true;\n    console.error('Błąd podczas wysyłania e-maila:', error);\n\n    if (error.response) {\n      console.error(error.response.body);\n    }\n  } // koniec dodany\n\n\n  res.status(200).json({\n    isError: isError\n  });\n  /* modemailer zawieszony\n  transporter.sendMail({\n    ...mailOptions,\n    to: data.email,\n    ...generateEmailContent(data),\n    subject: data.subject,\n  });\n  */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlEQSxLQUFqRDs7QUFFQSxRQUFJQSxLQUFLLENBQUNDLFFBQVYsRUFBb0I7QUFDbEJILE1BQUFBLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQSxLQUFLLENBQUNDLFFBQU4sQ0FBZVQsSUFBN0I7QUFDRDtBQUNGLEdBeEI4QixDQXdCN0I7OztBQUdGSixFQUFBQSxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZCxJQUFBQSxPQUFPLEVBQUVBO0FBQVgsR0FBckI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7O0FBRUQsaUVBQWVILE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBtYWlsT3B0aW9ucywgdHJhbnNwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vbGliL25vZGVtYWlsZXJcIjtcbmltcG9ydCBzZ01haWwgZnJvbSBcIkBzZW5kZ3JpZC9tYWlsXCJcblxuY29uc3QgQ09OVEFDVF9NRVNTQUdFX0ZJRUxEUyA9IHtcbiAgbmFtZTogXCJOYXp3YSB1xbx5dGtvd25pa2FcIixcbiAgZW1haWw6IFwiRW1haWxcIixcbiAgc3ViamVjdDogXCJUZW1hdFwiLFxuICBtZXNzYWdlOiBcIkN6eW5ub8WbxIdcIixcbn07XG5cbmNvbnN0IGdlbmVyYXRlRW1haWxDb250ZW50ID0gKGRhdGEpID0+IHtcblxuICBjb25zdCBzdHJpbmdEYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKFxuICAgIC8vdXN1bsSFxIcgd3nFm3dpZXRsYW5pZSBoYXPFgmFcbiAgICAoc3RyLCBba2V5LCB2YWxdKSA9PlxuICAgICAgKHN0ciArPVxuICAgICAgICBrZXkgIT0gXCJwYXNzd29yZFwiXG4gICAgICAgICAgPyBgJHtDT05UQUNUX01FU1NBR0VfRklFTERTW2tleV19OiBcXG4ke3ZhbH0gXFxuIFxcbmBcbiAgICAgICAgICA6IFwiXCIpLFxuICAgIFwiXCJcbiAgKTtcblxuICBjb25zdCBqd3QgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xuXG4gIGNvbnN0IGFjY291bnRBY3RpdmF0aW9uVG9rZW4gPSBqd3Quc2lnbihkYXRhLCBwcm9jZXNzLmVudi5KV1RfUFJJVkFURV9LRVksIHtcbiAgICBleHBpcmVzSW46IFwiMjBtXCIsXG4gIH0pOyAvL2RvZGHEhyB0dSB6YXdhcnRvxZvEhyBrb250YSAge2V4cGlyZXNJbjogJzIwbSd9XG5cbiAgbGV0IGRvbWFpbldpdGhBY3RpdmF0aW9uVXJsID0gcHJvY2Vzcy5lbnYuRE9NQUlOX0xJTksgKyBcIi9hY2NvdW50QWN0aXZhdGlvbi9cIjtcblxuICBjb25zdCBhY3RpdmF0aW9uTGluayA9XG4gICAgIGRvbWFpbldpdGhBY3RpdmF0aW9uVXJsLnJlcGxhY2UoL1xccy9nLCAnJykgKyBhY2NvdW50QWN0aXZhdGlvblRva2VuO1xuICBjb25zdCBodG1sRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoc3RyLCBba2V5LCB2YWxdKSA9PiB7XG4gICAgcmV0dXJuIChzdHIgKz1cbiAgICAgIGtleSAhPSBcInBhc3N3b3JkXCJcbiAgICAgICAgPyBgPGgzIGNsYXNzPVwiZm9ybS1oZWFkaW5nXCIgYWxpZ249XCJsZWZ0XCI+JHtDT05UQUNUX01FU1NBR0VfRklFTERTW2tleV19PC9oMz48cCBjbGFzcz1cImZvcm0tYW5zd2VyXCIgYWxpZ249XCJsZWZ0XCI+JHt2YWx9PC9wPmBcbiAgICAgICAgOiBcIlwiKTtcbiAgfSwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBzdHJpbmdEYXRhLFxuICAgIGh0bWw6IGA8IURPQ1RZUEUgaHRtbD48aHRtbD4gPGhlYWQ+IDx0aXRsZT48L3RpdGxlPiA8bWV0YSBjaGFyc2V0PVwidXRmLThcIi8+IDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz4gPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIvPiA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+IGJvZHksIHRhYmxlLCB0ZCwgYXstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO310YWJsZXtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7fWJvZHl7aGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KXsud3JhcHBlcnt3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDt9LnJlc3BvbnNpdmUtdGFibGV7d2lkdGg6IDEwMCUgIWltcG9ydGFudDt9LnBhZGRpbmd7cGFkZGluZzogMTBweCA1JSAxNXB4IDUlICFpbXBvcnRhbnQ7fS5zZWN0aW9uLXBhZGRpbmd7cGFkZGluZzogMCAxNXB4IDUwcHggMTVweCAhaW1wb3J0YW50O319LmZvcm0tY29udGFpbmVye21hcmdpbi1ib3R0b206IDI0cHg7IHBhZGRpbmc6IDIwcHg7IGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO30uZm9ybS1oZWFkaW5ne2NvbG9yOiAjMmEyYTJhOyBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiA0MDA7IHRleHQtYWxpZ246IGxlZnQ7IGxpbmUtaGVpZ2h0OiAyMHB4OyBmb250LXNpemU6IDE4cHg7IG1hcmdpbjogMCAwIDhweDsgcGFkZGluZzogMDt9LmZvcm0tYW5zd2Vye2NvbG9yOiAjMmEyYTJhOyBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiAzMDA7IHRleHQtYWxpZ246IGxlZnQ7IGxpbmUtaGVpZ2h0OiAyMHB4OyBmb250LXNpemU6IDE2cHg7IG1hcmdpbjogMCAwIDI0cHg7IHBhZGRpbmc6IDA7fWRpdltzdHlsZSo9XCJtYXJnaW46IDE2cHggMDtcIl17bWFyZ2luOiAwICFpbXBvcnRhbnQ7fTwvc3R5bGU+IDwvaGVhZD4gPGJvZHkgc3R5bGU9XCJtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiAjZmZmXCI+IDxkaXYgc3R5bGU9XCIgZGlzcGxheTogbm9uZTsgZm9udC1zaXplOiAxcHg7IGNvbG9yOiAjZmVmZWZlOyBsaW5lLWhlaWdodDogMXB4OyAgbWF4LWhlaWdodDogMHB4OyBtYXgtd2lkdGg6IDBweDsgb3BhY2l0eTogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgXCIgPjwvZGl2Pjx0YWJsZSBib3JkZXI9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgd2lkdGg9XCIxMDAlXCI+IDx0cj4gPHRkIGJnY29sb3I9XCIjZmZmZmZmXCIgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHhcIiBjbGFzcz1cInNlY3Rpb24tcGFkZGluZ1wiID4gPHRhYmxlIGJvcmRlcj1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiB3aWR0aD1cIjEwMCVcIiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHhcIiBjbGFzcz1cInJlc3BvbnNpdmUtdGFibGVcIiA+IDx0cj4gPHRkPiA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiPiA8dHI+IDx0ZD4gPHRhYmxlIHdpZHRoPVwiMTAwJVwiIGJvcmRlcj1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiA+IDx0cj4gPHRkIHN0eWxlPVwiIHBhZGRpbmc6IDAgMCAwIDA7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDI1cHg7IGNvbG9yOiAjMjMyMzIzOyBcIiBjbGFzcz1cInBhZGRpbmcgbWVzc2FnZS1jb250ZW50XCIgPiA8aDI+U2tsZXAgaW50ZXJuZXRvd3k8L2gyPiA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj4ke2h0bWxEYXRhfTwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPiA8L3RkPjwvdHI+PC90YWJsZT4gPC90ZD48L3RyPjwvdGFibGU+IDwvdGQ+PC90cj48L3RhYmxlPlcgY2VsdSBha3R5d2Fjamkga29udGEga2xpa25pajo8YnI+PGEgaHJlZj0ke2FjdGl2YXRpb25MaW5rfT4ke2FjdGl2YXRpb25MaW5rfTwvYT4gPC9ib2R5PjwvaHRtbD5gLFxuICB9O1xuXG59O1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGxldCBpc0Vycm9yID0gZmFsc2U7XG4gIHNnTWFpbC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWSk7IC8vZG9kYW55XG4gIC8vY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICBjb25zdCBkYXRhID0gcmVxLmJvZHk7IFxuICBjb25zdCBtc2cgPSB7XG4gICAgdG86IGRhdGEuZW1haWwsLy90byxcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9IT1NUX01BSUwsLy9mcm9tLFxuICAgIC4uLmdlbmVyYXRlRW1haWxDb250ZW50KGRhdGEpLFxuICAgIHN1YmplY3Q6IGRhdGEuc3ViamVjdFxuICB9O1xuXG4gIC8vc2V0SXNNb2RhbEVycm9yKGZhbHNlKTtcbiAgXG4gIHRyeSB7XG4gICAgYXdhaXQgc2dNYWlsLnNlbmQobXNnKTtcbiAgICBjb25zb2xlLmxvZygnRS1tYWlsIHpvc3RhxYIgd3lzxYJhbnkhJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaXNFcnJvciA9IHRydWU7XG4gICAgY29uc29sZS5lcnJvcignQsWCxIVkIHBvZGN6YXMgd3lzecWCYW5pYSBlLW1haWxhOicsIGVycm9yKTtcbiAgXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLmJvZHkpO1xuICAgIH1cbiAgfSAvLyBrb25pZWMgZG9kYW55XG5cblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzRXJyb3I6IGlzRXJyb3IgfSk7XG5cbiAgLyogbW9kZW1haWxlciB6YXdpZXN6b255XG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAuLi5tYWlsT3B0aW9ucyxcbiAgICB0bzogZGF0YS5lbWFpbCxcbiAgICAuLi5nZW5lcmF0ZUVtYWlsQ29udGVudChkYXRhKSxcbiAgICBzdWJqZWN0OiBkYXRhLnN1YmplY3QsXG4gIH0pO1xuICAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIm1haWxPcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJzZ01haWwiLCJDT05UQUNUX01FU1NBR0VfRklFTERTIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVtYWlsQ29udGVudCIsImRhdGEiLCJzdHJpbmdEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImtleSIsInZhbCIsImp3dCIsInJlcXVpcmUiLCJhY2NvdW50QWN0aXZhdGlvblRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfUFJJVkFURV9LRVkiLCJleHBpcmVzSW4iLCJkb21haW5XaXRoQWN0aXZhdGlvblVybCIsIkRPTUFJTl9MSU5LIiwiYWN0aXZhdGlvbkxpbmsiLCJyZXBsYWNlIiwiaHRtbERhdGEiLCJ0ZXh0IiwiaHRtbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpc0Vycm9yIiwic2V0QXBpS2V5IiwiU0VOREdSSURfQVBJX0tFWSIsImJvZHkiLCJtc2ciLCJ0byIsImZyb20iLCJTRU5ER1JJRF9IT1NUX01BSUwiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();