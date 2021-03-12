webpackHotUpdate_N_E("pages/path/members",{

/***/ "./pages/path/members.js":
/*!*******************************!*\
  !*** ./pages/path/members.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Members; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\nodejs-monolithicAPI\\client\\pages\\path\\members.js";




function Members() {
  var onClickToggle = function onClickToggle(param) {
    alert('onClickToggle');
    document.getElementById(param).style.display = 'inline';

    switch (param) {
      case 'members':
        document.getElementById('register').style.display = 'none';
        document.getElementById('members').style.display = 'inline';

      case ' register':
        document.getElementById('members').style.display = 'none';
        document.getElementById('register').style.display = 'inline';

      default:
        document.getElementById('members').style.display = 'none';
        document.getElementById('register').style.display = 'none';
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    Member: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        children: "Member"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
        id: "menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
          onClick: function onClick() {
            return onClickToggle('members');
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Members"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
          onClick: function onClick() {
            return onClickToggle('register');
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.members,
      id: "members",
      children: "members"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.register,
      id: "register",
      children: "register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
_c = Members;

var _c;

$RefreshReg$(_c, "Members");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF0aC9tZW1iZXJzLmpzIl0sIm5hbWVzIjpbIk1lbWJlcnMiLCJvbkNsaWNrVG9nZ2xlIiwicGFyYW0iLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaXRlVGl0bGUiLCJ1dGlsU3R5bGVzIiwidGl0bGUiLCJncmlkIiwiY2FyZCIsIm1lbWJlcnMiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFFOUIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0JDLFNBQUssQ0FBQyxlQUFELENBQUw7QUFFQUMsWUFBUSxDQUFDQyxjQUFULENBQXdCSCxLQUF4QixFQUErQkksS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLFFBQS9DOztBQUNBLFlBQVFMLEtBQVI7QUFDSSxXQUFLLFNBQUw7QUFDSUUsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsQ0FBMENDLE9BQTFDLEdBQW9ELE1BQXBEO0FBQ0FILGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLENBQXlDQyxPQUF6QyxHQUFtRCxRQUFuRDs7QUFDSixXQUFLLFdBQUw7QUFDSUgsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsQ0FBeUNDLE9BQXpDLEdBQW1ELE1BQW5EO0FBQ0FILGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXBDLENBQTBDQyxPQUExQyxHQUFvRCxRQUFwRDs7QUFDSjtBQUNJSCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxLQUFuQyxDQUF5Q0MsT0FBekMsR0FBbUQsTUFBbkQ7QUFDQUgsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsQ0FBMENDLE9BQTFDLEdBQW9ELE1BQXBEO0FBVFI7QUFXSCxHQWZEOztBQWlCQSxzQkFDSSxxRUFBQywwREFBRDtBQUFRLFVBQU0sTUFBZDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0E7QUFBQSxrQkFBUUMsNERBQVNBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBRUQsK0RBQVUsQ0FBQ0UsSUFBM0I7QUFBa0MsVUFBRSxFQUFDLE1BQXJDO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFFRiwrREFBVSxDQUFDRyxJQUF6QjtBQUErQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1YLGFBQWEsQ0FBQyxTQUFELENBQW5CO0FBQUEsV0FBeEM7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFHLG1CQUFTLEVBQUVRLCtEQUFVLENBQUNHLElBQXpCO0FBQStCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVgsYUFBYSxDQUFDLFVBQUQsQ0FBbkI7QUFBQSxXQUF4QztBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQVFJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUVRLCtEQUFVLENBQUNHLElBQXpCO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQXVCSTtBQUFTLGVBQVMsRUFBRUgsK0RBQVUsQ0FBQ0ksT0FBL0I7QUFBd0MsUUFBRSxFQUFDLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLGVBMEJJO0FBQVMsZUFBUyxFQUFFSiwrREFBVSxDQUFDSyxRQUEvQjtBQUF5QyxRQUFFLEVBQUMsVUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0g7S0FuRHVCZCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhdGgvbWVtYmVycy40ZDgzYTIwZDMzZTlkZGNiZWQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbWJlcnMoKSB7IFxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tUb2dnbGUgPSAocGFyYW0pID0+IHtcclxuICAgICAgICBhbGVydCgnb25DbGlja1RvZ2dsZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbSkge1xyXG4gICAgICAgICAgICBjYXNlICdtZW1iZXJzJzogXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbWJlcnMnKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJyByZWdpc3Rlcic6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtYmVycycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbWJlcnMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IE1lbWJlcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50aXRsZX0+TWVtYmVyPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ncmlkfSAgaWQ9J21lbnUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVG9nZ2xlKCdtZW1iZXJzJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVtYmVyczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4gb25DbGlja1RvZ2dsZSgncmVnaXN0ZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWdpc3RlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG9tZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubWVtYmVyc30gaWQ9XCJtZW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnJlZ2lzdGVyfSBpZD1cInJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICByZWdpc3RlclxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9