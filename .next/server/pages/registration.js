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
exports.id = "pages/registration";
exports.ids = ["pages/registration"];
exports.modules = {

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: '4ie5h3s9',\n  dataset: 'production',\n  apiVersion: '2023-05-04',\n  useCdn: true,\n  token: \"skwjcujUWU322a6FuYEd9Tyg87m2LKkt6B3pfFuXJLuEliSntq9TBoht5cw4wnJxUCVLKHZEExHQI6me3JyNC1hGb2LJrbFrMnK9oWnvDWdmrocRC3fwj5bqqKe6q9tL4AoG9HGrZmUY3A0Fq2vxP6fInU0ShdoIVAUqQovCwAUXQiUN0PKq\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = source => builder.image(source);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxNQUFNLEdBQUdGLHFEQUFZLENBQUM7QUFDakNHLEVBQUFBLFNBQVMsRUFBRSxVQURzQjtBQUVqQ0MsRUFBQUEsT0FBTyxFQUFFLFlBRndCO0FBR2pDQyxFQUFBQSxVQUFVLEVBQUUsWUFIcUI7QUFJakNDLEVBQUFBLE1BQU0sRUFBRSxJQUp5QjtBQUtqQ0MsRUFBQUEsS0FBSyxFQUFFQyxzTEFBb0NFO0FBTFYsQ0FBRCxDQUEzQjtBQVFQLE1BQU1DLE9BQU8sR0FBR1Ysd0RBQWUsQ0FBQ0MsTUFBRCxDQUEvQjtBQUVPLE1BQU1VLE1BQU0sR0FBSUMsTUFBRCxJQUFZRixPQUFPLENBQUNHLEtBQVIsQ0FBY0QsTUFBZCxDQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2xpYi9jbGllbnQuanM/ZTY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50JztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnNGllNWgzczknLFxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIGFwaVZlcnNpb246ICcyMDIzLTA1LTA0JyxcbiAgdXNlQ2RuOiB0cnVlLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1RPS0VOXG59KTtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gYnVpbGRlci5pbWFnZShzb3VyY2UpOyJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9UT0tFTiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client.js\n");

/***/ }),

/***/ "./lib/sendEmail.js":
/*!**************************!*\
  !*** ./lib/sendEmail.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendEmail)\n/* harmony export */ });\n//const sgMail = require('@sendgrid/mail')\n//import sgMail from \"@sendgrid/mail\"\nasync function sendEmail() {\n  sgMail.setApiKey(process.env.SENDGRID_API_KEY);\n  const msg = {\n    to,\n    from,\n    subject,\n    html\n  };\n\n  try {\n    await sgMail.send(msg);\n    console.log('E-mail został wysłany!');\n  } catch (error) {\n    console.error('Błąd podczas wysyłania e-maila:', error);\n\n    if (error.response) {\n      console.error(error.response.body);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUEsU0FBZixHQUEyQjtBQUN4Q0MsRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQTdCO0FBRUEsUUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLElBQUFBLEVBRFU7QUFFVkMsSUFBQUEsSUFGVTtBQUdWQyxJQUFBQSxPQUhVO0FBSVZDLElBQUFBO0FBSlUsR0FBWjs7QUFPQSxNQUFJO0FBQ0YsVUFBTVQsTUFBTSxDQUFDVSxJQUFQLENBQVlMLEdBQVosQ0FBTjtBQUNBTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEYsSUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWMsaUNBQWQsRUFBaURBLEtBQWpEOztBQUVBLFFBQUlBLEtBQUssQ0FBQ0MsUUFBVixFQUFvQjtBQUNsQkgsTUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxJQUE3QjtBQUNEO0FBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2xpYi9zZW5kRW1haWwuanM/Njk0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHNnTWFpbCA9IHJlcXVpcmUoJ0BzZW5kZ3JpZC9tYWlsJylcclxuLy9pbXBvcnQgc2dNYWlsIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWwoKSB7XHJcbiAgc2dNYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5TRU5ER1JJRF9BUElfS0VZKTtcclxuXHJcbiAgY29uc3QgbXNnID0ge1xyXG4gICAgdG8sXHJcbiAgICBmcm9tLFxyXG4gICAgc3ViamVjdCxcclxuICAgIGh0bWwsXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHNnTWFpbC5zZW5kKG1zZyk7XHJcbiAgICBjb25zb2xlLmxvZygnRS1tYWlsIHpvc3RhxYIgd3lzxYJhbnkhJyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0LFgsSFZCBwb2RjemFzIHd5c3nFgmFuaWEgZS1tYWlsYTonLCBlcnJvcik7XHJcblxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UuYm9keSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzZW5kRW1haWwiLCJzZ01haWwiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VOREdSSURfQVBJX0tFWSIsIm1zZyIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJodG1sIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc3BvbnNlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sendEmail.js\n");

