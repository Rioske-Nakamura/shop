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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/componentes/Spinner.js\");\n/* harmony import */ var _ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrrorGetData */ \"(app-pages-browser)/./src/app/componentes/ErrrorGetData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorFetch, setErrorFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            try {\n                const response = await fetch(\"https://fakestoreapi.com/products/\");\n                const data = await response.json();\n                setProducts(data);\n                setListProduct(data);\n            } catch (e) {\n                setErrorFetch(true);\n            }\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    const orderPr = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setListProduct(newList);\n    };\n    if (errorFetch == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, this);\n    }\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this);\n    }\n    const Pesquisar = function() {\n        if (this.value == \"\") {\n            setListProduct(products);\n        } else {\n            const newList = [\n                ...listProduct\n            ].filter((product)=>{\n                return product.title.toLowerCase().includes(search.toLowerCase());\n            });\n            setListProduct(newList);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Pesquisar...\",\n                onChange: (e)=>setSearch(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: Pesquisar,\n                children: \"Pesquisar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 72,\n                columnNumber: 54\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderPr,\n                children: \"Ordenar Pre\\xe7o Maior - Menor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 75,\n                columnNumber: 70\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: product.image,\n                                alt: product.title,\n                                width: 100,\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/product/\".concat(product.id),\n                                children: \"Detalhes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"xotkLUn9HGYAlRJW8e8kFR3dZvo=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNGO0FBQ1M7QUFDTjtBQUNXO0FBRTVCLFNBQVNPOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRzdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixhQUFhO1lBQ2YsSUFBSTtnQkFDTixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENYLFlBQVlVO2dCQUNaUixlQUFlUTtZQUNiLEVBQUMsVUFBTTtnQkFDTEosY0FBYztZQUNoQjtRQUNKO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VmLGVBQWVXO0lBQ2pCO0lBRUEsTUFBTU0sU0FBUztRQUNiLE1BQU1OLFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUssS0FBSyxHQUFHSixFQUFFSSxLQUFLO1FBQ2pFbEIsZUFBZVc7SUFDakI7SUFFQSxNQUFNUSxVQUFVO1FBQ2QsTUFBTVIsVUFBVTtlQUFJWjtTQUFZLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFDakVsQixlQUFlVztJQUNqQjtJQUVBLElBQUlSLGNBQWMsTUFBTTtRQUN0QixxQkFBTyw4REFBQ1Isc0RBQVlBOzs7OztJQUN0QjtJQUNBLElBQUdJLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBSztRQUN0QixxQkFDQSw4REFBQ3FCO3NCQUNDLDRFQUFDMUIsZ0RBQU9BOzs7Ozs7Ozs7O0lBR2Q7SUFHRixNQUFNMkIsWUFBWTtRQUNoQixJQUFHLElBQUksQ0FBQ0MsS0FBSyxJQUFJLElBQUc7WUFDbEJ0QixlQUFlSDtRQUNqQixPQUFLO1lBQ0gsTUFBTWMsVUFBVTttQkFBSVo7YUFBWSxDQUFDd0IsTUFBTSxDQUFDLENBQUNDO2dCQUN2QyxPQUFPQSxRQUFRVCxLQUFLLENBQUNVLFdBQVcsR0FBR0MsUUFBUSxDQUFDekIsT0FBT3dCLFdBQVc7WUFDaEU7WUFDQXpCLGVBQWVXO1FBQ2pCO0lBQ0Y7SUFFRSxxQkFDRSw4REFBQ1M7UUFBS08sV0FBV2xDLDZEQUFXOzswQkFDMUIsOERBQUNtQztnQkFBTUMsTUFBSztnQkFBT0MsYUFBWTtnQkFBZUMsVUFBVSxDQUFDQyxJQUFNOUIsVUFBVThCLEVBQUVDLE1BQU0sQ0FBQ1gsS0FBSzs7Ozs7OzBCQUN2Riw4REFBQ1k7Z0JBQU9DLFNBQVNkOzBCQUFXOzs7Ozs7WUFBa0I7MEJBQUMsOERBQUNlOzs7OzswQkFDaEQsOERBQUNGO2dCQUFPQyxTQUFTekI7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUN3QjtnQkFBT0MsU0FBU2xCOzBCQUFROzs7Ozs7MEJBQ3pCLDhEQUFDaUI7Z0JBQU9DLFNBQVNoQjswQkFBUzs7Ozs7O1lBQW9DOzBCQUFDLDhEQUFDaUI7Ozs7OzBCQUNoRSw4REFBQ0M7Z0JBQUlWLFdBQVdsQyw2REFBVzswQkFDeEJNLFlBQVl1QyxHQUFHLENBQUMsQ0FBQ2Qsd0JBQ2hCLDhEQUFDYTt3QkFBSVYsV0FBV2xDLDZEQUFXOzswQ0FDekIsOERBQUMrQzswQ0FBR2hCLFFBQVFULEtBQUs7Ozs7OzswQ0FDakIsOERBQUN5QjswQ0FBR2hCLFFBQVFOLEtBQUs7Ozs7OzswQ0FDakIsOERBQUMzQixrREFBS0E7Z0NBQUNrRCxLQUFLakIsUUFBUWtCLEtBQUs7Z0NBQUVDLEtBQUtuQixRQUFRVCxLQUFLO2dDQUFFNkIsT0FBTztnQ0FBS0MsUUFBUTs7Ozs7OzBDQUNuRSw4REFBQ3JELGlEQUFJQTtnQ0FBQ3NELE1BQU0sWUFBdUIsT0FBWHRCLFFBQVF1QixFQUFFOzBDQUFJOzs7Ozs7O3VCQUpOdkIsUUFBUXVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEQ7R0FoRmtCbkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRlcy9NYWluLmpzPzJlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7ICAvLyBBZGljaW9uYSBlc3NhIGxpbmhhIHBhcmEgaW5kaWNhciBxdWUgbyBjb21wb25lbnRlIMOpIGRvIGxhZG8gZG8gY2xpZW50ZVxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY3NzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgRXJyb3JHZXREYXRhIGZyb20gXCIuL0VycnJvckdldERhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0LCBzZXRMaXN0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvckZldGNoLCBzZXRFcnJvckZldGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgfWNhdGNoIHtcclxuICAgICAgICAgIHNldEVycm9yRmV0Y2godHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUHIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBiLnByaWNlIC0gYS5wcmljZSk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG4gIFxyXG4gIGlmIChlcnJvckZldGNoID09IHRydWUpIHtcclxuICAgIHJldHVybiA8RXJyb3JHZXREYXRhLz5cclxuICB9XHJcbiAgaWYobGlzdFByb2R1Y3RbMF0gPT0gbnVsbCl7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFNwaW5uZXIvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICApXHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IFBlc3F1aXNhciA9IGZ1bmN0aW9uKCl7XHJcbiAgaWYodGhpcy52YWx1ZSA9PSBcIlwiKXtcclxuICAgIHNldExpc3RQcm9kdWN0KHByb2R1Y3RzKTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJvZHVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIuLi5cIiBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17UGVzcXVpc2FyfT5QZXNxdWlzYXI8L2J1dHRvbj4gPGJyPjwvYnI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJBen0+T3JkZW5hciBBLVo8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclB9Pk9yZGVuYXIgUHJlw6dvIE1lbm9yIC0gTWFpb3I8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclByfT5PcmRlbmFyIFByZcOnbyBNYWlvciAtIE1lbm9yPC9idXR0b24+IDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+RGV0YWxoZXM8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgICBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsInN0eWxlcyIsIlNwaW5uZXIiLCJFcnJvckdldERhdGEiLCJNYWluIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJlcnJvckZldGNoIiwic2V0RXJyb3JGZXRjaCIsImdldFByb2R1Y3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckF6IiwibmV3TGlzdCIsInNvcnQiLCJhIiwiYiIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm9yZGVyUCIsInByaWNlIiwib3JkZXJQciIsIm1haW4iLCJQZXNxdWlzYXIiLCJ2YWx1ZSIsImZpbHRlciIsInByb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJkaXYiLCJtYXAiLCJjYXJkIiwicCIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});