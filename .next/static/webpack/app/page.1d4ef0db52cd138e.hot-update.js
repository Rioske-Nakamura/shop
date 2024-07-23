"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/componentes/Main.js":
/*!*************************************!*\
  !*** ./src/app/componentes/Main.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/componentes/Spinner.js\");\n/* harmony import */ var _ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrrorGetData */ \"(app-pages-browser)/./src/app/componentes/ErrrorGetData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorFetch, setErrorFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct1 = async ()=>{\n            try {\n                const response = await fetch(\"https://fakestoreapi.com/products/\");\n                const data = await response.json();\n                setListProduct(data);\n            } catch (e) {\n                setErrorFetch(true);\n            }\n        };\n        getProduct1();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    const orderPr = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setListProduct(newList);\n    };\n    if (errorFetch == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, this);\n    }\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (search === \"\") {\n            getProduct();\n        } else {\n            const filteredList = listProduct.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()));\n            setListProduct(filteredList);\n        }\n    }, [\n        search\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Pesquisar...\",\n                onChange: (e)=>{\n                    setSearch(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderPr,\n                children: \"Ordenar Pre\\xe7o Maior - Menor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 77,\n                columnNumber: 70\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: product.image,\n                                alt: product.title,\n                                width: 100,\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/product/\".concat(product.id),\n                                children: \"Detalhes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"BLjUb38g2Ik2Yqt5oeSYUOFpyK8=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNGO0FBQ1M7QUFDTjtBQUNXO0FBRTVCLFNBQVNPOztJQUV0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRzdDRCxnREFBU0EsQ0FBQztRQUdSLE1BQU1jLGNBQWE7WUFDZixJQUFJO2dCQUNOLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ1QsZUFBZVE7WUFDYixFQUFDLFVBQU07Z0JBQ0xKLGNBQWM7WUFDaEI7UUFDSjtRQUVBQztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlaO1NBQVksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRixFQUFFQyxLQUFLO1FBQzdFZixlQUFlVztJQUNqQjtJQUVBLE1BQU1NLFNBQVM7UUFDYixNQUFNTixVQUFVO2VBQUlaO1NBQVksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVLLEtBQUssR0FBR0osRUFBRUksS0FBSztRQUNqRWxCLGVBQWVXO0lBQ2pCO0lBRUEsTUFBTVEsVUFBVTtRQUNkLE1BQU1SLFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUksS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pFbEIsZUFBZVc7SUFDakI7SUFHQSxJQUFJUixjQUFjLE1BQU07UUFDdEIscUJBQU8sOERBQUNOLHNEQUFZQTs7Ozs7SUFDdEI7SUFFQSxJQUFHRSxXQUFXLENBQUMsRUFBRSxJQUFJLE1BQUs7UUFDdEIscUJBQ0EsOERBQUNxQjtzQkFDQyw0RUFBQ3hCLGdEQUFPQTs7Ozs7Ozs7OztJQUdkO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVUsV0FBVyxJQUFJO1lBQ2pCSTtRQUNGLE9BQU87WUFDTCxNQUFNZ0IsZUFBZXRCLFlBQVl1QixNQUFNLENBQUMsQ0FBQ0MsVUFDdkNBLFFBQVFSLEtBQUssQ0FBQ1MsV0FBVyxHQUFHQyxRQUFRLENBQUN4QixPQUFPdUIsV0FBVztZQUV6RHhCLGVBQWVxQjtRQUNqQjtJQUNGLEdBQUc7UUFBQ3BCO0tBQU87SUFHWCxxQkFDRSw4REFBQ21CO1FBQUtNLFdBQVcvQiw2REFBVzs7MEJBQzFCLDhEQUFDZ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQWVDLFVBQVUsQ0FBQ0M7b0JBQU83QixVQUFVNkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUFDOzs7Ozs7MEJBQ3pGLDhEQUFDQztnQkFBT0MsU0FBU3pCOzBCQUFTOzs7Ozs7MEJBQzFCLDhEQUFDd0I7Z0JBQU9DLFNBQVNsQjswQkFBUTs7Ozs7OzBCQUN6Qiw4REFBQ2lCO2dCQUFPQyxTQUFTaEI7MEJBQVM7Ozs7OztZQUFvQzswQkFBQyw4REFBQ2lCOzs7OzswQkFDaEUsOERBQUNDO2dCQUFJWCxXQUFXL0IsNkRBQVc7MEJBQ3hCSSxZQUFZdUMsR0FBRyxDQUFDLENBQUNmLHdCQUNoQiw4REFBQ2M7d0JBQUlYLFdBQVcvQiw2REFBVzs7MENBQ3pCLDhEQUFDNkM7MENBQUdqQixRQUFRUixLQUFLOzs7Ozs7MENBQ2pCLDhEQUFDeUI7MENBQUdqQixRQUFRTCxLQUFLOzs7Ozs7MENBQ2pCLDhEQUFDekIsa0RBQUtBO2dDQUFDZ0QsS0FBS2xCLFFBQVFtQixLQUFLO2dDQUFFQyxLQUFLcEIsUUFBUVIsS0FBSztnQ0FBRTZCLE9BQU87Z0NBQUtDLFFBQVE7Ozs7OzswQ0FDbkUsOERBQUNuRCxpREFBSUE7Z0NBQUNvRCxNQUFNLFlBQXVCLE9BQVh2QixRQUFRd0IsRUFBRTswQ0FBSTs7Ozs7Ozt1QkFKTnhCLFFBQVF3QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBV2hEO0dBbEZrQmpEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcz8yZTAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAgLy8gQWRpY2lvbmEgZXNzYSBsaW5oYSBwYXJhIGluZGljYXIgcXVlIG8gY29tcG9uZW50ZSDDqSBkbyBsYWRvIGRvIGNsaWVudGVcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Nzcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IEVycm9yR2V0RGF0YSBmcm9tIFwiLi9FcnJyb3JHZXREYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG5cclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldExpc3RQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yRmV0Y2gsIHNldEVycm9yRmV0Y2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgIFxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgfWNhdGNoIHtcclxuICAgICAgICAgIHNldEVycm9yRmV0Y2godHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUHIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBiLnByaWNlIC0gYS5wcmljZSk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG4gXHJcbiAgXHJcbiAgaWYgKGVycm9yRmV0Y2ggPT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIDxFcnJvckdldERhdGEvPlxyXG4gIH1cclxuICBcclxuICBpZihsaXN0UHJvZHVjdFswXSA9PSBudWxsKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8U3Bpbm5lci8+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgIGdldFByb2R1Y3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGxpc3RQcm9kdWN0LmZpbHRlcigocHJvZHVjdCkgPT5cclxuICAgICAgICBwcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldExpc3RQcm9kdWN0KGZpbHRlcmVkTGlzdCk7XHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhci4uLlwiIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9IH0gLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlckF6fT5PcmRlbmFyIEEtWjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUH0+T3JkZW5hciBQcmXDp28gTWVub3IgLSBNYWlvcjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUHJ9Pk9yZGVuYXIgUHJlw6dvIE1haW9yIC0gTWVub3I8L2J1dHRvbj4gPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAge2xpc3RQcm9kdWN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5EZXRhbGhlczwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiU3Bpbm5lciIsIkVycm9yR2V0RGF0YSIsIk1haW4iLCJsaXN0UHJvZHVjdCIsInNldExpc3RQcm9kdWN0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZXJyb3JGZXRjaCIsInNldEVycm9yRmV0Y2giLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclAiLCJwcmljZSIsIm9yZGVyUHIiLCJtYWluIiwiZmlsdGVyZWRMaXN0IiwiZmlsdGVyIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImJyIiwiZGl2IiwibWFwIiwiY2FyZCIsInAiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});