/***/ }),

/***/ "./pages/api/sendContactForm.js":
/*!**************************************!*\
  !*** ./pages/api/sendContactForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendContactForm\": () => (/* binding */ sendContactForm)\n/* harmony export */ });\nconst sendContactForm = async data => fetch(\"/api/contact\", {\n  //fetch(\"/api/sendEmail\", {\n  method: \"POST\",\n  body: JSON.stringify(data),\n  //headers: { \"Content-Type\": \"application/json\", Accept: \"application/json\" },\n  headers: {\n    'Content-Type': 'application/json'\n  }\n}).then(res => {\n  if (!res.ok) {\n    console.log(\"Nie udało się wysłać maila\");\n  } //throw new Error(\"Nie udało się wysłać maila\");\n\n\n  return res.json();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VuZENvbnRhY3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxNQUFNQSxlQUFlLEdBQUcsTUFBT0MsSUFBUCxJQUU3QkMsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDcEI7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLE1BRlk7QUFHcEJDLEVBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FIYztBQUlwQjtBQUNBTSxFQUFBQSxPQUFPLEVBQUM7QUFBRSxvQkFBZ0I7QUFBbEI7QUFMWSxDQUFqQixDQUFMLENBTUdDLElBTkgsQ0FNU0MsR0FBRCxJQUFTO0FBQ2YsTUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBWTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNELEdBSGMsQ0FHWjs7O0FBQ0QsU0FBT0gsR0FBRyxDQUFDSSxJQUFKLEVBQVA7QUFDSCxDQVhELENBRksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvc2VuZENvbnRhY3RGb3JtLmpzPzQzYTIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBzZW5kQ29udGFjdEZvcm0gPSBhc3luYyAoZGF0YSkgPT5cclxuXHJcbiAgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xyXG4gICAgLy9mZXRjaChcIi9hcGkvc2VuZEVtYWlsXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIC8vaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgaGVhZGVyczp7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgaWYgKCFyZXMub2spe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5pZSB1ZGHFgm8gc2nEmSB3eXPFgmHEhyBtYWlsYVwiKTsgXHJcbiAgICB9ICAvL3Rocm93IG5ldyBFcnJvcihcIk5pZSB1ZGHFgm8gc2nEmSB3eXPFgmHEhyBtYWlsYVwiKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgfSk7Il0sIm5hbWVzIjpbInNlbmRDb250YWN0Rm9ybSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/sendContactForm.js\n");

