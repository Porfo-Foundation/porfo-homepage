"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a3c399da1db5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzYwZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhM2MzOTlkYTFkYjVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Web3Model/Web3Model.jsx":
/*!********************************************!*\
  !*** ./components/Web3Model/Web3Model.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web3Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/core/dist/chunk-TSH6VVF4.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/core/dist/providers/public.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/mainnet.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/bsc.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/polygon.js\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi/connectors/injected */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/connectors/dist/chunk-P4NRLOY7.js\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/connectors/dist/walletConnect.js\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/connectors/dist/metaMask.js\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"(app-pages-browser)/./node_modules/wagmi/node_modules/@wagmi/connectors/dist/coinbaseWallet.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n// 1. Get projectId\nconst projectId = \"c5113710c7408f0e5963f8241f1e67ce\" || 0;\n// 2. Create wagmiConfig\nconst { chains, publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.bsc,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst metadata = {\n    name: \"Porfo\",\n    description: \"Porfo\",\n    url: \"https://www.porfo.app\",\n    icons: [\n        \"https://www.porfo.app/favicon.ico\"\n    ]\n};\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createConfig)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_7__.MetaMaskConnector({\n            chains\n        }),\n        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__.WalletConnectConnector({\n            chains,\n            options: {\n                projectId: projectId\n            }\n        }),\n        new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_9__.CoinbaseWalletConnector({\n            chains,\n            options: {\n                appName: \"wagmi\"\n            }\n        }),\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_10__.InjectedConnector({\n            chains,\n            options: {\n                name: \"Injected\",\n                shimDisconnect: true\n            }\n        })\n    ],\n    publicClient\n});\nfunction Web3Modal(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n        config: wagmiConfig,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\porfo-homepage-web3 (1)\\\\porfo-homepage\\\\components\\\\Web3Model\\\\Web3Model.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c = Web3Modal;\nvar _c;\n$RefreshReg$(_c, \"Web3Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2ViM01vZGVsL1dlYjNNb2RlbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVrRTtBQUNYO0FBQ0g7QUFDUztBQUNVO0FBQ1Y7QUFDWTtBQUV6RSxtQkFBbUI7QUFDbkIsTUFBTVcsWUFBWUMsa0NBQWtDLElBQUk7QUFFeEQsd0JBQXdCO0FBQ3hCLE1BQU0sRUFBRUcsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR2Ysc0RBQWVBLENBQzlDO0lBQUNHLGlEQUFPQTtJQUFFQyw2Q0FBR0E7SUFBRUMsaURBQU9BO0NBQUMsRUFDdkI7SUFBQ0gsc0VBQWNBO0NBQUc7QUFHcEIsTUFBTWMsV0FBVztJQUNmQyxNQUFNO0lBQ05DLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBb0M7QUFDOUM7QUFFQSxNQUFNQyxjQUFjcEIsbURBQVlBLENBQUM7SUFDL0JxQixhQUFhO0lBQ2JDLFlBQVk7UUFDVixJQUFJZix3RUFBaUJBLENBQUM7WUFBRU07UUFBTztRQUMvQixJQUFJUCxrRkFBc0JBLENBQUM7WUFDekJPO1lBQ0FVLFNBQVM7Z0JBQ1BkLFdBQVdBO1lBQ2I7UUFDRjtRQUNBLElBQUlELG9GQUF1QkEsQ0FBQztZQUMxQks7WUFDQVUsU0FBUztnQkFDUEMsU0FBUztZQUNYO1FBQ0Y7UUFDQSxJQUFJbkIseUVBQWlCQSxDQUFDO1lBQ3BCUTtZQUNBVSxTQUFTO2dCQUNQUCxNQUFNO2dCQUNOUyxnQkFBZ0I7WUFDbEI7UUFDRjtLQUNEO0lBQ0RYO0FBQ0Y7QUFHZSxTQUFTWSxVQUFVLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjtJQUNoQyxxQkFDRSw4REFBQzdCLDhDQUFXQTtRQUFDOEIsUUFBUVI7a0JBQ2hCTzs7Ozs7O0FBR1Q7S0FOd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2ViM01vZGVsL1dlYjNNb2RlbC5qc3g/M2Q0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgV2FnbWlDb25maWcsIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ29uZmlnIH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnXG5pbXBvcnQgeyBtYWlubmV0LCBic2MsIHBvbHlnb24gfSBmcm9tICd3YWdtaS9jaGFpbnMnXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvaW5qZWN0ZWQnXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0J1xuaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrJ1xuaW1wb3J0IHsgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0J1xuXG4vLyAxLiBHZXQgcHJvamVjdElkXG5jb25zdCBwcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEIHx8ICcnO1xuXG4vLyAyLiBDcmVhdGUgd2FnbWlDb25maWdcbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW21haW5uZXQsIGJzYywgcG9seWdvbl0sXG4gIFtwdWJsaWNQcm92aWRlcigpXVxuKVxuXG5jb25zdCBtZXRhZGF0YSA9IHtcbiAgbmFtZTogJ1BvcmZvJyxcbiAgZGVzY3JpcHRpb246ICdQb3JmbycsXG4gIHVybDogJ2h0dHBzOi8vd3d3LnBvcmZvLmFwcCcsXG4gIGljb25zOiBbJ2h0dHBzOi8vd3d3LnBvcmZvLmFwcC9mYXZpY29uLmljbyddXG59XG5cbmNvbnN0IHdhZ21pQ29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnM6IFtcbiAgICBuZXcgTWV0YU1hc2tDb25uZWN0b3IoeyBjaGFpbnMgfSksXG4gICAgbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xuICAgICAgY2hhaW5zLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZFxuICAgICAgfSwgIFxuICAgIH0pLFxuICAgIG5ldyBDb2luYmFzZVdhbGxldENvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFwcE5hbWU6ICd3YWdtaScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG5hbWU6ICdJbmplY3RlZCcsXG4gICAgICAgIHNoaW1EaXNjb25uZWN0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHVibGljQ2xpZW50XG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYjNNb2RhbCh7Y2hpbGRyZW59KSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKVxufSJdLCJuYW1lcyI6WyJXYWdtaUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwibWFpbm5ldCIsImJzYyIsInBvbHlnb24iLCJJbmplY3RlZENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJNZXRhTWFza0Nvbm5lY3RvciIsIkNvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BST0pFQ1RfSUQiLCJjaGFpbnMiLCJwdWJsaWNDbGllbnQiLCJtZXRhZGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsImljb25zIiwid2FnbWlDb25maWciLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJvcHRpb25zIiwiYXBwTmFtZSIsInNoaW1EaXNjb25uZWN0IiwiV2ViM01vZGFsIiwiY2hpbGRyZW4iLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Web3Model/Web3Model.jsx\n"));

/***/ })

});