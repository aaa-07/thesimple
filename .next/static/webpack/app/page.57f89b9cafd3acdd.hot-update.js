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

/***/ "(app-pages-browser)/./src/components/templates/services/index.js":
/*!****************************************************!*\
  !*** ./src/components/templates/services/index.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ServicesTemplate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_services_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/services/strategy */ \"(app-pages-browser)/./src/components/templates/home/services/strategy.js\");\n/* harmony import */ var _home_services_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/services/design */ \"(app-pages-browser)/./src/components/templates/home/services/design.js\");\n/* harmony import */ var _home_services_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/services/development */ \"(app-pages-browser)/./src/components/templates/home/services/development.js\");\n/* harmony import */ var _home_services_growth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/services/growth */ \"(app-pages-browser)/./src/components/templates/home/services/growth.js\");\n/* harmony import */ var _home_services_strategy2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/services/strategy2 */ \"(app-pages-browser)/./src/components/templates/home/services/strategy2.js\");\n/* harmony import */ var _home_services_design2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/services/design2 */ \"(app-pages-browser)/./src/components/templates/home/services/design2.js\");\n/* harmony import */ var _home_services_design3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/services/design3 */ \"(app-pages-browser)/./src/components/templates/home/services/design3.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ServicesTemplate(param) {\n    let { onClose, selectedSection } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollAmount = 1450;\n    const handleScroll = (event)=>{\n        const container = containerRef.current;\n        if (container) {\n            const targetScrollLeft = container.scrollLeft + (event.deltaY > 0 ? scrollAmount : -scrollAmount);\n            container.scrollTo({\n                left: targetScrollLeft,\n                behavior: \"smooth\"\n            });\n        //event.preventDefault();\n        }\n    };\n    // Cleanup function to remove event listener\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleBodyScroll = (event)=>{\n            event.preventDefault();\n        };\n        document.body.style.overflow = \"hidden\";\n        document.body.addEventListener(\"wheel\", handleBodyScroll, {\n            passive: false\n        });\n        return ()=>{\n            document.body.style.overflow = \"auto\";\n            document.body.removeEventListener(\"wheel\", handleBodyScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const container = containerRef.current;\n        if (container) {\n            const section = document.getElementById(selectedSection);\n            if (section) {\n                container.scrollTo({\n                    left: section.offsetLeft,\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    }, [\n        selectedSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popup full-screen-popup\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup-inner\",\n            style: {\n                overflowX: \"auto\",\n                whiteSpace: \"nowrap\"\n            },\n            onWheel: handleScroll,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"services-container\",\n                style: {\n                    overflowX: \"auto\",\n                    whiteSpace: \"nowrap\"\n                },\n                ref: containerRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_strategy__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_strategy2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_design__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_design2__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_design3__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_development__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_services_growth__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onClose: onClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\bhakti\\\\thesimple\\\\src\\\\components\\\\templates\\\\services\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(ServicesTemplate, \"iENxip3MlGo86izbk9A2xd09AZE=\");\n_c = ServicesTemplate;\nvar _c;\n$RefreshReg$(_c, \"ServicesTemplate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9zZXJ2aWNlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ1Y7QUFDSjtBQUNVO0FBQ1Y7QUFDTTtBQUNKO0FBQ0E7QUFDaEMsU0FBU1csaUJBQWlCLEtBQTRCO1FBQTVCLEVBQUVDLE9BQU8sRUFBRUMsZUFBZSxFQUFFLEdBQTVCOztJQUN2QyxNQUFNQyxlQUFlYiw2Q0FBTUEsQ0FBQztJQUM1QixNQUFNYyxlQUFlO0lBRXJCLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTUMsWUFBWUosYUFBYUssT0FBTztRQUN0QyxJQUFJRCxXQUFXO1lBQ2IsTUFBTUUsbUJBQ0pGLFVBQVVHLFVBQVUsR0FDbkJKLENBQUFBLE1BQU1LLE1BQU0sR0FBRyxJQUFJUCxlQUFlLENBQUNBLFlBQVc7WUFDakRHLFVBQVVLLFFBQVEsQ0FBQztnQkFDakJDLE1BQU1KO2dCQUNOSyxVQUFVO1lBQ1o7UUFDQSx5QkFBeUI7UUFDM0I7SUFDRjtJQUVBLDRDQUE0QztJQUM1Q3RCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLG1CQUFtQixDQUFDVDtZQUN4QkEsTUFBTVUsY0FBYztRQUN0QjtRQUNBQyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQy9CSCxTQUFTQyxJQUFJLENBQUNHLGdCQUFnQixDQUFDLFNBQVNOLGtCQUFrQjtZQUN4RE8sU0FBUztRQUNYO1FBRUEsT0FBTztZQUNMTCxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1lBQy9CSCxTQUFTQyxJQUFJLENBQUNLLG1CQUFtQixDQUFDLFNBQVNSO1FBQzdDO0lBQ0YsR0FBRyxFQUFFO0lBRUx2QixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVlKLGFBQWFLLE9BQU87UUFDdEMsSUFBSUQsV0FBVztZQUNiLE1BQU1pQixVQUFVUCxTQUFTUSxjQUFjLENBQUN2QjtZQUN4QyxJQUFJc0IsU0FBUztnQkFDWGpCLFVBQVVLLFFBQVEsQ0FBQztvQkFDakJDLE1BQU1XLFFBQVFFLFVBQVU7b0JBQ3hCWixVQUFVO2dCQUNaO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ1o7S0FBZ0I7SUFFcEIscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFVO1lBQ1ZULE9BQU87Z0JBQUVVLFdBQVc7Z0JBQVFDLFlBQVk7WUFBUztZQUNqREMsU0FBUzFCO3NCQUVULDRFQUFDc0I7Z0JBQ0NDLFdBQVU7Z0JBQ1ZULE9BQU87b0JBQUVVLFdBQVc7b0JBQVFDLFlBQVk7Z0JBQVM7Z0JBQ2pERSxLQUFLN0I7O2tDQUVMLDhEQUFDViwrREFBUUE7d0JBQUNRLFNBQVNBOzs7Ozs7a0NBQ25CLDhEQUFDSixnRUFBU0E7d0JBQUNJLFNBQVNBOzs7Ozs7a0NBQ3BCLDhEQUFDUCw2REFBTUE7d0JBQUNPLFNBQVNBOzs7Ozs7a0NBQ2pCLDhEQUFDSCw4REFBT0E7d0JBQUNHLFNBQVNBOzs7Ozs7a0NBQ2xCLDhEQUFDRiw4REFBT0E7d0JBQUNFLFNBQVNBOzs7Ozs7a0NBQ2xCLDhEQUFDTixrRUFBV0E7d0JBQUNNLFNBQVNBOzs7Ozs7a0NBQ3RCLDhEQUFDTCw2REFBTUE7d0JBQUNLLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBdEV3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL3NlcnZpY2VzL2luZGV4LmpzPzQ3MjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0cmF0ZWd5IGZyb20gXCIuLi9ob21lL3NlcnZpY2VzL3N0cmF0ZWd5XCI7XHJcbmltcG9ydCBEZXNpZ24gZnJvbSBcIi4uL2hvbWUvc2VydmljZXMvZGVzaWduXCI7XHJcbmltcG9ydCBEZXZlbG9wbWVudCBmcm9tIFwiLi4vaG9tZS9zZXJ2aWNlcy9kZXZlbG9wbWVudFwiO1xyXG5pbXBvcnQgR3Jvd3RoIGZyb20gXCIuLi9ob21lL3NlcnZpY2VzL2dyb3d0aFwiO1xyXG5pbXBvcnQgU3RyYXRlZ3kyIGZyb20gXCIuLi9ob21lL3NlcnZpY2VzL3N0cmF0ZWd5MlwiO1xyXG5pbXBvcnQgRGVzaWduMiBmcm9tIFwiLi4vaG9tZS9zZXJ2aWNlcy9kZXNpZ24yXCI7XHJcbmltcG9ydCBEZXNpZ24zIGZyb20gXCIuLi9ob21lL3NlcnZpY2VzL2Rlc2lnbjNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXNUZW1wbGF0ZSh7IG9uQ2xvc2UsIHNlbGVjdGVkU2VjdGlvbiB9KSB7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHNjcm9sbEFtb3VudCA9IDE0NTA7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFNjcm9sbExlZnQgPVxyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAoZXZlbnQuZGVsdGFZID4gMCA/IHNjcm9sbEFtb3VudCA6IC1zY3JvbGxBbW91bnQpO1xyXG4gICAgICBjb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgIGxlZnQ6IHRhcmdldFNjcm9sbExlZnQsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQm9keVNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlQm9keVNjcm9sbCwge1xyXG4gICAgICBwYXNzaXZlOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlQm9keVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0ZWRTZWN0aW9uKTtcclxuICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgbGVmdDogc2VjdGlvbi5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRTZWN0aW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwIGZ1bGwtc2NyZWVuLXBvcHVwXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwb3B1cC1pbm5lclwiXHJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImF1dG9cIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgIG9uV2hlZWw9e2hhbmRsZVNjcm9sbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2VzLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvd1g6IFwiYXV0b1wiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RyYXRlZ3kgb25DbG9zZT17b25DbG9zZX0gLz5cclxuICAgICAgICAgIDxTdHJhdGVneTIgb25DbG9zZT17b25DbG9zZX0gLz5cclxuICAgICAgICAgIDxEZXNpZ24gb25DbG9zZT17b25DbG9zZX0gLz5cclxuICAgICAgICAgIDxEZXNpZ24yIG9uQ2xvc2U9e29uQ2xvc2V9IC8+XHJcbiAgICAgICAgICA8RGVzaWduMyBvbkNsb3NlPXtvbkNsb3NlfSAvPlxyXG4gICAgICAgICAgPERldmVsb3BtZW50IG9uQ2xvc2U9e29uQ2xvc2V9IC8+XHJcbiAgICAgICAgICA8R3Jvd3RoIG9uQ2xvc2U9e29uQ2xvc2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0cmF0ZWd5IiwiRGVzaWduIiwiRGV2ZWxvcG1lbnQiLCJHcm93dGgiLCJTdHJhdGVneTIiLCJEZXNpZ24yIiwiRGVzaWduMyIsIlNlcnZpY2VzVGVtcGxhdGUiLCJvbkNsb3NlIiwic2VsZWN0ZWRTZWN0aW9uIiwiY29udGFpbmVyUmVmIiwic2Nyb2xsQW1vdW50IiwiaGFuZGxlU2Nyb2xsIiwiZXZlbnQiLCJjb250YWluZXIiLCJjdXJyZW50IiwidGFyZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJzY3JvbGxUbyIsImxlZnQiLCJiZWhhdmlvciIsImhhbmRsZUJvZHlTY3JvbGwiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRMZWZ0IiwiZGl2IiwiY2xhc3NOYW1lIiwib3ZlcmZsb3dYIiwid2hpdGVTcGFjZSIsIm9uV2hlZWwiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/services/index.js\n"));

/***/ })

});