/***/ }),

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"react-modal\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _api_sendContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/sendContactForm */ \"./pages/api/sendContactForm.js\");\n/* harmony import */ var _lib_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/sendEmail */ \"./lib/sendEmail.js\");\n\n\n\n\n\n\nconst Registration = () => {\n  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [isModal, setIsModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [userNameClassVal, setUserNameClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [emailClassVal, setEmailClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [emailAlertMessage, setEmailAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [passwordClassVal, setPasswordClassVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [passwordAlertMessage, setPasswordAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"); //Hasło wymagane!\n\n  const [isModalError, setIsModalError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const customStyles = {\n    content: {\n      width: \"550px\",\n      height: \"300px\",\n      margin: \"auto\",\n      padding: \"80px\"\n    }\n  };\n\n  const sendMailByGrid = data => {\n    fetch('/api/send-email', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        data\n      })\n    });\n  };\n\n  function globalValidation(result) {\n    let isValid = true;\n\n    if (!username) {\n      isValid = false;\n      setUserNameClassVal(\"errorValidation\");\n    }\n\n    if (!email) {\n      setEmailClassVal(\"errorValidation\");\n      isValid = false;\n      setEmailAlertMessage(\"Email wymagany!\");\n    } else if (result && result[0]) {\n      isValid = false;\n      setEmailClassVal(\"errorValidation\");\n      setEmailAlertMessage(\"Istnieje już użytkownik z podaną skrzynką email!\");\n    } else if (ValidateEmail(email) == false) {\n      isValid = false;\n      setEmailClassVal(\"errorValidation\");\n      setEmailAlertMessage(\"Niepoprawny format email!\");\n    }\n\n    if (!password) {\n      isValid = false;\n      setPasswordAlertMessage(\"Hasło wymagane!\");\n      setPasswordClassVal(\"errorValidation\");\n    } else if (!standardPasswordValidation(password)) {\n      isValid = false;\n      setPasswordAlertMessage(\"Hasło musi zawierać przynajmniej 8 znaków, w tym małą i dużą literę, oraz znak specjalny!\");\n      setPasswordClassVal(\"errorValidation\");\n    }\n\n    return isValid;\n  }\n\n  function ValidateEmail(mail) {\n    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(mail)) {\n      return true;\n    }\n\n    return false;\n  }\n\n  function standardPasswordValidation(mail) {\n    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/.test(mail)) {\n      return true;\n    }\n\n    return false;\n  }\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n    let isGlobalValid = true;\n    const usersResult = await _lib_client__WEBPACK_IMPORTED_MODULE_2__.client.fetch(`*[_type == \"user\" && email == '${email}']`).then(result => {\n      isGlobalValid = globalValidation(result);\n    });\n    if (!isGlobalValid) return;\n    const submitValue = {\n      name: username,\n      email: email,\n      password: password,\n      subject: \"Sklep internetowy - weryfikacja konta\",\n      message: \"Aktywacja konta\"\n    };\n    (0,_api_sendContactForm__WEBPACK_IMPORTED_MODULE_3__.sendContactForm)(submitValue).then(result => {\n      setIsModalError(!!result.isError);\n      setIsModal(true);\n    }); //wysłanie maila nie możliwe przez vercel\n    //zastąpienie sendgrid:\n    //sendMailByGrid(submitValue); //test sending\n    //sendEmail;  \n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Rejestracja u\\u017Cytkownika\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"form-group\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Nazwa u\\u017Cytkownika:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    class: userNameClassVal,\n    value: username,\n    onChange: e => {\n      setUsername(e.target.value.trim());\n      setUserNameClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: userNameClassVal\n  }, \"Nazwa u\\u017Cytkownika wymagana!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"email\",\n    className: emailClassVal,\n    value: email,\n    onChange: e => {\n      setEmail(e.target.value.trim());\n      setEmailClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    className: emailClassVal\n  }, emailAlertMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Has\\u0142o:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"password\",\n    className: passwordClassVal,\n    value: password,\n    onChange: e => {\n      setPassword(e.target.value.trim());\n      setPasswordClassVal(\"\");\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", {\n    class: passwordClassVal\n  }, passwordAlertMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    class: \"btn\",\n    onClick: handleSubmit\n  }, \"Zarejestruj\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n    isOpen: isModal,\n    style: customStyles,\n    onClose: () => setIsModal(false),\n    ariaHideApp: false\n  }, !isModalError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"W celu uko\\u0144czenia rejestracji aktywuj konto klikaj\\u0105c w link aktywacyjny w mailu.\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Co\\u015B posz\\u0142o nie tak. Skontaktuj si\\u0119 z administratorem\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    class: \"btn\",\n    onClick: () => setIsModal(false)\n  }, \"Zamknij\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7IHNlbmRDb250YWN0Rm9ybSB9IGZyb20gXCIuL2FwaS9zZW5kQ29udGFjdEZvcm1cIjtcbmltcG9ydCBzZW5kRW1haWwgZnJvbSBcIi4uL2xpYi9zZW5kRW1haWxcIjtcblxuY29uc3QgUmVnaXN0cmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTmFtZUNsYXNzVmFsLCBzZXRVc2VyTmFtZUNsYXNzVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWxDbGFzc1ZhbCwgc2V0RW1haWxDbGFzc1ZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsQWxlcnRNZXNzYWdlLCBzZXRFbWFpbEFsZXJ0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkQ2xhc3NWYWwsIHNldFBhc3N3b3JkQ2xhc3NWYWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEFsZXJ0TWVzc2FnZSwgc2V0UGFzc3dvcmRBbGVydE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vSGFzxYJvIHd5bWFnYW5lIVxuICBjb25zdCBbaXNNb2RhbEVycm9yLCBzZXRJc01vZGFsRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB3aWR0aDogXCI1NTBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgcGFkZGluZzogXCI4MHB4XCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzZW5kTWFpbEJ5R3JpZCA9IChkYXRhKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvc2VuZC1lbWFpbCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZGF0YX0pXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbG9iYWxWYWxpZGF0aW9uKHJlc3VsdCkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHNldFVzZXJOYW1lQ2xhc3NWYWwoXCJlcnJvclZhbGlkYXRpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgc2V0RW1haWxDbGFzc1ZhbChcImVycm9yVmFsaWRhdGlvblwiKTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHNldEVtYWlsQWxlcnRNZXNzYWdlKFwiRW1haWwgd3ltYWdhbnkhXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIHJlc3VsdFswXSkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgc2V0RW1haWxDbGFzc1ZhbChcImVycm9yVmFsaWRhdGlvblwiKTtcbiAgICAgIHNldEVtYWlsQWxlcnRNZXNzYWdlKFwiSXN0bmllamUganXFvCB1xbx5dGtvd25payB6IHBvZGFuxIUgc2tyenlua8SFIGVtYWlsIVwiKTtcbiAgICB9IGVsc2UgaWYgKFZhbGlkYXRlRW1haWwoZW1haWwpID09IGZhbHNlKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICBzZXRFbWFpbENsYXNzVmFsKFwiZXJyb3JWYWxpZGF0aW9uXCIpO1xuICAgICAgc2V0RW1haWxBbGVydE1lc3NhZ2UoXCJOaWVwb3ByYXdueSBmb3JtYXQgZW1haWwhXCIpO1xuICAgIH1cbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICBzZXRQYXNzd29yZEFsZXJ0TWVzc2FnZShcIkhhc8WCbyB3eW1hZ2FuZSFcIik7XG4gICAgICBzZXRQYXNzd29yZENsYXNzVmFsKFwiZXJyb3JWYWxpZGF0aW9uXCIpO1xuICAgIH1lbHNlIGlmKCFzdGFuZGFyZFBhc3N3b3JkVmFsaWRhdGlvbihwYXNzd29yZCkpe1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgc2V0UGFzc3dvcmRBbGVydE1lc3NhZ2UoXCJIYXPFgm8gbXVzaSB6YXdpZXJhxIcgcHJ6eW5ham1uaWVqIDggem5ha8OzdywgdyB0eW0gbWHFgsSFIGkgZHXFvMSFIGxpdGVyxJksIG9yYXogem5hayBzcGVjamFsbnkhXCIpO1xuICAgICAgc2V0UGFzc3dvcmRDbGFzc1ZhbChcImVycm9yVmFsaWRhdGlvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBWYWxpZGF0ZUVtYWlsKG1haWwpIHtcbiAgICBpZiAoL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KG1haWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhbmRhcmRQYXNzd29yZFZhbGlkYXRpb24obWFpbCkge1xuICAgIGlmICgvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKltAJCElKj8mXSlbQS1aYS16XFxkQCQhJSo/Jl17OCx9JC8udGVzdChtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGlzR2xvYmFsVmFsaWQgPSB0cnVlO1xuXG4gICAgY29uc3QgdXNlcnNSZXN1bHQgPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mZXRjaChgKltfdHlwZSA9PSBcInVzZXJcIiAmJiBlbWFpbCA9PSAnJHtlbWFpbH0nXWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlzR2xvYmFsVmFsaWQgPSBnbG9iYWxWYWxpZGF0aW9uKHJlc3VsdCk7XG4gICAgICB9KTtcblxuICAgIGlmICghaXNHbG9iYWxWYWxpZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3VibWl0VmFsdWUgPSB7XG4gICAgICBuYW1lOiB1c2VybmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIHN1YmplY3Q6IFwiU2tsZXAgaW50ZXJuZXRvd3kgLSB3ZXJ5ZmlrYWNqYSBrb250YVwiLFxuICAgICAgbWVzc2FnZTogXCJBa3R5d2FjamEga29udGFcIixcbiAgICB9O1xuICAgIHNlbmRDb250YWN0Rm9ybShzdWJtaXRWYWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBzZXRJc01vZGFsRXJyb3IoISFyZXN1bHQuaXNFcnJvcik7XG4gICAgICBzZXRJc01vZGFsKHRydWUpO1xuICAgIH0pO1xuICAgICAvL3d5c8WCYW5pZSBtYWlsYSBuaWUgbW/FvGxpd2UgcHJ6ZXogdmVyY2VsXG4gICAgLy96YXN0xIVwaWVuaWUgc2VuZGdyaWQ6XG4gICAgLy9zZW5kTWFpbEJ5R3JpZChzdWJtaXRWYWx1ZSk7IC8vdGVzdCBzZW5kaW5nXG4gICAgLy9zZW5kRW1haWw7ICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxoMj5SZWplc3RyYWNqYSB1xbx5dGtvd25pa2E8L2gyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5OYXp3YSB1xbx5dGtvd25pa2E6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPXt1c2VyTmFtZUNsYXNzVmFsfVxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAgIHNldFVzZXJOYW1lQ2xhc3NWYWwoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17dXNlck5hbWVDbGFzc1ZhbH0+TmF6d2EgdcW8eXRrb3duaWthIHd5bWFnYW5hITwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZW1haWxDbGFzc1ZhbH1cbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgICBzZXRFbWFpbENsYXNzVmFsKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2VtYWlsQ2xhc3NWYWx9PntlbWFpbEFsZXJ0TWVzc2FnZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+SGFzxYJvOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXNzd29yZENsYXNzVmFsfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAgIHNldFBhc3N3b3JkQ2xhc3NWYWwoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzPXtwYXNzd29yZENsYXNzVmFsfT57cGFzc3dvcmRBbGVydE1lc3NhZ2V9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICBaYXJlamVzdHJ1alxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e2lzTW9kYWx9XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWwoZmFsc2UpfVxuICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHshaXNNb2RhbEVycm9yID8gPGgzPlxuICAgICAgICAgIFcgY2VsdSB1a2/FhGN6ZW5pYSByZWplc3RyYWNqaSBha3R5d3VqIGtvbnRvIGtsaWthasSFYyB3IGxpbmtcbiAgICAgICAgICBha3R5d2FjeWpueSB3IG1haWx1LlxuICAgICAgICA8L2gzPiA6IDxoMz5Db8WbIHBvc3rFgm8gbmllIHRhay4gU2tvbnRha3R1aiBzacSZIHogYWRtaW5pc3RyYXRvcmVtPC9oMz59XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsKGZhbHNlKX0+XG4gICAgICAgICAgWmFta25palxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiY2xpZW50Iiwic2VuZENvbnRhY3RGb3JtIiwic2VuZEVtYWlsIiwiUmVnaXN0cmF0aW9uIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNNb2RhbCIsInNldElzTW9kYWwiLCJ1c2VyTmFtZUNsYXNzVmFsIiwic2V0VXNlck5hbWVDbGFzc1ZhbCIsImVtYWlsQ2xhc3NWYWwiLCJzZXRFbWFpbENsYXNzVmFsIiwiZW1haWxBbGVydE1lc3NhZ2UiLCJzZXRFbWFpbEFsZXJ0TWVzc2FnZSIsInBhc3N3b3JkQ2xhc3NWYWwiLCJzZXRQYXNzd29yZENsYXNzVmFsIiwicGFzc3dvcmRBbGVydE1lc3NhZ2UiLCJzZXRQYXNzd29yZEFsZXJ0TWVzc2FnZSIsImlzTW9kYWxFcnJvciIsInNldElzTW9kYWxFcnJvciIsImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJzZW5kTWFpbEJ5R3JpZCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdsb2JhbFZhbGlkYXRpb24iLCJyZXN1bHQiLCJpc1ZhbGlkIiwiVmFsaWRhdGVFbWFpbCIsInN0YW5kYXJkUGFzc3dvcmRWYWxpZGF0aW9uIiwibWFpbCIsInRlc3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0dsb2JhbFZhbGlkIiwidXNlcnNSZXN1bHQiLCJ0aGVuIiwic3VibWl0VmFsdWUiLCJuYW1lIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJpc0Vycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/registration.js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/registration.js"));
module.exports = __webpack_exports__;

})();