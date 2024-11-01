(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/prism/plugins/show-invisibles.ts":
/*!*************************************************!*\
  !*** ./client/prism/plugins/show-invisibles.ts ***!
  \*************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs_plugins_show_invisibles_prism_show_invisibles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs/plugins/show-invisibles/prism-show-invisibles */ "./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.js");
/* harmony import */ var prismjs_plugins_show_invisibles_prism_show_invisibles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_show_invisibles_prism_show_invisibles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_plugins_show_invisibles_prism_show_invisibles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/plugins/show-invisibles/prism-show-invisibles.css */ "./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css");
/* harmony import */ var prismjs_plugins_show_invisibles_prism_show_invisibles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_show_invisibles_prism_show_invisibles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return prismjs_plugins_show_invisibles_prism_show_invisibles_css__WEBPACK_IMPORTED_MODULE_1___default.a; });



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".token.tab:not(:empty),\n.token.cr,\n.token.lf,\n.token.space {\n  position: relative; }\n\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before,\n.token.space:before {\n  color: #808080;\n  opacity: 0.6;\n  position: absolute; }\n\n.token.tab:not(:empty):before {\n  content: '\\21E5'; }\n\n.token.cr:before {\n  content: '\\240D'; }\n\n.token.crlf:before {\n  content: '\\240D\\240A'; }\n\n.token.lf:before {\n  content: '\\240A'; }\n\n.token.space:before {\n  content: '\\00B7'; }\n", ""]);


/***/ }),

/***/ "./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css":
/*!********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!../../../sass-loader/dist/cjs.js!./prism-show-invisibles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.css");
var options = {"hmr":false};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};


/***/ }),

/***/ "./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/show-invisibles/prism-show-invisibles.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function () {

	if (
		typeof self !== 'undefined' && !self.Prism ||
		typeof global !== 'undefined' && !global.Prism
	) {
		return;
	}


	var invisibles = {
		'tab': /\t/,
		'crlf': /\r\n/,
		'lf': /\n/,
		'cr': /\r/,
		'space': / /
	};


	/**
	 * Handles the recursive calling of `addInvisibles` for one token.
	 *
	 * @param {Object|Array} tokens The grammar or array which contains the token.
	 * @param {string|number} name The name or index of the token in `tokens`.
	 */
	function handleToken(tokens, name) {
		var value = tokens[name];

		var type = Prism.util.type(value);
		switch (type) {
			case 'RegExp':
				var inside = {};
				tokens[name] = {
					pattern: value,
					inside: inside
				};
				addInvisibles(inside);
				break;

			case 'Array':
				for (var i = 0, l = value.length; i < l; i++) {
					handleToken(value, i);
				}
				break;

			default: // 'Object'
				var inside = value.inside || (value.inside = {});
				addInvisibles(inside);
				break;
		}
	}

	/**
	 * Recursively adds patterns to match invisible characters to the given grammar (if not added already).
	 *
	 * @param {Object} grammar
	 */
	function addInvisibles(grammar) {
		if (!grammar || grammar['tab']) {
			return;
		}

		// assign invisibles here to "mark" the grammar in case of self references
		for (var name in invisibles) {
			if (invisibles.hasOwnProperty(name)) {
				grammar[name] = invisibles[name];
			}
		}

		for (var name in grammar) {
			if (grammar.hasOwnProperty(name) && !invisibles[name]) {
				if (name === 'rest') {
					addInvisibles(grammar['rest']);
				} else {
					handleToken(grammar, name);
				}
			}
		}
	}

	Prism.hooks.add('before-highlight', function (env) {
		addInvisibles(env.grammar);
	});
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=2.js.map