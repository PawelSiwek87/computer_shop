"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Layout = ({\n  children\n}) => {\n  _s();\n\n  const {\n    userLogin\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"layout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Sklep komputerowy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n    className: \"main-container\"\n  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"footer\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: \"higth: 1000px\"\n  })));\n};\n\n_s(Layout, \"EN3uzsUQEBggvfcXYA5rFkBxv7o=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssTUFBTSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFnQkgsc0VBQWUsRUFBckM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLGtEQUFELHFCQUNFLDBFQUFPLG1CQUFQLENBREYsQ0FERixlQUtFLHdGQUNFLDJEQUFDLCtDQUFELE9BREYsQ0FMRixlQVFFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQWtDRSxRQUFsQyxDQVJGLGVBU0UscUZBQ0Usc0VBREYsZUFFRSxzRUFGRixlQUdFLHNFQUhGLGVBSUUsc0VBSkYsQ0FURixlQWVFLHdGQUNFLDJEQUFDLCtDQUFEO0FBQVEsU0FBSyxFQUFDO0FBQWQsSUFERixDQWZGLENBREY7QUFxQkQsQ0F2QkQ7O0dBQU1EO1VBQ2tCRDs7O0tBRGxCQztBQXlCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qc3g/YzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyB1c2VyTG9naW4gfSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNrbGVwIGtvbXB1dGVyb3d5PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPEZvb3RlciBzdHlsZT1cImhpZ3RoOiAxMDAwcHhcIi8+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJ1c2VTdGF0ZUNvbnRleHQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXJMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ })

});