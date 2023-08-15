"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _api_sendContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/sendContactForm */ \"./pages/api/sendContactForm.js\");\n/* harmony import */ var _lib_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/sendEmail */ \"./lib/sendEmail.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Registration = () => {\n  _s();\n\n  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [isModal, setIsModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [userNameClassVal, setUserNameClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [emailClassVal, setEmailClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [emailAlertMessage, setEmailAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [passwordClassVal, setPasswordClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [passwordAlertMessage, setPasswordAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"); //Hasło wymagane!\n\n  const [isModalError, setIsModalError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const customStyles = {\n    content: {\n      width: \"550px\",\n      height: \"300px\",\n      margin: \"auto\",\n      padding: \"80px\"\n    }\n  };\n\n  const sendMailByGrid = data => {\n    fetch('/api/send-email', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        data\n      })\n    });\n  };\n\n  function globalValidation(result) {\n    let isValid = true;\n\n    if (!username) {\n      isValid = false;\n      setUserNameClassVal(\"errorValidation\");\n    }\n\n    if (!email) {\n      setEmailClassVal(\"errorValidation\");\n      isValid = false;\n      setEmailAlertMessage(\"Email wymagany!\");\n    } else if (result && result[0]) {\n      isValid = false;\n      setEmailClassVal(\"errorValidation\");\n      setEmailAlertMessage(\"Istnieje już użytkownik z podaną skrzynką email!\");\n    } else if (ValidateEmail(email) == false) {\n      isValid = false;\n      setEmailClassVal(\"errorValidation\");\n      setEmailAlertMessage(\"Niepoprawny format email!\");\n    }\n\n    if (!password) {\n      isValid = false;\n      setPasswordAlertMessage(\"Hasło wymagane!\");\n      setPasswordClassVal(\"errorValidation\");\n    } else if (false) {}\n\n    return isValid;\n  }\n\n  function ValidateEmail(mail) {\n    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(mail)) {\n      return true;\n    }\n\n    return false;\n  }\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n    let isGlobalValid = true;\n    const usersResult = await _lib_client__WEBPACK_IMPORTED_MODULE_2__.client.fetch(`*[_type == \"user\" && email == '${email}']`).then(result => {\n      isGlobalValid = globalValidation(result);\n    });\n    if (!isGlobalValid) return;\n    const submitValue = {\n      name: username,\n      email: email,\n      password: password,\n      subject: \"Sklep internetowy - weryfikacja konta\",\n      message: \"Aktywacja konta\"\n    };\n    (0,_api_sendContactForm__WEBPACK_IMPORTED_MODULE_3__.sendContactForm)(submitValue).then(result => {\n      setIsModalError(!!result.isError);\n      setIsModal(true);\n    }); //wysłanie maila nie możliwe przez vercel\n    //zastąpienie sendgrid:\n    //sendMailByGrid(submitValue); //test sending\n    //sendEmail;  \n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Rejestracja u\\u017Cytkownika\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"form-group\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Nazwa u\\u017Cytkownika:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    class: userNameClassVal,\n    value: username,\n    onChange: e => {\n      setUsername(e.target.value.trim());\n      setUserNameClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: userNameClassVal\n  }, \"Nazwa u\\u017Cytkownika wymagana!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"email\",\n    className: emailClassVal,\n    value: email,\n    onChange: e => {\n      setEmail(e.target.value.trim());\n      setEmailClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: emailClassVal\n  }, emailAlertMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Has\\u0142o:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"password\",\n    className: passwordClassVal,\n    value: password,\n    onChange: e => {\n      setPassword(e.target.value.trim());\n      setPasswordClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    class: passwordClassVal\n  }, passwordAlertMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    class: \"btn\",\n    onClick: handleSubmit\n  }, \"Zarejestruj\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n    isOpen: isModal,\n    style: customStyles,\n    onClose: () => setIsModal(false),\n    ariaHideApp: false\n  }, !isModalError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"W celu uko\\u0144czenia rejestracji aktywuj konto klikaj\\u0105c w link aktywacyjny w mailu.\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Co\\u015B posz\\u0142o nie tak. Skontaktuj si\\u0119 z administratorem\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    class: \"btn\",\n    onClick: () => setIsModal(false)\n  }, \"Zamknij\")));\n};\n\n_s(Registration, \"YHn+xKqwnDio8rZRNqavjK11+UE=\");\n\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\n\nvar _c;\n\n$RefreshReg$(_c, \"Registration\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFBQSxXQUFXLENBQUNvQyxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQUQsQ0FBWDtBQUNBdEMsTUFBQUEsbUJBQW1CLENBQUMsRUFBRCxDQUFuQjtBQUNEO0FBUEgsSUFGRixlQVdFO0FBQU8sU0FBSyxFQUFFRDtBQUFkLEtBQWlDRSxvQkFBakMsQ0FYRixDQTNCRixlQXdDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFNBQUssRUFBQyxLQUE1QjtBQUFrQyxXQUFPLEVBQUV3QjtBQUEzQyxLQUF5RCxhQUF6RCxDQXhDRixDQUZGLGVBOENFLDJEQUFDLG9EQUFEO0FBQ0UsVUFBTSxFQUFFbEMsT0FEVjtBQUVFLFNBQUssRUFBRWMsWUFGVDtBQUdFLFdBQU8sRUFBRSxNQUFNYixVQUFVLENBQUMsS0FBRCxDQUgzQjtBQUlFLGVBQVcsRUFBRTtBQUpmLEtBTUcsQ0FBQ1csWUFBRCxnQkFBZ0IsdUVBQUksNEZBQUosQ0FBaEIsZ0JBR08sdUVBQUkscUVBQUosQ0FUVixlQVVFO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBb0IsV0FBTyxFQUFFLE1BQU1YLFVBQVUsQ0FBQyxLQUFEO0FBQTdDLEtBQXNELFNBQXRELENBVkYsQ0E5Q0YsQ0FERjtBQStERCxDQWxLRDs7R0FBTVI7O0tBQUFBO0FBb0tOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdHJhdGlvbi5qcz83YTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7IHNlbmRDb250YWN0Rm9ybSB9IGZyb20gXCIuL2FwaS9zZW5kQ29udGFjdEZvcm1cIjtcbmltcG9ydCBzZW5kRW1haWwgZnJvbSBcIi4uL2xpYi9zZW5kRW1haWxcIjtcblxuY29uc3QgUmVnaXN0cmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTmFtZUNsYXNzVmFsLCBzZXRVc2VyTmFtZUNsYXNzVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWxDbGFzc1ZhbCwgc2V0RW1haWxDbGFzc1ZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsQWxlcnRNZXNzYWdlLCBzZXRFbWFpbEFsZXJ0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkQ2xhc3NWYWwsIHNldFBhc3N3b3JkQ2xhc3NWYWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEFsZXJ0TWVzc2FnZSwgc2V0UGFzc3dvcmRBbGVydE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vSGFzxYJvIHd5bWFnYW5lIVxuICBjb25zdCBbaXNNb2RhbEVycm9yLCBzZXRJc01vZGFsRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB3aWR0aDogXCI1NTBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgcGFkZGluZzogXCI4MHB4XCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzZW5kTWFpbEJ5R3JpZCA9IChkYXRhKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvc2VuZC1lbWFpbCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZGF0YX0pXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbG9iYWxWYWxpZGF0aW9uKHJlc3VsdCkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHNldFVzZXJOYW1lQ2xhc3NWYWwoXCJlcnJvclZhbGlkYXRpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgc2V0RW1haWxDbGFzc1ZhbChcImVycm9yVmFsaWRhdGlvblwiKTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHNldEVtYWlsQWxlcnRNZXNzYWdlKFwiRW1haWwgd3ltYWdhbnkhXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIHJlc3VsdFswXSkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgc2V0RW1haWxDbGFzc1ZhbChcImVycm9yVmFsaWRhdGlvblwiKTtcbiAgICAgIHNldEVtYWlsQWxlcnRNZXNzYWdlKFwiSXN0bmllamUganXFvCB1xbx5dGtvd25payB6IHBvZGFuxIUgc2tyenlua8SFIGVtYWlsIVwiKTtcbiAgICB9IGVsc2UgaWYgKFZhbGlkYXRlRW1haWwoZW1haWwpID09IGZhbHNlKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICBzZXRFbWFpbENsYXNzVmFsKFwiZXJyb3JWYWxpZGF0aW9uXCIpO1xuICAgICAgc2V0RW1haWxBbGVydE1lc3NhZ2UoXCJOaWVwb3ByYXdueSBmb3JtYXQgZW1haWwhXCIpO1xuICAgIH1cbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICBzZXRQYXNzd29yZEFsZXJ0TWVzc2FnZShcIkhhc8WCbyB3eW1hZ2FuZSFcIik7XG4gICAgICBzZXRQYXNzd29yZENsYXNzVmFsKFwiZXJyb3JWYWxpZGF0aW9uXCIpO1xuICAgIH1lbHNlIGlmKGZhbHNlKXtcbiAgICAgIHNldFBhc3N3b3JkQWxlcnRNZXNzYWdlKFwiSGFzxYJvIHd5bWFnYW5lIVwiKTtcbiAgICAgIHNldFBhc3N3b3JkQ2xhc3NWYWwoXCJlcnJvclZhbGlkYXRpb25cIik7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgZnVuY3Rpb24gVmFsaWRhdGVFbWFpbChtYWlsKSB7XG4gICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGlzR2xvYmFsVmFsaWQgPSB0cnVlO1xuXG4gICAgY29uc3QgdXNlcnNSZXN1bHQgPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mZXRjaChgKltfdHlwZSA9PSBcInVzZXJcIiAmJiBlbWFpbCA9PSAnJHtlbWFpbH0nXWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlzR2xvYmFsVmFsaWQgPSBnbG9iYWxWYWxpZGF0aW9uKHJlc3VsdCk7XG4gICAgICB9KTtcblxuICAgIGlmICghaXNHbG9iYWxWYWxpZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3VibWl0VmFsdWUgPSB7XG4gICAgICBuYW1lOiB1c2VybmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIHN1YmplY3Q6IFwiU2tsZXAgaW50ZXJuZXRvd3kgLSB3ZXJ5ZmlrYWNqYSBrb250YVwiLFxuICAgICAgbWVzc2FnZTogXCJBa3R5d2FjamEga29udGFcIixcbiAgICB9O1xuICAgIHNlbmRDb250YWN0Rm9ybShzdWJtaXRWYWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBzZXRJc01vZGFsRXJyb3IoISFyZXN1bHQuaXNFcnJvcik7XG4gICAgICBzZXRJc01vZGFsKHRydWUpO1xuICAgIH0pO1xuICAgICAvL3d5c8WCYW5pZSBtYWlsYSBuaWUgbW/FvGxpd2UgcHJ6ZXogdmVyY2VsXG4gICAgLy96YXN0xIVwaWVuaWUgc2VuZGdyaWQ6XG4gICAgLy9zZW5kTWFpbEJ5R3JpZChzdWJtaXRWYWx1ZSk7IC8vdGVzdCBzZW5kaW5nXG4gICAgLy9zZW5kRW1haWw7ICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxoMj5SZWplc3RyYWNqYSB1xbx5dGtvd25pa2E8L2gyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5OYXp3YSB1xbx5dGtvd25pa2E6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPXt1c2VyTmFtZUNsYXNzVmFsfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAgIHNldFVzZXJOYW1lQ2xhc3NWYWwoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17dXNlck5hbWVDbGFzc1ZhbH0+TmF6d2EgdcW8eXRrb3duaWthIHd5bWFnYW5hITwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZW1haWxDbGFzc1ZhbH1cbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgICBzZXRFbWFpbENsYXNzVmFsKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2VtYWlsQ2xhc3NWYWx9PntlbWFpbEFsZXJ0TWVzc2FnZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+SGFzxYJvOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXNzd29yZENsYXNzVmFsfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAgIHNldFBhc3N3b3JkQ2xhc3NWYWwoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzPXtwYXNzd29yZENsYXNzVmFsfT57cGFzc3dvcmRBbGVydE1lc3NhZ2V9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICBaYXJlamVzdHJ1alxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e2lzTW9kYWx9XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWwoZmFsc2UpfVxuICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHshaXNNb2RhbEVycm9yID8gPGgzPlxuICAgICAgICAgIFcgY2VsdSB1a2/FhGN6ZW5pYSByZWplc3RyYWNqaSBha3R5d3VqIGtvbnRvIGtsaWthasSFYyB3IGxpbmtcbiAgICAgICAgICBha3R5d2FjeWpueSB3IG1haWx1LlxuICAgICAgICA8L2gzPiA6IDxoMz5Db8WbIHBvc3rFgm8gbmllIHRhay4gU2tvbnRha3R1aiBzacSZIHogYWRtaW5pc3RyYXRvcmVtPC9oMz59XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsKGZhbHNlKX0+XG4gICAgICAgICAgWmFta25palxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiY2xpZW50Iiwic2VuZENvbnRhY3RGb3JtIiwic2VuZEVtYWlsIiwiUmVnaXN0cmF0aW9uIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNNb2RhbCIsInNldElzTW9kYWwiLCJ1c2VyTmFtZUNsYXNzVmFsIiwic2V0VXNlck5hbWVDbGFzc1ZhbCIsImVtYWlsQ2xhc3NWYWwiLCJzZXRFbWFpbENsYXNzVmFsIiwiZW1haWxBbGVydE1lc3NhZ2UiLCJzZXRFbWFpbEFsZXJ0TWVzc2FnZSIsInBhc3N3b3JkQ2xhc3NWYWwiLCJzZXRQYXNzd29yZENsYXNzVmFsIiwicGFzc3dvcmRBbGVydE1lc3NhZ2UiLCJzZXRQYXNzd29yZEFsZXJ0TWVzc2FnZSIsImlzTW9kYWxFcnJvciIsInNldElzTW9kYWxFcnJvciIsImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJzZW5kTWFpbEJ5R3JpZCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdsb2JhbFZhbGlkYXRpb24iLCJyZXN1bHQiLCJpc1ZhbGlkIiwiVmFsaWRhdGVFbWFpbCIsIm1haWwiLCJ0ZXN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNHbG9iYWxWYWxpZCIsInVzZXJzUmVzdWx0IiwidGhlbiIsInN1Ym1pdFZhbHVlIiwibmFtZSIsInN1YmplY3QiLCJtZXNzYWdlIiwiaXNFcnJvciIsInRhcmdldCIsInZhbHVlIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/registration.js\n");

/***/ })

});