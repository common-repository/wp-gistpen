(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./client/prism/plugins/edit.ts":
/*!**************************************!*\
  !*** ./client/prism/plugins/edit.ts ***!
  \**************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./client/prism/index.ts");

___WEBPACK_IMPORTED_MODULE_0__["default"].plugins.toolbar.registerButton('edit', function editButton(env) {
  var pre = env.element.parentElement;

  if (pre == null) {
    return;
  }

  var url = pre.getAttribute('data-edit-url') || null;

  if (url == null) {
    return;
  }

  var editBtn = document.createElement('a');
  editBtn.innerHTML = 'Edit';
  editBtn.href = url;
  return editBtn;
});
var plugin = {
  use: function use() {},
  unuse: function unuse() {}
};

/***/ })

}]);
//# sourceMappingURL=28.js.map