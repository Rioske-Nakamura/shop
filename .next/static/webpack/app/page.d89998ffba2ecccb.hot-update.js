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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/componentes/Spinner.js\");\n/* harmony import */ var _ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrrorGetData */ \"(app-pages-browser)/./src/app/componentes/ErrrorGetData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorFetch, setErrorFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct1 = async ()=>{\n            try {\n                const response = await fetch(\"https://fakestoreapi.com/products/\");\n                const data = await response.json();\n                setListProduct(data);\n            } catch (e) {\n                setErrorFetch(true);\n            }\n        };\n        getProduct1();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    const orderPr = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setListProduct(newList);\n    };\n    if (errorFetch == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrrorGetData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, this);\n    }\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (search == \"\") {\n            getProduct();\n        } else {\n            const filteredList = products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()));\n            setListProduct(filteredList);\n        }\n    }, [\n        search\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Pesquisar...\",\n                onChange: (e)=>{\n                    setSearch(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderPr,\n                children: \"Ordenar Pre\\xe7o Maior - Menor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 76,\n                columnNumber: 70\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: product.image,\n                                alt: product.title,\n                                width: 100,\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/product/\".concat(product.id),\n                                children: \"Detalhes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rosan\\\\Documents\\\\aqui\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"BLjUb38g2Ik2Yqt5oeSYUOFpyK8=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNGO0FBQ1M7QUFDTjtBQUNXO0FBRTVCLFNBQVNPOztJQUV0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRzdDRCxnREFBU0EsQ0FBQztRQUdSLE1BQU1jLGNBQWE7WUFDZixJQUFJO2dCQUNOLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ1QsZUFBZVE7WUFDYixFQUFDLFVBQU07Z0JBQ0xKLGNBQWM7WUFDaEI7UUFDSjtRQUVBQztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlaO1NBQVksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRixFQUFFQyxLQUFLO1FBQzdFZixlQUFlVztJQUNqQjtJQUVBLE1BQU1NLFNBQVM7UUFDYixNQUFNTixVQUFVO2VBQUlaO1NBQVksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVLLEtBQUssR0FBR0osRUFBRUksS0FBSztRQUNqRWxCLGVBQWVXO0lBQ2pCO0lBRUEsTUFBTVEsVUFBVTtRQUNkLE1BQU1SLFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUksS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pFbEIsZUFBZVc7SUFDakI7SUFHQSxJQUFJUixjQUFjLE1BQU07UUFDdEIscUJBQU8sOERBQUNOLHNEQUFZQTs7Ozs7SUFDdEI7SUFFQSxJQUFHRSxXQUFXLENBQUMsRUFBRSxJQUFJLE1BQUs7UUFDdEIscUJBQ0EsOERBQUNxQjtzQkFDQyw0RUFBQ3hCLGdEQUFPQTs7Ozs7Ozs7OztJQUdkO0lBRURMLGdEQUFTQSxDQUFDO1FBQ1AsSUFBSVUsVUFBVSxJQUFJO1lBQ2hCSTtRQUNGLE9BQ0s7WUFDSCxNQUFNZ0IsZUFBZUMsU0FBU0MsTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFULEtBQUssQ0FBQ1UsV0FBVyxHQUFHQyxRQUFRLENBQUN6QixPQUFPd0IsV0FBVztZQUMzR3pCLGVBQWVxQjtRQUNmO0lBQ0gsR0FBRztRQUFDcEI7S0FBTztJQUdWLHFCQUNFLDhEQUFDbUI7UUFBS08sV0FBV2hDLDZEQUFXOzswQkFDMUIsOERBQUNpQztnQkFBTUMsTUFBSztnQkFBT0MsYUFBWTtnQkFBZUMsVUFBVSxDQUFDQztvQkFBTzlCLFVBQVU4QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQUM7Ozs7OzswQkFDekYsOERBQUNDO2dCQUFPQyxTQUFTMUI7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUN5QjtnQkFBT0MsU0FBU25COzBCQUFROzs7Ozs7MEJBQ3pCLDhEQUFDa0I7Z0JBQU9DLFNBQVNqQjswQkFBUzs7Ozs7O1lBQW9DOzBCQUFDLDhEQUFDa0I7Ozs7OzBCQUNoRSw4REFBQ0M7Z0JBQUlYLFdBQVdoQyw2REFBVzswQkFDeEJJLFlBQVl3QyxHQUFHLENBQUMsQ0FBQ2Ysd0JBQ2hCLDhEQUFDYzt3QkFBSVgsV0FBV2hDLDZEQUFXOzswQ0FDekIsOERBQUM4QzswQ0FBR2pCLFFBQVFULEtBQUs7Ozs7OzswQ0FDakIsOERBQUMwQjswQ0FBR2pCLFFBQVFOLEtBQUs7Ozs7OzswQ0FDakIsOERBQUN6QixrREFBS0E7Z0NBQUNpRCxLQUFLbEIsUUFBUW1CLEtBQUs7Z0NBQUVDLEtBQUtwQixRQUFRVCxLQUFLO2dDQUFFOEIsT0FBTztnQ0FBS0MsUUFBUTs7Ozs7OzBDQUNuRSw4REFBQ3BELGlEQUFJQTtnQ0FBQ3FELE1BQU0sWUFBdUIsT0FBWHZCLFFBQVF3QixFQUFFOzBDQUFJOzs7Ozs7O3VCQUpOeEIsUUFBUXdCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEQ7R0FqRmtCbEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRlcy9NYWluLmpzPzJlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7ICAvLyBBZGljaW9uYSBlc3NhIGxpbmhhIHBhcmEgaW5kaWNhciBxdWUgbyBjb21wb25lbnRlIMOpIGRvIGxhZG8gZG8gY2xpZW50ZVxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY3NzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgRXJyb3JHZXREYXRhIGZyb20gXCIuL0VycnJvckdldERhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcblxyXG4gIGNvbnN0IFtsaXN0UHJvZHVjdCwgc2V0TGlzdFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3JGZXRjaCwgc2V0RXJyb3JGZXRjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRMaXN0UHJvZHVjdChkYXRhKTtcclxuICAgICAgICB9Y2F0Y2gge1xyXG4gICAgICAgICAgc2V0RXJyb3JGZXRjaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcbiBcclxuICBcclxuICBpZiAoZXJyb3JGZXRjaCA9PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gPEVycm9yR2V0RGF0YS8+XHJcbiAgfVxyXG4gIFxyXG4gIGlmKGxpc3RQcm9kdWN0WzBdID09IG51bGwpe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxTcGlubmVyLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaCA9PSBcIlwiKSB7XHJcbiAgICAgIGdldFByb2R1Y3QoKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgIHNldExpc3RQcm9kdWN0KGZpbHRlcmVkTGlzdCk7XHJcbiAgICB9XHJcbiB9LCBbc2VhcmNoXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGVzcXVpc2FyLi4uXCIgb25DaGFuZ2U9eyhlKSA9PiB7c2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0gfSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQXp9Pk9yZGVuYXIgQS1aPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQfT5PcmRlbmFyIFByZcOnbyBNZW5vciAtIE1haW9yPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQcn0+T3JkZW5hciBQcmXDp28gTWFpb3IgLSBNZW5vcjwvYnV0dG9uPiA8YnI+PC9icj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PkRldGFsaGVzPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICAgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJTcGlubmVyIiwiRXJyb3JHZXREYXRhIiwiTWFpbiIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJlcnJvckZldGNoIiwic2V0RXJyb3JGZXRjaCIsImdldFByb2R1Y3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckF6IiwibmV3TGlzdCIsInNvcnQiLCJhIiwiYiIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm9yZGVyUCIsInByaWNlIiwib3JkZXJQciIsIm1haW4iLCJmaWx0ZXJlZExpc3QiLCJwcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsImRpdiIsIm1hcCIsImNhcmQiLCJwIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});