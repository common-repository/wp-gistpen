(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/prism/plugins/line-highlight.ts":
/*!************************************************!*\
  !*** ./client/prism/plugins/line-highlight.ts ***!
  \************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs/plugins/line-highlight/prism-line-highlight */ "./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js");
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/plugins/line-highlight/prism-line-highlight.css */ "./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css");
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_highlight_prism_line_highlight_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return prismjs_plugins_line_highlight_prism_line_highlight_css__WEBPACK_IMPORTED_MODULE_1___default.a; });



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\npre[data-line] {\n  position: relative;\n  padding: 1em 0 1em 3em; }\n\n.line-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: inherit 0;\n  margin-top: 1em;\n  /* Same as .prism’s padding-top */\n  background: rgba(153, 122, 102, 0.08);\n  background: linear-gradient(to right, rgba(153, 122, 102, 0.1) 70%, rgba(153, 122, 102, 0));\n  pointer-events: none;\n  line-height: inherit;\n  white-space: pre; }\n\n.line-highlight:before,\n.line-highlight[data-end]:after {\n  content: attr(data-start);\n  position: absolute;\n  top: .4em;\n  left: .6em;\n  min-width: 1em;\n  padding: 0 .5em;\n  background-color: rgba(153, 122, 102, 0.4);\n  color: #f5f2f0;\n  font: bold 65%/1.5 sans-serif;\n  text-align: center;\n  vertical-align: .3em;\n  border-radius: 999px;\n  text-shadow: none;\n  box-shadow: 0 1px white; }\n\n.line-highlight[data-end]:after {\n  content: attr(data-end);\n  top: auto;\n  bottom: .4em; }\n\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n  content: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css":
/*!******************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!../../../sass-loader/dist/cjs.js!./prism-line-highlight.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css");
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

/***/ "./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	function $$(expr, con) {
		return Array.prototype.slice.call((con || document).querySelectorAll(expr));
	}

	function hasClass(element, className) {
		className = " " + className + " ";
		return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1
	}

	function callFunction(func) {
		func();
	}

	// Some browsers round the line-height, others don't.
	// We need to test for it to position the elements properly.
	var isLineHeightRounded = (function () {
		var res;
		return function () {
			if (typeof res === 'undefined') {
				var d = document.createElement('div');
				d.style.fontSize = '13px';
				d.style.lineHeight = '1.5';
				d.style.padding = 0;
				d.style.border = 0;
				d.innerHTML = '&nbsp;<br />&nbsp;';
				document.body.appendChild(d);
				// Browsers that round the line-height should have offsetHeight === 38
				// The others should have 39.
				res = d.offsetHeight === 38;
				document.body.removeChild(d);
			}
			return res;
		}
	}());

	/**
	 * Highlights the lines of the given pre.
	 *
	 * This function is split into a DOM measuring and mutate phase to improve performance.
	 * The returned function mutates the DOM when called.
	 *
	 * @param {HTMLElement} pre
	 * @param {string} [lines]
	 * @param {string} [classes='']
	 * @returns {() => void}
	 */
	function highlightLines(pre, lines, classes) {
		lines = typeof lines === 'string' ? lines : pre.getAttribute('data-line');

		var ranges = lines.replace(/\s+/g, '').split(',');
		var offset = +pre.getAttribute('data-line-offset') || 0;

		var parseMethod = isLineHeightRounded() ? parseInt : parseFloat;
		var lineHeight = parseMethod(getComputedStyle(pre).lineHeight);
		var hasLineNumbers = hasClass(pre, 'line-numbers');
		var parentElement = hasLineNumbers ? pre : pre.querySelector('code') || pre;
		var mutateActions = /** @type {(() => void)[]} */ ([]);

		ranges.forEach(function (currentRange) {
			var range = currentRange.split('-');

			var start = +range[0];
			var end = +range[1] || start;

			var line = pre.querySelector('.line-highlight[data-range="' + currentRange + '"]') || document.createElement('div');

			mutateActions.push(function () {
				line.setAttribute('aria-hidden', 'true');
				line.setAttribute('data-range', currentRange);
				line.className = (classes || '') + ' line-highlight';
			});

			// if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
			if (hasLineNumbers && Prism.plugins.lineNumbers) {
				var startNode = Prism.plugins.lineNumbers.getLine(pre, start);
				var endNode = Prism.plugins.lineNumbers.getLine(pre, end);

				if (startNode) {
					var top = startNode.offsetTop + 'px';
					mutateActions.push(function () {
						line.style.top = top;
					});
				}

				if (endNode) {
					var height = (endNode.offsetTop - startNode.offsetTop) + endNode.offsetHeight + 'px';
					mutateActions.push(function () {
						line.style.height = height;
					});
				}
			} else {
				mutateActions.push(function () {
					line.setAttribute('data-start', start);

					if (end > start) {
						line.setAttribute('data-end', end);
					}

					line.style.top = (start - offset - 1) * lineHeight + 'px';

					line.textContent = new Array(end - start + 2).join(' \n');
				});
			}

			mutateActions.push(function () {
				// allow this to play nicely with the line-numbers plugin
				// need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
				parentElement.appendChild(line);
			});
		});

		return function () {
			mutateActions.forEach(callFunction);
		};
	}

	function applyHash() {
		var hash = location.hash.slice(1);

		// Remove pre-existing temporary lines
		$$('.temporary.line-highlight').forEach(function (line) {
			line.parentNode.removeChild(line);
		});

		var range = (hash.match(/\.([\d,-]+)$/) || [, ''])[1];

		if (!range || document.getElementById(hash)) {
			return;
		}

		var id = hash.slice(0, hash.lastIndexOf('.')),
			pre = document.getElementById(id);

		if (!pre) {
			return;
		}

		if (!pre.hasAttribute('data-line')) {
			pre.setAttribute('data-line', '');
		}

		var mutateDom = highlightLines(pre, range, 'temporary ');
		mutateDom();

		document.querySelector('.temporary.line-highlight').scrollIntoView();
	}

	var fakeTimer = 0; // Hack to limit the number of times applyHash() runs

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = env.element.parentNode;
		var lines = pre && pre.getAttribute('data-line');

		if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
			return;
		}

		/*
		 * Cleanup for other plugins (e.g. autoloader).
		 *
		 * Sometimes <code> blocks are highlighted multiple times. It is necessary
		 * to cleanup any left-over tags, because the whitespace inside of the <div>
		 * tags change the content of the <code> tag.
		 */
		var num = 0;
		$$('.line-highlight', pre).forEach(function (line) {
			num += line.textContent.length;
			line.parentNode.removeChild(line);
		});
		// Remove extra whitespace
		if (num && /^( \n)+$/.test(env.code.slice(-num))) {
			env.code = env.code.slice(0, -num);
		}
	});

	Prism.hooks.add('complete', function completeHook(env) {
		var pre = env.element.parentNode;
		var lines = pre && pre.getAttribute('data-line');

		if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
			return;
		}

		clearTimeout(fakeTimer);

		var hasLineNumbers = Prism.plugins.lineNumbers;
		var isLineNumbersLoaded = env.plugins && env.plugins.lineNumbers;

		if (hasClass(pre, 'line-numbers') && hasLineNumbers && !isLineNumbersLoaded) {
			Prism.hooks.add('line-numbers', completeHook);
		} else {
			var mutateDom = highlightLines(pre, lines);
			mutateDom();
			fakeTimer = setTimeout(applyHash, 1);
		}
	});

	window.addEventListener('hashchange', applyHash);
	window.addEventListener('resize', function () {
		var actions = [];
		$$('pre[data-line]').forEach(function (pre) {
			actions.push(highlightLines(pre));
		});
		actions.forEach(callFunction);
	});

})();


/***/ })

}]);
//# sourceMappingURL=0.js.map