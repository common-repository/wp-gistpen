(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./client/prism/plugins/filename.ts":
/*!******************************************!*\
  !*** ./client/prism/plugins/filename.ts ***!
  \******************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./client/prism/index.ts");

/**
 * Create a filename label for the provided environment.
 *
 * @param {Object} env - Prism environment.
 * @returns {Element} Edit button element.
 */

___WEBPACK_IMPORTED_MODULE_0__["default"].plugins.toolbar.registerButton('filename', function filenameButton(env) {
  var filename = document.createElement('span');
  var pre = env.element.parentElement;

  if (pre == null) {
    return;
  }

  var text = pre.getAttribute('data-filename');

  if (text == null) {
    return;
  }

  filename.textContent = text;
  return filename;
});
var plugin = {
  use: function use() {},
  unuse: function unuse() {}
};

/***/ })

}]);
//# sourceMappingURL=29.js.map