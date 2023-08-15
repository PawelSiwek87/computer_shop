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
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51N2txhBbyBicfdwrXaKBcy1c5HQjtibCmmwwEimHD2m5VYbqkhxHIC94sOqeExUkUU8nhJdiI8I7t5iDvU9hUNpD00y8nTYa3O\");\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      const params = {\n        submit_type: \"pay\",\n        mode: \"payment\",\n        payment_method_types: [\"card\"],\n        billing_address_collection: \"auto\",\n        shipping_options: [{\n          shipping_rate: \"shr_1N4mRmBbyBicfdwrbITZlNYT\"\n        }],\n        line_items: req.body.map(item => {\n          const img = item.image[0].asset._ref;\n          const newImage = img.replace(\"image-\", \"https://cdn.sanity.io/images/4ie5h3s9/production/\").replace(\"-webp\", \".webp\");\n          return {\n            price_data: {\n              currency: \"pln\",\n              product_data: {\n                name: item.name,\n                images: [newImage]\n              },\n              unit_amount: item.price * 100\n            },\n            adjustable_quantity: {\n              enabled: true,\n              minimum: 1\n            },\n            quantity: item.quantity\n          };\n        }),\n        success_url: `${req.headers.origin}/success`,\n        cancel_url: `${req.headers.origin}/canceled`\n      };\n      const session = await stripe.checkout.sessions.create(params);\n      res.status(200).json(session);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method Not Allowed\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFKLENBQVdFLDZHQUFYLENBQWY7QUFFZSxlQUFlRyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFBQSxXQUFXLEVBQUUsS0FEQTtBQUViQyxRQUFBQSxJQUFJLEVBQUUsU0FGTztBQUdiQyxRQUFBQSxvQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FIVDtBQUliQyxRQUFBQSwwQkFBMEIsRUFBRSxNQUpmO0FBS2JDLFFBQUFBLGdCQUFnQixFQUFFLENBQUM7QUFBRUMsVUFBQUEsYUFBYSxFQUFFO0FBQWpCLFNBQUQsQ0FMTDtBQU1iQyxRQUFBQSxVQUFVLEVBQUVWLEdBQUcsQ0FBQ1csSUFBSixDQUFTQyxHQUFULENBQWNDLElBQUQsSUFBVTtBQUNqQyxnQkFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLEtBQWQsQ0FBb0JDLElBQWhDO0FBQ0EsZ0JBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUNqQkssT0FEYyxDQUViLFFBRmEsRUFHYixtREFIYSxFQUtkQSxPQUxjLENBS04sT0FMTSxFQUtHLE9BTEgsQ0FBakI7QUFPQSxpQkFBTztBQUNMQyxZQUFBQSxVQUFVLEVBQUU7QUFDVkMsY0FBQUEsUUFBUSxFQUFFLEtBREE7QUFFVkMsY0FBQUEsWUFBWSxFQUFFO0FBQ1pDLGdCQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ1UsSUFEQztBQUVaQyxnQkFBQUEsTUFBTSxFQUFFLENBQUNOLFFBQUQ7QUFGSSxlQUZKO0FBTVZPLGNBQUFBLFdBQVcsRUFBRVosSUFBSSxDQUFDYSxLQUFMLEdBQWE7QUFOaEIsYUFEUDtBQVNMQyxZQUFBQSxtQkFBbUIsRUFBRTtBQUNuQkMsY0FBQUEsT0FBTyxFQUFFLElBRFU7QUFFbkJDLGNBQUFBLE9BQU8sRUFBRTtBQUZVLGFBVGhCO0FBYUxDLFlBQUFBLFFBQVEsRUFBRWpCLElBQUksQ0FBQ2lCO0FBYlYsV0FBUDtBQWVELFNBeEJXLENBTkM7QUErQmJDLFFBQUFBLFdBQVcsRUFBRyxHQUFFL0IsR0FBRyxDQUFDZ0MsT0FBSixDQUFZQyxNQUFPLFVBL0J0QjtBQWdDYkMsUUFBQUEsVUFBVSxFQUFHLEdBQUVsQyxHQUFHLENBQUNnQyxPQUFKLENBQVlDLE1BQU87QUFoQ3JCLE9BQWY7QUFrQ0EsWUFBTUUsT0FBTyxHQUFHLE1BQU14QyxNQUFNLENBQUN5QyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0NuQyxNQUFoQyxDQUF0QjtBQUVBRixNQUFBQSxHQUFHLENBQUNzQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLE9BQXJCO0FBQ0QsS0F0Q0QsQ0FzQ0UsT0FBT00sR0FBUCxFQUFZO0FBQ1p4QyxNQUFBQSxHQUFHLENBQUNzQyxNQUFKLENBQVdFLEdBQUcsQ0FBQ0MsVUFBSixJQUFrQixHQUE3QixFQUFrQ0YsSUFBbEMsQ0FBdUNDLEdBQUcsQ0FBQ0UsT0FBM0M7QUFDRDtBQUNGLEdBMUNELE1BMENPO0FBQ0wxQyxJQUFBQSxHQUFHLENBQUMyQyxTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBM0MsSUFBQUEsR0FBRyxDQUFDc0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvc3RyaXBlLmpzP2Q3ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHN1Ym1pdF90eXBlOiBcInBheVwiLFxuICAgICAgICBtb2RlOiBcInBheW1lbnRcIixcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiBcImF1dG9cIixcbiAgICAgICAgc2hpcHBpbmdfb3B0aW9uczogW3sgc2hpcHBpbmdfcmF0ZTogXCJzaHJfMU40bVJtQmJ5QmljZmR3cmJJVFpsTllUXCIgfV0sXG4gICAgICAgIGxpbmVfaXRlbXM6IHJlcS5ib2R5Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGltZyA9IGl0ZW0uaW1hZ2VbMF0uYXNzZXQuX3JlZjtcbiAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGltZ1xuICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgIFwiaW1hZ2UtXCIsXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy80aWU1aDNzOS9wcm9kdWN0aW9uL1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucmVwbGFjZShcIi13ZWJwXCIsIFwiLndlYnBcIik7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2VfZGF0YToge1xuICAgICAgICAgICAgICBjdXJyZW5jeTogXCJwbG5cIixcbiAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGltYWdlczogW25ld0ltYWdlXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRqdXN0YWJsZV9xdWFudGl0eToge1xuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9jYW5jZWxlZGAsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChcIk1ldGhvZCBOb3QgQWxsb3dlZFwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwYXJhbXMiLCJzdWJtaXRfdHlwZSIsIm1vZGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwic2hpcHBpbmdfb3B0aW9ucyIsInNoaXBwaW5nX3JhdGUiLCJsaW5lX2l0ZW1zIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZSIsImFzc2V0IiwiX3JlZiIsIm5ld0ltYWdlIiwicmVwbGFjZSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiYWRqdXN0YWJsZV9xdWFudGl0eSIsImVuYWJsZWQiLCJtaW5pbXVtIiwicXVhbnRpdHkiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();