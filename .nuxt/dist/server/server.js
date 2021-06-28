module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/anchor","2":"components/artical-list","3":"components/audio-spectrum","4":"components/logo","5":"components/post-detail","6":"components/theme-picker","7":"components/wrap-comps-input","8":"pages/Octopus/index","9":"pages/Posts/_id","10":"pages/Posts/index","11":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("loadsh/throttle");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Blob<br>date: 2020-07-08 10:41:12<br>categories: Js<br>tags: Blob<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Blob对象\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Blob对象 </h2><hr> Blob是Binary Large Object的缩写.代表二进制类型的大对象.<br>在Web中，<code>Blob</code>类型的对象表示不可变的类似文件对象的原始数据，通俗点说，就是<code>Blob</code>对象是二进制数据，但它是类似文件对象的二进制数据，因此可以像操作<code>File</code>对象一样操作<code>Blob</code>对象，实际上，<code>File</code>继承自<code>Blob</code>。<code>Blob(blobParts[, options])</code><br>参数说明：<br><code>blobParts</code>：数组类型，数组中的每一项连接起来构成Blob对象的数据，数组中的每项元素可以是ArrayBuffer, ArrayBufferView, Blob, DOMString 。<br><code>options</code>：可选项，字典格式类型，可以指定如下两个属性：<ul> <li>type，默认值为 “”，它代表了将会被放入到blob中的数组内容的MIME类型。</li> <li>endings，默认值为”transparent”，用于指定包含行结束符\\n的字符串如何被写入。 它是以下两个值中的一个： “native”，表示行结束符会被更改为适合宿主操作系统文件系统的换行符； “transparent”，表示会保持blob中保存的结束符不变。</li> </ul> <pre><code class=\"language-js\">    var data1 = &quot;a&quot;;\n    var data2 = &quot;b&quot;;\n    var data3 = &quot;&lt;div style=&#39;color:red;&#39;&gt;This is a blob&lt;/div&gt;&quot;;\n    var data4 = { &quot;name&quot;: &quot;abc&quot; };\n\n    var blob1 = new Blob([data1]);\n    var blob2 = new Blob([data1, data2]);\n    var blob3 = new Blob([data3]);\n    var blob4 = new Blob([JSON.stringify(data4)]);\n    var blob5 = new Blob([data4]);\n    var blob6 = new Blob([data3, data4]);\n\n    console.log(blob1);  //输出：Blob {size: 1, type: &quot;&quot;}\n    console.log(blob2);  //输出：Blob {size: 2, type: &quot;&quot;}\n    console.log(blob3);  //输出：Blob {size: 44, type: &quot;&quot;}\n    console.log(blob4);  //输出：Blob {size: 14, type: &quot;&quot;}\n    console.log(blob5);  //输出：Blob {size: 15, type: &quot;&quot;}\n    console.log(blob6);  //输出：Blob {size: 59, type: &quot;&quot;}\n</code></pre> <code>size</code>代表<code>Blob</code>对象中所包含数据的字节数。这里要注意，使用字符串和普通对象创建<code>Blob</code>时的不同，<code>blob4</code>使用通过<code>JSON.stringify</code>把<code>data4</code>对象转换成<code>json</code>字符串，<code>blob5</code>则直接使用<code>data4</code>创建，两个对象的<code>size</code>分别为14和15。<code>blob4</code>的size等于14很容易理解，因为<code>JSON.stringify(data4)</code>的结果为：<code>&quot;{&quot;name&quot;:&quot;abc&quot;}&quot;</code>，正好14个字节(不包含最外层的引号)。<code>blob5</code>的size等于15是如何计算而来的呢？实际上，当使用普通对象创建Blob对象时，相当于调用了普通对象的<code>toString()</code>方法得到字符串数据，然后再创建Blob对象。所以，blob5保存的数据是<code>&quot;[object Object]&quot;</code>，是15个字节(不包含最外层的引号)。 <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"slice方法\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> slice方法 </h3><hr> Blob对象有一个slice方法，返回一个新的 Blob对象，包含了源 Blob对象中指定范围内的数据。<br><code>slice([start[, end[, contentType]]])</code><br>复制代码参数说明：<br><code>start</code>： 可选，代表 Blob 里的下标，表示第一个会被会被拷贝进新的 Blob 的字节的起始位置。如果传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。<br><code>end</code>： 可选，代表的是 Blob 的一个下标，这个下标-1的对应的字节将会是被拷贝进新的Blob 的最后一个字节。如果你传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。<br><code>contentType</code>： 可选，给新的 Blob 赋予一个新的文档类型。这将会把它的 type 属性设为被传入的值。它的默认值是一个空的字符串。<pre><code class=\"language-js\">例如：\n    var data = &quot;abcdef&quot;;\n    var blob1 = new Blob([data]);\n    var blob2 = blob1.slice(0,3);\n\n    console.log(blob1);  //输出：Blob {size: 6, type: &quot;&quot;}\n    console.log(blob2);  //输出：Blob {size: 3, type: &quot;&quot;}\n</code></pre> 复制代码通过slice方法，从blob1中创建出一个新的blob对象，size等于3。 <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"使用场景\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 使用场景 </h2><hr> 分片上传<br>前面已经说过，File继承自Blob，因此我们可以调用slice方法对大文件进行分片长传。代码如下：<pre><code class=\"language-js\">function uploadFile(file) {\n  var chunkSize = 1024 * 1024;   // 每片1M大小\n  var totalSize = file.size;\n  var chunkQuantity = Math.ceil(totalSize/chunkSize);  //分片总数\n  var offset = 0;  // 偏移量\n\n  var reader = new FileReader();\n  reader.onload = function(e) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(&quot;POST&quot;,&quot;http://xxxx/upload?fileName=&quot;+file.name);\n    xhr.overrideMimeType(&quot;application/octet-stream&quot;);\n\n    xhr.onreadystatechange = function() {\n      if(xhr.readyState === XMLHttpRequest.DONE &amp;&amp; xhr.status === 200) {\n        ++offset;\n        if(offset === chunkQuantity) {\n          alert(&quot;上传完成&quot;);\n        } else if(offset === chunkQuantity-1){\n          blob = file.slice(offset*chunkSize, totalSize);   // 上传最后一片\n          reader.readAsBinaryString(blob);\n        } else {\n          blob = file.slice(offset*chunkSize, (offset+1)*chunkSize); \n          reader.readAsBinaryString(blob);\n        }\n      }else {\n        alert(&quot;上传出错&quot;);\n      }\n    }\n\n    if(xhr.sendAsBinary) {\n      xhr.sendAsBinary(e.target.result);   // e.target.result是此次读取的分片二进制数据\n    } else {\n      xhr.send(e.target.result);\n    }\n  }\n   var blob = file.slice(0, chunkSize);\n   reader.readAsBinaryString(blob);\n}\n</code></pre> 这段代码还可以进一步丰富，比如显示当前的上传进度，使用多个XMLHttpRequest对象并行上传对象（需要传递分片数据的位置参数给服务器端）等。";
// Exports
module.exports = code;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Canvas<br>date: 2021-04-06 11:23:07<br>categories: Canvas<br>tags: Canvas<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"常见问题\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 常见问题 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"width和style.width的区别\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> width和style.width的区别 </h3><ul> <li><code>canvas</code>width,height: 绘制canvas的宽高.</li> <li><code>style.width,style.height</code>: 渲染在浏览器中可见的宽高.</li> </ul> <a href=\"https://segmentfault.com/a/1190000016819776\" target=\"_blank\" title=\"canvas: width和style.width的区别\">canvas: width和style.width的区别</a> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"canvas锯齿\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> canvas锯齿 </h3><ol> <li>浏览器中显示的宽高不变.</li> <li>放大绘制画布的宽高,并且缩放(放大)当前屏幕像素比相同的倍数.</li> </ol> <pre><code class=\"language-js\">// 根据设备像素比优化canvas绘图\nconst devicePixelRatio = window.devicePixelRatio;\nif (devicePixelRatio) {\n  canvas.style.width = `${width}px`;\n  canvas.style.height = `${height}px`;\n  canvas.height = height * devicePixelRatio; // 画布宽高放大\n  canvas.width = width * devicePixelRatio;\n  context.scale(devicePixelRatio, devicePixelRatio); // 画布内容放大相同的倍数\n} else {\n  canvas.width = width;\n  canvas.height = height;\n}\n</code></pre> <a href=\"https://blog.csdn.net/u010619243/article/details/69944369\" target=\"_blank\" title=\"canvas锯齿\">canvas锯齿</a> <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><hr> <a href=\"https://segmentfault.com/a/1190000016819776\" target=\"_blank\" title=\"canvas: width和style.width的区别\">canvas: width和style.width的区别</a><br><a href=\"http://louiszhai.github.io/2017/07/07/canvas-draw/\" target=\"_blank\" title=\"canvas实现签名组件\">canvas实现签名组件</a>";
// Exports
module.exports = code;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: D3<br>date: 2019-11-10 16:58:56<br>categories: D3<br>tags: D3 可视化图表<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"API\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> API </h2>D3.scale<br>D3.scale.linear() <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"相关资源\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关资源 </h3><a href=\"http://www.ruanyifeng.com/blog/2018/08/svg.html\" target=\"_blank\" title=\"阮一峰svg\">阮一峰svg</a><br><a href=\"https://blog.csdn.net/Peter_Luoz/article/details/89213575\" target=\"_blank\" title=\"Peter_Luoz 文章\">Peter_Luoz 文章</a><br><a href=\"https://greenmzc.github.io/2016/11/07/D3-js%E4%B8%8A%E6%89%8B%E2%80%94%E2%80%94%E9%A5%BC%E7%8A%B6%E5%9B%BE/\" target=\"_blank\" title=\"Green d3\">Green d3</a><br><a href=\"https://juejin.im/entry/59156c4b8d6d8100585ef337\" target=\"_blank\" title=\"juejin d3\">juejin d3</a><br><a href=\"https://github.com/gafish/gafish.github.com/issues/4\" target=\"_blank\" title=\"d3入门教程\">d3入门教程</a><br><a href=\"http://wiki.jikexueyuan.com/project/d3wiki/interactive.html\" target=\"_blank\" title=\"http://wiki.jikexueyuan.com/project/d3wiki/interactive.html\">http://wiki.jikexueyuan.com/project/d3wiki/interactive.html</a>";
// Exports
module.exports = code;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(79);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(80);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(81);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var code = "<hr> authorName: Yu<br>title: Docker<br>date: 2020-12-23 17:31:51<br>categories: Docker<br>tags: Docker<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"常用命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 常用命令 </h2><hr> <table> <thead> <tr> <th>命令</th> <th>描述</th> </tr> </thead> <tbody><tr> <td><code>docker</code></td> <td>列出所有命令</td> </tr> <tr> <td><code>docker ps --help</code></td> <td>查看ps指令的具体用法</td> </tr> </tbody></table> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"容器的使用\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 容器的使用 </h3><hr> <h4 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"查看容器\" data-level=\"4\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 查看容器 </h4>默认查看正在运行容器, -a看全部<pre><code class=\"language-sh\">docker ps \n-a, --all             Show all containers (default shows just running)\n\n查看容器的ip地址\ndocker inspect --format &#39;{{ .NetworkSettings.IPAddress }}&#39; 0c6268e6ff1b\n</code></pre> <h4 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"启动容器\" data-level=\"4\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 启动容器 </h4><ol> <li>使用ubuntu镜像启动一个容器</li> </ol> <pre><code class=\"language-sh\">docker run -it --name ubuntu-test ubuntu /bin/bash\n</code></pre> 参数说明：<ul> <li><code>-i</code>: 交互式操作.</li> <li><code>-t</code>: 终端.</li> <li><code>-d</code>: 参数默认不会进入容器，想要进入容器需要使用指令 docker exec.</li> <li><code>--name</code>: 给容器命名ubuntu-test</li> <li><code>ubuntu</code>: ubuntu 镜像.</li> <li><code>/bin/bash</code>：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 <code>/bin/bash</code>.</li> </ul> <ol start=\"2\"> <li>启动已停止的容器</li> </ol> <code>docker start CONTAINER_ID</code><pre><code class=\"language-sh\">docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES\n9a0374586f2d        erp_image           &quot;/bin/bash&quot;         2 weeks ago         Up 15 hours         0.0.0.0:9009-&gt;9009/tcp   mtools\n\ndocker start 9a0374586f2d\n</code></pre> <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"停止一个容器\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 停止一个容器 </h4><code>docker stop 容器id</code> <h4 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"重启一个容器\" data-level=\"4\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 重启一个容器 </h4>停止的容器可以重启<br><code>docker restart 容器id</code> <h4 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"进入容器\" data-level=\"4\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 进入容器 </h4><code>docker attach</code><br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"attach\" title=\"null\" style=\"cursor:zoom-in\"></p><br><code>docker exec</code>: 推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"exec\" title=\"null\" style=\"cursor:zoom-in\"></p> <h4 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"Docker容器连接\" data-level=\"4\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Docker容器连接 </h4>前面我们实现了通过网络端口来访问运行在<code>docker</code>容器内的服务.<br>容器中可以运行一些网络应用,要让外部也可以访问这些应用,可以通过<code>-P</code>或<code>-p</code>参数来指定端口映射.<br>下面我们来实现通过端口连接到一个<code>docker</code>容器.<br><code>docker run -it --name=$1 -v $(pwd)/project:/docker-work/project -p $2:$2 --entrypoint /bin/bash old-project</code><ul> <li><code>-v 本机目录:容器目录</code>: 共享本机的文件,本机或者容器内修改了该目录都会同步.</li> <li><code>-p 本机端口号:容器端口号</code>: 映射容器端口号到本机端口号</li> <li><code>--entrypoint</code>: 覆盖入口点,以old-project镜像去运行/bin/bash </li> </ul> <h4 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"退出容器\" data-level=\"4\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 退出容器 </h4><code>exit</code><br>退出后容器是否后台运行, 取决于怎么进入. 如果是attach,exit退出后容器不会在后台运行. 如果是exec进入则会在后台运行,不会关闭容器. <h4 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"删除容器\" data-level=\"4\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 删除容器 </h4><code>docker rm -f 容器id</code> <h3 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"镜像的使用\" data-level=\"3\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 镜像的使用 </h3><hr> <h4 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"查看镜像\" data-level=\"4\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 查看镜像 </h4><code>docker images</code><pre><code class=\"language-sh\">docker images\n\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nerp_image           latest              b5d169ff00e4        2 weeks ago         658MB\nnode                5.9.1               1d40a411bb29        4 years ago         644MB\n</code></pre> 各个选项说明:<ul> <li>REPOSITORY：表示镜像的仓库源</li> <li>TAG：镜像的标签</li> <li>IMAGE ID：镜像ID</li> <li>CREATED：镜像创建时间</li> <li>SIZE：镜像大小<br>同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本，如 ubuntu 仓库源里，有 15.10、14.04 等多个不同的版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。<br>所以，我们如果要使用版本为15.10的ubuntu系统镜像来运行容器时，命令如下：<br><code>docker run -t -i ubuntu:15.10 /bin/bash</code><br>如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像。</li> </ul> <h4 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"获取镜像\" data-level=\"4\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 获取镜像 </h4><pre><code class=\"language-sh\">下载ubuntu镜像\ndocker pull ubuntu:13.10\n</code></pre> 下载完成后，我们可以直接使用这个镜像来运行容器。 <h4 id=\"heading-13\"> <a class=\"post-anchor\" data-id=\"heading-13\" data-text=\"查找镜像\" data-level=\"4\" href=\"#heading-13\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 查找镜像 </h4>我们可以从 Docker Hub 网站来搜索镜像，Docker Hub 网址为: <a href=\"https://hub.docker.com/\" target=\"_blank\" title=\"Docker Hub\">Docker Hub</a><br>我们也可以使用 docker search 命令来搜索镜像。比如我们需要一个 httpd 的镜像来作为我们的 web 服务。我们可以通过 docker search 命令搜索 httpd 来寻找适合我们的镜像。<br><code>docker search httpd</code><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"3\" title=\"null\" style=\"cursor:zoom-in\"></p><ul> <li>NAME: 镜像仓库源的名称</li> <li>DESCRIPTION: 镜像的描述</li> <li>OFFICIAL: 是否 docker 官方发布</li> <li>stars: 类似 Github 里面的 star，表示点赞、喜欢的意思。</li> <li>AUTOMATED: 自动构建。</li> </ul> <h4 id=\"heading-14\"> <a class=\"post-anchor\" data-id=\"heading-14\" data-text=\"删除镜像\" data-level=\"4\" href=\"#heading-14\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 删除镜像 </h4>强制删除本地镜像 runoob/ubuntu:v4.<br><code>docker rmi -f runoob/ubuntu:v4</code><ul> <li><code>-f</code>: 强制删除</li> </ul> <pre><code class=\"language-sh\">root@runoob:~# docker rmi -f runoob/ubuntu:v4\nUntagged: runoob/ubuntu:v4\nDeleted: sha256:1c06aa18edee44230f93a90a7d88139235de12cd4c089d41eed8419b503072be\nDeleted: sha256:85feb446e89a28d58ee7d80ea5ce367eebb7cec70f0ec18aa4faa874cbd97c73\n</code></pre> <h4 id=\"heading-15\"> <a class=\"post-anchor\" data-id=\"heading-15\" data-text=\"创建镜像\" data-level=\"4\" href=\"#heading-15\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 创建镜像 </h4>当我们从 docker 镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。<ol> <li>从已经创建的容器中更新镜像，并且提交这个镜像</li> <li>使用 Dockerfile 指令来创建一个新的镜像</li> </ol> <h5 id=\"heading-16\"> <a class=\"post-anchor\" data-id=\"heading-16\" data-text=\"更新镜像\" data-level=\"5\" href=\"#heading-16\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 更新镜像 </h5> <h5 id=\"heading-17\"> <a class=\"post-anchor\" data-id=\"heading-17\" data-text=\"构建新镜像\" data-level=\"5\" href=\"#heading-17\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 构建新镜像 </h5>使用命令<code>docker build</code>,从零开始来创建一个新的镜像.为此,我们需要创建一个<strong>Dockerfile</strong>文件，其中包含一组指令来告诉<strong>Docker</strong>如何构建我们的镜像.<pre><code class=\"language-docker\"># Dockerfile 安装需要的依赖, 此文件只有在构建镜像时使用\n# node version\nFROM node:5.9.1\n\n# 容器工作空间目录\nWORKDIR /erp-container\n\n# 将host start.sh拷贝到容器\nCOPY start.sh .\n\n# 在容器中创建project目录, 此目录将会绑定host的project目录\nRUN mkdir project\n\n# 容器中安装全局gulp\nRUN npm install -g gulp@3.9.0\n</code></pre> 每一个指令都会在镜像上创建一个新的层,每一个指令的前缀都必须是大写的.<br>第一条FROM,指定使用哪个镜像源<br>RUN 指令告诉docker在镜像内执行命令,安装了什么…<br>然后，我们使用<strong>Dockerfile</strong>文件,通过<code>docker build</code>命令来构建一个镜像.<pre><code class=\"language-sh\">#!/bin/sh\n# 构建本地镜像, 这里统一命名为erp_image\n\ndocker build -t erp_image .\n</code></pre> 参数说明:<ul> <li><code>-t</code>: 指定要创建的目标镜像名</li> <li><code>.</code>: <strong>Dockerfile</strong>文件所在目录,可以指定<strong>Dockerfile</strong>的绝对路径</li> </ul> <h4 id=\"heading-18\"> <a class=\"post-anchor\" data-id=\"heading-18\" data-text=\"设置镜像标签\" data-level=\"4\" href=\"#heading-18\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 设置镜像标签 </h4>我们可以使用<code>docker tag</code>命令,为镜像添加一个新的标签<pre><code class=\"language-sh\">runoob@runoob:~$ docker tag 860c279d2fec runoob/centos:dev\n</code></pre> docker tag 镜像ID,这里是860c279d2fec,用户名称,镜像源名(repository name)和新的标签名(tag).<br>使用 docker images 命令可以看到，ID为860c279d2fec的镜像多一个标签。 <h2 id=\"heading-19\"> <a class=\"post-anchor\" data-id=\"heading-19\" data-text=\"相关问题\" data-level=\"2\" href=\"#heading-19\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关问题 </h2><ol> <li>无法连接容器</li> </ol> 端口映射后本地localhost:9000,仍然访问不到.是容器内服务用的localhost,127.0.0.1等环回地址(只有容器内能访问).<br><a href=\"https://juejin.cn/post/6844904138812162061\" target=\"_blank\" title=\"了解127.0.0.1和0.0.0.0\">了解127.0.0.1和0.0.0.0</a> <h2 id=\"heading-20\"> <a class=\"post-anchor\" data-id=\"heading-20\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-20\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><a href=\"https://yeasy.gitbook.io/docker_practice/\" target=\"_blank\" title=\"Docker —— 从入门到实践\">Docker —— 从入门到实践</a>";
// Exports
module.exports = code;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: EventLoop<br>date: 2021-04-15 15:06:58<br>categories: EventLoop<br>tags: EventLoop<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"浏览器事件循环\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 浏览器事件循环 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"循环机制1\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 循环机制1 </h3>执行栈为空去检查宏任务队列是否为空,为空去执行微任务队列并全部执行完.<br>如果不为空,则执行宏任务,之后去检查微任务队列是否为空,为空则执行宏任务中的任务,否则执行微任务中任务. <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"例子\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 例子 </h3>1.<pre><code class=\"language-js\">console.log(&#39;start&#39;);\nsetTimeout(() =&gt; {\n    console.log(&#39;setTimeout1&#39;);\n    setTimeout(() =&gt; {\n        console.log(&#39;setTimeout1-1&#39;);\n        Promise.resolve(1)\n            .then(v =&gt; {\n                console.log(v, &#39;promise1&#39;);\n                return 3;\n            })\n            .then(v =&gt; {\n                console.log(v, &#39;promise3&#39;);\n                return 6;\n            })\n            .then(v =&gt; {\n                console.log(v, &#39;promise6&#39;);\n            });\n        Promise.resolve(4)\n            .then(v =&gt; {\n                console.log(v, &#39;promise4&#39;);\n                return 5;\n            })\n            .then(v =&gt; {\n                console.log(v, &#39;promise5&#39;);\n            });\n    });\n});\nsetTimeout(() =&gt; {\n    console.log(&#39;setTimeout2&#39;);\n    Promise.resolve(2).then(v =&gt; {\n        console.log(v, &#39;promise2&#39;);\n    });\n});\nconsole.log(&#39;end&#39;);\n</code></pre> 分析: <ol> <li>主线程执行 js 代码,输出’start’. </li> <li>将 setTimeout1 和 setTimeout2 加入宏任务队列中. </li> <li>输出’end’. </li> <li>此时执行栈中为空,回去将宏任务队列中的 setTimeout1 的回调加入执行栈中执行,输出’setTimeout1’,并将 setTimeout1-1 加入宏任务队列末尾(队列是先进先出的原则) </li> <li>此时执行栈为空,将宏任务队列里的 setTimeout2 的回调加入执行栈中执行,输出’setTimeout2’.此时将微任务 promise2 加入微任务队列中,并执行,输出’2 promise2’. </li> <li>此时微任务队列和执行栈为空,去宏任务中,将 setTimeout1-1 加入执行栈中执行,输出’setTimeout1-1’,并添加微任务 promise1,并执行,输出’promise1’.</li> </ol> <blockquote> 结果:<br>start<br>end<br>setTimeout1<br>setTimeout2<br>2 “promise2”<br>setTimeout1-1<br>1 “promise1”<br>4 “promise4”<br>3 “promise3”<br>5 “promise5”<br>6 “promise6”</blockquote> 2.<pre><code class=\"language-js\">async function f() {\n  await p\n  console.log(&#39;ok&#39;)\n}\n可以简单理解为:\nfunction f() {\n  return RESOLVE(p).then(() =&gt; {\n    console.log(&#39;ok&#39;)\n  })\n}\n</code></pre> <pre><code class=\"language-js\">console.log(&#39;script start&#39;);\n\nasync function async1() {\n    await async2();\n    console.log(&#39;async1 end&#39;);\n}\nasync function async2() {\n    console.log(&#39;async2 end&#39;);\n}\nasync1();\n\nsetTimeout(function () {\n    console.log(&#39;setTimeout&#39;);\n}, 0);\n\nnew Promise(resolve =&gt; {\n    console.log(&#39;Promise&#39;);\n    resolve();\n})\n    .then(function () {\n        console.log(&#39;promise1&#39;);\n    })\n    .then(function () {\n        console.log(&#39;promise2&#39;);\n    });\n\nconsole.log(&#39;script end&#39;);\n</code></pre> <blockquote> 结果: script start<br>async2 end<br>Promise<br>script end<br>async1 end<br>promise1<br>promise2<br>undefined<br>setTimeout</blockquote> <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"NodeJS的Event Loop\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> NodeJS的Event Loop </h2><hr> <h2 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><hr> <a href=\"https://juejin.cn/post/6844903764202094606\" target=\"_blank\" title=\"一次弄懂Event Loop\">一次弄懂Event Loop</a>";
// Exports
module.exports = code;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Flex<br>date: 2019-09-02 13:44:56<br>categories: 布局<br>tags: Flex 布局<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Flex\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Flex </h3><hr> <h4 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"容器的属性\" data-level=\"4\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 容器的属性 </h4><hr> 以下属性设置在容器上<ol> <li>flex-direction<br><code>flex-direction</code>属性决定主轴的方向（即项目的排列方向）。<pre><code class=\"language-css\">.box {\nflex-direction: row | row-reverse | column | column-reverse;\n}\n</code></pre> </li> <li>flex-wrap<br>默认情况下，项目都排在一条线（又称”轴线”）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。<pre><code class=\"language-css\">.box{\nflex-wrap: nowrap | wrap | wrap-reverse;\n}\n</code></pre> </li> <li>flex-flow<br><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。<pre><code class=\"language-css\">.box {\nflex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;\n}\n</code></pre> </li> <li>justify-content<br><code>justify-content</code>属性定义了项目在主轴上的对齐方式。<pre><code class=\"language-css\">.box {\njustify-content: flex-start | flex-end | center | space-between | space-around;\n}\n</code></pre> </li> <li>align-items<br><code>align-items</code>属性定义项目在交叉轴上如何对齐。<pre><code class=\"language-css\">.box {\nalign-items: flex-start | flex-end | center | baseline | stretch;\n}\n</code></pre> </li> <li>align-content<br><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。<pre><code class=\"language-css\">.box {\nalign-content: flex-start | flex-end | center | space-between | space-around | stretch;\n}\n</code></pre> </li> </ol> <h4 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"项目的属性\" data-level=\"4\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 项目的属性 </h4><hr> 以下属性设置在子元素上<ol> <li>order<br><code>order</code>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。<pre><code class=\"language-css\">.item {\norder: &lt;integer&gt;;\n}\n</code></pre> </li> <li>flex-grow<br><code>flex-grow</code>属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。<pre><code class=\"language-css\">.item {\nflex-grow: &lt;number&gt;; /* default 0 */\n}\n</code></pre> </li> <li>flex-shrink<br>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。设为0,该项目不会缩小.<pre><code class=\"language-css\">.item {\nflex-shrink: &lt;number&gt;; /* default 1 */\n}\n</code></pre> </li> <li>flex-basis<br><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。<br>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。<pre><code class=\"language-css\">.item {\nflex-basis: &lt;length&gt; | auto; /* default auto */\n}\n</code></pre> </li> <li>flex<br>flex属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。后两个属性可选。<br>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值<pre><code class=\"language-css\">.item {\nflex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ]\n}\n</code></pre> </li> <li>align-self<br><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。默认值为auto，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于stretch。<pre><code class=\"language-css\">.item {\nalign-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n</code></pre> </li> </ol> <h4 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"issues\" data-level=\"4\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> issues </h4><hr> <ol> <li>一列宽度固定,另一列内容适应宽度.<pre><code class=\"language-css\">.box {\n display: flex;\n}\n.left-item {\n flex: 1;\n overflow: auto; // 重要. 避免盒子宽度被内容撑开\n}\n.right-item {\n flex: 0 0 240px; =&gt; // flex-grow: 0; flex-shrink: 0; flex-basis: 240px;\n}\n</code></pre> </li> <li>顶部固定,中间内容适应并滚动,底部固定<pre><code class=\"language-css\">.box {\n display: flex;\n height: 100%;\n flex-direction: column;\n}\n.header {\n width: 100%;\n flex: 0 0 100px;\n}\n.content {\n width: 100%;\n flex: 1;\n overflow: auto;\n}\n.footer {\n width: 100%;\n flex: 0 0 50px;\n}\n</code></pre> <a href=\"https://codepen.io/houstoneb/pen/RwGPBJv\" target=\"_blank\" title=\"布局demo\">布局demo</a> <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"参考\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 参考 </h4></li> </ol> <hr> <a href=\"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html\" target=\"_blank\" title=\"flex布局阮一峰\">flex布局阮一峰</a><br><a href=\"https://yoksel.github.io/flex-cheatsheet/#section-display\" target=\"_blank\" title=\"flex在线demo\">flex在线demo</a>";
// Exports
module.exports = code;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Git<br>date: 2019-08-22 11:38:16<br>categories: Git<br>tags: Git<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"常用git命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 常用git命令 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"缓存\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 缓存 </h3>清除git缓存,添加新的文件进入暂存区<pre><code class=\"language-shell\">git add .\ngit rm -r --cached .\n</code></pre> <div class=\"post_note post_info\">应用场景:<br> - 先暂存文件,没有git ignore文件<br> - 将项目里的第三方git仓库化为己有</div> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"创建分支\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 创建分支 </h3><pre><code class=\"language-shell\"># 创建本地分支\ngit checkout -b local-branch\n# 拉取remote分支,并在本地创建分支\ngit checkout -b local-branch origin/remote-branch\n</code></pre> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"tag\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> tag </h3><pre><code class=\"language-shell\"># 查看本地全部tag\ngit tag\n# 给某个commit添加tag\ngit tag tagName commitHash\n推动本地tag到远端\ngit push --tags origin\n# 删除tag\ngit tag -d tagName\n# 查看tag是在哪个commit打的\ngit show tagName\n</code></pre> <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"config\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> config </h3>设置全局的git用户名和邮箱,不带global是设置该仓库的git用户名和邮箱<pre><code class=\"language-shell\">git config --global user.name newName\ngit config --global user.email newEmail\n</code></pre> <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"远端代码强制覆盖本地代码\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 远端代码强制覆盖本地代码 </h3><pre><code class=\"language-shell\">git fetch --all\ngit reset --hard origin/master \ngit pull\n</code></pre> <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"查看修改记录\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 查看修改记录 </h3><code>git log</code><table> <thead> <tr> <th>options</th> <th>desc</th> </tr> </thead> <tbody><tr> <td><code>pretty</code></td> <td>这个选项可以使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如 oneline 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 short，full 和 fuller 选项，它们展示信息的格式基本一致，但是详尽程度不一：</td> </tr> </tbody></table> <pre><code class=\"language-shell\"># 显示全部提交历史\ngit log --pretty=oneline\n# 显示某个文件的提交历史\ngit log --pretty=oneline src/frontend/service/common.js\n# 查看某个commitId的具体改动\ngit show 8dc03eb52d2598fa57671af146769d8c0b0653ee\n</code></pre> <h2 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"git提交规范\" data-level=\"2\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> git提交规范 </h2><hr> eg: <code>git commit -m &#39;feat: 新特性&#39;</code><table> <thead> <tr> <th>type</th> <th>desc</th> </tr> </thead> <tbody><tr> <td>feat</td> <td>新特性</td> </tr> <tr> <td>fix</td> <td>修改问题</td> </tr> <tr> <td>refactor</td> <td>代码重构</td> </tr> <tr> <td>docs</td> <td>文档修改</td> </tr> <tr> <td>style</td> <td>代码格式修改，非css</td> </tr> <tr> <td>test</td> <td>测试用例修改</td> </tr> <tr> <td>chore</td> <td>其他修改，比如构建流程，依赖管理</td> </tr> <tr> <td>scope</td> <td>commit影响的范围，比如: route, component, utils, build…</td> </tr> <tr> <td>subject</td> <td>commit 的概述</td> </tr> <tr> <td>body</td> <td>commit具体修改</td> </tr> <tr> <td>footer</td> <td>备注</td> </tr> </tbody></table> <h2 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"常见问题\" data-level=\"2\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 常见问题 </h2><hr> <ol> <li>Failed to connect to github.com port 443:connection timed out</li> </ol> <pre><code class=\"language-shell\"># 取消全局代理\ngit config --global --unset http.proxy\ngit config --global --unset https.proxy\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(82);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(83);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<hr> authorName: Yu<br>title: Interview<br>date: 2021-02-19 11:25:01<br>categories: Interview<br>tags: Interview<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"数组扁平化\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 数组扁平化 </h2><hr> <code>const arr = [1, [2, [3, [4, 5]]], 6];</code> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"1.flat\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1.flat </h3><pre><code class=\"language-js\">const res = arr.flat(Infinity);\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"2.正则\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2.正则 </h3><pre><code class=\"language-js\">const res = JSON.stringify([1, [2, [3, [4, 5]]], 6]).replace(/\\[|\\]/g, &#39;&#39;).split(&#39;,&#39;);\n</code></pre> <div class=\"post_note post_warning\">但是数据类型都会变为字符串</div> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"3.正则改良版\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 3.正则改良版 </h3><pre><code class=\"language-js\">const res = JSON.parse(&#39;[&#39; + JSON.stringify(arr).replace(/\\[|\\]/g, &#39;&#39;) + &#39;]&#39;);\n</code></pre> <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"4.使用reduce\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 4.使用reduce </h3><pre><code class=\"language-js\">const flatten = arr =&gt; {\n    return arr.reduce((pre, cur) =&gt; {\n        return pre.concat(Array.isArray(cur) ? flatten(cur) :  cur);\n    }, [])\n}\nconst res = flatten(arr);\n</code></pre> <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"5.函数递归\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 5.函数递归 </h3><pre><code class=\"language-js\">const res = [];\nconst fn = arr =&gt; {\n    for(let i = 0; i &lt; arr.length; i++) {\n        if(Array.isArray(arr[i])) {\n            fn(arr[i]);\n        } else {\n            res.push(arr[i]);\n        }\n    }\n}\nfn(arr);\n</code></pre> <h2 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"数组去重\" data-level=\"2\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 数组去重 </h2><hr> <code>const arr = [1, 1, &#39;1&#39;, 17, true, true, false, false, &#39;true&#39;, &#39;a&#39;, {}, {}];</code> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"1.利用Set\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1.利用Set </h3><pre><code class=\"language-js\">let res = Array.from(new Set(arr));\n</code></pre> <h3 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"2.两层for循环+splice\" data-level=\"3\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2.两层for循环+splice </h3><pre><code class=\"language-js\">let arr = [1, 1, &#39;1&#39;, 17, true, true, false, false, &#39;true&#39;, &#39;a&#39;, {}, {}];\nlet unique = arr =&gt; {\n    let len = arr.length;\n    for(let i = 0; i &lt; len; i++) {\n        for(let j = i + 1; j &lt;len; j++) {\n            if(arr[i] === arr[j]) {\n                arr.splice(j, 1);\n                // 每删除一个数,j--保证j的值经过自加后不变.同时,len--,减少循环次数提升性能\n                len--;\n                j--;\n            }\n        }\n    }\n    return arr;\n}\nunique(arr);\n</code></pre> <h3 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"3.利用indexOf\" data-level=\"3\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 3.利用indexOf </h3><pre><code class=\"language-js\">let arr = [1, 1, &#39;1&#39;, 17, true, true, false, false, &#39;true&#39;, &#39;a&#39;, {}, {}];\nlet unique = arr =&gt; {\n    let res = [];\n    for(let i = 0; i &lt; arr.length; i++) {\n        if(res.indexOf(arr[i]) &lt;= -1) {\n            res.push(arr[i]);\n        }\n    }\n    return res;\n}\nunique(arr);\n</code></pre> 当然也可以用include,filter,思路大同小异. <h3 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"4.利用include\" data-level=\"3\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 4.利用include </h3><pre><code class=\"language-js\">let unique = arr =&gt; {\n  const res = [];\n  for (let i = 0; i &lt; arr.length; i++) {\n    if (!res.includes(arr[i])) res.push(arr[i]);\n  }\n  return res;\n}\n</code></pre> <h3 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"5.利用filter\" data-level=\"3\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 5.利用filter </h3><pre><code class=\"language-javascript\">let unique = arr =&gt; {\n  return arr.filter((item, index) =&gt; {\n    return arr.indexOf(item) === index;\n  });\n}\n</code></pre> <h3 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"6.利用Map\" data-level=\"3\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 6.利用Map </h3><pre><code class=\"language-js\">let unique = arr =&gt; {\n  const map = new Map();\n  const res = [];\n  for (let i = 0; i &lt; arr.length; i++) {\n    if (!map.has(arr[i])) {\n      map.set(arr[i], true);\n      res.push(arr[i]);\n    }\n  }\n  return res;\n}\n</code></pre> <h2 id=\"heading-13\"> <a class=\"post-anchor\" data-id=\"heading-13\" data-text=\"类数组转化为数组\" data-level=\"2\" href=\"#heading-13\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 类数组转化为数组 </h2><hr> 类数组是具有length属性,但不具有数组原型上的方法.常见的类数组有arguments,DOM操作方法返回的结果. <h3 id=\"heading-14\"> <a class=\"post-anchor\" data-id=\"heading-14\" data-text=\"1.Array.from\" data-level=\"3\" href=\"#heading-14\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1.Array.from </h3><pre><code class=\"language-js\">Array.from(document.querySelectorAll(&#39;div&#39;));\n</code></pre> <h3 id=\"heading-15\"> <a class=\"post-anchor\" data-id=\"heading-15\" data-text=\"2.Array.prototype.slice.call()\" data-level=\"3\" href=\"#heading-15\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2.Array.prototype.slice.call() </h3><pre><code class=\"language-js\">Array.prototype.slice.call(document.querySelectorAll(&#39;div&#39;));\n</code></pre> <h3 id=\"heading-16\"> <a class=\"post-anchor\" data-id=\"heading-16\" data-text=\"3.扩展运算符\" data-level=\"3\" href=\"#heading-16\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 3.扩展运算符 </h3><pre><code class=\"language-js\">[...document.querySelectorAll(&#39;div&#39;)];\n</code></pre> <h3 id=\"heading-17\"> <a class=\"post-anchor\" data-id=\"heading-17\" data-text=\"4.利用concat\" data-level=\"3\" href=\"#heading-17\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 4.利用concat </h3><pre><code class=\"language-js\">Array.prototype.concat.apply([], document.querySelectorAll(&#39;div&#39;));\n</code></pre> <h2 id=\"heading-18\"> <a class=\"post-anchor\" data-id=\"heading-18\" data-text=\"Array.prototype.filter()\" data-level=\"2\" href=\"#heading-18\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Array.prototype.filter() </h2><hr> <pre><code class=\"language-js\">Array.prototype.filter = function(callback, thisArg) {\n  if (this == undefined) {\n    throw new TypeError(&#39;this is null or not undefined&#39;);\n  }\n  if (typeof callback !== &#39;function&#39;) {\n    throw new TypeError(callback + &#39;is not a function&#39;);\n  }\n  const res = [];\n  // 让O成为回调函数的对象传递(强制转换对象)\n  const O = Object(this);\n  // &gt;&gt;&gt;0 保证len为number,且为正整数\n  const len = O.length &gt;&gt;&gt; 0;\n  for (let i = 0; i &lt; len; i++) {\n    // 检查i是否在O的属性(会检查原型链)\n    if (i in O) {\n      // 回调函数调用传参\n      if (callback.call(thisArg, O[i], i, O)) {\n        res.push(O[i]);\n      }\n    }\n  }\n  return res;\n}\n</code></pre> 对于<code>&gt;&gt;&gt;0</code>有疑问的: <a href=\"https://zhuanlan.zhihu.com/p/100790268\" target=\"_blank\" title=\"解释&gt;&gt;&gt;0的作用\">解释&gt;&gt;&gt;0的作用</a> <h2 id=\"heading-19\"> <a class=\"post-anchor\" data-id=\"heading-19\" data-text=\"Array.prototype.map()\" data-level=\"2\" href=\"#heading-19\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Array.prototype.map() </h2><hr> <pre><code class=\"language-js\">Array.prototype.map = function(callback, thisArg) {\n  if (this == undefined) {\n    throw new TypeError(&#39;this is null or not defined&#39;);\n  }\n  if (typeof callback !== &#39;function&#39;) {\n    throw new TypeError(callback + &#39; is not a function&#39;);\n  }\n  const res = [];\n  // 同理\n  const O = Object(this);\n  const len = O.length &gt;&gt;&gt; 0;\n  for (let i = 0; i &lt; len; i++) {\n    if (i in O) {\n      // 调用回调函数并传入新数组\n      res[i] = callback.call(thisArg, O[i], i, this);\n    }\n  }\n  return res;\n}\n</code></pre> <h2 id=\"heading-20\"> <a class=\"post-anchor\" data-id=\"heading-20\" data-text=\"Array.prototype.forEach()\" data-level=\"2\" href=\"#heading-20\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Array.prototype.forEach() </h2><hr> <code>forEach</code>跟<code>map</code>类似,唯一不同的是<code>forEach</code>是没有返回值的.<pre><code class=\"language-js\">Array.prototype.forEach = function(callback, thisArg) {\n  if (this == null) {\n    throw new TypeError(&#39;this is null or not defined&#39;);\n  }\n  if (typeof callback !== &quot;function&quot;) {\n    throw new TypeError(callback + &#39; is not a function&#39;);\n  }\n  const O = Object(this);\n  const len = O.length &gt;&gt;&gt; 0;\n  let k = 0;\n  while (k &lt; len) {\n    if (k in O) {\n      callback.call(thisArg, O[k], k, O);\n    }\n    k++;\n  }\n}\n</code></pre> <h2 id=\"heading-21\"> <a class=\"post-anchor\" data-id=\"heading-21\" data-text=\"Array.prototype.reduce()\" data-level=\"2\" href=\"#heading-21\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Array.prototype.reduce() </h2><hr> <pre><code class=\"language-js\">Array.prototype.reduce = function(callback, initialValue) {\n  if (this == undefined) {\n    throw new TypeError(&#39;this is null or not defined&#39;);\n  }\n  if (typeof callback !== &#39;function&#39;) {\n    throw new TypeError(callbackfn + &#39; is not a function&#39;);\n  }\n  const O = Object(this);\n  const len = this.length &gt;&gt;&gt; 0;\n  let accumulator = initialValue;\n  let k = 0;\n  // 如果第二个参数为undefined的情况下\n  // 则数组的第一个有效值作为累加器的初始值\n  if (accumulator === undefined) {\n    while (k &lt; len &amp;&amp; !(k in O)) {\n      k++;\n    }\n    // 如果超出数组界限还没有找到累加器的初始值,则TypeError\n    if (k &gt;= len) {\n      throw new TypeError(&#39;Reduce of empty array with no initial value&#39;);\n    }\n    accumulator = O[k++];\n  }\n  while (k &lt; len) {\n    if (k in O) {\n      accumulator = callback.call(undefined, accumulator, O[k], k, O);\n    }\n    k++;\n  }\n  return accumulator;\n}\n</code></pre> <h2 id=\"heading-22\"> <a class=\"post-anchor\" data-id=\"heading-22\" data-text=\"Function.prototype.apply()\" data-level=\"2\" href=\"#heading-22\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Function.prototype.apply() </h2><hr> 第一个参数是绑定的this,默认为<code>window</code>,第二个参数是数组或类数组.<pre><code class=\"language-js\">Function.prototype.apply = function(context = window, args) {\n  if (typeof this !== &#39;function&#39;) {\n    throw new TypeError(&#39;Type Error&#39;);\n  }\n  const fn = Symbol(&#39;fn&#39;);\n  context[fn] = this;\n\n  const res = context[fn](...args);\n  delete context[fn];\n  return res;\n}\n</code></pre> <h2 id=\"heading-23\"> <a class=\"post-anchor\" data-id=\"heading-23\" data-text=\"Function.prototype.call()\" data-level=\"2\" href=\"#heading-23\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Function.prototype.call() </h2><hr> 于<code>call</code>唯一不同的是,<code>call()</code>方法接受的是一个参数列表.<pre><code class=\"language-js\">Function.prototype.call = function(context = window, ...args) {\n  if (typeof this !== &#39;function&#39;) {\n    throw new TypeError(&#39;Type Error&#39;);\n  }\n  const fn = Symbol(&#39;fn&#39;);\n  context[fn] = this;\n\n  const res = context[fn](...args);\n  delete context[fn];\n  return res;\n}\n</code></pre> <h2 id=\"heading-24\"> <a class=\"post-anchor\" data-id=\"heading-24\" data-text=\"Function.prototype.bind()\" data-level=\"2\" href=\"#heading-24\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Function.prototype.bind() </h2><hr> <pre><code class=\"language-js\">Function.prototype.bind = function(context, ...args) {\n  if (typeof this !== &#39;function&#39;) {\n    throw new Error(&quot;Type Error&quot;);\n  }\n  // 保存this的值\n  var self = this;\n\n  return function F() {\n    // 考虑new的情况\n    if(this instanceof F) {\n      return new self(...args, ...arguments)\n    }\n    return self.apply(context, [...args, ...arguments])\n  }\n}\n</code></pre> <h2 id=\"heading-25\"> <a class=\"post-anchor\" data-id=\"heading-25\" data-text=\"JSONP\" data-level=\"2\" href=\"#heading-25\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> JSONP </h2><hr> 前台定义待调用函数,后台返回调用该函数的代码.<pre><code class=\"language-js\">let jsonp = (url, params, callbackName) =&gt; {\n    function generateUrl() {\n        let dataSrc = &#39;&#39;;\n        for(let key in params) {\n            if(Object.prototype.hasOwnProperty.call(params, key)) {\n                dataSrc += `${key}=${params[key]}&amp;`;\n            }\n        }\n        dataSrc += `callbackName=${callbackName}`;\n        return `${url}?${dataSrc}`;\n    }\n\n    return new Promise((resolve, reject) =&gt; {\n        let scriptEle = document.createElement(&#39;script&#39;);\n        let doc = document.documentElement || document.body;\n        scriptEle.src = generateUrl();\n        doc.appendChild(scriptEle)\n        window[callbackName] = function(data) {\n            resolve(data);\n            doc.removeChild(scriptEle);\n        }\n    })\n}\n</code></pre> <h2 id=\"heading-26\"> <a class=\"post-anchor\" data-id=\"heading-26\" data-text=\"前端需要注意哪些 SEO\" data-level=\"2\" href=\"#heading-26\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 前端需要注意哪些 SEO </h2><hr> <ol> <li>合理的 title、description、keywords: 搜索对着三项的权重逐个减小,title 值强调重点即可,重要关键词出现不要超过 2 次,而且要靠前,不同页面 title 要有所不同；description 把页面内容高度概括,长度合适,不可过分堆砌关键词,不同页面 description 有所不同；keywords 列举出重要关键词即可</li> <li>语义化的 HTML 代码,符合 W3C 规范: 语义化代码让搜索引擎容易理解网页</li> <li>重要内容 HTML 代码放在最前: 搜索引擎抓取 HTML 顺序是从上到下,有的搜索引擎对抓取长度有限制,保证重要内容一定会被抓取</li> <li>重要内容不要用 js 输出: 爬虫不会执行 js 获取内容</li> <li>少用 iframe: 搜索引擎不会抓取 iframe 中的内容</li> <li>非装饰性图片必须加 alt</li> <li>提高网站速度: 网站速度是搜索引擎排序的一个重要指标</li> </ol> <h2 id=\"heading-27\"> <a class=\"post-anchor\" data-id=\"heading-27\" data-text=\"css sprite 是什么,有什么优缺点\" data-level=\"2\" href=\"#heading-27\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> css sprite 是什么,有什么优缺点 </h2><hr> 概念: 将多个小图片拼接到一个图片中.通过 background-position 和元素尺寸调节需要显示的背景图案.<br>优点: <ol> <li>减少 HTTP 请求数,极大地提高页面加载速度</li> <li>增加图片信息重复度,提高压缩比,减少图片大小</li> <li>更换风格方便,只需在一张或几张图片上修改颜色或样式即可实现</li> </ol> 缺点: <ol> <li>图片合并麻烦</li> <li>维护麻烦,修改一个图片可能需要重新布局整个图片,样式</li> </ol> <h2 id=\"heading-28\"> <a class=\"post-anchor\" data-id=\"heading-28\" data-text=\"display:  none;与visibility:  hidden;的区别\" data-level=\"2\" href=\"#heading-28\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> display: none;与visibility: hidden;的区别 </h2><hr> 共同点: 它们都能让元素不可见<br>区别: <ol> <li><code>display: none;</code>会让元素完全从渲染树中消失,渲染的时候不占据任何空间；<code>visibility: hidden;</code>不会让元素从渲染树消失,渲染时元素继续占据空间,只是内容不可见.</li> <li><code>display: none;</code>是非继承属性,子孙节点消失由于元素从渲染树消失造成,通过修改子孙节点属性无法显示；<code>visibility: hidden;</code>是继承属性,子孙节点由于继承了 hidden 而消失,通过设置<code>visibility: visible;</code>可以让子孙节点显示.</li> <li>修改常规流中元素的 display 通常会造成文档重排.修改 visibility 属性只会造成本元素的重绘.</li> <li>读屏器不会读取<code>display: none;</code>元素内容；会读取<code>visibility: hidden;</code>元素内容.</li> </ol> <h2 id=\"heading-29\"> <a class=\"post-anchor\" data-id=\"heading-29\" data-text=\"link与@import的区别\" data-level=\"2\" href=\"#heading-29\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> link与@import的区别 </h2><hr> <ol> <li><code>link</code>是 HTML 方式, <code>@import</code>是 CSS 方式</li> <li><code>link</code>最大限度支持并行下载,<code>@import</code>过多嵌套导致串行下载,出现FOUC</li> <li><code>link</code>可以通过<code>rel=&quot;alternate stylesheet&quot;</code>指定候选样式</li> <li>浏览器对<code>link</code>支持早于<code>@import</code>,可以使用<code>@import</code>对老浏览器隐藏样式</li> <li><code>@import</code>必须在样式规则之前,可以在css文件中引用其他文件</li> <li>总体来说: <code>link</code>优于<code>@import</code></li> </ol> <h2 id=\"heading-30\"> <a class=\"post-anchor\" data-id=\"heading-30\" data-text=\"清理浮动\" data-level=\"2\" href=\"#heading-30\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 清理浮动 </h2><hr> <pre><code class=\"language-css\">.clearfix {\n  *zoom:  1;\n}\n.clearfix: : before, .clearfix: : after {\n  display:  table;\n  content:  &quot; &quot;;\n}\n.clearfix: : after {\n  clear:  both;\n}\n</code></pre> <h2 id=\"heading-31\"> <a class=\"post-anchor\" data-id=\"heading-31\" data-text=\"什么是 FOUC?如何避免\" data-level=\"2\" href=\"#heading-31\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 什么是 FOUC?如何避免 </h2><hr> <strong>Flash Of Unstyled Content</strong>: 用户定义样式表加载之前浏览器使用默认样式显示文档,用户样式加载渲染之后再从新显示文档,造成页面闪烁.解决方法: 把样式表放到文档的head.<br><code>&lt;style type=&quot;text/css&quot; media=&quot;all&quot;&gt;@import &quot;../fouc.css&quot;;&lt;/style&gt;</code><br>而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。<br>解决方法简单的出奇，只要在<code>&lt;head&gt;</code>之间加入一个<code>&lt;link&gt;</code>或者<code>&lt;script&gt;</code>元素就可以了。 <h2 id=\"heading-32\"> <a class=\"post-anchor\" data-id=\"heading-32\" data-text=\"sessionStorage,localStorage,cookie 区别\" data-level=\"2\" href=\"#heading-32\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> sessionStorage,localStorage,cookie 区别 </h2><hr> <ol> <li>都会在浏览器端保存,有大小限制,同源限制</li> <li>cookie 会在请求时发送到服务器,作为会话标识,服务器可修改 cookie；web storage 不会发送到服务器</li> <li>cookie 有 path 概念,子路径可以访问父路径 cookie,父路径不能访问子路径 cookie</li> <li>有效期: cookie 在设置的有效期内有效,默认为浏览器关闭；sessionStorage 在窗口关闭前有效,localStorage 长期有效,直到用户删除</li> <li>共享: sessionStorage 不能共享,localStorage 在同源文档之间共享,cookie 在同源且符合 path 规则的文档之间共享</li> <li>localStorage 的修改会促发其他文档窗口的 update 事件</li> <li>cookie 有 secure 属性要求 HTTPS 传输</li> <li>浏览器不能保存超过 300 个 cookie,单个服务器不能超过 20 个,每个 cookie 不能超过 4k.web storage 大小支持能达到 5M</li> </ol> <h2 id=\"heading-33\"> <a class=\"post-anchor\" data-id=\"heading-33\" data-text=\"javascript 跨域通信\" data-level=\"2\" href=\"#heading-33\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> javascript 跨域通信 </h2><hr> 同源: 两个文档同源需满足<br><div class=\"post_note post_info\">1.协议相同;2.域名相同;3.端口相同</div><br>跨域通信: js 进行 DOM 操作、通信时如果目标与当前窗口不满足同源条件,浏览器为了安全会阻止跨域操作.跨域通信通常有以下方法: <ol> <li>如果是 log 之类的简单单项通信,新建<code>&lt;img&gt;,&lt;script&gt;,&lt;link&gt;,&lt;iframe&gt;</code>元素,通过 src,href 属性设置为目标url.实现跨域请求</li> <li>如果请求json 数据,使用<code>&lt;script&gt;</code>进行<code>jsonp</code>请求</li> <li>现代浏览器中多窗口通信使用 HTML5 规范的 targetWindow.postMessage(data, origin);其中 data 是需要发送的对象,origin 是目标窗口的 origin.window.addEventListener(‘message’, handler, false);handler 的 event.data 是 postMessage 发送来的数据,event.origin 是发送窗口的 origin,event.source 是发送消息的窗口引用</li> <li>内部服务器代理请求跨域 url,然后返回数据</li> <li>跨域请求数据,现代浏览器可使用 HTML5 规范的 CORS 功能,只要目标服务器返回 HTTP 头部<strong>Access-Control-Allow-Origin: *</strong>即可像普通 ajax 一样访问跨域资源</li> </ol> <h2 id=\"heading-34\"> <a class=\"post-anchor\" data-id=\"heading-34\" data-text=\"javascript 有哪几种数据类型\" data-level=\"2\" href=\"#heading-34\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> javascript 有哪几种数据类型 </h2><hr> 六种基本数据类型:<br><code>undefined null string boolean number symbol(ES6) BigInt(ES10)</code><br>一种引用类型:<br><code>Object 对象子类型（Array，Function）</code> <h2 id=\"heading-35\"> <a class=\"post-anchor\" data-id=\"heading-35\" data-text=\"symbol 有什么用处\" data-level=\"2\" href=\"#heading-35\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> symbol 有什么用处 </h2><hr> 可以用来表示一个独一无二的变量防止命名冲突. <h2 id=\"heading-36\"> <a class=\"post-anchor\" data-id=\"heading-36\" data-text=\"什么闭包,闭包有什么用\" data-level=\"2\" href=\"#heading-36\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 什么闭包,闭包有什么用 </h2><hr> 闭包是在某个作用域内定义的函数,它可以访问这个作用域内的所有变量.闭包作用域链通常包括三个部分: <ol> <li>函数本身作用域.</li> <li>闭包定义时的作用域.</li> <li>全局作用域.</li> </ol> 闭包常见用途: <ol> <li>创建特权方法用于访问控制</li> <li>事件处理程序及回调</li> </ol> <h2 id=\"heading-37\"> <a class=\"post-anchor\" data-id=\"heading-37\" data-text=\"javascript 有哪几种方法定义函数\" data-level=\"2\" href=\"#heading-37\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> javascript 有哪几种方法定义函数 </h2><hr> <ol> <li>函数声明(函数语句)</li> </ol> <pre><code class=\"language-js\">function test(a) {\n    console.log(a);\n}\n</code></pre> <ol start=\"2\"> <li>函数表达式</li> </ol> <pre><code class=\"language-js\">// 匿名函数\nvar myFunction = function() {\n    // statements\n}\n// 也可以定义时为函数命名\nvar myFunction = function namedFunction(){\n    // statements\n}\n</code></pre> <ol start=\"3\"> <li>箭头函数表达式</li> </ol> <pre><code class=\"language-js\">(a) =&gt; {\n    console.log(a);\n}\n</code></pre> <ol start=\"4\"> <li>Function构造函数</li> </ol> <pre><code class=\"language-js\">var multiply = new Function(&#39;x&#39;, &#39;y&#39;, &#39;return x * y&#39;);\n</code></pre> <h2 id=\"heading-38\"> <a class=\"post-anchor\" data-id=\"heading-38\" data-text=\"javascript 有哪些方法定义对象\" data-level=\"2\" href=\"#heading-38\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> javascript 有哪些方法定义对象 </h2><hr> 对象字面量: <code>var obj = {}</code>;<br>构造函数: <code>var obj = new Object()</code>;<br>Object.create(): <code>var obj = Object.create(Object.prototype)</code>; <h2 id=\"heading-39\"> <a class=\"post-anchor\" data-id=\"heading-39\" data-text=\"===运算符判断相等的流程是怎样的\" data-level=\"2\" href=\"#heading-39\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ===运算符判断相等的流程是怎样的 </h2><hr> 如果两个值不是相同类型,它们不相等<br>如果两个值都是 null 或者都是 undefined,它们相等<br>如果两个值都是布尔类型 true 或者都是 false,它们相等<br>如果其中有一个是NaN,它们不相等<br>如果都是数值型并且数值相等,他们相等, -0 等于 0<br>如果他们都是字符串并且在相同位置包含相同的 16 位值,他它们相等；如果在长度或者内容上不等,它们不相等；两个字符串显示结果相同但是编码不同==和<br>===都认为他们不相等<br>如果他们指向相同对象、数组、函数,它们相等；如果指向不同对象,他们不相等 <h2 id=\"heading-40\"> <a class=\"post-anchor\" data-id=\"heading-40\" data-text=\"==运算符判断相等的流程是怎样的\" data-level=\"2\" href=\"#heading-40\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ==运算符判断相等的流程是怎样的 </h2><hr> 如果两个值类型相同,按照===比较方法进行比较<br>如果类型不同,使用如下规则进行比较<br>如果其中一个值是 null,另一个是 undefined,它们相等<br>如果一个值是数字另一个是字符串,将字符串转换为数字进行比较<br>如果有布尔类型,将true 转换为 1,false 转换为 0,然后用==规则继续比较<br>如果一个值是对象,另一个是数字或字符串,将对象转换为原始值然后用==规则继续比较<br>其他所有情况都认为不相等 <h2 id=\"heading-41\"> <a class=\"post-anchor\" data-id=\"heading-41\" data-text=\"算法题\" data-level=\"2\" href=\"#heading-41\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 算法题 </h2><hr> <strong>1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间,然后写一个 myClear,停止上面的 mySetInterVal</strong><pre><code class=\"language-js\">let MySetInterval = function(fn, a, b) {\n    this.a = a;\n    this.b = b;\n    this.count = 0;\n    this.timer = -1;\n\n    this.start = () =&gt; {\n        this.timer = setTimeout(() =&gt; {\n            this.count++;\n            fn();\n            console.log(a + this.count * b, &#39;time&#39;);\n            this.start();\n        }, a + this.count * b);\n    }\n\n    this.stop = () =&gt; {\n        clearTimeout(this.timer);\n        this.timer = 0;\n    }\n}\n\nlet a = new MySetInterval(() =&gt; {console.log(&#39;timer&#39;)}, 1000, 2000);\na.start()\n// a.stop()\n</code></pre> <em>**2.</em> <h2 id=\"heading-42\"> <a class=\"post-anchor\" data-id=\"heading-42\" data-text=\"说一下 Http 缓存策略,有什么区别,分别解决了什么问题\" data-level=\"2\" href=\"#heading-42\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 说一下 Http 缓存策略,有什么区别,分别解决了什么问题 </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/14\" target=\"_blank\" title=\"Http 缓存策略\">Http 缓存策略</a> <h2 id=\"heading-43\"> <a class=\"post-anchor\" data-id=\"heading-43\" data-text=\"前端安全、中间人攻击\" data-level=\"2\" href=\"#heading-43\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 前端安全、中间人攻击 </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/16\" target=\"_blank\" title=\"前端安全\">前端安全</a> <h2 id=\"heading-44\"> <a class=\"post-anchor\" data-id=\"heading-44\" data-text=\"对闭包的看法,为什么要用闭包？说一下闭包原理以及应用场景\" data-level=\"2\" href=\"#heading-44\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 对闭包的看法,为什么要用闭包？说一下闭包原理以及应用场景 </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/17\" target=\"_blank\" title=\"闭包\">闭包</a> <h2 id=\"heading-45\"> <a class=\"post-anchor\" data-id=\"heading-45\" data-text=\"css 伪类与伪元素区别\" data-level=\"2\" href=\"#heading-45\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> css 伪类与伪元素区别 </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/18\" target=\"_blank\" title=\"css 伪类与伪元素区别\">css 伪类与伪元素区别</a> <h2 id=\"heading-46\"> <a class=\"post-anchor\" data-id=\"heading-46\" data-text=\"实现 lodash 的_.get\" data-level=\"2\" href=\"#heading-46\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 实现 lodash 的_.get </h2><hr> 在 js 中经常会出现嵌套调用这种情况,如<code>a.b.c.d.e</code>,但是这么写很容易抛出异常.你需要这么写<code>a &amp;&amp; a.b &amp;&amp; a.b.c &amp;&amp; a.b.c.d &amp;&amp; a.b.c.d.e</code>,但是显得有些啰嗦与冗长了.特别是在<code>graphql</code>中,这种嵌套调用更是难以避免.<br>这时就需要一个<code>get</code>函数,使用<code>get(a, &#39;b.c.d.e&#39;)</code>简单清晰,并且容错性提高了很多.<br>1)代码实现<pre><code class=\"language-js\">function get(source, path, defaultValue = undefined) {\n  // a[3].b -&gt; a.3.b -&gt; [a,3,b]\n // path 中也可能是数组的路径,全部转化成 . 运算符并组成数组\n  const paths = path.replace(/\\[(\\d+)\\]/g, &quot;.$1&quot;).split(&quot;.&quot;);\n  let result = source;\n  for (const p of paths) {\n    // 注意 null 与 undefined 取属性会报错,所以使用 Object 包装一下.\n    result = Object(result)[p];\n    if (result == undefined) {\n      return defaultValue;\n    }\n  }\n  return result;\n}\n// 测试用例\nconsole.log(get({ a:  null }, &quot;a.b.c&quot;, 3)); // output:  3\nconsole.log(get({ a:  undefined }, &quot;a&quot;, 3)); // output:  3\nconsole.log(get({ a:  null }, &quot;a&quot;, 3)); // output:  3\nconsole.log(get({ a:  [{ b:  1 }] }, &quot;a[0].b&quot;, 3)); // output:  1\n</code></pre> 2)代码实现<br>不考虑数组的情况<pre><code class=\"language-js\">const _get = (object, keys, val) =&gt; {\n return keys.split(/\\./).reduce(\n  (o, j)=&gt;( (o || {})[j] ), \n  object\n ) || val\n}\nconsole.log(get({ a:  null }, &quot;a.b.c&quot;, 3)); // output:  3\nconsole.log(get({ a:  undefined }, &quot;a&quot;, 3)); // output:  3\nconsole.log(get({ a:  null }, &quot;a&quot;, 3)); // output:  3\nconsole.log(get({ a:  { b:  1 } }, &quot;a.b&quot;, 3)); // output:  1\n</code></pre> <h2 id=\"heading-47\"> <a class=\"post-anchor\" data-id=\"heading-47\" data-text=\"实现链式调用\" data-level=\"2\" href=\"#heading-47\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 实现链式调用 </h2><hr> 链式调用的核心就在于调用完的方法将自身实例返回<br>1)示例一<pre><code class=\"language-js\">function Class1() {\n    console.log(&#39;初始化&#39;)\n}\nClass1.prototype.method = function(param) {\n    console.log(param)\n    return this\n}\nlet cl = new Class1()\n//由于new 在实例化的时候this会指向创建的对象, 所以this.method这个方法会在原型链中找到.\ncl.method(&#39;第一次调用&#39;).method(&#39;第二次链式调用&#39;).method(&#39;第三次链式调用&#39;)\n</code></pre> 2)示例二<pre><code class=\"language-js\">var obj = {\n    a:  function() {\n        console.log(&quot;a&quot;);\n        return this;\n    },\n    b:  function() {\n        console.log(&quot;b&quot;);\n        return this;\n    },\n};\nobj.a().b();\n</code></pre> <h2 id=\"heading-48\"> <a class=\"post-anchor\" data-id=\"heading-48\" data-text=\"React 事件绑定原理\" data-level=\"2\" href=\"#heading-48\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> React 事件绑定原理 </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/23\" target=\"_blank\" title=\"React 事件绑定原理\">React 事件绑定原理</a> <h2 id=\"heading-49\"> <a class=\"post-anchor\" data-id=\"heading-49\" data-text=\"webpack 做过哪些优化,开发效率方面、打包策略方面\" data-level=\"2\" href=\"#heading-49\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> webpack 做过哪些优化,开发效率方面、打包策略方面 </h2><hr> <a href=\"https://www.cnblogs.com/skychx/p/webpack-dllplugin.html\" target=\"_blank\" title=\"你真的需要 Webpack DllPlugin 吗?\">你真的需要 Webpack DllPlugin 吗?</a><br><a href=\"https://github.com/lgwebdream/FE-Interview/issues/25\" target=\"_blank\" title=\"webpack 做过哪些优化,开发效率方面、打包策略\">webpack 做过哪些优化,开发效率方面、打包策略</a> <h2 id=\"heading-50\"> <a class=\"post-anchor\" data-id=\"heading-50\" data-text=\"说一下 react-fiber\" data-level=\"2\" href=\"#heading-50\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 说一下 react-fiber </h2><hr> <a href=\"https://github.com/lgwebdream/FE-Interview/issues/33\" target=\"_blank\" title=\"说一下 react-fiber\">说一下 react-fiber</a> <h2 id=\"heading-51\"> <a class=\"post-anchor\" data-id=\"heading-51\" data-text=\"手写发布订阅\" data-level=\"2\" href=\"#heading-51\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 手写发布订阅 </h2><hr> <pre><code class=\"language-js\">class EventEmitter {\n    constructor() {\n        this.events = [];\n    }\n\n    on(eventName, callback) {\n        if(!this.events[eventName]) {\n            this.events[eventName] = [callback];\n        } else {\n            this.events[eventName].push(callback);\n        }\n    }\n\n    emit(eventName) {\n        this.events[eventName] &amp;&amp; this.events[eventName].forEach(cb =&gt; {\n            cb();\n        })\n    }\n\n    removeListener(eventName, callback) {\n        if(this.events[eventName]) {\n            this.events[eventName] = this.events[eventName].filter(cb =&gt; cb !== callback);\n        }\n    }\n\n    once(eventName, callback) {\n        let fn = () =&gt; {\n            callback();\n            this.removeListener(eventName, callback);\n        }\n\n        this.on(eventName, fn);\n    }\n}\n\nlet em = new EventEmitter();\nlet fn = () =&gt; {\n  console.log(&#39;work ing&#39;);\n}\nem.on(&#39;work&#39;, fn);\nem.emit(&#39;work&#39;)\n</code></pre> <h2 id=\"heading-52\"> <a class=\"post-anchor\" data-id=\"heading-52\" data-text=\"手写数组转树\" data-level=\"2\" href=\"#heading-52\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 手写数组转树 </h2><hr> <pre><code class=\"language-js\">let input = [\n  {\n    id:  3,\n    val:  &quot;班级2&quot;,\n    parentId:  1,\n  },\n  {\n    id:  1,\n    val:  &quot;学校&quot;,\n    parentId:  null,\n  },\n  {\n    id:  2,\n    val:  &quot;班级1&quot;,\n    parentId:  null,\n  },\n  {\n    id:  4,\n    val:  &quot;学生1&quot;,\n    parentId:  2,\n  },\n  {\n    id:  5,\n    val:  &quot;学生2&quot;,\n    parentId:  3,\n  },\n  {\n    id:  6,\n    val:  &quot;学生3&quot;,\n    parentId:  3,\n  }\n];\nlet arrayToTree = function(arr) {\n    let result = [];\n    let map = {};\n    if(!Array.isArray(arr)) {\n        return arr;\n    }\n    arr.forEach(item =&gt; {\n        delete item.children;\n        map[item.id] = item;\n    })\n\n    arr.forEach(item =&gt; {\n        let parent = map[item.parentId];\n        if(parent) {\n            (parent.children || (parent.children = [])).push(item);\n        } else {\n            result.push(item);\n        }\n    });\n    return result;\n}\n\nconsole.log(arrayToTree(input));\n</code></pre> <h2 id=\"heading-53\"> <a class=\"post-anchor\" data-id=\"heading-53\" data-text=\"使用ES6 的Proxy实现数组负索引\" data-level=\"2\" href=\"#heading-53\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 使用ES6 的Proxy实现数组负索引 </h2>负索引: 例如,可以简单地使用<code>arr[-1]</code>替代<code>arr[arr.length-1]</code>访问最后一个元素,<code>[-2]</code>访问倒数第二个元素,以此类推)<pre><code class=\"language-js\">let proxyArray = function(arr) {\n    let length = arr.length;\n    return new Proxy(arr, {\n        get(target, key) {\n            key = +key;\n            while(key &lt; 0) {\n                key += length;\n            }\n            return target[key];\n        }\n    });\n};\nconsole.log(proxyArray([1,2,3,4,5])[-60]);\n</code></pre> <h2 id=\"heading-54\"> <a class=\"post-anchor\" data-id=\"heading-54\" data-text=\"请写出下面代码执行的的结果\" data-level=\"2\" href=\"#heading-54\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 请写出下面代码执行的的结果 </h2> <h3 id=\"heading-55\"> <a class=\"post-anchor\" data-id=\"heading-55\" data-text=\"1\" data-level=\"3\" href=\"#heading-55\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1 </h3><hr> <pre><code class=\"language-js\">function side(arr) {\n  arr[0] = arr[2];\n}\nfunction a(a, b, c = 3) {\n  c = 10;\n  side(arguments);\n  return a + b + c;\n}\na(1, 1, 1);\n// 写出执行结果,并解释原因\n</code></pre> 答案: 12<br>不添加默认值,结果为21<br>解析:<br><code>arguments</code>中<code>c</code>的值还是 1 不会变成 10,<br>因为<code>a</code>函数加了默认值,就按<code>ES</code>的方式解析,<code>ES6</code>是有块级作用域的,所以<code>c</code>的值是不会改变的<br>加了默认值,则转为严格模式(其实也可以使用 “use strict” 转),这时候参数(a、b、c)与<code>arguments</code>没有绑定关系,所以修改<code>arguments</code>不会影响到参数(a、b、c)的值,修改参数(a、b、c)也不会影响到<code>arguments</code>.<br>不加默认值,则为非严格模式,结果和上面的相反. <h3 id=\"heading-56\"> <a class=\"post-anchor\" data-id=\"heading-56\" data-text=\"2\" data-level=\"3\" href=\"#heading-56\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2 </h3><hr> <pre><code class=\"language-js\">var min = Math.min();\nmax = Math.max();\nconsole.log(min &lt; max);\n// 写出执行结果,并解释原因\n</code></pre> 答案: false<br>解析:<br>按常规的思路,这段代码应该输出<code>true</code>,毕竟最小值小于最大值.但是却输出<code>false</code><br>MDN 相关文档是这样解释的<br><code>Math.min</code>的参数是0个或者多个,如果多个参数很容易理解,返回参数中最小的.如果没有参数,则返回<code>Infinity</code>,无穷大.<br>而<code>Math.max</code>没有传递参数时返回的是<code>-Infinity</code>.所以输出<code>false</code> <h3 id=\"heading-57\"> <a class=\"post-anchor\" data-id=\"heading-57\" data-text=\"3\" data-level=\"3\" href=\"#heading-57\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 3 </h3><hr> <pre><code class=\"language-js\">var a = 1;\n(function a () {\n    a = 2;\n    console.log(a);\n})();\n</code></pre> 答案<pre><code class=\"language-js\">ƒ  a () {\n      a = 2;\n      console.log(a);\n }\n</code></pre> 解析:<br>立即调用的函数表达式<code>IIFE</code>有一个自己独立的作用域,如果函数名称与内部变量名称冲突,就会永远执行函数本身；所以上面的结果输出是函数本身；<pre><code class=\"language-js\">// 立即执行的函数表达式(IIFE)的函数名称跟内部变量名称重名后,函数名称优先,因为函数名称是不可改变的,内部会静默失败,在严格模式下会报错\nvar a = 1;\n(function a () {\n    &#39;use strict&#39;;\n    a = 2;\n    console.log(a);\n})();\n VM1059:4 Uncaught TypeError: Assignment to constant variable.\n    at a (&lt;anonymous&gt;:4:7)\n    at &lt;anonymous&gt;:6:3\n</code></pre> <h3 id=\"heading-58\"> <a class=\"post-anchor\" data-id=\"heading-58\" data-text=\"4\" data-level=\"3\" href=\"#heading-58\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 4 </h3><hr> <pre><code class=\"language-js\">(function () {\n  var a = (b = 5);\n})();\nconsole.log(b);\nconsole.log(a);\n// 写出执行结果,并解释原因\n</code></pre> 答案: 5; Error, a is not defined<br>解析:<br>在这个立即执行函数表达式<code>IIFE</code>中包括两个赋值操作,其中<code>a</code>使用<code>var</code>关键字进行声明,因此其属于函数内部的局部变量(仅存在于函数中),相反,<code>b</code>被分配到全局命名空间.<br>另一个需要注意的是,这里没有在函数内部使用严格模式<code>use strict;</code>.如果启用了严格模式,代码会在输出 b 时报错<code>Uncaught ReferenceError: b is not defined</code>,需要记住的是,严格模式要求你显式的引用全局作用域.因此,你需要写成: <pre><code class=\"language-js\">(function () {\n  &quot;use strict&quot;;\n  var a = (window.b = 5);\n})();\nconsole.log(b);\n</code></pre> 再看一个<pre><code class=\"language-js\">(function() {\n   &#39;use strict&#39;;\n   var a = b = 5;\n})();\n\nconsole.log(b);  //Uncaught ReferenceError: b is not defined\n\n/*---------------------------*/\n\n(function() {\n   &#39;use strict&#39;;\n   var a = window.b = 5;\n})();\n\nconsole.log(b);  // 5\n</code></pre> <h3 id=\"heading-59\"> <a class=\"post-anchor\" data-id=\"heading-59\" data-text=\"5\" data-level=\"3\" href=\"#heading-59\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 5 </h3><hr> <pre><code class=\"language-js\">var fullname = &#39;a&#39;;\nvar obj = {\n   fullname: &#39;b&#39;,\n   prop: {\n      fullname: &#39;c&#39;,\n      getFullname: function() {\n         return this.fullname;\n      }\n   }\n};\nconsole.log(obj.prop.getFullname()); // c\nvar test = obj.prop.getFullname;\nconsole.log(test());  // a\n</code></pre> 答案: c a<br>解析:<br>原因在于<code>this</code>指向的是函数的执行环境,<code>this</code>取决于其被谁调用了,而不是被谁定义了.<br>对第一个<code>console.log()</code>语句而言,<code>getFullName()</code>是作为<code>obj.prop</code>对象的一个方法被调用的,因此此时的执行环境应该是这个对象.另一方面,但<code>getFullName()</code>被分配给<code>test</code>变量时,此时的执行环境变成全局对象<code>window</code>,原因是<code>test</code>是在全局作用域中定义的.因此,此时的<code>this</code>指向的是全局作用域的<code>fullname</code>变量,即<code>a</code>. <h3 id=\"heading-60\"> <a class=\"post-anchor\" data-id=\"heading-60\" data-text=\"6\" data-level=\"3\" href=\"#heading-60\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 6 </h3><hr> <pre><code class=\"language-js\">var company = {\n    address: &#39;beijing&#39;\n}\nvar yideng = Object.create(company);\ndelete yideng.address\nconsole.log(yideng.address);\n// 写出执行结果,并解释原因\n</code></pre> 答案: beijing<br>解析:<br>这里的<code>yideng</code>通过<code>prototype</code>继承了<code>company</code>的<code>address</code>.<code>yideng</code>自己并没有<code>address</code>属性.所以<code>delete</code>操作符的作用是无效的. <h3 id=\"heading-61\"> <a class=\"post-anchor\" data-id=\"heading-61\" data-text=\"7\" data-level=\"3\" href=\"#heading-61\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 7 </h3><hr> <pre><code class=\"language-js\">var foo = function bar(){ return 12; };\nconsole.log(typeof bar());  \n// 写出执行结果,并解释原因\n</code></pre> 答案: 输出是抛出异常,<code>bar is not defined</code>.<br>解析:<br>这种命名函数表达式函数只能在函数体内有效 <h3 id=\"heading-62\"> <a class=\"post-anchor\" data-id=\"heading-62\" data-text=\"8\" data-level=\"3\" href=\"#heading-62\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 8 </h3><hr> <pre><code class=\"language-js\">var x=1;\nif(function f(){}){\n    x += typeof f;\n}\nconsole.log(x)\n// 写出执行结果,并解释原因\n</code></pre> 答案: 1undefined(字符串)<br>解析:<br>条件判断为假的情况有: <code>0,false,&#39;&#39;,null,undefined</code>,未定义对象.函数声明写在运算符中,其为<code>true</code>,但放在运算符中的函数声明在执行阶段是找不到的.另外,对未声明的变量执行<code>typeOf</code>不会报错,会返回<code>undefined</code> <h3 id=\"heading-63\"> <a class=\"post-anchor\" data-id=\"heading-63\" data-text=\"9\" data-level=\"3\" href=\"#heading-63\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 9 </h3><hr> <pre><code class=\"language-js\">function f(){\n      return f;\n }\nconsole.log(new f() instanceof f);\n// 写出执行结果,并解释原因\n</code></pre> 答案: false<br>解析:<br><code>a instanceof b</code>用于检测<code>a</code>是不是<code>b</code>的实例.如果题目<code>f</code>中没有<code>return f</code>,则答案明显为<code>true</code>;而在本题中<code>new f()</code>其返回的结果为<code>f</code>的函数对象,其并不是<code>f</code>的一个实例.<pre><code class=\"language-js\">function f(){}\n console.log(new f() instanceof f);\n// 答案: true\n</code></pre> <div class=\"post_note post_info\"><code>new f()</code>返回的是<code>f</code>这个函数对象.<br>而<code>o instanceOf O</code>的实现原理是,检测<code>o</code>的原型链上有没有<code>O.prototype</code>即<code>o.proto == O.prototype || o.proto.proto == O.prototype</code>.调试可以看出,两者并不相同.</div> <h3 id=\"heading-64\"> <a class=\"post-anchor\" data-id=\"heading-64\" data-text=\"10\" data-level=\"3\" href=\"#heading-64\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 10 </h3><hr> <pre><code class=\"language-js\">var foo = {\n        bar: function(){\n            return this.baz;\n        },\n         baz:1\n    }\nconsole.log(typeof (f=foo.bar)());\n//写出执行结果,并解释原因\n</code></pre> 答案: undefined <h3 id=\"heading-65\"> <a class=\"post-anchor\" data-id=\"heading-65\" data-text=\"11\" data-level=\"3\" href=\"#heading-65\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 11 </h3><hr> <pre><code class=\"language-js\">for (let i = 0; i &lt; 3; i++) {\n  setTimeout(() =&gt; console.log(i), 1);\n}\n</code></pre> 答案: 0 1 2<br>解析:<br>使用<code>let</code>关键字声明变量<code>i</code>: 使用<code>let(和const)</code>关键字声明的变量是具有块作用域的(块是<code>{}</code>之间的任何东西). 在每次迭代期间,<code>i</code>将被创建为一个新值,并且每个值都会存在于循环内的块级作用域.<pre><code class=\"language-js\">// 下面代码输出什么\nfor (var i = 0; i &lt; 3; i++) {\n  setTimeout(() =&gt; console.log(i), 1);\n}\n</code></pre> <blockquote> 答案: 3 3 3,由于JavaScript中的事件执行机制,setTimeout函数真正被执行时,循环已经走完. 由于第一个循环中的变量i是使用var关键字声明<br>的,因此该值是全局的. 在循环期间,我们每次使用一元运算符++都会将i的值增加1. 因此在第一个例子中,当调用setTimeout函数时,i已经被赋值为&gt;3.</blockquote> <h3 id=\"heading-66\"> <a class=\"post-anchor\" data-id=\"heading-66\" data-text=\"12\" data-level=\"3\" href=\"#heading-66\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 12 </h3><hr> <pre><code class=\"language-js\">const num = {\n  a: 10,\n  add() {\n    return this.a + 2;\n  },\n  reduce: () =&gt; this.a -2\n};\nconsole.log(num.add());\nconsole.log(num.reduce());\n</code></pre> 答案: 12 NaN<br>解析:<br>注意,<code>add</code>是普通函数,而<code>reduce</code>是箭头函数.对于箭头函数,<code>this</code>关键字指向是它所在上下文(定义时的位置)的环境,与普通函数不同! 这意味着当我们调用<code>reduce</code>时,它不是指向<code>num</code>对象,而是指其定义时的环境<code>window</code>.没有值<code>a</code>属性,返回<code>undefined</code>. <h3 id=\"heading-67\"> <a class=\"post-anchor\" data-id=\"heading-67\" data-text=\"13\" data-level=\"3\" href=\"#heading-67\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 13 </h3><hr> <pre><code class=\"language-js\">const person = { name: &quot;yideng&quot; };\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\nconsole.log(sayHi.call(person, 5));\nconsole.log(sayHi.bind(person, 5));\n</code></pre> 答案: yideng is 5; ƒ sayHi(age) {return ${this.name} is ${age};}<br>解析:<br>使用两者，我们可以传递我们想要<code>this</code>关键字引用的对象。 但是，<code>.call</code>方法会立即执行！<br><code>.bind</code>方法会返回函数的拷贝值，但带有绑定的上下文！ 它不会立即执行。 <h2 id=\"heading-68\"> <a class=\"post-anchor\" data-id=\"heading-68\" data-text=\"谈谈event loop\" data-level=\"2\" href=\"#heading-68\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 谈谈event loop </h2><hr> <a href=\"https://juejin.cn/post/6844903764202094606\" target=\"_blank\" title=\"一次弄懂Event Loop\">一次弄懂Event Loop</a><br><a href=\"http://www.ruanyifeng.com/blog/2014/10/event-loop.html\" target=\"_blank\" title=\"JavaScript 运行机制详解：再谈Event Loop\">JavaScript 运行机制详解：再谈Event Loop</a><br><a href=\"https://zhuanlan.zhihu.com/p/364698187\" target=\"_blank\" title=\"JS 事件循环 event loop 经典面试题含答案\">JS 事件循环 event loop 经典面试题含答案</a> <h2 id=\"heading-69\"> <a class=\"post-anchor\" data-id=\"heading-69\" data-text=\"ajax实现原理及方法使用\" data-level=\"2\" href=\"#heading-69\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ajax实现原理及方法使用 </h2><hr> <pre><code class=\"language-js\">function upload(url, {\n    file,\n    params = {},\n    fileName = &#39;fileName&#39;,\n    method = &#39;POST&#39;,\n    responseType = &#39;&#39;,\n    credentials = false,\n    withCredentials = false,\n    headers,\n    onProgress\n} = {}) {\n    return new Promise((resolve, reject) =&gt; {\n        let formData = new FormData();\n        let request = new XMLHttpRequest();\n        formData.append(fileName, file);\n        for(let key in params) {\n            formData.append(key, params[key]);\n        }\n\n        request.open(method, url, true);\n        request.withCredentials = withCredentials || credentials === &#39;include&#39;;\n        request.responseType = responseType;\n        applyRequestHeaders(request, headers);\n        request.setRequestHeader(&#39;Accept&#39;, &#39;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39;);\n\n        request.addEventListener(&#39;load&#39;, e =&gt; {\n            if(request.status !== 200) {\n                reject({request, file, e});\n                return;\n            }\n            try {\n                let response = JSON.parse(request.responseText);\n                resolve({request, response, file, e});\n            }\n            catch (ex) {\n                reject({request, file, e});\n            }\n        });\n        request.upload.addEventListener(&#39;progress&#39;, e =&gt; {\n            console.log(e, &#39;progress&#39;);\n            if (onProgress) {\n                onProgress(e);\n            }\n        });\n        request.addEventListener(&#39;error&#39;, e =&gt; {\n            reject({request, file, e});\n        });\n        request.addEventListener(&#39;abort&#39;, e =&gt; {\n            reject({request, file, e});\n        });\n        request.send(formData);\n    });\n};\n</code></pre> <h2 id=\"heading-70\"> <a class=\"post-anchor\" data-id=\"heading-70\" data-text=\"vue双向绑定的原理是什么\" data-level=\"2\" href=\"#heading-70\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> vue双向绑定的原理是什么 </h2><hr> <pre><code class=\"language-js\">&lt;input type=&quot;text&quot; id=&quot;input&quot;&gt;\n&lt;div id=&quot;content&quot;&gt;&lt;/div&gt;\n&lt;script&gt;\n    function obersver(data){\n        for(let i in data){\n            defineData(data,i,data[i]);\n        }\n    }\n    function defineData(data,key,value){\n        Object.defineProperty(data,key,{\n            get:function(){\n                return value;\n            },\n            set: function(newValue){\n                console.log(&#39;调用了set====&#39;);\n                value = newValue;\n                document.getElementById(&#39;content&#39;).innerHTML = newValue;\n            }\n        })\n    }\n    let obj = {};\n    document.addEventListener(&#39;keyup&#39;,function(e){\n        obersver(obj);\n        obj.text = e.target.value;\n        console.log(obj.text);\n    })\n&lt;/script&gt;\n</code></pre> <h2 id=\"heading-71\"> <a class=\"post-anchor\" data-id=\"heading-71\" data-text=\"普通函数和箭头函数的区别\" data-level=\"2\" href=\"#heading-71\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 普通函数和箭头函数的区别 </h2><hr> <ol> <li>箭头函数没有<code>prototype</code>(原型)，所以箭头函数本身没有<code>this</code></li> <li>箭头函数的<code>this</code>在定义的时候继承自外层第一个普通函数的<code>this</code>。</li> <li>如果箭头函数外层没有普通函数，严格模式和非严格模式下它的<code>this</code>都会指向<code>window</code>(全局对象).</li> <li>箭头函数本身的<code>this</code>指向不能改变，但可以修改它要继承的对象的<code>this</code>。</li> <li>箭头函数的<code>this</code>指向全局，使用<code>arguments</code>会报未声明的错误。</li> <li>箭头函数的<code>this</code>指向普通函数时,它的<code>argumens</code>继承于该普通函数.</li> <li>使用<code>new</code>调用箭头函数会报错，因为箭头函数没有<code>constructor</code>.</li> <li>箭头函数不支持<code>new.target</code>.</li> <li>箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名.</li> <li>箭头函数相对于普通函数语法更简洁优雅.</li> </ol> <h2 id=\"heading-72\"> <a class=\"post-anchor\" data-id=\"heading-72\" data-text=\"css的两种盒模型\" data-level=\"2\" href=\"#heading-72\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> css的两种盒模型 </h2><hr> <blockquote> 在标准的盒子模型中，width指content部分的宽度</blockquote> <p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"1\" title=\"null\" style=\"cursor:zoom-in\"></p><blockquote> 在IE盒子模型中，width表示content+padding+border这三个部分的宽度</blockquote> <p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"2\" title=\"null\" style=\"cursor:zoom-in\"></p> <h3 id=\"heading-73\"> <a class=\"post-anchor\" data-id=\"heading-73\" data-text=\"box-sizing的使用\" data-level=\"3\" href=\"#heading-73\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> box-sizing的使用 </h3><code>box-sizing</code>的默认属性是<code>content-box</code><br>如果想要切换盒模型也很简单，这里需要借助css3的<code>box-sizing</code>属性<blockquote> box-sizing: content-box 是W3C盒子模型<br>box-sizing: border-box 是IE盒子模型</blockquote> <h2 id=\"heading-74\"> <a class=\"post-anchor\" data-id=\"heading-74\" data-text=\"em和rem的区别\" data-level=\"2\" href=\"#heading-74\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> em和rem的区别 </h2><hr> <code>rem</code>相对于<code>html</code>元素的<code>font-size</code>大小计算.<br><code>em</code>相对于继承于父级的<code>font-size</code>的大小,如果父级和本身都有设置<code>font-size</code>则根据自身的<code>font-size</code>大小计算.<br>对于em和rem的区别一句话概括：em相对于父元素，rem相对于根元素。<br><a href=\"http://caibaojian.com/flexible-js.html\" target=\"_blank\" title=\"rem适配-flexible\">rem适配-flexible</a> <h2 id=\"heading-75\"> <a class=\"post-anchor\" data-id=\"heading-75\" data-text=\"debounce &amp; throttle\" data-level=\"2\" href=\"#heading-75\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> debounce &amp; throttle </h2><hr> <pre><code class=\"language-js\">function debounce(fn, delay) {\n    let timer;\n    return function() {\n        let context = this;\n        let args = arguments;\n        timer &amp;&amp; clearTimeout(timer);\n        timer = setTimeout(function() {\n            fn.apply(context, args);\n        }, delay);\n    };\n}\n-------------\n// 方法一：定时器\nfunction throttle (func, wait) {\n        var timeout;\n        return function() {\n            var context = this;\n            var args = arguments;\n            if(!timeout) {\n                timeout = setTimeout(function() {\n                    timeout = null;\n                    func.apply(context, args);\n                }, wait);\n            }\n        }\n    },\n// 方法二：时间戳\nconst throttle2 = function(fn, delay) {\n  let preTime = Date.now();\n\n  return function() {\n      const context = this;\n      let args = arguments;\n      let doTime = Date.now();\n      if (doTime - preTime &gt;= delay) {\n          fn.apply(context, args);\n          preTime = Date.now();\n      }\n  }\n}\n</code></pre> <h2 id=\"heading-76\"> <a class=\"post-anchor\" data-id=\"heading-76\" data-text=\"函数珂里化\" data-level=\"2\" href=\"#heading-76\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 函数珂里化 </h2><hr> <blockquote> 指的是将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式，这样便于再次调用，例如<code>f(1)(2)</code><br>经典面试题：实现<code>add(1)(2)(3)(4)=10;</code> 、 <code>add(1)(1,2,3)(2)=9;</code></blockquote> <pre><code class=\"language-js\">function add() {\n  const _args = [...arguments];\n  function fn() {\n    _args.push(...arguments);\n    return fn;\n  }\n  fn.toString = function() {\n    return _args.reduce((sum, cur) =&gt; sum + cur);\n  }\n  return fn;\n}\n</code></pre> <h2 id=\"heading-77\"> <a class=\"post-anchor\" data-id=\"heading-77\" data-text=\"外边距折叠(collapsing margins)\" data-level=\"2\" href=\"#heading-77\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 外边距折叠(collapsing margins) </h2><hr> 毗邻的两个或多个margin会合并成一个margin，叫做<code>外边距折叠</code>。规则如下：<br>外边距叠加存在两种情况：一是父子外边距叠加；二是兄弟外边距叠加。<ol> <li>两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠</li> <li>浮动元素/inline-block 元素/绝对定位元素的 margin 不会和垂直方向上的其他元素的 margin 折叠</li> <li>创建了块级格式化上下文(BFC)的元素，不会和它的子元素发生 margin 折叠</li> <li>元素自身的<code>margin-bottom</code>和<code>margin-top</code>相邻时也会折叠</li> </ol> <h2 id=\"heading-78\"> <a class=\"post-anchor\" data-id=\"heading-78\" data-text=\"BFC\" data-level=\"2\" href=\"#heading-78\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> BFC </h2><hr> 如何创建BFC:<ol> <li>float的值不是none。</li> <li>position的值不是static或者relative。</li> <li>display的值是inline-block、table-cell、flex、table-caption或者inline-flex</li> <li>overflow的值不是visible</li> </ol> BFC的作用:<ol> <li>利用BFC避免margin重叠.<pre><code class=\"language-html\">&lt;body&gt;\n &lt;p&gt;看看我的 margin是多少&lt;/p&gt;\n &lt;p&gt;看看我的 margin是多少&lt;/p&gt;\n&lt;/body&gt;\n</code></pre> 属于同一个BFC的两个相邻的Box会发生margin重叠，所以我们可以设置，两个不同的BFC，也就是我们可以让把第二个p用div包起来，然后激活它使其成为一个BFC.div设置<code>overflow: hidden;</code> <h2 id=\"heading-79\"> <a class=\"post-anchor\" data-id=\"heading-79\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-79\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2></li> </ol> <hr> <a href=\"https://github.com/qiu-deqing/FE-interview#html-httpweb-%E7%BB%BC%E5%90%88%E9%97%AE%E9%A2%98\" target=\"_blank\" title=\"收集的前端面试题和答案\">收集的前端面试题和答案</a><br><a href=\"https://juejin.cn/post/6875152247714480136#heading-42\" target=\"_blank\" title=\"32个手写JS,巩固你的JS基础\">32个手写JS,巩固你的JS基础</a>";
// Exports
module.exports = code;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(84);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(85);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<hr> authorName: Yu<br>title: Linux<br>date: 2019-05-04 18:35:32<br>categories: Linux命令<br>tags: Linux命令<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Linux常用命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Linux常用命令 </h2><hr> <pre><code class=\"language-bash\">cd 进入目录\n\npwd 列出当前的路径\n\nls 列出目录的结构\n  -a 列出隐藏的文件\n\nmkdir 创建文件夹\n\ncat 查看文件的内容\n&lt;!-- more --&gt;\ntouch 文件名.格式 创建指定的文件\n\necho &#39;文件内容&#39; &gt;&gt; 文件名.文件格式 创建文件内容和文件\n\nrm 删除文件和文件夹\n  -rf 递归删除所有子目录和子文件\n\nrmdir 只能删除空目录\n</code></pre> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"复制文件\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 复制文件 </h3><pre><code class=\"language-sh\">cp 复制目录时不会复制子目录和子文件\n  -r 递归复制,会复制子目录和子文件\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"移动文件\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 移动文件 </h3><pre><code class=\"language-sh\">mv 移动文件夹和目录, 还可以重命名文件和目录\neg: mv test.md test.txt 重命名\n    mv test.md .. 移动到上一层目录\n    mv test.md ../test2/ 移动到上一层的test2的目录下\n    mv test.md ../test2 移动到上一层并重新命名为test2\n    mv test1 test2 将目录test1重命名为test2\n</code></pre> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"压缩文件\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 压缩文件 </h3><hr> <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"zip\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> zip </h4><pre><code class=\"language-sh\">将目录里的文件压缩到filename.zip\nzip -r filename.zip directory\n解压文件\nunzip\n</code></pre> <h4 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"gzip\" data-level=\"4\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> gzip </h4><pre><code class=\"language-sh\">递归压缩目录里的所有文件,gzip命令不能压缩目录\ngzip -r directoryName \n递归解压目录里的文件\ngzip -dr directoryName\n在目录里 gzip -d *\ngunzip *\n</code></pre> <table> <thead> <tr> <th>参数</th> <th>描述</th> </tr> </thead> <tbody><tr> <td>-c</td> <td>将压缩数据输出到标准输出中，并保留源文件.</td> </tr> <tr> <td>-d</td> <td>对压缩文件进行解压缩</td> </tr> <tr> <td>-r</td> <td>递归压缩指定目录下以及子目录下的所有文件</td> </tr> <tr> <td>-v</td> <td>对于每个压缩和解压缩的文件，显示相应的文件名和压缩比</td> </tr> <tr> <td>-l</td> <td>对每一个压缩文件，显示以下字段 压缩文件的大小；未压缩文件的大小；压缩比；未压缩文件的名称</td> </tr> <tr> <td>-数字</td> <td>用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高。默认压缩比是 -6</td> </tr> </tbody></table> <h4 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"chmod\" data-level=\"4\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> chmod </h4>Linux chmod（英文全拼：change mode）命令是控制用户对文件的权限的命令<br>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）.<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"1\" title=\"null\" style=\"cursor:zoom-in\"></p><br>只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"2\" title=\"null\" style=\"cursor:zoom-in\"></p>chmod可以用数字来表示权限如 :<br><code>chmod 777 file</code><br><code>chmod abc file</code><br>其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。<br>r=4，w=2，x=1<ul> <li>若要 rwx 属性则 4+2+1=7；</li> <li>若要 rw- 属性则 4+2=6；</li> <li>若要 r-x 属性则 4+1=5。</li> </ul> <table> <thead> <tr> <th>who</th> <th>用户类型</th> <th>说明</th> </tr> </thead> <tbody><tr> <td>u</td> <td>user</td> <td>文件所有者</td> </tr> <tr> <td>g</td> <td>group</td> <td>文件所有者所在组</td> </tr> <tr> <td>o</td> <td>others</td> <td>所有其他用户</td> </tr> <tr> <td>a</td> <td>all</td> <td>所用用户, 相当于 ugo</td> </tr> </tbody></table> <pre><code class=\"language-bash\">chmod a=rwx file\nchmod ug=rwx,o=x file\nchmod 777 file\n</code></pre> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"写入文件\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 写入文件 </h3><hr> <h4 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"&gt; &amp; &gt;&gt;\" data-level=\"4\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> &gt; &amp; &gt;&gt; </h4>当第一次写入文件并且不希望以前的数据内容保留在文件中时，则应该使用右尖括号(&gt;)。也就是说，如果文件中已经存在内容，它会清空原有数据内容，然后写入新数据。使用双右尖括号(&gt;&gt;)则是直接将数据附加到文件中，写入后的内容是原文件中的内容加上新写入的内容。<pre><code class=\"language-bash\">1. 将ls命令的结果写入文件中\nls &gt; demo.txt 覆盖原文件内容\nls &gt;&gt; demo.txt 不覆盖\n2. 将文本写入文件中\necho &#39;内容1&#39; &gt; demo.txt 覆盖原内容\necho &#39;内容1&#39; &gt;&gt; demo.txt 不覆盖\n</code></pre> <h3 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"vim\" data-level=\"3\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> vim </h3><hr> <table> <thead> <tr> <th>命令</th> <th>描述</th> </tr> </thead> <tbody><tr> <td>vi</td> <td>编辑文件</td> </tr> <tr> <td>i</td> <td>编辑内容</td> </tr> <tr> <td>esc</td> <td>退出操作</td> </tr> <tr> <td>shift+z+z</td> <td>保存退出vi模式</td> </tr> </tbody></table> ";
// Exports
module.exports = code;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Nginx<br>date: 2019-09-02 13:44:56<br>categories: 服务器<br>tags: Nginx<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"命令\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 命令 </h3><hr> <table> <thead> <tr> <th>参数</th> <th>描述</th> </tr> </thead> <tbody><tr> <td>-?,-h</td> <td>打开帮助信息</td> </tr> <tr> <td>-v</td> <td>显示版本信息并退出</td> </tr> <tr> <td>-V</td> <td>显示版本和配置选项信息,然后退出</td> </tr> <tr> <td>-t</td> <td>检测配置文件是否有语法错误,然后退出</td> </tr> <tr> <td>-q</td> <td>在检查配置文件期间屏蔽非错误信息</td> </tr> <tr> <td>-s signal</td> <td>给一个nginx主进程发送信号: <code>stop</code>(强制停止),<code>quit</code>(优雅退出),<code>reopen</code>(重启),<code>reload</code>(重新加载配置文件)</td> </tr> <tr> <td>-p prefix</td> <td>设置前缀路径(默认是: /usr/share/nginx/)</td> </tr> <tr> <td>-c filename</td> <td>设置配置文件(默认是: /etc/nginx/nginx.conf)</td> </tr> <tr> <td>-g directives</td> <td>设置配置文件外的全局指令</td> </tr> </tbody></table> <ol> <li><code>nginx -s reload</code></li> <li><code>nginx -s stop</code></li> <li><code>nginx -c /usr/local/nginx/conf/nginx.conf</code></li> <li><code>ps aux | grep nginx</code> or <code>cat /path/to/nginx.pid</code> 获取nginx pid</li> </ol> <pre><code class=\"language-shell\">ps aux | grep nginx\n查看带nginx关键字的进程\nUSER     PID      %CPU %MEM VSZ    RSS  TTY      STAT STARTED TIME COMMAND\nroot     3481361  0.0  0.2  31364  2744 ?        Ss   Nov30   0:00 nginx: master process nginx -c /usr/local/nginx/conf/nginx.conf\nwww      3481511  0.0  0.4  65156  4724 ?        S    Nov30   0:08 nginx: worker process\nroot     3887931  0.0  0.1   9180  1048 pts/0    R+   14:51   0:00 grep --color=auto nginx\n从容停止nginx,等所有请求结束后关闭服务\nkill -QUIT  pid\nnginx快速停止命令,立刻关闭进程\nkill -TERM pid\nnginx强制停止命令\nkill -9 pid\n</code></pre> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"安装\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 安装 </h3><hr> <pre><code class=\"language-shell\">yum -y install gcc gcc-c++ autoconf pcre-devel make automake\nyum -y install wget httpd-tools vim\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"配置\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 配置 </h3><hr> <h4 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"错误页面配置\" data-level=\"4\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 错误页面配置 </h4><code>error_page 500 502 503 504 /50x.html;</code><br>自定义404错误页面<br><code>error_page 404 /404_error.html;</code>显示根目录的404页面<br>错误页面配置成外服务器的页面<br><code>error_page 404 http://baidu.com;</code> <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"访问权限配置\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 访问权限配置 </h4><pre><code class=\"language-shell\">location / {\n        allow  45.76.202.231; // 允许这个ip地址访问\n        deny   all;\n}\n</code></pre> 上面的配置表示只允许45.76.202.231进行访问，其他的IP是禁止访问的。但是如果我们把deny all指令，移动到 allow 45.76.202.231之前，会发生什么那？会发现所有的IP都不允许访问了。<strong>这说明了一个问题：就是在同一个块下的两个权限指令，先出现的设置会覆盖后出现的设置（也就是谁先触发，谁起作用）.</strong> <h5 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"1.控制文件夹权限\" data-level=\"5\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1.控制文件夹权限 </h5>在工作中，访问权限的控制需求更加复杂，例如，对于网站下的img（图片目录）是运行所有用户访问，但对于网站下的admin目录则只允许公司内部固定IP访问。这时候仅靠deny和allow这两个指令，是无法实现的。我们需要location块来完成相关的需求匹配。<pre><code class=\"language-shell\">location =/img{\n        allow all;\n}\nlocation =/admin{\n        deny all;\n}\n</code></pre> <code>=</code>号代表精确匹配，使用了<code>=</code>后是根据其后的模式进行精确匹配。这个直接关系到我们网站的安全. <h5 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"2.控制文件类型权限\" data-level=\"5\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2.控制文件类型权限 </h5>只有精确匹配有时是完不成我们的工作任务的，比如现在我们要禁止访问所有php的页面，php的页面大多是后台的管理或者接口代码，所以为了安全我们经常要禁止所有用户访问，而只开放公司内部访问的。<pre><code class=\"language-shell\">location ~\\.php$ {\n        deny all;\n}\n</code></pre> 这样我们再访问的时候就不能访问以php结尾的文件了 <h4 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"nginx设置虚拟主机\" data-level=\"4\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> nginx设置虚拟主机 </h4>虚拟主机是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供Web服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用.<br>配置虚拟主机,就是新增一个server.<pre><code class=\"language-shell\">server {\n        listen       7000;\n        server_name  180.76.58.86; ip地址或者是域名\n\n        location / {\n            root /usr/local/nginx/html/home;\n            index  index.html index.htm;\n       }\n}\n</code></pre> <h4 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"nginx反向代理的设置\" data-level=\"4\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> nginx反向代理的设置 </h4>现在的web模式基本的都是标准的CS结构，即Client端到Server端。那代理就是在Client端和Server端之间增加一个提供特定功能的服务器，这个服务器就是我们说的代理服务器。<pre><code class=\"language-shell\">server{\n        listen 80;\n        server_name nginx2.jspang.com;\n        location / {\n               proxy_pass http://jspang.com;\n        }\n}\n</code></pre> <h4 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"nginx适配pc或移动设备\" data-level=\"4\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> nginx适配pc或移动设备 </h4>现在很多网站都是有了PC端和H5站点的，因为这样就可以根据客户设备的不同，显示出体验更好的，不同的页面了。<br>$http_user_agent的使用：<br>Nginx通过内置变量$http_user_agent，可以获取到请求客户端的userAgent，就可以用户目前处于移动端还是PC端，进而展示不同的页面给用户。<pre><code class=\"language-shell\">server{\n     listen 80;\n     server_name nginx2.jspang.com;\n     location / {\n      root /usr/share/nginx/pc;\n      if ($http_user_agent ~* &#39;(Android|webOS|iPhone|iPod|BlackBerry)&#39;) {\n         root /usr/share/nginx/mobile;\n      }\n      index index.html;\n     }\n}\n</code></pre> <h4 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"nginx的Gzip压缩配置\" data-level=\"4\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> nginx的Gzip压缩配置 </h4>Gzip是网页的一种网页压缩技术，经过gzip压缩后，页面大小可以变为原来的30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip网页压缩的实现需要浏览器和服务器的支持。<br>Nginx提供了专门的gzip模块，并且模块中的指令非常丰富。<ul> <li>gzip : 该指令用于开启或 关闭gzip模块。</li> <li>gzip_buffers : 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。</li> <li>gzip_comp_level : gzip压缩比，压缩级别是1-9，1的压缩级别最低，9的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。</li> <li>gzip_disable : 可以通过该指令对一些特定的User-Agent不使用压缩功能。</li> <li>gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的Content-length中进行获取。</li> <li>gzip_http_version：识别HTTP协议版本，其值可以是1.1.或1.0.</li> <li>gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容gzip压缩。</li> <li>gzip_vary : 用于在响应消息头中添加Vary：Accept-Encoding,使代理服务器根据请求头中的Accept-Encoding识别是否启用gzip压缩。</li> </ul> <pre><code class=\"language-shell\">http {\n   .....\n    gzip on;\n    gzip_types text/plain application/javascript text/css;\n   .....\n}\n</code></pre> <h3 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"参考\" data-level=\"3\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 参考 </h3><hr> <a href=\"https://jspang.com/detailed?id=39\" target=\"_blank\" title=\"一个前端必会的 Nginx免费教程 (共11集)\">一个前端必会的 Nginx免费教程 (共11集)</a><br><a href=\"https://www.cnblogs.com/54chensongxia/p/12938929.html\" target=\"_blank\" title=\"Nginx配置文件详解\">Nginx配置文件详解</a><br><a href=\"https://www.jianshu.com/p/734ef8e5a712\" target=\"_blank\" title=\"Nginx 入门（一）Nginx 配置Web服务器\">Nginx 入门（一）Nginx 配置Web服务器</a>";
// Exports
module.exports = code;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Node<br>tags: Node<br>date: 2019-05-04 12:09:00<br>categories: 服务器<br>tags: Nginx<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"全局变量\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 全局变量 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"__dirname\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> __dirname </h3>当前模块的目录名。 与<code>path.dirname(__filename)</code>相同。<br>示例，从<code>/Users/mjr</code>运行<code>node example.js</code>：<pre><code class=\"language-js\">console.log(__dirname);\n// 打印: /Users/mjr\nconsole.log(path.dirname(__filename));\n// 打印: /Users/mjr\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"__filename\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> __filename </h3>当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解析）。<br>对于主程序，这不一定与命令行中使用的文件名相同。<br>示例：<pre><code class=\"language-js\">从 /Users/mjr 运行 node example.js：\n\nconsole.log(__filename);\n// 打印: /Users/mjr/example.js\nconsole.log(__dirname);\n// 打印: /Users/mjr\n给定两个模块：a 和 b，其中 b 是 a 的依赖文件，且目录结构如下：\n/Users/mjr/app/a.js\n/Users/mjr/app/node_modules/b/b.js\nb.js 中的 __filename 的引用会返回 /Users/mjr/app/node_modules/b/b.js，而 a.js 中的 __filename 的引用会返回 /Users/mjr/app/a.js。\n</code></pre> <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"path模块\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path模块 </h2><hr> 除了目录结构有区别外，路径也是有区别的。windows是用反斜杠<code>\\</code>分割目录或者文件的，而在类Unix的系统中是用的<code>/</code>。<pre><code class=\"language-js\">windows的路径： C:\\temp\\myfile.html\n类Unix的路径：  /tmp/myfile.html\n</code></pre> <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"path.basename(path, ext)\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.basename(path, ext) </h3>path<br>ext 文件扩展名(可选)<br>获取路径中的文件名<pre><code class=\"language-js\">path.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;);\n// 返回: &#39;quux.html&#39;\n\npath.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;, &#39;.html&#39;);\n// 返回: &#39;quux&#39;\n</code></pre> <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"path.dirname(path)\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.dirname(path) </h3>获取路径的文件夹,不获取文件名<pre><code class=\"language-js\">path.dirname(&#39;/foo/bar/baz/asdf/quux&#39;);\n// 返回: &#39;/foo/bar/baz/asdf&#39;\n</code></pre> <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"path.extname(path)\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.extname(path) </h3>获取路径的扩展名即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。<br>如果 path 的最后一部分没有<code>.</code>或 path 的文件名的第一个字符是<code>.</code>，则返回一个空字符串。<pre><code class=\"language-js\">path.extname(&#39;index.html&#39;);\n// 返回: &#39;.html&#39;\npath.extname(&#39;/etc/a/index.html&#39;);\n// 返回: &#39;.html&#39;\n\npath.extname(&#39;index.coffee.md&#39;);\n// 返回: &#39;.md&#39;\n\npath.extname(&#39;index.&#39;);\n// 返回: &#39;.&#39;\n\npath.extname(&#39;index&#39;);\n// 返回: &#39;&#39;\n\npath.extname(&#39;.index&#39;);\n// 返回: &#39;&#39;\n</code></pre> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"path.format(object)\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.format(object) </h3><code>path.format()</code>方法会从一个对象返回一个路径字符串。<br>语法：<code>path.format(pathObject)</code><blockquote> pathObject: Object 要转换成路径字符串的设置对象<br>dir: string 所在目录，提供了 pathObject.dir，则 pathObject.root 会被忽略<br>root: string 根目录<br>base: string 文件全名。如果pathObject.base 存在，则 pathObject.ext 和 pathObject.name 会被忽略<br>name: string 文件名字（不带后缀）<br>ext: string 文件后缀<br>返回: string 返回完整路径字符串</blockquote> <pre><code class=\"language-js\">path.format({\n  dir: &#39;/home/user/dir&#39;,\n  base: &#39;file.txt&#39;\n});\n// 返回: &#39;/home/user/dir/file.txt&#39;\n\npath.format({\n  root: &#39;/&#39;,\n  name: &#39;file&#39;,\n  ext: &#39;.txt&#39;\n});\n// 返回: &#39;/file.txt&#39;\n</code></pre> <h3 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"path.parse(path)\" data-level=\"3\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.parse(path) </h3><code>path.parse()</code>方法返回一个对象，对象的属性表示 path 的元素。<br>parse方法跟 format方法正好相反，所以不赘述。直接看例子：<pre><code class=\"language-js\">let pathObj = path.parse(&#39;/users/home/aicoder/a.html&#39;);\nconsole.dir(pathObj);\n\n// 输出如下\n{ root: &#39;/&#39;,\n  dir: &#39;/users/home/aicoder&#39;,\n  base: &#39;a.html&#39;,\n  ext: &#39;.html&#39;,\n  name: &#39;a&#39; }\n</code></pre> <h3 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"path.join()\" data-level=\"3\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.join() </h3><code>path.join()</code>方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。<br>长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 ‘.’，表示当前工作目录。<br>参数说明：<blockquote> paths: string 一个路径片段的序列。<br>返回: string&gt;</blockquote> <pre><code class=\"language-js\">path.join(&#39;/foo&#39;, &#39;bar&#39;, &#39;baz/asdf&#39;, &#39;quux&#39;, &#39;..&#39;);\n// 返回: &#39;/foo/bar/baz/asdf&#39;\npath.join(&#39;/foot&#39;, __filename); // __filename是模块内的变量，代表当前js文件\n// 返回：/foot/xxx.js    \n\n// 以下路径拼接的方式不推荐：\nvar strPath = &#39;/foot/&#39; + &#39;xxx.js&#39;;  //虽然跟上面实现的方式一致，但是不推荐。\n</code></pre> <h3 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"path.resolve()\" data-level=\"3\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.resolve() </h3>方法将路径或路径片段的序列解析为绝对路径。<br>给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径。 例如，给定的路径片段序列：/foo、 /bar、 baz，调用 path.resolve(‘/foo’, ‘/bar’, ‘baz’) 将返回 /bar/baz。<div class=\"post_note post_info\">如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。</div><br>生成的路径已规范化，并且除非将路径解析为根目录，否则将删除尾部斜杠。零长度的 path 片段会被忽略。如果没有传入 path 片段，则<code>path.resolve()</code>将返回当前工作目录的绝对路径。<pre><code class=\"language-js\">path.resolve(&#39;/foo/bar&#39;, &#39;./baz&#39;);\n// 返回: &#39;/foo/bar/baz&#39;\n\npath.resolve(&#39;/foo/bar&#39;, &#39;/tmp/file/&#39;);\n// 返回: &#39;/tmp/file&#39;\n\npath.resolve(&#39;wwwroot&#39;, &#39;static_files/png/&#39;, &#39;../gif/image.gif&#39;);\n// 如果当前工作目录是 /home/myself/node，\n// 则返回 &#39;/home/myself/node/wwwroot/static_files/gif/image.gif&#39;\n</code></pre> <h3 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"path.normalize()\" data-level=\"3\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> path.normalize() </h3>方法会规范化给定的 path，并解析 ‘..’ 和 ‘.’ 片段。<br>当发现多个连续的路径分隔符时（如 POSIX 上的 / 与 Windows 上的 \\ 或 /），它们会被单个的路径分隔符（POSIX 上是 /，Windows 上是 \\）替换。 末尾的多个分隔符会被保留。<br>如果 path 是一个长度为零的字符串，则返回 ‘.’，表示当前工作目录。语法： <code>path.normalize(path)</code><blockquote> path: string 要进行规范的路径字符串<br>返回: string 规范后的路径字符串</blockquote> <pre><code class=\"language-js\">path.normalize(&#39;/foo/bar//baz/asdf/quux/..&#39;);\n// 返回: &#39;/foo/bar/baz/asdf\n\n// windows 上\npath.normalize(&#39;C:\\\\temp\\\\\\\\foo\\\\bar\\\\..\\\\&#39;);\n// 返回: &#39;C:\\\\temp\\\\foo\\\\&#39;\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Nuxt<br>date: 2020-12-30 17:07:01<br>categories: 服务端渲染<br>tags: Nuxt Vue<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"相关链接\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h3><a href=\"https://juejin.cn/post/6844903833840123912\" target=\"_blank\" title=\"Nuxt爬坑\">Nuxt爬坑</a>";
// Exports
module.exports = code;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: PM2<br>date: 2021-05-13 14:24:52<br>categories: PM2<br>tags: PM2<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 命令 </h2><hr> pm2启动并使用npm命令,运行nuxt server<br><code>pm2 start npm -i max --name home-server -- run nuxt-start</code> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"问题\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 问题 </h2><hr> <ol> <li>启动进程报错</li> </ol> 每次进程启动错误,可能是pm2内存错误,需要杀下pm2进程.<pre><code class=\"language-bash\">ps aux | grep pm2 (查看pm2进程占用情况)\nkill -9  14360 (这个数值要依据你上面命令返回的进程id进行填写)\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: React<br>date: 2020-6-30 11:46:11<br>categories: React<br>tags: React<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Refs转发\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Refs转发 </h2><hr> Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。最常见的案例如下所述。<ol> <li>在函数式组件中转发</li> </ol> <pre><code class=\"language-js\">const Button = React.forwardRef(function (props, ref) {\n    return h.button(&#39;&#39;, {\n        ref,\n        onClick: props.onClick\n    }, \n    props.children\n    );\n})\nexport default class View extends Component {\n    btnRef;\n    constructor(props) {\n        super(props);\n        this.btnRef = React.createRef();\n    }\n\n    render() {\n\n        return (\n            h.div(&#39;&#39;, {},\n                h(Button, {ref: this.btnRef}, &#39;dom转发&#39;),\n                h(Button, {}, &#39;未dom转发&#39;),\n                h(Button, {\n                    onClick: () =&gt; {console.log(this.btnRef, &#39;子组件btnDom&#39;)}\n                }, &#39;获取子组件dom&#39;)\n            )\n        )\n    }\n}\n// btnRef输出: {current: button}\n</code></pre> React 组件隐藏其实现细节，包括其渲染结果。其他使用<code>Button</code>的组件通常不需要获取内部的 DOM 元素 button 的 ref。这很好，因为这防止组件过度依赖其他组件的 DOM 结构。<br/><br>虽然这种封装对类似<code>FeedStory</code>或<code>Comment</code>这样的应用级组件是理想的，但其对<code>Button</code>或<code>Input</code>这样的高可复用“叶”组件来说可能是不方便的。这些组件倾向于在整个应用中以一种类似常规 DOM button 和 input 的方式被使用，并且访问其 DOM 节点对管理焦点，选中或动画来说是不可避免的。<br>2. 在高阶组件中转发<pre><code class=\"language-js\">const Button = React.forwardRef(function (props, ref) {\n    return h.button(&#39;&#39;, {\n        ref,\n        ...props\n    },\n        props.children\n    );\n})\nconst wrapComp = function (component) {\n    class wrapCompView extends React.Component {\n        constructor(props) {\n            super(props);\n        };\n\n        render() {\n            let { forwardedRef, children, ...rest } = this.props;\n            return h(component, {\n                ref: forwardedRef,\n                ...rest\n            }, children);\n        }\n    }\n    return React.forwardRef((props, ref) =&gt; {\n        return h(wrapCompView, { forwardedRef: ref, ...props }, props.children);\n    })\n}\nexport default class View extends Component {\n    btnRef;\n    wrapBtnComp;\n\n    constructor(props) {\n        super(props);\n        this.btnRef = React.createRef();\n        this.wrapBtnComp = wrapComp(Button);\n    }\n\n    render() {\n\n        return (\n            h.div(&#39;&#39;, {},\n                h(this.wrapBtnComp, { ref: this.btnRef }, &#39;dom转发&#39;),\n                h(Button, {\n                    onClick: () =&gt; { console.log(this.btnRef, &#39;子组件btnDom&#39;) }\n                }, &#39;获取子组件dom&#39;)\n            )\n        )\n    }\n}\n</code></pre> 以下是对上述示例发生情况的逐步解释：<ol> <li>我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。</li> <li>我们通过指定 ref 为 JSX 属性，将其向下传递给 <code>&lt;FancyButton ref={ref}&gt;</code>。</li> <li>React 传递 ref 给 forwardRef 内函数 (props, ref) =&gt; …，作为其第二个参数。</li> <li>我们向下转发该 ref 参数到<code>\\&lt;button ref={ref}\\&gt;</code>，将其指定为 JSX 属性。</li> <li>当 ref 挂载完成，ref.current 将指向<code>\\&lt;button\\&gt;</code>DOM 节点。</li> </ol> <div class=\"post_note post_warning\">1.第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。<br>2.Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。<br>3.上面的示例有一点需要注意：refs 将不会透传下去。这是因为 ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理。如果你对 HOC 添加 ref，该 ref 将引用最外层的容器组件，而不是被包裹的组件</div> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"Fragments\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Fragments </h2><hr> React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。<pre><code class=\"language-js\">render() {\n  return (\n    &lt;React.Fragment&gt;\n      &lt;ChildA /&gt;\n      &lt;ChildB /&gt;\n      &lt;ChildC /&gt;\n    &lt;/React.Fragment&gt;\n  );\n}\n</code></pre> <strong>使用场景</strong><br>表格组件<code>table</code>中不能使用父div<pre><code class=\"language-js\">class Table extends React.Component {\n  render() {\n    return (\n      &lt;table&gt;\n        &lt;tr&gt;\n          &lt;Columns /&gt;\n        &lt;/tr&gt;\n      &lt;/table&gt;\n    );\n  }\n}\n</code></pre> tr中只能是td, 添加div会无效.<pre><code class=\"language-js\">class Columns extends React.Component {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;td&gt;Hello&lt;/td&gt;\n        &lt;td&gt;World&lt;/td&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n</code></pre> 可以使用<code>React.Fragment</code>,短语法<code>&lt;&gt; &lt;/&gt;</code><pre><code class=\"language-js\">class Columns extends React.Component {\n  render() {\n    return (\n      &lt;React.Fragment&gt;\n        &lt;td&gt;Hello&lt;/td&gt;\n        &lt;td&gt;World&lt;/td&gt;\n      &lt;/React.Fragment&gt;\n    );\n  }\n}\n// 同下\n/*\n*  &lt;&gt;\n*     &lt;td&gt;Hello&lt;/td&gt;\n*     &lt;td&gt;World&lt;/td&gt;\n*  &lt;/&gt;\n*/\n</code></pre> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"JSX\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> JSX </h2><hr> 实际上，JSX 仅仅只是<code>React.createElement(component, props, ...children)</code>函数的语法糖。如下 JSX 代码：<pre><code class=\"language-js\">&lt;MyButton color=&quot;blue&quot; shadowSize={2}&gt;\n  Click Me\n&lt;/MyButton&gt;\n</code></pre> 会编译为<pre><code class=\"language-js\">React.createElement(\n  MyButton,\n  {color: &#39;blue&#39;, shadowSize: 2},\n  &#39;Click Me&#39;\n)\n</code></pre> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"React 必须在作用域内\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> React 必须在作用域内 </h3>由于 JSX 会编译为<code>React.createElement</code>调用形式，所以 React 库也必须包含在 JSX 代码作用域内。<br/><br>例如，在如下代码中，虽然<code>React</code>和<code>CustomButton</code>并没有被直接使用，但还是需要导入：<pre><code class=\"language-js\">import React from &#39;react&#39;;\nimport CustomButton from &#39;./CustomButton&#39;;\n\nfunction WarningButton() {\n  // return React.createElement(CustomButton, {color: &#39;red&#39;}, null);\n  return &lt;CustomButton color=&quot;red&quot; /&gt;;\n}\n</code></pre> 如果你不使用 JavaScript 打包工具而是直接通过<code>&lt;script&gt;</code>标签加载<code>React</code>，则必须将<code>React</code>挂载到全局变量中。 <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"在 JSX 类型中使用点语法\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 在 JSX 类型中使用点语法 </h3>在<code>JSX</code>中，你也可以使用点语法来引用一个<code>React</code>组件。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果<code>MyComponents</code>.<code>DatePicker</code>是一个组件，你可以在 JSX 中直接使用<pre><code class=\"language-js\">import React from &#39;react&#39;;\n\nconst MyComponents = {\n  DatePicker: function DatePicker(props) {\n    return &lt;div&gt;Imagine a {props.color} datepicker here.&lt;/div&gt;;\n  }\n}\n\nfunction BlueDatePicker() {\n  return &lt;MyComponents.DatePicker color=&quot;blue&quot; /&gt;;\n}\n</code></pre> <h2 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"性能优化\" data-level=\"2\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 性能优化 </h2><hr> <code>shouldComponentUpdate</code>该方法会在重新渲染前被触发。其默认实现总是返回 true，让 React 执行更新：<pre><code class=\"language-js\">shouldComponentUpdate(nextProps, nextState) {\n  return true;\n}\n</code></pre> 如果你知道在什么情况下你的组件不需要更新，你可以在<code>shouldComponentUpdate</code>中返回<code>false</code>来跳过整个渲染过程。其包括该组件的<code>render</code>调用以及之后的操作。<br/><br>在大部分情况下，你可以继承<code>React.PureComponent</code>以代替手写<code>shouldComponentUpdate()</code>。它用当前与之前<code>props</code>和<code>state</code>的浅比较覆写了 <code>shouldComponentUpdate()</code>的实现。 <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"示例\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 示例 </h3>如果你的组件只有当<code>props.color</code>或者<code>state.count</code>的值改变才需要更新时，你可以使用<code>shouldComponentUpdate</code>来进行检查：<pre><code class=\"language-js\">class CounterButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {count: 1};\n  }\n\n  shouldComponentUpdate(nextProps, nextState) {\n    if (this.props.color !== nextProps.color) {\n      return true;\n    }\n    if (this.state.count !== nextState.count) {\n      return true;\n    }\n    return false;\n  }\n\n  render() {\n    return (\n      &lt;button\n        color={this.props.color}\n        onClick={() =&gt; this.setState(state =&gt; ({count: state.count + 1}))}&gt;\n        Count: {this.state.count}\n      &lt;/button&gt;\n    );\n  }\n}\n</code></pre> 在这段代码中<code>shouldComponentUpdate</code>仅检查了<code>props.color</code>或<code>state.count</code>是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承<code>React.PureComponent</code>就行了。所以这段代码可以改成以下这种更简洁的形式：<pre><code class=\"language-js\">class CounterButton extends React.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {count: 1};\n  }\n\n  render() {\n    return (\n      &lt;button\n        color={this.props.color}\n        onClick={() =&gt; this.setState(state =&gt; ({count: state.count + 1}))}&gt;\n        Count: {this.state.count}\n      &lt;/button&gt;\n    );\n  }\n}\n</code></pre> <h2 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"Portals\" data-level=\"2\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Portals </h2><hr> <h3 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"用法\" data-level=\"3\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 用法 </h3>Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。<br/><br>通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：<pre><code class=\"language-js\">render() {\n  // React 挂载了一个新的 div，并且把子元素渲染其中\n  return (\n    &lt;div&gt;\n      {this.props.children}\n    &lt;/div&gt;\n  );\n}\n</code></pre> 然而，有时候将子元素插入到 DOM 节点中的不同位置也是有好处的：<pre><code class=\"language-js\">render() {\n  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。\n  // `domNode` 是一个可以在任何位置的有效 DOM 节点。\n  return ReactDOM.createPortal(\n    this.props.children,\n    domNode\n  );\n}\n</code></pre> 一个 portal 的典型用例是当父组件有<code>overflow: hidden</code>或<code>z-index</code>样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框： <h3 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"通过 Portal 进行事件冒泡\" data-level=\"3\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 通过 Portal 进行事件冒泡 </h3> <h2 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"Hook\" data-level=\"2\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Hook </h2><hr> <h3 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"useCallback\" data-level=\"3\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> useCallback </h3><pre><code class=\"language-js\">const memoizedCallback = useCallback(\n  () =&gt; {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n</code></pre> 返回一个<code>memoized</code>回调函数。 <h3 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"useMemo\" data-level=\"3\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> useMemo </h3><pre><code class=\"language-js\">const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);\n</code></pre> 返回一个<code>memoized</code>值。 <h3 id=\"heading-13\"> <a class=\"post-anchor\" data-id=\"heading-13\" data-text=\"useMemo和useCallback的区别\" data-level=\"3\" href=\"#heading-13\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> useMemo和useCallback的区别 </h3><blockquote> <code>useMemo</code>和<code>useCallback</code>接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据<br>共同作用：<br>1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。<br>两者区别：<br>1.<code>useMemo</code>计算结果是return回来的<strong>值</strong>, 主要用于缓存计算结果的值 ，应用场景如：需要计算的状态<br>2.<code>useCallback</code>计算结果是<strong>函数</strong>, 主要用于缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个<code>state</code>的变化整个组件都会被重新&gt; 刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。</blockquote> ";
// Exports
module.exports = code;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: RequireJS<br>date: 2019-09-16 15:41:22<br>categories: 模块化<br>tags: module RequireJS<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"载入脚本文件\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 载入脚本文件 </h3><hr> RequireJS采用一种不同的方法去加载脚本文件和用传统的用<code>&lt;script&gt;</code>tags.它也可以运行的快速和被优化过,RequireJS首要的目的是模块化代码.鼓励用{% label info@moduleIDs %}来代替script标签的URLs.<br>RequireJS加载所有代码根据一个基础的路径(baseUrl).一个页面的入口js文件用<code>data-main 属性</code>来定义. <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"data-main 入口点\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> data-main 入口点 </h3><hr> <pre><code class=\"language-html\">&lt;!--when require.js loads it will inject another script tag\n    (with async attribute) for scripts/main.js--&gt;\n&lt;script data-main=&quot;scripts/main&quot; src=&quot;scripts/require.js&quot;&gt;&lt;/script&gt;\n</code></pre> 注意: script标签载入脚本文件时,是异步的.所以当引入两个脚本文件时,会出现后一个脚本执行结束时间要短于第一个文件.<pre><code class=\"language-html\">&lt;script data-main=&quot;scripts/main&quot; src=&quot;scripts/require.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;scripts/other.js&quot;&gt;&lt;/script&gt;\n</code></pre> <pre><code class=\"language-js\">//contents of main.js:\nrequire.config({\n    paths: {\n        foo: &#39;libs/foo-1.1.3&#39;\n    }\n});\n//contents of other.js:\n\n//This code might be called before the require.config() in main.js\n//has executed. When that happens, require.js will attempt to\n//load &#39;scripts/foo.js&#39; instead of &#39;scripts/libs/foo-1.1.3.js&#39;\nrequire([&#39;foo&#39;], function(foo) {\n\n});\n</code></pre> 因此最好不用<code>data-main</code>属性, 而是使用一下形式.其它的脚本文件用require()调用.<pre><code class=\"language-html\">&lt;script src=&quot;scripts/require.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\nrequire([&#39;scripts/config&#39;], function() {\n    //Configuration loaded now, safe to do other require calls\n    //that depend on that config.\n    require([&#39;foo&#39;], function(foo) {\n\n    });\n});\n&lt;/script&gt;\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"定义一个模块\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 定义一个模块 </h3><hr> <ol> <li>如果模块没有依赖项,只是简单的键值对,只需要传入对象.<pre><code class=\"language-js\">//Inside file my/shirt.js:\ndefine({\n color: &quot;black&quot;,\n size: &quot;unisize&quot;\n});\n</code></pre> </li> <li>如果模块没有依赖项,只是需要在导出内容前做一些工作,可以传入function<pre><code class=\"language-js\">//my/shirt.js now does setup work\n//before returning its module definition.\ndefine(function () {\n //Do setup work here\n\n return {\n     color: &quot;black&quot;,\n     size: &quot;unisize&quot;\n }\n});\n</code></pre> </li> <li>如果有依赖项.<pre><code class=\"language-js\">//my/shirt.js now has some dependencies, a cart and inventory\n//module in the same directory as shirt.js\ndefine([&quot;./cart&quot;, &quot;./inventory&quot;], function(cart, inventory) {\n      //return an object to define the &quot;my/shirt&quot; module.\n      return {\n          color: &quot;blue&quot;,\n          size: &quot;large&quot;,\n          addToCart: function() {\n              inventory.decrement(this);\n              cart.add(this);\n          }\n      }\n  }\n);\n</code></pre> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"配置项\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 配置项 </h3></li> </ol> <hr> <pre><code class=\"language-html\">&lt;script src=&quot;scripts/require.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  require.config({\n    baseUrl: &quot;/another/path&quot;,\n    paths: {\n        &quot;some&quot;: &quot;some/v1.0&quot;\n    },\n    waitSeconds: 15\n  });\n  require( [&quot;some/module&quot;, &quot;my/module&quot;, &quot;a.js&quot;, &quot;b.js&quot;],\n    function(someModule,    myModule) {\n        //This function will be called when all the dependencies\n        //listed above are loaded. Note that this function could\n        //be called before the page is loaded.\n        //This callback is optional.\n    }\n  );\n&lt;/script&gt;\n</code></pre> <div class=\"post_note post_warning\">坑1. 自定义模块引入第三方库,未生效的问题</div><pre><code class=\"language-js\">引入第三方模块时,用了别名`eg: lib/jquery`\n//THIS WILL NOT WORK\ndefine([&#39;lib/jquery&#39;], function ($) {...});\n//解决办法\nrequirejs.config({\n    baseUrl: &#39;js/lib&#39;,\n    paths: {\n        //the left side is the module ID,\n        //the right side is the path to\n        //the jQuery file, relative to baseUrl.\n        //Also, the path should NOT include\n        //the &#39;.js&#39; file extension. This example\n        //is using jQuery 1.9.0 located at\n        //js/lib/jquery-1.9.0.js, relative to\n        //the HTML page.\n        jquery: &#39;jquery-1.9.0&#39;\n    }\n});\ndefine([&#39;jquery&#39;], function ($) {...});\n</code></pre> 参考链接:<br><a href=\"https://requirejs.org/docs/api.html\" target=\"_blank\" title=\"RequireJS\">RequireJS</a>";
// Exports
module.exports = code;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: SSH<br>date: 2021-01-26 11:09:07<br>categories: SSH<br>tags: SSH<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"SSH\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> SSH </h2><hr> SSH 是 Linux 系统的登录工具,现在广泛用于服务器登录和各种加密通信.<br>SSH（Secure Shell 的缩写）是一种网络协议,用于加密两台计算机之间的通信,并且支持各种身份验证机制.<br>实务中,它主要用于保证远程登录和远程通信的安全,任何网络服务都可以用这个协议来加密. <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"SSH是什么\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> SSH是什么 </h3>历史上,网络主机之间的通信是不加密的,属于明文通信.这使得通信很不安全,一个典型的例子就是服务器登录.登录远程服务器的时候,需要将用户输入的密码传给服务器,如果这个过程是明文通信,就意味着传递过程中,线路经过的中间计算机都能看到密码,这是很可怕的.<br><br>SSH 就是为了解决这个问题而诞生的,它能够加密计算机之间的通信,保证不被窃听或篡改.它还能对操作者进行认证（authentication）和授权（authorization）.明文的网络协议可以套用在它里面,从而实现加密. <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"SSH 架构\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> SSH 架构 </h3>SSH 的软件架构是服务器-客户端模式（Server - Client）.在这个架构中,SSH 软件分成两个部分: 向服务器发出请求的部分,称为客户端（client）,OpenSSH 的实现为<code>ssh</code>;接收客户端发出的请求的部分,称为服务器（server）,OpenSSH 的实现为<code>sshd</code>.<br><br>另外,OpenSSH 还提供一些辅助工具软件（比如 <code>ssh-keygen</code>, <code>ssh-agent</code>）和专门的客户端工具（比如 <code>scp</code> 和 <code>sftp</code>）. <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"基本用法\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 基本用法 </h3>Linux 系统一般都自带 ssh,如果没有就需要安装.<pre><code class=\"language-shell\"># Ubuntu 和 Debian\n$ sudo apt install openssh-client\n\n# CentOS 和 Fedora\n$ sudo dnf install openssh-clients\n</code></pre> 安装以后,可以使用-V参数输出版本号,查看一下是否安装成功.<pre><code class=\"language-shell\">$ ssh -V\n</code></pre> ssh 最常见的用途就是登录服务器,这要求服务器安装并正在运行 SSH 服务器软件.<br>ssh 登录服务器的命令如下.<pre><code class=\"language-shell\">$ ssh hostname\n</code></pre> 上面命令中,hostname是主机名,它可以是域名,也可能是 IP 地址或局域网内部的主机名.不指定用户名的情况下,将使用客户端的当前用户名,作为远程服务器的登录用户名.如果要指定用户名,可以采用下面的语法.<pre><code class=\"language-shell\">$ ssh user@hostname\n</code></pre> 上面的命令中,用户名和主机名写在一起了,之间使用@分隔.<br>用户名也可以使用ssh的-l参数指定,这样的话,用户名和主机名就不用写在一起了.<pre><code class=\"language-shell\">$ ssh -l username host\n</code></pre> ssh 默认连接服务器的22端口,<code>-p</code>参数可以指定其他端口.<pre><code class=\"language-shell\">$ ssh -p 8821 foo.com\n</code></pre> 上面命令连接服务器foo.com的8821端口. <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"连接流程\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 连接流程 </h3>ssh 连接远程服务器后,首先有一个验证过程,验证远程服务器是否为陌生地址.<br>如果是第一次连接某一台服务器,命令行会显示一段文字,表示不认识这台机器,提醒用户确认是否需要连接.<pre><code class=\"language-shell\">The authenticity of host &#39;foo.com (192.168.121.111)&#39; can&#39;t be established.\nECDSA key fingerprint is SHA256:Vybt22mVXuNuB5unE++yowF7lgA/9/2bLSiO3qmYWBY.\nAre you sure you want to continue connecting (yes/no)?\n</code></pre> 上面这段文字告诉用户,<code>foo.com</code>这台服务器的指纹是陌生的,让用户选择是否要继续连接（输入 yes 或 no）.<br><br>所谓<code>服务器指纹</code>,指的是 SSH 服务器公钥的哈希值.每台 SSH 服务器都有唯一一对密钥,用于跟客户端通信,其中公钥的哈希值就可以用来识别服务器.<br>下面的命令可以查看某个公钥的指纹.<pre><code class=\"language-shell\">$ ssh-keygen -l -f /etc/ssh/ssh_host_ecdsa_key.pub\n256 da:24:43:0b:2e:c1:3f:a1:84:13:92:01:52:b4:84:ff   (ECDSA)\n</code></pre> 上面的例子中,<code>ssh-keygen -l -f</code>命令会输出公钥<code>/etc/ssh/ssh_host_ecdsa_key.pub</code>的指纹.<br>ssh 会将本机连接过的所有服务器公钥的指纹,都储存在本机的<code>~/.ssh/known_hosts</code>文件中.每次连接服务器时,通过该文件判断是否为陌生主机（陌生公钥）.<br>在上面这段文字后面,输入yes,就可以将当前服务器的指纹也储存在本机<code>~/.ssh/known_hosts</code>文件中,并显示下面的提示.以后再连接的时候,就不会再出现警告了.<pre><code class=\"language-shell\">Warning: Permanently added &#39;foo.com (192.168.121.111)&#39; (RSA) to the list of known hosts\n</code></pre> 然后,客户端就会跟服务器建立连接.接着,ssh 就会要求用户输入所要登录账户的密码.用户输入并验证密码正确以后,就能登录远程服务器的 Shell 了. <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"服务器密钥变更\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 服务器密钥变更 </h3>服务器指纹可以防止有人恶意冒充远程主机.如果服务器的密钥发生变更（比如重装了 SSH 服务器）,客户端再次连接时,就会发生公钥指纹不吻合的情况.这时,客户端就会中断连接,并显示一段警告信息.<pre><code class=\"language-shell\">@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that the RSA host key has just been changed.\nThe fingerprint for the RSA key sent by the remote host is\n77:a5:69:81:9b:eb:40:76:7b:13:04:a9:6c:f4:9c:5d.\nPlease contact your system administrator.\nAdd correct host key in /home/me/.ssh/known_hosts to get rid of this message.\nOffending key in /home/me/.ssh/known_hosts:36\n</code></pre> 上面这段文字的意思是,该主机的公钥指纹跟<code>~/.ssh/known_hosts</code>文件储存的不一样,必须处理以后才能连接.这时,你需要确认是什么原因,使得公钥指纹发生变更,到底是恶意劫持,还是管理员变更了 SSH 服务器公钥.<br><br>如果新的公钥确认可以信任,需要继续执行连接,你可以执行下面的命令,将原来的公钥指纹从<code>~/.ssh/known_hosts</code>文件删除.<pre><code class=\"language-shell\">$ ssh-keygen -R hostname\n删除那个主机的指纹,并生成known_hosts.old文件\n</code></pre> 上面命令中,hostname是发生公钥变更的主机名.<br>除了使用上面的命令,你也可以手工修改<code>known_hosts</code>文件,将公钥指纹删除.<br>删除了原来的公钥指纹以后,重新执行 ssh 命令连接远程服务器,将新的指纹加入<code>known_hosts</code>文件,就可以顺利连接了. <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"ssh 命令行配置项\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ssh 命令行配置项 </h3><ol> <li><code>-F</code><br><code>-F</code>参数指定配置文件.<pre><code class=\"language-shell\">$ ssh -F /usr/local/ssh/other_config\n</code></pre> 上面命令指定使用配置文件other_config.</li> <li><code>-l</code><br><code>-l</code>参数指定远程登录的账户名.<pre><code class=\"language-shell\">$ ssh -l sally server.example.com\n</code></pre> 等同于<code>$ ssh sally@server.example.com</code></li> <li><code>-p</code><br><code>-p</code>参数指定 SSH 客户端连接的服务器端口.<pre><code class=\"language-shell\">$ ssh -p 2035 server.example.com\n</code></pre> 上面命令连接服务器的2035端口.</li> <li><code>-t</code><br><code>-t</code>参数在 ssh 直接运行远端命令时,提供一个互动式 Shell.<pre><code class=\"language-shell\">$ ssh -t server.example.com emacs\n</code></pre> </li> </ol> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"客户端配置文件\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 客户端配置文件 </h3> <h4 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"位置\" data-level=\"4\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 位置 </h4>SSH 客户端的全局配置文件是<code>/etc/ssh/ssh_config</code>,用户个人的配置文件在<code>~/.ssh/config</code>,优先级高于全局配置文件.<br>除了配置文件,<code>~/.ssh</code>目录还有一些用户个人的密钥文件和其他文件.下面是其中一些常见的文件.<ul> <li>~/.ssh/id_ecdsa: 用户的 ECDSA 私钥.</li> <li>~/.ssh/id_ecdsa.pub: 用户的 ECDSA 公钥.</li> <li>~/.ssh/id_rsa: 用于 SSH 协议版本2 的 RSA 私钥.</li> <li>~/.ssh/id_rsa.pub: 用于SSH 协议版本2 的 RSA 公钥.</li> <li>~/.ssh/identity: 用于 SSH 协议版本1 的 RSA 私钥.</li> <li>~/.ssh/identity.pub: 用于 SSH 协议版本1 的 RSA 公钥.</li> <li>~/.ssh/known_hosts: 包含 SSH 服务器的公钥指纹.</li> </ul> <h4 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"主机设置\" data-level=\"4\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 主机设置 </h4>用户个人的配置文件<code>~/.ssh/config</code>,可以按照不同服务器,列出各自的连接参数,从而不必每一次登录都输入重复的参数.下面是一个例子.<pre><code class=\"language-shell\">Host *\n     Port 2222\n\nHost remoteserver\n     HostName remote.example.com\n     User neo\n     Port 2112\n</code></pre> 上面代码中,<code>Host *</code>表示对所有主机生效,后面的<code>Port 2222</code>表示所有主机的默认连接端口都是<code>2222</code>,这样就不用在登录时特别指定端口了.这里的缩进并不是必需的,只是为了视觉上,易于识别针对不同主机的设置.<br><br>后面的<code>Host remoteserver</code>表示,下面的设置只对主机<code>remoteserver</code>生效.<code>remoteserver</code>只是一个别名,具体的主机由<code>HostName</code>命令指定,<code>User</code>和<code>Port</code>这两项分别表示用户名和端口.这里的<code>Port</code>会覆盖上面<code>Host *</code>部分的<code>Port</code>设置.<br><br>以后,登录<code>remote.example.com</code>时,只要执行<code>ssh remoteserver</code>命令,就会自动套用<code>config</code>文件里面指定的参数.<br>单个主机的配置格式如下.<pre><code class=\"language-shell\">$ ssh remoteserver\n# 等同于\n$ ssh -p 2112 neo@remote.example.com\n</code></pre> <code>Host</code>命令的值可以使用通配符,比如<code>Host *</code>表示对所有主机都有效的设置,<code>Host *.edu</code>表示只对一级域名为<code>.edu</code>的主机有效的设置.它们的设置都可以被单个主机的设置覆盖. <h4 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"配置命令的语法\" data-level=\"4\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 配置命令的语法 </h4>ssh 客户端配置文件的每一行,就是一个配置命令.配置命令与对应的值之间,可以使用空格,也可以使用等号.<pre><code class=\"language-shell\">Compression yes\n# 等同于\nCompression = yes\n</code></pre> <code>#</code>开头的行表示注释,会被忽略.空行等同于注释. <h4 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"主要配置命令\" data-level=\"4\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 主要配置命令 </h4>下面是 ssh 客户端的一些主要配置命令,以及它们的范例值.<pre><code class=\"language-shell\">AddressFamily inet: 表示只使用 IPv4 协议.如果设为inet6,表示只使用 IPv6 协议.\nBindAddress 192.168.10.235: 指定本机的 IP 地址（如果本机有多个 IP 地址）.\nCheckHostIP yes: 检查 SSH 服务器的 IP 地址是否跟公钥数据库吻合.\nCiphers blowfish,3des: 指定加密算法.\nCompression yes: 是否压缩传输信号.\nConnectionAttempts 10: 客户端进行连接时,最大的尝试次数.\nConnectTimeout 60: 客户端进行连接时,服务器在指定秒数内没有回复,则中断连接尝试.\nDynamicForward 1080: 指定动态转发端口.\nGlobalKnownHostsFile /users/smith/.ssh/my_global_hosts_file: 指定全局的公钥数据库文件的位置.\nHost server.example.com: 指定连接的域名或 IP 地址,也可以是别名,支持通配符.Host命令后面的所有配置,都是针对该主机的,直到下一个Host命令为止.\nHostKeyAlgorithms ssh-dss,ssh-rsa: 指定密钥算法,优先级从高到低排列.\nHostName myserver.example.com: 在Host命令使用别名的情况下,HostName指定域名或 IP 地址.\nIdentityFile keyfile: 指定私钥文件.\nLocalForward 2001 localhost:143: 指定本地端口转发.\nLogLevel QUIET: 指定日志详细程度.如果设为QUIET,将不输出大部分的警告和提示.\nMACs hmac-sha1,hmac-md5: 指定数据校验算法.\nNumberOfPasswordPrompts 2: 密码登录时,用户输错密码的最大尝试次数.\nPasswordAuthentication no: 指定是否支持密码登录.不过,这里只是客户端禁止,真正的禁止需要在 SSH 服务器设置.\nPort 2035: 指定客户端连接的 SSH 服务器端口.\nPreferredAuthentications publickey,hostbased,password: 指定各种登录方法的优先级.\nProtocol 2: 支持的 SSH 协议版本,多个版本之间使用逗号分隔.\nPubKeyAuthentication yes: 是否支持密钥登录.这里只是客户端设置,还需要在 SSH 服务器进行相应设置.\nRemoteForward 2001 server:143: 指定远程端口转发.\nSendEnv COLOR: SSH 客户端向服务器发送的环境变量名,多个环境变量之间使用空格分隔.环境变量的值从客户端当前环境中拷贝.\nServerAliveCountMax 3: 如果没有收到服务器的回应,客户端连续发送多少次keepalive信号,才断开连接.该项默认值为3.\nServerAliveInterval 300: 客户端建立连接后,如果在给定秒数内,没有收到服务器发来的消息,客户端向服务器发送keepalive消息.如果不希望客户端发送,这一项设为0.\nStrictHostKeyChecking yes: yes表示严格检查,服务器公钥为未知或发生变化,则拒绝连接.no表示如果服务器公钥未知,则加入客户端公钥数据库,如果公钥发生变化,不改变客户端公钥数据库,输出一条警告,依然允许连接继续进行.ask（默认值）表示询问用户是否继续进行.\nTCPKeepAlive yes: 客户端是否定期向服务器发送keepalive信息.\nUser userName: 指定远程登录的账户名.\nUserKnownHostsFile /users/smith/.ssh/my_local_hosts_file: 指定当前用户的known_hosts文件（服务器公钥指纹列表）的位置.\nVerifyHostKeyDNS yes: 是否通过检查 SSH 服务器的 DNS 记录,确认公钥指纹是否与known_hosts文件保存的一致.\n</code></pre> <h3 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"密钥是什么\" data-level=\"3\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 密钥是什么 </h3>密钥（key）是一个非常大的数字,通过加密算法得到.对称加密只需要一个密钥,非对称加密需要两个密钥成对使用,分为公钥<code>public key</code>和私钥<code>private key</code>.<br><br>SSH 密钥登录采用的是非对称加密,每个用户通过自己的密钥登录.其中,私钥必须私密保存,不能泄漏；公钥则是公开的,可以对外发送.它们的关系是,公钥和私钥是一一对应的,每一个私钥都有且仅有一个对应的公钥,反之亦然.<br><br>如果数据使用公钥加密,那么只有使用对应的私钥才能解密,其他密钥都不行；反过来,如果使用私钥加密（这个过程一般称为“签名”）,也只有使用对应的公钥解密. <h3 id=\"heading-13\"> <a class=\"post-anchor\" data-id=\"heading-13\" data-text=\"密钥登录的过程\" data-level=\"3\" href=\"#heading-13\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 密钥登录的过程 </h3>SSH 密钥登录分为以下的步骤.<br>预备步骤,客户端通过<code>ssh-keygen</code>生成自己的公钥和私钥.<br>第一步,手动将客户端的公钥放入远程服务器的指定位置.<br>第二步,客户端向服务器发起 SSH 登录的请求.<br>第三步,服务器收到用户 SSH 登录的请求,发送一些随机数据给用户,要求用户证明自己的身份.<br>第四步,客户端收到服务器发来的数据,使用私钥对数据进行签名,然后再发还给服务器.<br>第五步,服务器收到客户端发来的加密签名后,使用对应的公钥解密,然后跟原始数据比较.如果一致,就允许用户登录 <h3 id=\"heading-14\"> <a class=\"post-anchor\" data-id=\"heading-14\" data-text=\"ssh-key命令: 生成密钥\" data-level=\"3\" href=\"#heading-14\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ssh-key命令: 生成密钥 </h3> <h4 id=\"heading-15\"> <a class=\"post-anchor\" data-id=\"heading-15\" data-text=\"基本用法\" data-level=\"4\" href=\"#heading-15\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 基本用法 </h4>密钥登录时,首先需要生成公钥和私钥.OpenSSH 提供了一个工具程序<code>ssh-keygen</code>命令,用来生成密钥.<br>直接输入<code>ssh-keygen</code>,程序会询问一系列问题,然后生成密钥.<pre><code class=\"language-shell\">$ ssh-keygen\n</code></pre> 通常做法是使用-t参数,指定密钥的加密算法.<pre><code class=\"language-shell\">$ ssh-keygen -t dsa\n</code></pre> 上面示例中,-t参数用来指定密钥的加密算法,一般会选择dsa算法或rsa算法.注意,这个参数没有默认值.<br>输入上面的命令以后,<code>ssh-keygen</code>会要求用户回答一些问题.<pre><code class=\"language-shell\">$ ssh-keygen -t dsa\nGenerating public/private dsa key pair.\nEnter file in which to save the key (/home/username/.ssh/id_dsa):  press ENTER\nEnter passphrase (empty for no passphrase): ********\nEnter same passphrase again: ********\nYour identification has been saved in /home/username/.ssh/id_dsa.\nYour public key has been saved in /home/username/.ssh/id_dsa.pub.\nThe key fingerprint is:\n14:ba:06:98:a8:98:ad:27:b5:ce:55:85:ec:64:37:19 username@shell.isp.com\n</code></pre> 上面示例中,执行<code>ssh-keygen</code>命令以后,会出现第一个问题,询问密钥保存的文件名,默认是<code>~/.ssh/id_dsa文件</code>,这个是私钥的文件名,对应的公钥文件<code>~/.ssh/id_dsa.pub</code>是自动生成的.用户的密钥一般都放在主目录的.ssh目录里面.<br>如果选择rsa算法,生成的密钥文件默认就会是<code>~/.ssh/id_rsa</code>（私钥）和<code>~/.ssh/id_rsa.pub</code>（公钥）.<br>接着,就会是第二个问题,询问是否要为私钥文件设定密码保护<code>passphrase</code>.这样的话,即使入侵者拿到私钥,还是需要破解密码.如果为了方便,不想设定密码保护,可以直接按回车键,密码就会为空.后面还会让你再输入一次密码,两次输入必须一致.注意,这里“密码”的英文单词是 <code>passphrase</code>,这是为了避免与 Linux 账户的密码单词 password 混淆,表示这不是用户系统账户的密码.<br>最后,就会生成私钥和公钥,屏幕上还会给出公钥的指纹,以及当前的用户名和主机名作为注释,用来识别密钥的来源.<br>公钥文件和私钥文件都是文本文件,可以用文本编辑器看一下它们的内容.公钥文件的内容类似下面这样.<pre><code class=\"language-shell\">ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIEAvpB4lUbAaEbh9u6HLig7amsfywD4fqSZq2ikACIUBn3GyRPfeF93l/\nweQh702ofXbDydZAKMcDvBJqRhUotQUwqV6HJxqoqPDlPGUUyo8RDIkLUIPRyq\nypZxmK9aCXokFiHoGCXfQ9imUP/w/jfqb9ByDtG97tUJF6nFMP5WzhM= username@shell.isp.com\n</code></pre> 上面示例中,末尾的<code>username@shell.isp.com</code>是公钥的注释,用来识别不同的公钥,表示这是哪台主机（shell.isp.com）的哪个用户（username）的公钥,不是必需项.<br><div class=\"post_note post_warning\">注意,公钥只有一行.因为它太长了,所以上面分成三行显示.</div><br>下面的命令可以列出用户所有的公钥.<pre><code class=\"language-shell\">$ ls -l ~/.ssh/id_*.pub\n</code></pre> 生成密钥以后,建议修改它们的权限,防止其他人读取.<pre><code class=\"language-shell\">$ chmod 600 ~/.ssh/id_rsa\n$ chmod 600 ~/.ssh/id_rsa.pub\n</code></pre> <h3 id=\"heading-16\"> <a class=\"post-anchor\" data-id=\"heading-16\" data-text=\"连接远程服务器\" data-level=\"3\" href=\"#heading-16\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 连接远程服务器 </h3> <h3 id=\"heading-17\"> <a class=\"post-anchor\" data-id=\"heading-17\" data-text=\"命令\" data-level=\"3\" href=\"#heading-17\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 命令 </h3><table> <thead> <tr> <th>命令</th> <th>描述</th> </tr> </thead> <tbody><tr> <td><code>ssh -i /Users/v_yuzhuang01/.ssh/id_rsa root@180.76.58.86</code></td> <td>使用密钥连接远端服务器</td> </tr> <tr> <td><code>ssh -i root@180.76.58.86</code></td> <td>使用密钥连接远端服务器</td> </tr> </tbody></table> <h3 id=\"heading-18\"> <a class=\"post-anchor\" data-id=\"heading-18\" data-text=\"相关文章\" data-level=\"3\" href=\"#heading-18\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关文章 </h3><a href=\"https://wangdoc.com/ssh/\" target=\"_blank\" title=\"SSH 教程\">SSH 教程</a>";
// Exports
module.exports = code;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: URL<br>date: 2020-07-08 11:05:12<br>categories: Js<br>tags: URL<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"URL对象\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> URL对象 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"createObjectURL\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> createObjectURL </h3><hr> <code>URL.createObjectURL()</code>静态方法会创建一个<code>DOMString</code>，其中包含一个表示参数中给出的对象的<code>URL</code>。这个<code>URL</code>的生命周期和创建它的窗口中的<code>document</code>绑定。这个新的<code>URL</code>对象表示指定的<code>File</code>对象或<code>Blob</code>对象。<br><code>objectURL = URL.createObjectURL(object);</code><ul> <li>参数(object)<br>用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象。</li> <li>返回值(objectURL)<br>一个DOMString包含了一个对象URL，该URL可用于指定源 object的内容。</li> </ul> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"内存管理\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 内存管理 </h3><hr> 在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。当不再需要这些 URL 对象时，每个对象必须通过调用<code>URL.revokeObjectURL()</code>方法来释放。<br>浏览器在 document 卸载的时候，会自动释放它们，但是为了获得最佳性能和内存使用状况，你应该在安全的时机主动释放掉它们。 <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"revokeObjectURL\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> revokeObjectURL </h3><hr> <code>URL.revokeObjectURL()</code>静态方法用来释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。你可以在 sourceopen 被处理之后的任何时候调用 revokeObjectURL()。这是因为 createObjectURL() 仅仅意味着将一个媒体元素的 src 属性关联到一个 MediaSource 对象上去。调用revokeObjectURL() 使这个潜在的对象回到原来的地方，允许平台在合适的时机进行垃圾收集。<br><code>window.URL.revokeObjectURL(objectURL);</code><ul> <li>参数(objectURL)<br>一个 DOMString，表示通过调用 URL.createObjectURL() 方法产生的 URL 对象。</li> <li>返回值<br>undefined</li> </ul> <h2 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"使用\" data-level=\"2\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 使用 </h2><hr> 上传文件,在用<code>createObjectURL</code>去生成<code>DOMString</code>,赋值到src中.可以做到上传预览,并且不需要再次下载.<pre><code class=\"language-html\">&lt;input type=&quot;file&quot; id=&quot;fileElem&quot; multiple accept=&quot;image/*&quot; style=&quot;display:none&quot; onchange=&quot;handleFiles(this.files)&quot;&gt;\n&lt;a href=&quot;#&quot; id=&quot;fileSelect&quot;&gt;Select some files&lt;/a&gt;\n&lt;div id=&quot;fileList&quot;&gt;\n  &lt;p&gt;No files selected!&lt;/p&gt;\n&lt;/div&gt;\n</code></pre> <pre><code class=\"language-js\">window.URL = window.URL || window.webkitURL;\n\nvar fileSelect = document.getElementById(&quot;fileSelect&quot;),\n    fileElem = document.getElementById(&quot;fileElem&quot;),\n    fileList = document.getElementById(&quot;fileList&quot;);\n\nfileSelect.addEventListener(&quot;click&quot;, function (e) {\n    if (fileElem) {\n        fileElem.click();\n    }\n    e.preventDefault(); // prevent navigation to &quot;#&quot;\n}, false);\n\nfunction handleFiles(files) {\n    if (!files.length) {\n        fileList.innerHTML = &quot;&lt;p&gt;No files selected!&lt;/p&gt;&quot;;\n    } else {\n        fileList.innerHTML = &quot;&quot;;\n        var list = document.createElement(&quot;ul&quot;);\n        fileList.appendChild(list);\n        for (var i = 0; i &lt; files.length; i++) {\n            var li = document.createElement(&quot;li&quot;);\n            list.appendChild(li);\n            var img = document.createElement(&quot;img&quot;);\n            img.src = window.URL.createObjectURL(files[i]);\n            img.height = 60;\n            img.onload = function () {\n                window.URL.revokeObjectURL(this.src);\n            }\n            li.appendChild(img);\n            var info = document.createElement(&quot;span&quot;);\n            info.innerHTML = files[i].name + &quot;: &quot; + files[i].size + &quot; bytes&quot;;\n            li.appendChild(info);\n        }\n    }\n}\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Unicode<br>date: 2021-01-21 15:35:46<br>categories: Unicode<br>tags: Unicode<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Unicode是什么\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Unicode是什么 </h2><hr> Unicode源于一个很简单的想法: 将全世界所有的字符包含在一个集合里,计算机只要支持这一个字符集,就能显示所有的字符,再也不会有乱码了.<br>目前,Unicode的最新版本是7.0版,一共收入了109449个符号,其中的中日韩文字为74500个.可以近似认为,全世界现有的符号当中,三分之二以上来自东亚文字.比如,中文”好”的码点是十六进制的597D. <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"JavaScript中的Unicode\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> JavaScript中的Unicode </h2><hr> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"JavaScript字符函数的局限\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> JavaScript字符函数的局限 </h3>由于JavaScript只能处理UCS-2编码,造成所有字符在这门语言中都是2个字节,如果是4个字节的字符,会当作两个双字节的字符处理.JavaScript的字符函数都受到这一点的影响,无法返回正确结果. <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"ECMAScript6\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ECMAScript6 </h3>JavaScript的下一个版本ECMAScript 6(简称ES6),大幅增强了Unicode支持,基本上解决了这个问题. <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"正确识别字符\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 正确识别字符 </h4>ES6可以自动识别4字节的码点.因此,可以用下列方法遍历字符串.<pre><code class=\"language-js\">for (let s of string ) {\n  // ...\n}\n</code></pre> 但是,为了保持兼容,length属性还是原来的行为方式.为了得到字符串的正确长度,可以用下面的方式.<br><code>Array.from(string).length</code> <h4 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"码点表示法\" data-level=\"4\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 码点表示法 </h4>JavaScript允许直接用码点表示Unicode字符,写法是”反斜杠+u+码点”.<br><code>&#39;好&#39; === &#39;\\u597D&#39; // true</code><br>但是,这种表示法对4字节的码点无效.ES6修正了这个问题,只要将码点放在大括号内,就能正确识别.<pre><code class=\"language-js\">&#39;𠁀&#39;.charCodeAt(0).toString(16) // &quot;d840&quot; charCodeAt无法处理大于FFFF的编码所以结果是错误的\n&#39;𠁀&#39;.codePointAt(0).toString(16) // &quot;20040&quot;\n&#39;\\ud840&#39; === &#39;𠁀&#39; // false\n&#39;\\u{20040}&#39; === &#39;𠁀&#39; // true\n</code></pre> <h4 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"字符串处理函数\" data-level=\"4\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 字符串处理函数 </h4><pre><code class=\"language-js\">处理两个字节码点的函数.\n&#39;A&#39;.charCodeAt(0) // 返回10进制编码\n&#39;A&#39;.charCodeAt(0).toString(16) // 返回16进制编码\nES6新增了几个专门处理4字节码点的函数.\nString.fromCodePoint(): 从Unicode码点(10进制)返回对应字符\nString.prototype.codePointAt(): 从字符返回对应的码点(10进制)\nString.prototype.at(): 返回字符串给定位置的字符\n</code></pre> <h4 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"正则表达式\" data-level=\"4\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 正则表达式 </h4> <h5 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"1.修饰符\" data-level=\"5\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 1.修饰符 </h5>ES6 对正则表达式添加了<code>u</code>修饰符，含义为“Unicode 模式”,用来正确处理大于<code>\\uFFFF</code>的 Unicode 字符.也就是说,会正确处理四个字节的UTF-16编码.<pre><code class=\"language-js\">/^\\uD83D/u.test(&#39;\\uD83D\\uDC2A&#39;) // false\n/^\\uD83D/.test(&#39;\\uD83D\\uDC2A&#39;) // true\n</code></pre> 上面代码中,<code>\\uD83D\\uDC2A</code>是一个四个字节的 UTF-16 编码,代表一个字符.但是,ES5 不支持四个字节的 UTF-16 编码,会将其识别为两个字符,导致第二行代码结果为true.加了<code>u</code>修饰符以后,ES6 就会识别其为一个字符,所以第一行代码结果为false. <h5 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"2.Unicode 字符表示法\" data-level=\"5\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 2.Unicode 字符表示法 </h5>ES6 新增了使用大括号表示 Unicode 字符,这种表示法在正则表达式中必须加上<code>u</code>修饰符,才能识别当中的大括号,否则会被解读为量词.<pre><code class=\"language-js\">/\\u{61}/.test(&#39;a&#39;) // false\n/\\u{61}/u.test(&#39;a&#39;) // true\n/\\u{20BB7}/u.test(&#39;𠮷&#39;) // true\n\njs不能正确处理\\uFFFF的unicode编码.添加修饰符u,并将码点放入{}中可以支持.\n/[\\u20000-\\u2A6D6]/.test(&#39;;&#39;) // true 不能正确处理\n/[\\u20000-\\u2A6D6]/.test(&#39;𠁹&#39;) // false\n/[\\u{20000}-\\u{2A6D6}]/u.test(&#39;𠁹&#39;) // true\n</code></pre> 上面代码表示,如果不加<code>u</code>修饰符,正则表达式无法识别<code>\\u{61}</code>这种表示法,只会认为这匹配61个连续的u. <h4 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"Unicode正规化\" data-level=\"4\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Unicode正规化 </h4>有些字符除了字母以外,还有附加符号.比如,汉语拼音的<code>Ǒ</code>,字母上面的声调就是附加符号.对于许多欧洲语言来说,声调符号是非常重要的.<br>Unicode提供了两种表示方法.一种是带附加符号的单个字符,即一个码点表示一个字符,比如<code>Ǒ</code>的码点是<code>U+01D1</code>;另一种是将附加符号单独作为一个码点,与主体字符复合显示,即两个码点表示一个字符,比如<code>Ǒ</code>可以写成<code>O（U+004F） + ˇ（U+030C）</code>.<pre><code class=\"language-js\">// 方法一\n&#39;\\u01D1&#39;\n// &#39;Ǒ&#39;\n\n// 方法二\n&#39;\\u004F\\u030C&#39;\n// &#39;Ǒ&#39;\n</code></pre> 这两种表示方法,视觉和语义都完全一样,理应作为等同情况处理.但是,JavaScript无法辨别.<br><code>&#39;\\u01D1&#39;===&#39;\\u004F\\u030C&#39; //false</code><br>ES6提供了normalize方法,允许”Unicode正规化”,即将两种方法转为同样的序列.<pre><code class=\"language-js\"> &#39;\\u01D1&#39;.normalize() === &#39;\\u004F\\u030C&#39;.normalize() \n // true\n</code></pre> <h2 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><hr> <a href=\"http://www.ruanyifeng.com/blog/2014/12/unicode.html\" target=\"_blank\" title=\"Unicode与JavaScript详解\">Unicode与JavaScript详解</a><br><a href=\"https://es6.ruanyifeng.com/#docs/regex#u-%E4%BF%AE%E9%A5%B0%E7%AC%A6\" target=\"_blank\" title=\"Es6修饰符\">Es6修饰符</a><br><a href=\"https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php\" target=\"_blank\" title=\"汉字 Unicode 编码范围\">汉字 Unicode 编码范围</a>";
// Exports
module.exports = code;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: Url加密解密<br>date: 2019-09-17 11:06:40<br>categories: Url加密解密<br>tags: Url加密解密<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"解码函数\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 解码函数 </h2><hr> encode(加密) decode(解密)<br><code>encodeURI decodeURI encodeURIComponent decodeURIComponent</code>四个函数都可以进行加密解密. <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"区别\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 区别 </h3><hr> <ol> <li>encodeURI不能加密如<code>#</code>的特殊符号</li> </ol> <pre><code class=\"language-js\">encodeURI(&#39;http://w3schools.com/my test.asp?name=ståle&amp;car=saab&#39;)\n// 输出 =&gt; &quot;http://w3schools.com/my%20test.asp?name=st%C3%A5le&amp;car=saab&quot;\n\ndecodeURI(&quot;http://w3schools.com/my%20test.asp?name=st%C3%A5le&amp;car=saab&quot;)\n// 输出 =&gt; &quot;http://w3schools.com/my test.asp?name=ståle&amp;car=saab&quot;\n</code></pre> <ol start=\"2\"> <li>encodeURIComponent可以对特俗符号加密</li> </ol> <pre><code class=\"language-js\">encodeURIComponent(&quot;http://w3schools.com/my test.asp?name=ståle&amp;car=saab&quot;)\n// 输出 =&gt; &quot;http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab&quot;\n\ndecodeURIComponent(&quot;http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab&quot;)\n// 输出 =&gt; &quot;http://w3schools.com/my test.asp?name=ståle&amp;car=saab&quot;\n</code></pre> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"问题\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 问题 </h2><hr> <ol> <li>丢失参数<br>如果url不经过加密处理,在传输过程中会丢失参数.</li> </ol> <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"总结\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 总结 </h2><hr> <div class=\"post_note post_info\">都使用encodeURIComponent decodeURIComponent</div> <h2 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"参考\" data-level=\"2\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 参考 </h2><hr> <a href=\"https://juejin.cn/post/6901677582740586503\" target=\"_blank\" title=\"小程序丢失参数\">小程序丢失参数</a>";
// Exports
module.exports = code;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: awesome<br>date: 2020-12-15 15:25<br>categories: awesome<br>tags: awesome<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"常用网站\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 常用网站 </h3><hr> <a href=\"https://webgradients.com/\" target=\"_blank\" title=\"WebGradients\">WebGradients</a><br><a href=\"https://realfavicongenerator.net/\" target=\"_blank\" title=\"favicon生成器\">favicon生成器</a><br><a href=\"https://transform.tools/\" target=\"_blank\" title=\"transform.tools\">transform.tools</a><br><a href=\"https://www.ipaddress.com/\" target=\"_blank\" title=\"ip地址查询\">ip地址查询</a><br><a href=\"https://github.com/nieweidong/fetool\" target=\"_blank\" title=\"大前端的瑞士军刀,只记录有用的.\">大前端的瑞士军刀,只记录有用的.</a><br><a href=\"https://github.com/AlloyTeam/Mars\" target=\"_blank\" title=\"腾讯移动 Web 前端知识库\">腾讯移动 Web 前端知识库</a><br><a href=\"https://github.com/chokcoco/CSS-Inspiration\" target=\"_blank\" title=\"CSS Inspiration，在这里找到写 CSS 的灵感！\">CSS Inspiration，在这里找到写 CSS 的灵感！</a><br><a href=\"https://github.com/SUNNERCMS/30daysJavascript\" target=\"_blank\" title=\"Javascript 30天的demo来巩固基础\">Javascript 30天的demo来巩固基础</a><br><a href=\"https://github.com/stephentian/33-js-concepts\" target=\"_blank\" title=\"每个 JavaScript 工程师都应懂的33个概念\">每个 JavaScript 工程师都应懂的33个概念</a>";
// Exports
module.exports = code;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(86);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(87);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(88);
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(89);
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(90);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var code = "<hr> authorName: Yu<br>title: charles<br>date: 2019-08-15 15:14:48<br>tags: charles<br>categories: 抓包工具<hr> <div class=\"post_note post_info\">charles常用技巧</div><div class=\"post_note post_error\">charles常用技巧</div><ol> <li>断点mock数据</li> </ol> 右键你需要打断点的请求.<p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p> 刷新页面后可以编辑发出的请求和修改响应的数据.<p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"charles5\" title=\"null\" style=\"cursor:zoom-in\"></p><hr> <div class=\"post_note post_warning\">使用charles经常会遇到的问题总结:<br> 1.e<br> 2.ddsdsd</div><ol> <li>抓不到https请求</li> </ol> 安装证书.<p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"charles1\" title=\"null\" style=\"cursor:zoom-in\"></p>开启SSL代理,监听所有host和port.<p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p><ol start=\"2\"> <li>请求没有被charles代理成功.</li> </ol> 将本地的http和https代理到本机ip地址,port是charles的默认端口号8888<p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p>";
// Exports
module.exports = code;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(91);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(92);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(93);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var code = "<hr> authorName: Yu<br>title: Fiddler<br>date: 2019-05-06 17:11:23<br>categories: 抓包工具<br>tags: 抓包<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"安装\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 安装 </h3><hr> <ol> <li>windows:</li> </ol> <ul> <li>无脑下一步.</li> </ul> <ol start=\"2\"> <li>mac:</li> </ol> <ul> <li><a href=\"https://www.telerik.com/download/fiddler/fiddler-osx-beta\" target=\"_blank\" title=\"下载fiddler\">下载fiddler</a></li> <li>下载fiddler运行的环境<a href=\"http://www.mono-project.com/download/#download-mac\" target=\"_blank\" title=\"mono下载\">mono下载</a></li> <li>下载证书用于fiddler访问https协议的请求<br><code>/Library/Frameworks/Mono.framework/Versions/&lt;Mono Version&gt;/bin/mozroots --import --sync</code> </li> </ul> <strong>mac环境下Library路径在user的上级, 不是个人users下的Library</strong><ul> <li>将mono加入全局环境变量中<code>sudo vi ~/.bash_profile</code>, 并写入<br><code>export MONO_HOME=/Library/Frameworks/Mono.framework/Versions/5.4.1</code><br><code>export PATH=$PATH:$MONO_HOME/bin</code></li> <li>cd到对应的fiddler解压后的文件夹里,运行32位的fiddler<code>mono --arch=32 Fiddler.exe</code></li> </ul> <strong><Mono Version>mono版本取前三位</Mono></strong> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"使用\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 使用 </h3><hr> <p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p><br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p><br>fiddler要代理手机上的请求需满足<ul> <li>代理地址需要填pc的ip地址<code>ifconfig</code>端口号是8888.</li> <li>手机和pc要再同一个网下.<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"charles4\" title=\"null\" style=\"cursor:zoom-in\"></p></li> </ul> ";
// Exports
module.exports = code;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(94);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(95);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<hr> authorName: Yu<br>title: git fetch 和 git pull<br>date: 2019-09-17 19:26:37<br>categories: Git<br>tags: Git<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"区别\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 区别 </h3><code>git fetch</code>和<code>git pull</code>都是同步远端的代码,区别是前者将远端的更新全部更新到本地git远端文件夹(remotes)内,不会自动merge.<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"1\" title=\"null\" style=\"cursor:zoom-in\"></p> 后者即会更新本地远端文件夹,也会合并到本地当前分支.<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"2\" title=\"null\" style=\"cursor:zoom-in\"></p> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"用法\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 用法 </h3><ol> <li>git fetch<pre><code class=\"language-bash\">git fetch origin master // 拉取远程主机的master分支最新内容\ngit log -p FETCH_HEAD // 查看拉取的信息\ngit merge FETCH_HEAD // 合并fetch最新的内容到当前分支\n</code></pre> </li> <li>git pull<pre><code class=\"language-bash\">git pull 远程主机名 远程分支名:本地分支名 // eg: git pull origin master:dev\n</code></pre> </li> </ol> ";
// Exports
module.exports = code;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: git reset和git revert<br>date: 2019-09-17 20:04:58<br>categories: Git<br>tags: Git<hr> <ol> <li>get reset<br>回退到指定版本,提交历史中看不到指定版本后的提交历史.<pre><code class=\"language-bash\">git reset --hard 版本号\n</code></pre> </li> <li>git revert<br>反转指定版本的修改,回生成新的revert的commit历史信息.<pre><code class=\"language-bash\">git revert 版本号\n</code></pre> </li> </ol> ";
// Exports
module.exports = code;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: gulp配置<br>date: 2019-09-21 16:57:17<br>categories: gulp<br>tags: gulp<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"gulp api\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> gulp api </h3><ol> <li>task<br>gulp.task([taskName], taskFunction).<pre><code class=\"language-js\">gulp.task(&#39;build&#39;, [&#39;task1&#39;, &#39;task2&#39;], function() {});\n</code></pre> </li> </ol> gulp在4版本后不在支持这种嵌套任务的写法.改用一下写法.<br>gulp.task(‘build, gulp.series(‘task1’, ‘task2’), function() {console.log(‘this is build task’)});gulp 执行多个任务是存在异步的问题.如果需要上一个任务执行完毕后执行任务二.需要使用cb();<br>eg: gulp.task(‘task1’, function(cb) {<br> console.log(‘taks1 content’);<br> cb()<br>});<br>gulp.taks(‘task2’,gulp.series(‘task1’, function() {<br> console.log(‘task2’);<br>})})result: task1 content task2<pre><code>&lt;!-- more --&gt;\n2. series(串行)\n```js\ngulp.task(&#39;test&#39;, function(cb) {\n    console.log(&#39;2&#39;);\n    cb();\n});\n\ngulp.task(&#39;test1&#39;, function(cb) {\n    setTimeout(function() {\n        console.log(&#39;test1&#39;);\n        cb();\n    },2000)\n});\ngulp.task(&#39;test2&#39;, function(cb) {\n    console.log(&#39;test2&#39;);\n    cb();\n});\ngulp.task(&#39;default&#39;, gulp.series(&#39;test1&#39;, &#39;test2&#39;, function() {\n    console.log(&#39;end&#39;)\n}));\n// cb函数要放在异步函数内,否则无效. 输出test2 end test1\nresult: test1 test2 end\n</code></pre> <ol start=\"3\"> <li>parallel(并行)<pre><code class=\"language-js\">gulp.task(&#39;test1&#39;, function(cb) {\n console.log(&#39;start1&#39;)\n setTimeout(function() {\n     console.log(&#39;test1&#39;);\n     cb();\n },2000)\n});\ngulp.task(&#39;test2&#39;, function(cb) {\n console.log(&#39;start2&#39;)\n console.log(&#39;test2&#39;);\n cb();\n});\ngulp.task(&#39;default&#39;, gulp.parallel(&#39;test1&#39;, &#39;test2&#39;, function() {\n console.log(&#39;end&#39;)\n}));\n</code></pre> </li> </ol> result: start1 start2 test2 end test1<pre><code>### gulp plugins\n1. less\n```js\nvar gulp = require(&#39;gulp&#39;);\nvar less = require(&#39;gulp-less&#39;);\n\ngulp.task(&#39;css&#39;, function(cb) {\n   gulp.src(&#39;./css/**/*.less&#39;).pipe(\n       less()\n   ).pipe(\n       gulp.dest(&#39;./release/css&#39;)\n   );\n    cb()\n});\n</code></pre> <a href=\"https://github.com/gulp-community/gulp-less\" target=\"_blank\" title=\"gulp-less\">gulp-less</a><br>2. less-plugin-autoprefix<pre><code class=\"language-js\">var LessAutoprefix = require(&#39;less-plugin-autoprefix&#39;);\nvar autoprefix = new LessAutoprefix({ browsers: [&#39;last 2 versions&#39;] });\n\nreturn gulp.src(&#39;./less/**/*.less&#39;)\n  .pipe(less({\n    plugins: [autoprefix]\n  }))\n  .pipe(gulp.dest(&#39;./public/css&#39;));\n</code></pre> <a href=\"https://github.com/less/less-plugin-autoprefix\" target=\"_blank\" title=\"less-plugin-autoprefix\">less-plugin-autoprefix</a><br>3. gulp-sourcemaps<br>定位错误位置<pre><code class=\"language-js\">var gulp = require(&#39;gulp&#39;);\nvar plugin1 = require(&#39;gulp-plugin1&#39;);\nvar plugin2 = require(&#39;gulp-plugin2&#39;);\nvar sourcemaps = require(&#39;gulp-sourcemaps&#39;);\n\ngulp.task(&#39;javascript&#39;, function() {\n  gulp.src(&#39;src/**/*.js&#39;)\n    .pipe(sourcemaps.init())\n      .pipe(plugin1())\n      .pipe(plugin2())\n    .pipe(sourcemaps.write(&#39;../maps&#39;))\n    .pipe(gulp.dest(&#39;dist&#39;));\n});\n</code></pre> <a href=\"https://github.com/gulp-sourcemaps/gulp-sourcemaps\" target=\"_blank\" title=\"gulp-sourcemaps\">gulp-sourcemaps</a>";
// Exports
module.exports = code;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: hexo<br>date: 2019-08-13 15:41:22<br>categories: hexo<br>tags: hexo<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 命令 </h2><ol> <li>开启服务<pre><code class=\"language-shell\">hexo server\n</code></pre> </li> <li>生成新文章<pre><code class=\"language-shell\">hexo new &#39;your article name&#39;\n</code></pre> </li> <li>生成打包文件<pre><code class=\"language-shell\">hexo generate\n</code></pre> </li> <li>清除打包文件<pre><code class=\"language-shell\">hexo clean\n</code></pre> </li> <li>部署blog<br>需要配置_config.yml<pre><code class=\"language-shell\">hexo deploy\n</code></pre> </li> <li>生成新html<pre><code class=\"language-shell\">hexo new page &#39;your html name&#39;\n</code></pre> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"标签\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 标签 </h2></li> <li>链接<pre><code class=\"language-shell\">{% link [text] [url] [external] [title] %}\n</code></pre> </li> <li>图片<pre><code class=\"language-shell\">{% asset_img  fullimage fiddler1.jpg image %}\n</code></pre> </li> <li>note<pre><code class=\"language-shell\">{% note info %}\ntest\n{% endnote %}\n</code></pre> default、primary、success、info、warning、danger</li> </ol> <strong>hexo参考docs</strong><ul> <li>{% link hexo <a href=\"https://hexo.io/zh-cn/docs/tag-plugins.html\" target=\"_blank\" title=\"https://hexo.io/zh-cn/docs/tag-plugins.html\">https://hexo.io/zh-cn/docs/tag-plugins.html</a> %}</li> <li>{% link next主题 <a href=\"http://theme-next.iissnan.com/theme-settings.html\" target=\"_blank\" title=\"http://theme-next.iissnan.com/theme-settings.html\">http://theme-next.iissnan.com/theme-settings.html</a> %}</li> <li>{% link 第三方插件 <a href=\"https://anoyer.cn/article/Hexo%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html\" target=\"_blank\" title=\"https://anoyer.cn/article/Hexo%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html\">https://anoyer.cn/article/Hexo%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html</a> %}</li> </ul> ";
// Exports
module.exports = code;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(96);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<hr> authorName: Yu<br>title: npm<br>date: 2019-08-26 10:32:05<br>categories: npm<br>tags: npm<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"npm命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm命令 </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"安装包\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 安装包 </h3><table> <thead> <tr> <th>命令</th> <th>描述</th> </tr> </thead> <tbody><tr> <td><code>npm install packageName</code></td> <td>项目内安装</td> </tr> <tr> <td><code>npm install packageName -g</code></td> <td>全局安装包</td> </tr> <tr> <td><code>npm install packageName -S</code></td> <td>安装依赖项,<code>-S = --save</code></td> </tr> <tr> <td><code>npm install packageName -D</code></td> <td>安装开发依赖项, <code>-D = --save-dev</code></td> </tr> </tbody></table> <div class=\"post_note post_warning\"><code>npm install</code>和<code>npm ci</code>的主要区别:<br>1.该项目必须有一个 package-lock.json 或 npm-shrinkwrap.json.<br>2.如果package-lock.json中的依赖项与package.json的依赖项不匹配,<code>npm ci</code>则将退出并显示错误，而不是更新package-lock.json.<br>3.<code>npm ci</code>只能一次安装整个项目: 使用此命令无法添加单个依赖项.<br>4.如果node_modules已经存在,它将在<code>npm ci</code>开始安装之前自动删除.<br>5.它永远不会写入 package.json或package-lock.json: 安装基本上是冻结的.</div><ol> <li>查看npm全局安装的包<br><code>npm list -g --depth 0</code></li> <li>root权限npm全局安装,仍会权限不足, –unsafe-perm<br><code>sudo npm install --unsafe-perm=true</code></li> <li>更新包<br><code>npm update</code>更新全部包(慎用)<br><code>npm update 包名</code>更新某个包名<br><code>npm update 包名 -g</code>更新全局的某个包<br>也可以用install更新包<code>npm i name@版本号</code></li> <li>package.json中^ ~的区别<ul> <li>比如”classnames”: “2.2.5”，表示安装2.2.5的版本</li> <li>比如 “babel-plugin-import”: “~1.1.0”,表示安装1.1.x的最新版本（不低于1.1.0），但是不安装1.2.x，也就是说安装时不改变大版本号和次要版本号</li> <li>比如 “antd”: “^3.1.4”,，表示安装3.1.4及以上的版本，但是不安装4.0.0，也就是说安装时不改变大版本号。</li> </ul> </li> <li>查看npmjs服务器上包的版本信息<pre><code class=\"language-bash\">npm view react versions；这种方式可以查看npm服务器上所有的react版本信息；\nnpm view react version； 这种方式只能查看react的最新的版本是哪一个；\nnpm info react 这种方式和第一种类似，也可以查看react所有的版本，但是能查出更多的关于react的信息；\n</code></pre> </li> </ol> 2、查看本地已经安装的包的版本信息：<br>npm ls react （查看某个项目安装的react），命令必须在某个项目下执行<br>npm ls react -g (查看全局安装的react)``` <h4 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"npm root -g\" data-level=\"4\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm root -g </h4>查看全局包安装的路径. <h4 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"npm bin -g\" data-level=\"4\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm bin -g </h4>查看全局的可执行文件的存放路径. <h4 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"npm link\" data-level=\"4\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm link </h4>开发包的时候,进行本地调试.<br>在全局的node的bin下添加命令,并且将node_modules中的该包源码指向本地的目录.<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"npm-link\" title=\"null\" style=\"cursor:zoom-in\"></p> <h4 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"npm unlink\" data-level=\"4\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm unlink </h4>调试结束后，我们回到开发包的目录,执行<code>npm unlink</code>,解除映射关系. <h4 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"npm whoami\" data-level=\"4\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm whoami </h4>查看当前npm用户 <h4 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"npm login\" data-level=\"4\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm login </h4>登录npm <h4 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"npm config get registry\" data-level=\"4\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm config get registry </h4>查看当前registry <h2 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><hr> <a href=\"https://mp.weixin.qq.com/s/RAtoEgZsvpuRwudeUjNKZw\" target=\"_blank\" title=\"一文为您构建系统化的 NPM 知识！\">一文为您构建系统化的 NPM 知识！</a>";
// Exports
module.exports = code;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(97);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<hr> authorName: Yu<br>title: npm发包<br>date: 2019-08-21 14:00:36<br>categories: npm<br>tags: npm发包<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"初始化仓库\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 初始化仓库 </h2><hr> <code>npm init</code>初始化仓库,填入仓库信息. <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"规范化commit\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 规范化commit </h2><hr> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"安装commitizen\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 安装commitizen </h3><code>npm install commitizen -g</code><br>在你的项目里执行一下命令,进行初始化<br><code>commitizen init cz-conventional-changelog --save-dev --save-exact</code><br><code>commitizen</code>包的作用提供<code>git cz</code>命令代替<code>git commit -m</code><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"add-commit\" title=\"null\" style=\"cursor:zoom-in\"></p> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"git-cz\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> git-cz </h3><code>git-cz</code>commit添加emoji,自定义commit类型的描述等.<br><code>npm install --save-dev git-cz</code><br>修改commitizen的适配器.<code>commitizen init git-cz --force --save-dev --save-exact</code><pre><code class=\"language-json\">// 替换后package.json里的path会被替换\n&quot;config&quot;: {\n    &quot;commitizen&quot;: {\n      // &quot;path&quot;: &quot;./node_modules/cz-conventional-changelog&quot;\n      &quot;path&quot;: &quot;./node_modules/git-cz&quot;\n    }\n}\n</code></pre> <code>git-cz</code>报错未解决,暂时没有使用 <h2 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"changelog\" data-level=\"2\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> changelog </h2><hr> <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"安装conventional-changelog-cli\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 安装conventional-changelog-cli </h3>全局安装<code>conventional-changelog-cli</code>,用于生成每次改动日志.<br><code>npm install -g conventional-changelog-cli</code><br>进入你的项目并生成CHANGELOG.md文件<br><code>cd my-project</code><ul> <li><code>conventional-changelog -p angular -i CHANGELOG.md -s</code>(在CHANGELOG.md中生成最新一条的commit记录)</li> <li><code>conventional-changelog -p angular -i CHANGELOG.md -s -r 0</code>(生成以往全部的commit记录到CHANGELOG.md文件中,<strong>会复写已存在的CHANGELOG.md文件</strong>)</li> </ul> <h2 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"npm version\" data-level=\"2\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm version </h2><hr> <code>npm version prepatch</code>的作用: 1.修改预备修订版的版本号 2.生成tag<br><code>npm run changelog</code>会根据tag生成多条记录<br>0.0.1-1 =&gt; 主版本号.次版本号.修订号-预发布号<table> <thead> <tr> <th>npm version</th> <th>功能</th> </tr> </thead> <tbody><tr> <td>major</td> <td>主版本号 <br/>- 如果没有预发布号: <br/>1.直接升级一位大号，其他位都置为0<br/>- 如果有预发布号: <br/>1.中号和小号都为0,则不升级大号,而将预发布号删掉.即2.0.0-1变成2.0.0,这就是预发布的作用<br/>2.如果中号和小号有任意一个不是0,那边会升级一位大号,其他位都置为0，清空预发布号.即 2.0.1-0变成3.0.0</td> </tr> <tr> <td>premajor</td> <td>预备主版本 <br/>- 直接升级大号，中号和小号置为0，增加预发布号为0</td> </tr> <tr> <td>minor</td> <td>次版本号 <br/>- 如果没有预发布号: <br/>1.升级一位中号，大号不动，小号置为空<br/>- 如果有预发布号: <br/>1. 如果小号为0，则不升级中号，将预发布号去掉<br/>2. 如果小号不为0，同理没有预发布号</td> </tr> <tr> <td>preminor</td> <td>预备次版本 <br/>- 直接升级此版本号,增加预发布号为0</td> </tr> <tr> <td>patch</td> <td>修订号 <br/>- 如果没有预发布号: 升级修订号,去掉预发布号<br/>- 如果有预发布号: 去掉预发布号,其它不动</td> </tr> <tr> <td>prepatch</td> <td>预备修订版 <br/>- 直接升级修订号, 增加预发布号为0</td> </tr> <tr> <td>prerelease</td> <td>预发布版本 <br/>- 如果没有预发布号: 升级修订号,预发布号为0<br/>- 如果有预发布号: 升级预发布号</td> </tr> <tr> <td>1.0.1</td> <td>也可使用<code>npm version 1.0.1</code>去修改版本号</td> </tr> </tbody></table> <pre><code class=\"language-json\"> {\n  &quot;name&quot;: &quot;sftp-connection&quot;,\n  &quot;version&quot;: &quot;1.0.1&quot;,\n  &quot;description&quot;: &quot;sftp&quot;,\n  &quot;main&quot;: &quot;index.js&quot;,\n  &quot;scripts&quot;: {\n    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,\n    &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;\n  },\n  &quot;repository&quot;: {\n    &quot;type&quot;: &quot;git&quot;,\n    &quot;url&quot;: &quot;git+https://github.com/HoustonEB/SFTP.git&quot;\n  },\n  &quot;keywords&quot;: [\n    &quot;sftp&quot;,\n    &quot;ssh2&quot;\n  ],\n  &quot;author&quot;: &quot;yuzhuang&quot;,\n  &quot;license&quot;: &quot;MIT&quot;,\n  &quot;bugs&quot;: {\n    &quot;url&quot;: &quot;https://github.com/HoustonEB/SFTP/issues&quot;\n  },\n  &quot;homepage&quot;: &quot;https://github.com/HoustonEB/SFTP#readme&quot;,\n  &quot;devDependencies&quot;: {\n    &quot;cz-conventional-changelog&quot;: &quot;^3.3.0&quot;\n  },\n  &quot;config&quot;: {\n    &quot;commitizen&quot;: {\n      &quot;path&quot;: &quot;./node_modules/cz-conventional-changelog&quot;\n    }\n  }\n}\n</code></pre> <h2 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"登录npm\" data-level=\"2\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 登录npm </h2><hr> 项目内执行<code>npm adduser</code>添加用户后,就不需要再次登录npm.<br><code>npm login</code> <h2 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"npm publish\" data-level=\"2\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> npm publish </h2>发布到npm仓库<br>npm仓库源地址<strong><a href=\"http://registry.npmjs.org\" target=\"_blank\" title=\"http://registry.npmjs.org\">http://registry.npmjs.org</a></strong> <h2 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"推荐的工作流\" data-level=\"2\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 推荐的工作流 </h2><hr> <ul> <li>修改代码</li> <li>commit changes(git cz)</li> <li>确保持续集成成功(单元测试)</li> <li>提升package.json中包的版本,利用<code>npm version</code>更改版本.</li> <li>生成changelog记录(<code>npm run changelog</code>)</li> <li>提交package.json和changelog.md的改动</li> <li>push github</li> </ul> <h2 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"expose the library\" data-level=\"2\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> expose the library </h2><hr> webpack中指定包暴露的变量,这样就能支持通过<code>script</code>标签使用包.webpack会将变量注入到window中.<pre><code class=\"language-js\">const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  entry: &#39;./src/index.js&#39;,\n  output: {\n    path: path.resolve(__dirname, &#39;dist&#39;),\n    filename: &#39;webpack-numbers.js&#39;,\n    library: &quot;webpackNumbers&quot;,\n  },\n};\n</code></pre> 然而它只能通过被<code>script</code>标签引用而发挥作用,它不能运行在<code>CommonJS、AMD、Node.js</code>等环境中.<pre><code class=\"language-html\">&lt;script src=&quot;https://example.org/webpack-numbers.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  window.webpackNumbers.wordToNum(&#39;Five&#39;);\n&lt;/script&gt;\n</code></pre> 在webpack中添加<code>type: &#39;umd&#39;</code>,即可运行在<code>CommonJS、AMD、Node.js</code>等环境中.<pre><code class=\"language-js\">const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  entry: &#39;./src/index.js&#39;,\n  output: {\n    path: path.resolve(__dirname, &#39;dist&#39;),\n    filename: &#39;webpack-numbers.js&#39;,\n  library: &#39;webpackNumbers&#39;,\n  library: {\n    name: &#39;webpackNumbers&#39;,\n    type: &#39;umd&#39;\n  },\n  },\n};\n</code></pre> <h2 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"peerDependencies\" data-level=\"2\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> peerDependencies </h2><hr> 为了避免项目和包中依赖项的重复下载,需要使用<code>peerDependencies</code>.<br>未使用<code>peerDependencies</code>.<pre><code class=\"language-text\">.\n├── helloWorld\n│   └── node_modules\n│       ├── packageA\n│       ├── plugin1\n│       │   └── nodule_modules\n│       │       └── packageA\n│       └── plugin2\n│       │   └── nodule_modules\n│       │       └── packageA\n</code></pre> 添加<code>peerDependencies</code>后,项目和包的依赖图是扁平的.重复的包只会下载一次.<pre><code class=\"language-js\">{\n  &quot;peerDependencies&quot;: {\n    &quot;packageA&quot;: &quot;1.0.1&quot;\n  }\n}\n</code></pre> 此时在主系统中执行<code>npm install</code>生成的依赖图就是这样的:<pre><code class=\"language-text\">.\n├── helloWorld\n│   └── node_modules\n│       ├── packageA\n│       ├── plugin1\n│       └── plugin2\n</code></pre> 例如: 包中依赖react和react-dom的指定版本.<pre><code class=\"language-js\">{\n  &quot;peerDependencies&quot;: {\n    &quot;react&quot;: &quot;&gt;=16.12.0&quot;,\n    &quot;react-dom&quot;: &quot;&gt;=16.12.0&quot;\n  }\n}\n</code></pre> <div class=\"post_note post_info\">因此我们总结下在插件使用 dependencies 声明依赖库的特点：<br>1.如果用户显式依赖了核心库，则可以忽略各插件的 peerDependency 声明；<br>2.如果用户没有显式依赖核心库，则按照插件 peerDependencies 中声明的版本将库安装到项目根目录中；<br>3.当用户依赖的版本、各插件依赖的版本之间不相互兼容，会报错让用户自行修复；</div> <h2 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"相关链接\" data-level=\"2\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h2><hr> <a href=\"https://github.com/commitizen/cz-cli\" target=\"_blank\" title=\"commitizen\">commitizen</a><br> <a href=\"https://github.com/streamich/git-cz\" target=\"_blank\" title=\"git-cz\">git-cz</a><br> <a href=\"https://gist.github.com/parmentf/035de27d6ed1dce0b36a\" target=\"_blank\" title=\"commit类型和emoji对映表\">commit类型和emoji对映表</a><br> <a href=\"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#readme\" target=\"_blank\" title=\"conventional-changelog-cli\">conventional-changelog-cli</a><br> <a href=\"https://shields.io/category/downloads\" target=\"_blank\" title=\"添加包的标签\">添加包的标签</a><br> <a href=\"https://juejin.cn/post/6844904134248759309\" target=\"_blank\" title=\"一文搞懂peerDependencies\">一文搞懂peerDependencies</a><br> <a href=\"https://webpack.docschina.org/guides/author-libraries/#externalize-lodash\" target=\"_blank\" title=\"webpack 创建一个library\">webpack 创建一个library</a>";
// Exports
module.exports = code;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: react-native 开发汇总<br>date: 2019-10-29 10:20:15<br>categories: react-native<br>tags: react-native<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"标签\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 标签 </h2>1.View<br>2.Text<br>3.ScrollView<ul> <li>showsHorizontalScrollIndicator: 隐藏水平滚动条</li> </ul> 4.RefreshControl<ul> <li>refreshing: 是否显示刷新器</li> <li>onRefresh: 当滚动距离顶部距离0,触发函数</li> <li>progressBackgroundColor: loading背景色(Android)</li> <li>tintColor: 刷新器(圈圈)的颜色(iOS)</li> <li>size: 刷新器的大小0大1小</li> <li>title: 再刷新器下显示的文字(iOS)</li> <li>titleColor: 刷新起下文字的颜色(iOS)</li> <li>progressViewOffset: 刷新起距离上部的距离(Android)</li> <li>添加上拉刷新<br>&lt;–! more –&gt;<pre><code class=\"language-html\">&lt;ScrollView\n      style={styles.scrollview}\n      refreshControl={\n        &lt;RefreshControl\n          refreshing={this.state.isRefreshing}\n          onRefresh={this._onRefresh}\n          tintColor=&quot;#ff0000&quot;\n          title=&quot;Loading...&quot;\n          titleColor=&quot;#00ff00&quot;\n          colors={[&#39;#ff0000&#39;, &#39;#00ff00&#39;, &#39;#0000ff&#39;]}\n          progressBackgroundColor=&quot;#ffff00&quot;\n        /&gt;\n      }&gt;\n      {rows}\n    &lt;/ScrollView&gt;\n</code></pre> </li> </ul> 5.TouchableOpacity<br>用来封装自己的Button,因为Button没有触摸的反馈效果.<ul> <li>onPress: 触摸触发的函数</li> <li>activeOpacity: 指定封装的视图在被触摸操作激活时以多少不透明度显示（通常在0到1之间）.</li> </ul> 6.WebView<ul> <li>已被rn移除,改用<a href=\"https://github.com/react-native-community/react-native-webview\" target=\"_blank\" title=\"react-native-webview\">react-native-webview</a></li> </ul> <hr> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"导航器\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 导航器 </h2>1.react-navigation<ul> <li>StackNavigator - 为应用程序提供了一种切换的方法,每次切换时,新的页面会放置再堆栈的顶部</li> <li>TabNavigator - 用于设置具有多个Tab页的页面</li> <li>DrawerNavigator - 用于设置抽屉导航的页面</li> </ul> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"轮播图\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 轮播图 </h2>1.react-native-swiper<blockquote> v1.5.14<br><code>npm i react-native-swiper --save</code><br>v1.6.0-nightly<br><code>npm i --save react-native-swiper@nightly</code><br>安装v1.5.14版本会报错,因为rn高版本移除了<ViewPagerAndroid/>,而swipper依赖于它.<br>v1.6.0替换掉了这个标签.</blockquote> ";
// Exports
module.exports = code;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: react-native<br>date: 2019-10-22 16:13:42<br>categories: react-native<br>tags: react-native<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"发版app\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 发版app </h2>1.生成签名密钥<pre><code class=\"language-bash\">keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n</code></pre> 这个命令会在当前目录生成{% label <a href=\"mailto:primary@my-release-key.keystore\" target=\"_blank\" title=\"primary@my-release-key.keystore\">primary@my-release-key.keystore</a>%}文件<br>2.设置gradle变量<br>-把{% label <a href=\"mailto:primary@my-release-key.keystore\" target=\"_blank\" title=\"primary@my-release-key.keystore\">primary@my-release-key.keystore</a>%}文件放入android/app文件夹下.<br>-编辑<del>/.gradle/gradle.properties（全局配置，对所有项目有效）或是项目目录/android/gradle.properties（项目配置，只对所在项目有效）。<br>如果没有gradle.properties文件你就自己创建一个，添加如下的代码（注意把其中的****替换为相应密码）<br> 注意：</del>符号表示用户目录，比如 windows 上可能是C:\\Users\\用户名，而 mac 上可能是/Users/用户名。<pre><code class=\"language-bash\">MYAPP_RELEASE_STORE_FILE=my-release-key.keystore\nMYAPP_RELEASE_KEY_ALIAS=my-key-alias\nMYAPP_RELEASE_STORE_PASSWORD=*****\nMYAPP_RELEASE_KEY_PASSWORD=*****\n</code></pre> <div class=\"post_note post_warning\">一旦你在 Play Store 发布了你的应用，如果想修改签名，就必须用一个不同的包名来重新发布你的应用（这样也会丢失所有的下载数和评分）。所以请务必备份好你的密钥库和密码</div><br>提示：如果你不想以明文方式保存密码，同时你使用的是 macOS 系统，那么你也可以把密码保存到钥匙串（Keychain）中。这样一来你就可以省略掉上面配置中的后两行（即 MYAPP_RELEASE_STORE_PASSWORD 和 MYAPP_RELEASE_KEY_PASSWORD）<br>3.生成发行APK包<pre><code class=\"language-bash\">cd android\n./gradlew assembleRelease\n</code></pre> Gradle 的assembleRelease参数会把所有用到的 JavaScript 代码都打包到一起，然后内置到 APK 包中。如果你想调整下这个行为（比如 js 代码以及静态资源打包的默认文件名或是目录结构等），可以看看android/app/build.gradle文件，然后琢磨下应该怎么修改以满足你的需求。<br>注意：请确保 gradle.properties 中没有包含_org.gradle.configureondemand=true_，否则会跳过 js 打包的步骤，导致最终生成的 apk 是一个无法运行的空壳。<br>生成的 APK 文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了。4.测试应用的发行版本<br>在把发行版本提交到 Play Store 之前，你应该做一次最终测试。输入以下命令可以在设备上安装发行版本：<br><code>react-native run-android --variant=release</code><br>注意–variant=release参数只能在你完成了上面的签名配置之后才可以使用。你现在可以关掉运行中的 packager 了，因为你所有的代码和框架依赖已经都被打包到 apk 包中，可以离线运行了。<br>注意：在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。 <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"遇到的问题\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 遇到的问题 </h2>1.发版app时报的错误<pre><code class=\"language-bash\">Execution failed for task &#39;:app:bundleReleaseJsAndAssets&#39;.\n&gt; Could not list contents of &#39;/Users/v_yuzhuang01/Desktop/mobileApp/elm-react-native/node_modules/fsevents/node_modules/.bin/node-pre-gyp&#39;. Couldn&#39;t follow symbolic link.\n</code></pre> 解决方法: 删除node_modules,重新npm install";
// Exports
module.exports = code;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(98);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(99);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<hr> authorName: Yu<br>title: require.context()<br>date: 2019-10-16 10:28:52<br>categories: node<br>tags: require.context<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"require.context是什么\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> require.context是什么 </h2>是webpack的api,通过执行require.context()函数获取一个特定的上下文,主要用来自动化导入模块,在前端工程中,如果遇到从一个文件引入很多模块的情况,可以使用这个api,它回遍历文件夹中的指定文件,然后自动导入,使得不需要每次显示的条用import导入模块. <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"用法\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 用法 </h2>require.context接受三个参数<ol> <li>directory {String} -读取文件的路径</li> <li>useSubdirectories {Boolean} -是否遍历文件的子目录</li> <li>regExp {RegExp} -匹配文件的正则</li> </ol> <pre><code class=\"language-javascript\">require.context(&#39;../../src/components&#39;, true, /\\/_demo-normal\\/index\\.js$/)\n</code></pre> require.context返回三个属性<ol> <li>resolve {Function} -接受一个参数request,request为components文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径</li> <li>keys {Function} -返回匹配成功模块的名字组成的数组</li> <li>id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?<br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"add-commit\" title=\"null\" style=\"cursor:zoom-in\"></p><br><p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"add-commit\" title=\"null\" style=\"cursor:zoom-in\"></p><br>这个Module模块和使用import导入的模块是一样的</li> </ol> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"使用场景\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 使用场景 </h2><ol> <li>在demoModule中自动加载所有demo生成路由.</li> <li>使用svg</li> </ol> ";
// Exports
module.exports = code;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: sftp<br>date: 2021-01-26 16:55:10<br>categories: sftp<br>tags: sftp<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"sftp命令\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> sftp命令 </h2><hr> sftp是 SSH 提供的一个客户端应用程序,主要用来安全地访问 FTP.因为 FTP 是不加密协议,很不安全,sftp就相当于将 FTP 放入了 SSH.<br>下面的命令连接 FTP 主机.<pre><code class=\"language-shell\">$ sftp username@hostname\n</code></pre> 执行上面的命令,会要求输入 FTP 的密码.密码验证成功以后,就会出现 FTP 的提示符<code>sftp&gt;</code>,下面是一个例子.<pre><code class=\"language-shell\">$ sftp USER@penguin.example.com\nUSER@penguin.example.com&#39;s password:\nConnected to penguin.example.com.\nsftp&gt;\n</code></pre> FTP 的提示符下面,就可以输入各种 FTP 命令了,这部分完全跟传统的 FTP 用法完全一样.<pre><code class=\"language-shell\">ls [directory]: 列出一个远程目录的内容.如果没有指定目标目录,则默认列出当前目录.\ncd directory: 从当前目录改到指定目录.\nmkdir directory: 创建一个远程目录.\nrmdir path: 删除一个远程目录.\nput localfile [remotefile]: 本地文件传输到远程主机.\nget remotefile [localfile]: 远程文件传输到本地.\nhelp: 显示帮助信息.\nbye: 退出 sftp.\nquit: 退出 sftp.\nexit: 退出 sftp.\n</code></pre> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"相关文章\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关文章 </h2><hr> <a href=\"https://wangdoc.com/ssh/sftp.html\" target=\"_blank\" title=\"sftp\">sftp</a>";
// Exports
module.exports = code;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(3);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(100);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(101);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<hr> authorName: Yu<br>title: weinre<br>date: 2019-09-29 11:29:24<br>categories: 移动端调试工具<br>tags: weinre 移动端调试工具<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"weinre是什么\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> weinre是什么 </h2>weinre(Web Inspector Remote).是一种远程调试的工具,在电脑上可以调试手机远端的页面,包括样式,查看js变量和页面上的报警信息.<br>可以通过<code>document.body.style.color=&#39;red&#39;</code>实时改变文字颜色. <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"工作原理\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 工作原理 </h2><ul> <li>目标页面（target）：被调试的页面，页面已嵌入weinre的远程js，下文会介绍；</li> <li>Debug客户端（client）：本地的Web Inspector调试客户端；</li> <li>Debug服务端（agent）：一个HTTP Server，为目标页面与Debug客户端建立通信。</li> </ul> <p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"1\" title=\"null\" style=\"cursor:zoom-in\"></p> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"用法\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 用法 </h2><ol> <li>mac</li> </ol> <pre><code class=\"language-bash\">// 安装\nnpm i -g weinre\n// 开启服务\nweinre --boundHost -all-\n</code></pre> <p v-viewer><img id=\"POST_IMG\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"1\" title=\"null\" style=\"cursor:zoom-in\"></p> <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"options\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> options </h2>–help : 显示Weinre的Help<br>–httpPort [portNumber] : 设置Weinre使用的端口号， 默认是8080<br>–boundHost [hostname | ip address | -all-] : 默认是’localhost’， 这个参数是为了限制可以访问Weinre Server的设备， 设置为-all-或者指定ip， 那么任何设备都可以访问Weinre Server。<br>–verbose [true | false] : 如果想看到更多的关于Weinre运行情况的输出， 那么可以设置这个选项为true， 默认为false；<br>–debug [true | false] : 这个选项与–verbose类似， 会输出更多的信息。默认为false。<br>–readTimeout [seconds] : Server发送信息到Target/Client的超时时间， 默认为5s。<br>–deathTimeout [seconds] : 默认为3倍的readTimeout， 如果页面超过这个时间都没有任何响应， 那么就会断开连接。 <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"相关链接\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h3><a href=\"https://github.com/nupthale/weinre\" target=\"_blank\" title=\"weinre文档\">weinre文档</a>";
// Exports
module.exports = code;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 前端模块化<br>date: 2019-09-02 19:08:32<br>categories: 模块化<br>tags: module<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"模块化\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 模块化 </h2><hr> <ol> <li>模块化可以提高代码的复用率,方便管理,防止全局中的变量污染.</li> <li>模块化的工具: AMD,CMD,CommonJS,ES6</li> <li>CommonJs用于服务器,AMD和CMD用于浏览器.</li> </ol> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"AMD\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> AMD </h2><hr> 即<code>Asynchronous Module Definition</code>,中文名是异步模块定义的意思.AMD的代表是require.js.<br>在入口处用<code>require.config()</code>指定引用路径,用<code>define()</code>定义模块,用<code>require()</code>加载模块.<pre><code class=\"language-js\">require.config({\n  baseUrl: &quot;js/lib&quot;,\n  paths: {\n    &quot;jquery&quot;: &quot;jquery.min&quot;,  //实际路径为js/lib/jquery.min.js\n    &quot;underscore&quot;: &quot;underscore.min&quot;,\n  }\n});\n</code></pre> <pre><code class=\"language-js\">define([&#39;jquery&#39;], function ($) {\n    console.log($)\n})\n</code></pre> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"CMD\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> CMD </h2><hr> CMD 即<code>Common Module Definition</code>通用模块定义,sea.js是它的实现<br>… <h2 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"AMD和CMD的区别\" data-level=\"2\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> AMD和CMD的区别 </h2><hr> 对依赖模块的执行时机不同,注意：不是加载的时机,模块加载的时机是一样的！！！<br>文件加载顺序： 都是先加载1.js,再加载2.js,最后加载3.js<br>模块运行顺序：<br>AMD： 3.js,2.js,1.js,,,即如果模块以及该模块的依赖都加载完了,那么就执行… 比如 3.js 加载完后,发现自己也没有依赖啊,那么直接执行3.js的回调了,,,2.js加载完后探查到依赖的3.js也加载完了,那么2.js就执行自己的回调了…. 主模块一定在最后执行<br>CMD： 1.js,2.js,3.js,,,即先执行主模块1.js,碰到require(‘2.js’)就执行2.js,2.js中碰到require(‘3.js’)就执行3.js <h2 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"CommonJS\" data-level=\"2\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> CommonJS </h2><hr> CommonJS的实现主要是node.js<pre><code class=\"language-js\">// module.exports和exports的区别\n//node中模块导出的是Module.exports而不是exports\n// test.js\nmodule.exports = &#39;test&#39;;\nexports.name = function() {\n    console.log(&#39;name&#39;)\n}\n\n// 引入\nconst test = require(&#39;./test.js&#39;);\nconsole.log(test); // test\ntest.name(); // name is not a function\n</code></pre> <pre><code class=\"language-js\">// 修改exports不会改变module.exports\nexports = &#39;test&#39;;\n\nconst d = require(&#39;./test&#39;);\nconsole.log(d, &#39;2222222&#39;) // {}\n</code></pre> <div class=\"post_note post_info\">1.module.exports 初始值为一个空对象 {}<br>2.exports 是指向的 module.exports 的引用<br>3.require() 返回的是 module.exports 而不是 exports</div><br><strong>例子:</strong><ol> <li>导出函数时</li> </ol> <pre><code class=\"language-js\">// test2.js\nmodule.exports = function(name, age) {\n    this.name = name;\n    this.age = age;\n    this.about = function() {\n        console.log(this.name + &#39;-&#39; + this.age);\n    }\n}\n\n// 引入\nconst test2 = require(&#39;./test2&#39;);\nlet i = new test2(&#39;li&#39;, 21);\ni.about(); // li-21\n</code></pre> <ol start=\"2\"> <li>导出对象时</li> </ol> <pre><code class=\"language-js\">// test3.js\nexports.a = 1\n\n// 引入时\nconst test3 = require(&#39;./test3&#39;);\n{a:1} // test3\n</code></pre> <div class=\"post_note post_info\">何时用module.exports, 何时用exports.<br>当你的模块导出的类型是array, 构造函数等特殊类型时用module.exports.<br>当你的模块导出的是对象用exports.</div> <h2 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"ES6\" data-level=\"2\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ES6 </h2><hr> <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"export\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> export </h3>export用于导出变量,import用于导入.<br>1.导出变量<br>第一种形式<pre><code class=\"language-js\">export var first = 1;\nexport var second = 2;\nexport var three = 3;\n</code></pre> 第二种形式<br>推荐第二种.因为可以在底部直接看见导出的全部内容.<pre><code class=\"language-js\">var first = 1;\nvar second = 2;\nvar three = 3;\nexport {first, second, three};\n</code></pre> 2.导出函数<br>第一种形式<pre><code class=\"language-js\">export function f() {};\n</code></pre> 第二种形式<pre><code class=\"language-js\">function f() {}\nexport {\n    f as f1 // 导出可以起别名\n}\n</code></pre> 3.导出类<pre><code class=\"language-js\">export class f {}\n</code></pre> 4.导出default<pre><code class=\"language-js\">// test.js 一个文件只能导出一个default变量\nexport default 42;\n</code></pre> 导入不需要加大括号<br><code>import test from &#39;./test.js&#39;;</code> 将导出的default变量命名为test<pre><code class=\"language-js\">// foo函数对外无效,还是匿名 foo.js\nexport default function foo() {\n  console.log(&#39;foo&#39;);\n}\n// 等价于\nexport default function () {\n  console.log(&#39;foo&#39;);\n}\n</code></pre> <code>import fn from &#39;./foo.js&#39;;</code> 将导出的default函数名命名为fn<br><div class=\"post_note post_warning\">export语句输出的接口,与其对应的值是动态绑定关系,即通过该接口,可以取到模块实时的值.</div><hr> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"import\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> import </h3><pre><code class=\"language-js\">import { lastName as surname } from &#39;./profile.js&#39;;\n</code></pre> import会执行lodash模块,但不会输入任何值.<br><code>import &#39;lodash&#39;;</code><br>import整体加载模块.用<code>*</code>号指定一个对象,加载导出的值都会注入到这个对象上.<pre><code class=\"language-js\">// io.js\nvar first = 1;\nvar second = 2;\nexport {\n    first,\n    second\n}\n</code></pre> <pre><code class=\"language-js\">import * as fu from &#39;./io.js&#39;;\nconsole.log(fu.first, fu.second);\n</code></pre> <h2 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"ES6和CommonJS的差异\" data-level=\"2\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> ES6和CommonJS的差异 </h2>1.CommonJS 模块输出的是一个值的拷贝,ES6 模块输出的是值的引用.<br>2.CommonJS 模块是运行时加载,ES6 模块是编译时输出接口.";
// Exports
module.exports = code;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 动画回调<br>date: 2019-09-02 13:44:56<br>categories: 动画<br>tags: 动画 事件<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"过渡事件\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 过渡事件 </h2>css中设置了transition属性,会触发过渡事件.<ul> <li><code>transitionend</code>过渡结束时触发</li> </ul> <div class=\"post_note post_danger\">当设置<code>transition: all</code>时会触发多次事件</div><pre><code class=\"language-js\">//关于重复调用transition\nvar handleTransitionEndEvent = function(elem, fn, duration) {\nvar called=false;\n\n//在每次transitionEnd的事件后执行该函数\n\nvar callback = function() {\n    if (!called) {\n    fn();\n    called=true;\n    }\n};\n\nelem.addEventListener(transitionEnd,function() {\ncallback();\n\n//通过setTimeout来补救windowphone中不触发事件的问题\n\nsetTimeout(callback,duration);\n\n}, false);\n\n};\n</code></pre> <div class=\"post_note post_danger\">兼容问题</div><pre><code class=\"language-js\">/* 不同浏览器兼容 */\n\nfunction whichTransitionEvent(){\n    var t;\n    var el = document.createElement(&#39;fakeelement&#39;);\n    var transitions = {\n\n        &#39;transition&#39;:&#39;transitionend&#39;,\n\n        &#39;OTransition&#39;:&#39;oTransitionEnd&#39;,\n\n         &#39;MozTransition&#39;:&#39;transitionend&#39;,\n\n        &#39;WebkitTransition&#39;:&#39;webkitTransitionEnd&#39;,\n\n        &#39;MsTransition&#39;:&#39;msTransitionEnd&#39;\n    }\n\n    for(t in transitions){\n        if( el.style[t] !== undefined ){\n            return transitions[t];\n        }\n    }\n}\n</code></pre> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"动画事件\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 动画事件 </h2>css中设置了animation属性 ,会触发动画事件.<ul> <li><code>animationend</code>动画结束时触发</li> <li><code>animationiteration</code>动画重复播放时触发</li> <li><code>animationstart</code>动画开始播放时触发</li> </ul> ";
// Exports
module.exports = code;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 异步处理<br>date: 2021-03-16 11:18:19<br>categories: 异步处理<br>tags: 异步处理<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Promise\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Promise </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"手写 Promise\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 手写 Promise </h3><pre><code class=\"language-js\">class Promise {\n    constructor(executor) {\n        if (typeof executor !== &#39;function&#39;) {\n            throw new TypeError(`Promise resolver ${executor} is not a function`);\n        }\n        this.initValue();\n        this.initBind();\n        try {\n            executor(this.resolve, this.reject);\n        } catch (e) {\n            this.reject(e);\n        }\n    }\n\n    initValue() {\n        this.value = null;\n        this.reason = null; // 拒因\n        this.state = Promise.PENDING;\n        this.onFullfilledCallbacks = [];\n        this.onRejectedCallbacks = [];\n    }\n\n    initBind() {\n        this.resolve = this.resolve.bind(this);\n        this.reject = this.reject.bind(this);\n    }\n\n    resolve(value) {\n        if (this.state === Promise.PENDING) {\n            this.value = value;\n            this.state = Promise.FULLFILLED;\n            this.onFullfilledCallbacks.forEach(fn =&gt; { fn(value) });\n        }\n    }\n\n    reject(reason) {\n        if (this.state === Promise.PENDING) {\n            this.reason = reason;\n            this.state = Promise.REJECTED;\n            this.onRejectedCallbacks.forEach(fn =&gt; { fn(reason) });\n        }\n    }\n    then(onFullfilled, onRejected) {\n        if (typeof onFullfilled !== &#39;function&#39;) {\n            onFullfilled = function (value) {\n                return value;\n            }\n        }\n        if (typeof onRejected !== &#39;function&#39;) {\n            onRejected = function (reason) {\n                return reason;\n            }\n        }\n        let promise2 = new Promise((resolve, reject) =&gt; {\n            if (this.state === Promise.FULLFILLED) {\n                setTimeout(() =&gt; {\n                    try {\n                        const x = onFullfilled(this.value);\n                        Promise.resolvePromise(promise2, x, resolve, reject);\n                    } catch (e) {\n                        reject(e);\n                    }\n                })\n            }\n            if (this.state === Promise.REJECTED) {\n                setTimeout(() =&gt; {\n                    try {\n                        const x = onRejected(this.reason);\n                        Promise.resolvePromise(promise2, x, resolve, reject)\n                    } catch (e) {\n                        reject(e);\n                    }\n                })\n            }\n            if (this.state === Promise.PENDING) {\n                this.onFullfilledCallbacks.push(value =&gt; {\n                    setTimeout(() =&gt; {\n                        try {\n                            const x = onFullfilled(value);\n                            Promise.resolvePromise(promise2, x, resolve, reject)\n                        } catch (e) {\n                            reject(e);\n                        }\n                    })\n                });\n                this.onRejectedCallbacks.push(reason =&gt; {\n                    setTimeout(() =&gt; {\n                        try {\n                            const x = onRejected(reason);\n                            Promise.resolvePromise(promise2, x, resolve, reject)\n                        } catch (e) {\n                            reject(e);\n                        }\n                    })\n                })\n            }\n        });\n\n        return promise2;\n    }\n}\nPromise.PENDING = &#39;pending&#39;;\nPromise.FULLFILLED = &#39;fullfilled&#39;;\nPromise.REJECTED = &#39;rejected&#39;;\nPromise.resolvePromise = function (promise2, x, resolve, reject) {\n    // x 与 promise 相等\n    if (promise2 === x) {\n        reject(new TypeError(&#39;Chaining cycle detected for promise&#39;))\n    }\n\n    let called = false\n    if (x instanceof Promise) {\n        // 判断 x 为 Promise\n        x.then(\n            value =&gt; {\n                Promise.resolvePromise(promise2, value, resolve, reject)\n            },\n            reason =&gt; {\n                reject(reason)\n            }\n        )\n    } else if (x !== null &amp;&amp; (typeof x === &#39;object&#39; || typeof x === &#39;function&#39;)) {\n        // x 为对象或函数\n        try {\n            const then = x.then\n            if (typeof then === &#39;function&#39;) {\n                then.call(\n                    x,\n                    value =&gt; {\n                        if (called) return\n                        called = true\n                        Promise.resolvePromise(promise2, value, resolve, reject)\n                    },\n                    reason =&gt; {\n                        if (called) return\n                        called = true\n                        reject(reason)\n                    }\n                )\n            } else {\n                if (called) return\n                called = true\n                resolve(x)\n            }\n        } catch (e) {\n            if (called) return\n            called = true\n            reject(e)\n        }\n    } else {\n        resolve(x)\n    }\n}\n\nnew Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n        resolve(1);\n    }, 2000)\n}).then(value =&gt; {\n    console.log(&#39;value1&#39;, value)\n    return { a: 1 }\n}, reason =&gt; {\n    console.log(&#39;reason1&#39;, reason)\n}).then(value =&gt; {\n    console.log(&#39;value2&#39;, value)\n}, reason =&gt; {\n    console.log(&#39;reason2&#39;, reason)\n})\n</code></pre> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"Promise.all\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Promise.all </h3><pre><code class=\"language-js\">Promise.all = function(promiseArr) {\n  return new Promise((resolve, reject) =&gt; {\n    const ans = [];\n    let index = 0;\n    for (let i = 0; i &lt; promiseArr.length; i++) {\n      promiseArr[i]\n      .then(res =&gt; {\n        ans[i] = res;\n        index++;\n        if (index === promiseArr.length) {\n          resolve(ans);\n        }\n      })\n      .catch(err =&gt; reject(err));\n    }\n  })\n}\n</code></pre> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"Promise.race\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Promise.race </h3><pre><code class=\"language-js\">Promise.race = function(promiseArr) {\n  return new Promise((resolve, reject) =&gt; {\n    promiseArr.forEach(p =&gt; {\n      // 如果不是Promise实例需要转化为Promise实例\n      Promise.resolve(p).then(\n        val =&gt; resolve(val),\n        err =&gt; reject(err),\n      )\n    })\n  })\n}\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 正则表达式<br>authorName: Yu<br>date: 2020-07-29 13:57:22<br>categories: 正则<br>tags: 正则表达式<hr> <h3 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"修饰符\" data-level=\"3\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 修饰符 </h3><hr> <table> <thead> <tr> <th>修饰符</th> <th>含义</th> <th>描述</th> </tr> </thead> <tbody><tr> <td>i</td> <td>ignore - 不区分大小写</td> <td>将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。</td> </tr> <tr> <td>g</td> <td>global - 全局匹配</td> <td>查找所有的匹配项。</td> </tr> <tr> <td>m</td> <td>multi line - 多行匹配</td> <td>使边界字符 ^ 和 $ 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。</td> </tr> <tr> <td>s</td> <td>特殊字符圆点 . 中包含换行符 \\n</td> <td>默认情况下的圆点 . 是 匹配除换行符 \\n 之外的任何字符，加上 s 修饰符之后, . 中包含换行符 \\n。</td> </tr> </tbody></table> <pre><code class=\"language-bash\">var str=&quot;google\\nrunoob\\ntaobao&quot;;\nvar n1=str.match(/google./);   // 没有使用 s，无法匹配\\n\nvar n2=str.match(/runoob./s);  // 使用 s，匹配\\n\n</code></pre> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"元字符\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 元字符 </h3><hr> <code>\\ba\\w*\\b</code>匹配以字母a开头的单词——先是某个单词开始处(<code>\\b</code>)，然后是字母a,然后是任意数量的字母或数字(<code>\\w*</code>)，最后是单词结束处(<code>\\b</code>)。<code>\\d+</code>匹配1个或更多连续的数字。这里的<code>+</code>是和<code>*</code>类似的元字符，不同的是<code>*</code>匹配重复任意次(可能是0次)，而<code>+</code>则匹配重复1次或更多次。<code>\\b\\w{6}\\b</code> 匹配刚好6个字符的单词。<table> <thead> <tr> <th>代码</th> <th>说明</th> </tr> </thead> <tbody><tr> <td><code>.</code></td> <td>匹配除换行符以外的任意字符</td> </tr> <tr> <td><code>\\w</code></td> <td>匹配字母或数字或下划线或汉字</td> </tr> <tr> <td><code>\\s</code></td> <td>匹配任意的空白符</td> </tr> <tr> <td><code>\\d</code></td> <td>匹配数字</td> </tr> <tr> <td><code>\\b</code></td> <td>匹配单词的开始或结束</td> </tr> <tr> <td><code>^</code></td> <td>匹配字符串的开始</td> </tr> <tr> <td><code>$</code></td> <td>匹配字符串的结束</td> </tr> </tbody></table> <h3 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"重复\" data-level=\"3\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 重复 </h3><hr> 你已经看过了前面的<em>,+,{2},{5,12}这几个匹配重复的方式了。下面是正则表达式中所有的限定符(指定数量的代码，例如</em>,{5,12}等)：<table> <thead> <tr> <th>代码/语法</th> <th>说明</th> </tr> </thead> <tbody><tr> <td><code>*</code></td> <td>重复零次或更多次</td> </tr> <tr> <td><code>+</code></td> <td>重复一次或更多次</td> </tr> <tr> <td><code>?</code></td> <td>重复零次或一次</td> </tr> <tr> <td><code>{n}</code></td> <td>重复n次</td> </tr> <tr> <td><code>{n,}</code></td> <td>重复n次或更多次</td> </tr> <tr> <td><code>{n,m}</code></td> <td>重复n到m次</td> </tr> </tbody></table> <h3 id=\"heading-3\"> <a class=\"post-anchor\" data-id=\"heading-3\" data-text=\"字符类\" data-level=\"3\" href=\"#heading-3\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 字符类 </h3><hr> 要想查找数字，字母或数字，空白是很简单的，因为已经有了对应这些字符集合的元字符，但是如果你想匹配没有预定义元字符的字符集合(比如元音字母a,e,i,o,u),应该怎么办？很简单，你只需要在方括号里列出它们就行了，像[aeiou]就匹配任何一个英文元音字母，[.?!]匹配标点符号(.或?或!)。我们也可以轻松地指定一个字符范围，像[0-9]代表的含意与\\d就是完全一致的：一位数字；同理[a-z0-9A-Z_]也完全等同于\\w（如果只考虑英文的话）。下面是一个更复杂的表达式：(?0\\d{2}[) -]?\\d{8}。这个表达式可以匹配几种格式的电话号码，像(010)88886666，或022-22334455，或02912345678等。我们对它进行一些分析吧：首先是一个转义字符(,它能出现0次或1次(?),然后是一个0，后面跟着2个数字(\\d{2})，然后是)或-或空格中的一个，它出现1次或不出现(?)，最后是8个数字(\\d{8})。 <h3 id=\"heading-4\"> <a class=\"post-anchor\" data-id=\"heading-4\" data-text=\"分枝条件\" data-level=\"3\" href=\"#heading-4\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 分枝条件 </h3><hr> <code>x|y</code> <h3 id=\"heading-5\"> <a class=\"post-anchor\" data-id=\"heading-5\" data-text=\"反义\" data-level=\"3\" href=\"#heading-5\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 反义 </h3>有时需要查找不属于某个能简单定义的字符类的字符。比如想查找除了数字以外，其它任意字符都行的情况，这时需要用到反义：<table> <thead> <tr> <th>代码/语法</th> <th>说明</th> </tr> </thead> <tbody><tr> <td><code>\\W</code></td> <td>匹配任意不是字母，数字，下划线，汉字的字符</td> </tr> <tr> <td><code>\\S</code></td> <td>匹配任意不是空白符的字符</td> </tr> <tr> <td><code>\\D</code></td> <td>匹配任意非数字的字符</td> </tr> <tr> <td><code>\\B</code></td> <td>匹配不是单词开头或结束的位置</td> </tr> <tr> <td><code>[^x]</code></td> <td>匹配除了x以外的任意字符</td> </tr> <tr> <td><code>[^aeiou]</code></td> <td>匹配除了aeiou这几个字母以外的任意字符</td> </tr> </tbody></table> <h3 id=\"heading-6\"> <a class=\"post-anchor\" data-id=\"heading-6\" data-text=\"后向引用\" data-level=\"3\" href=\"#heading-6\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 后向引用 </h3><hr> 使用小括号指定一个子表达式后，匹配这个子表达式的文本(也就是此分组捕获的内容)可以在表达式或其它程序中作进一步的处理。默认情况下，每个分组会自动拥有一个组号，规则是：从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。后向引用用于重复搜索前面某个分组匹配的文本。例如，<code>\\1</code>代表分组1匹配的文本。难以理解？请看示例：<code>\\b(\\w+)\\b\\s+\\1\\b</code>可以用来匹配重复的单词，像go go, 或者kitty kitty。这个表达式首先是一个单词，也就是单词开始处和结束处之间的多于一个的字母或数字(<code>\\b(\\w+)\\b</code>)，这个单词会被捕获到编号为1的分组中，然后是1个或几个空白符(<code>\\s+</code>)，最后是分组1中捕获的内容（也就是前面匹配的那个单词）(<code>\\1</code>)。你也可以自己指定子表达式的组名。要指定一个子表达式的组名，请使用这样的语法：(<code>?&lt;Word&gt;\\w+</code>)(或者把尖括号换成’也行：(<code>?&#39;Word&#39;\\w+</code>)),这样就把<code>\\w+</code>的组名指定为<code>Word</code>了。要反向引用这个分组捕获的内容，你可以使用<code>\\k&lt;Word&gt;</code>,所以上一个例子也可以写成这样：<code>\\b(?&lt;Word&gt;\\w+)\\b\\s+\\k&lt;Word&gt;\\b</code>。使用小括号的时候，还有很多特定用途的语法。下面列出了最常用的一些：<br>表4.常用分组语法<table> <thead> <tr> <th>分类</th> <th>代码/语法</th> <th>说明</th> </tr> </thead> <tbody><tr> <td>捕获</td> <td><code>(exp)</code></td> <td>匹配exp,并捕获文本到自动命名的组里</td> </tr> <tr> <td></td> <td><code>(?&lt;name&gt;exp)</code></td> <td>匹配exp,并捕获文本到名称为name的组里，也可以写成<code>(?&#39;name&#39;exp)</code></td> </tr> <tr> <td></td> <td><code>(?:exp)</code></td> <td>匹配exp,不捕获匹配的文本，也不给此分组分配组号</td> </tr> <tr> <td>零宽断言</td> <td><code>(?=exp)</code></td> <td>匹配exp前面的位置</td> </tr> <tr> <td></td> <td><code>(?&lt;=exp)</code></td> <td>匹配exp后面的位置</td> </tr> <tr> <td></td> <td><code>(?!exp)</code></td> <td>匹配后面跟的不是exp的位置</td> </tr> <tr> <td></td> <td><code>(?&lt;!exp)</code></td> <td>匹配前面不是exp的位置</td> </tr> <tr> <td>注释</td> <td><code>(?#comment)</code></td> <td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td> </tr> </tbody></table> <h3 id=\"heading-7\"> <a class=\"post-anchor\" data-id=\"heading-7\" data-text=\"零宽断言\" data-level=\"3\" href=\"#heading-7\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 零宽断言 </h3><hr> 接下来的四个用于查找在某些内容(但并不包括这些内容)之前或之后的东西，也就是说它们像<code>\\b</code>,<code>^</code>,<code>$</code>那样用于指定一个位置，这个位置应该满足一定的条件(即断言)，因此它们也被称为零宽断言。最好还是拿例子来说明吧：<br><code>(?=exp)</code>也叫零宽度正预测先行断言，它断言自身出现的位置的后面能匹配表达式exp。比如<code>\\b\\w+(?=ing\\b)</code>，匹配以ing结尾的单词的前面部分(除了ing以外的部分)，如查找I’m singing while you’re dancing.时，它会匹配sing和danc。<code>(?&lt;=exp)</code>也叫零宽度正回顾后发断言，它断言自身出现的位置的前面能匹配表达式exp。比如<code>(?&lt;=\\bre)\\w+\\b</code>会匹配以re开头的单词的后半部分(除了re以外的部分)，例如在查找reading a book时，它匹配ading。假如你想要给一个很长的数字中每三位间加一个逗号(当然是从右边加起了)，你可以这样查找需要在前面和里面添加逗号的部分：<code>(?&lt;=\\d)\\d{3})+\\b</code>，用它对1234567890进行查找时结果是234567890。下面这个例子同时使用了这两种断言：<code>(?&lt;=\\s)\\d+(?=\\s)</code>匹配以空白符间隔的数字(再次强调，不包括这些空白符)。 <h3 id=\"heading-8\"> <a class=\"post-anchor\" data-id=\"heading-8\" data-text=\"负向零宽断言\" data-level=\"3\" href=\"#heading-8\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 负向零宽断言 </h3><hr> 前面我们提到过怎么查找不是某个字符或不在某个字符类里的字符的方法(反义)。但是如果我们只是想要确保某个字符没有出现，但并不想去匹配它时怎么办？例如，如果我们想查找这样的单词–它里面出现了字母q,但是q后面跟的不是字母u,我们可以尝试这样：<code>\\b\\w*q[^u]\\w*\\b</code>匹配包含后面不是字母u的字母q的单词。但是如果多做测试(或者你思维足够敏锐，直接就观察出来了)，你会发现，如果q出现在单词的结尾的话，像Iraq,Benq，这个表达式就会出错。这是因为<code>[^u]</code>总要匹配一个字符，所以如果q是单词的最后一个字符的话，后面的<code>[^u]</code>将会匹配q后面的单词分隔符(可能是空格，或者是句号或其它的什么)，后面的<code>\\w*\\b</code>将会匹配下一个单词，于是<code>\\b\\w*q[^u]\\w*\\b</code>就能匹配整个Iraq fighting。负向零宽断言能解决这样的问题，因为它只匹配一个位置，并不消费任何字符。现在，我们可以这样来解决这个问题：<code>\\b\\w*q(?!u)\\w*\\b</code>。零宽度负预测先行断言<code>(?!exp)</code>，断言此位置的后面不能匹配表达式exp。例如：<code>\\d{3}(?!\\d)</code>匹配三位数字，而且这三位数字的后面不能是数字；<code>\\b((?!abc)\\w)+\\b</code>匹配不包含连续字符串abc的单词。同理，我们可以用(?&lt;!exp),零宽度负回顾后发断言来断言此位置的前面不能匹配表达式exp：(?&lt;![a-z])\\d{7}匹配前面不是小写字母的七位数字。一个更复杂的例子：(?&lt;=&lt;(\\w+)&gt;).<em>(?=&lt;/\\1&gt;)匹配不包含属性的简单HTML标签内里的内容。(?&lt;=&lt;(\\w+)&gt;)指定了这样的前缀：被尖括号括起来的单词(比如可能是<b>)，然后是.</b></em>(任意的字符串),最后是一个后缀(?=&lt;/\\1&gt;)。注意后缀里的/，它用到了前面提过的字符转义；\\1则是一个反向引用，引用的正是捕获的第一组，前面的(\\w+)匹配的内容，这样如果前缀实际上是<b>的话，后缀就是</b>了。整个表达式匹配的是<b>和</b>之间的内容(再次提醒，不包括前缀和后缀本身)。 <h3 id=\"heading-9\"> <a class=\"post-anchor\" data-id=\"heading-9\" data-text=\"贪婪与懒惰\" data-level=\"3\" href=\"#heading-9\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 贪婪与懒惰 </h3><hr> 当正则表达式中包含能接受重复的限定符时，通常的行为是（在使整个表达式能得到匹配的前提下）匹配尽可能多的字符。以这个表达式为例<code>a.*b</code>，它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索aabab的话，它会匹配整个字符串aabab。这被称为贪婪匹配。有时，我们更需要懒惰匹配，也就是匹配尽可能少的字符。前面给出的限定符都可以被转化为懒惰匹配模式，只要在它后面加上一个问号<code>?</code>。这样<code>.*?</code>就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。现在看看懒惰版的例子吧：<code>a.*?b</code>匹配最短的，以a开始，以b结束的字符串。如果把它应用于aabab的话，它会匹配aab（第一到第三个字符）和ab（第四到第五个字符）。<table> <thead> <tr> <th>代码/语法</th> <th>说明</th> </tr> </thead> <tbody><tr> <td><code>*?</code></td> <td>重复任意次，但尽可能少重复</td> </tr> <tr> <td><code>+?</code></td> <td>重复1次或更多次，但尽可能少重复</td> </tr> <tr> <td><code>??</code></td> <td>重复0次或1次，但尽可能少重复</td> </tr> <tr> <td><code>{n,m}?</code></td> <td>重复n到m次，但尽可能少重复</td> </tr> <tr> <td><code>{n,}?</code></td> <td>重复n次以上，但尽可能少重复</td> </tr> </tbody></table> eg: <pre><code class=\"language-js\">let content = &#39;&lt;span style=&quot;font-size: 14px; font-family: Microsoft YaHei,sans-serif;&quot;&gt;尊敬的&lt;u&gt;&lt;strong&gt; ${Candidate_name} &lt;/strong&gt;&lt;${Candidate_mobile_phone}&#39;;\ncontent.replace(/\\${(.*?)}/g, function(match, paramKey) {\n    console.log(match, paramKey) \n    /** \n     * 懒惰匹配\n     * ${Candidate_name} Candidate_name\n     * ${Candidate_mobile_phone} Candidate_mobile_phone\n    **/\n})\n</code></pre> <h3 id=\"heading-10\"> <a class=\"post-anchor\" data-id=\"heading-10\" data-text=\"replace\" data-level=\"3\" href=\"#heading-10\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> replace </h3><hr> replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。<br>模式可以是一个字符串或者一个正则表达式.<br>替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。<pre><code class=\"language-js\">let content = &#39;dfsfsdo dsfsDo wodogrd&#39;;\ncontent.replace(&#39;do&#39;, &#39;YU&#39;); // 返回个新字符串&quot;dfsfsYU dsfsDo wodogrd&quot;\ncontent.replace(/do/gi, &#39;YU&#39;); // &quot;dfsfsYU dsfsYU woYUrd&quot;\n\n// 交换字符串中的两个单词\nvar re = /(\\w+)\\s(\\w+)/;\nvar str = &quot;John Smith&quot;;\nvar newstr = str.replace(re, &quot;$2, $1&quot;);\n// Smith, John\n</code></pre> 参数使函数时<table> <thead> <tr> <th>变量名</th> <th>代表的值</th> </tr> </thead> <tbody><tr> <td>match</td> <td>匹配的子串。（对应于上述的$&amp;。）</td> </tr> <tr> <td>p1,p2, …</td> <td>假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\\a+)(\\b+)/ 这个来匹配，p1 就是匹配的 \\a+，p2 就是匹配的 \\b+。</td> </tr> <tr> <td>offset</td> <td>匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 ‘abcd’，匹配到的子字符串是 ‘bc’，那么这个参数将会是 1）</td> </tr> <tr> <td>string</td> <td>被匹配的原字符串。</td> </tr> <tr> <td>NamedCaptureGroup</td> <td>命名捕获组匹配的对象</td> </tr> </tbody></table> <pre><code class=\"language-js\">function replacer(match, p1, p2, p3, offset, string) {\n  // p1 is nondigits, p2 digits, and p3 non-alphanumerics\n  return [p1, p2, p3].join(&#39; - &#39;);\n}\nvar newString = &#39;abc12345#$*%&#39;.replace(/([^\\d]*)(\\d*)([^\\w]*)/, replacer);\nconsole.log(newString);  // abc - 12345 - #$*%\n// &lt;hr&gt;&lt;p&gt;title: ddd&lt;/p&gt; name: yu&lt;hr&gt;获取hr中间的字符,匹配title: d字符串生成obj\nmdContent = mdContent.replace(/^&lt;hr&gt;(.*?)&lt;hr&gt;/gis, function (match, p1) {\n            p1.replace(/(\\w*): (.*?)&lt;/gis, function (mah, i1, i2) {\n                titleInfo[i1] = i2\n            })\n            return &#39;&#39;\n    }) // 修饰符s使.可以匹配\\n换行符\n</code></pre> <h3 id=\"heading-11\"> <a class=\"post-anchor\" data-id=\"heading-11\" data-text=\"match\" data-level=\"3\" href=\"#heading-11\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> match </h3><hr> 检索返回一个字符串匹配正则表达式的结果。<ul> <li>如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。</li> <li>如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。<br>附加属性<br>如上所述，匹配的结果包含如下所述的附加特性。</li> <li>groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。</li> <li>index: 匹配的结果的开始位置</li> <li>input: 搜索的字符串.<br>一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。</li> </ul> <pre><code class=\"language-js\">var str = &#39;For more information, see Chapter 3.4.5.1&#39;;\nvar re = /see (chapter \\d+(\\.\\d)*)/i;\nvar found = str.match(re);\nconsole.log(found);\n// logs [ &#39;see Chapter 3.4.5.1&#39;,\n//        &#39;Chapter 3.4.5.1&#39;,\n//        &#39;.1&#39;,\n//        index: 22,\n//        input: &#39;For more information, see Chapter 3.4.5.1&#39; ]\n\n// &#39;see Chapter 3.4.5.1&#39; 是整个匹配。\n// &#39;Chapter 3.4.5.1&#39; 被&#39;(chapter \\d+(\\.\\d)*)&#39;捕获。\n// &#39;.1&#39; 是被&#39;(\\.\\d)&#39;捕获的最后一个值。\n// &#39;index&#39; 属性(22) 是整个匹配从零开始的索引。\n// &#39;input&#39; 属性是被解析的原始字符串。\n</code></pre> 下例展示了 match 使用 global 和 ignore case 标志。A-E、a-e 的所有字母将会作为一个数组的元素返回。<pre><code class=\"language-js\">var str = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&#39;;\nvar regexp = /[A-E]/gi;\nvar matches_array = str.match(regexp);\nconsole.log(matches_array);\n// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]\n</code></pre> <h3 id=\"heading-12\"> <a class=\"post-anchor\" data-id=\"heading-12\" data-text=\"test\" data-level=\"3\" href=\"#heading-12\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> test </h3><hr> test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false.<br>如果正则表达式设置了全局标志，test() 的执行会改变正则表达式 lastIndex属性。连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串，(exec() 同样改变正则本身的 lastIndex属性值).<pre><code class=\"language-js\">var regex = /foo/g;\n\n// regex.lastIndex is at 0\nregex.test(&#39;foo&#39;); // true\n\n// regex.lastIndex is now at 3\nregex.test(&#39;foo&#39;); // false\n</code></pre> <h3 id=\"heading-13\"> <a class=\"post-anchor\" data-id=\"heading-13\" data-text=\"应用\" data-level=\"3\" href=\"#heading-13\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 应用 </h3><hr> <pre><code class=\"language-js\">\n</code></pre> <h3 id=\"heading-14\"> <a class=\"post-anchor\" data-id=\"heading-14\" data-text=\"相关链接\" data-level=\"3\" href=\"#heading-14\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 相关链接 </h3><hr> <a href=\"https://deerchao.cn/tutorials/regex/regex.htm\" target=\"_blank\" title=\"正则表达式30分钟入门教程\">正则表达式30分钟入门教程</a>";
// Exports
module.exports = code;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 编辑器配置<br>date: 2021-03-10 15:35:32<br>categories: 编辑器配置<br>tags: 编辑器配置<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"Visual Studio Code\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Visual Studio Code </h2><hr> <h3 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"插件\" data-level=\"3\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 插件 </h3><ol> <li>Bracket Pair Colorizer<br>高亮括号</li> <li>Chinese (Simplified) Language Pack for Visual Studio Code<br>中文化</li> <li>GitLens<br>文件修改历史</li> <li>Image Preview<br>图片预览</li> <li>Material Icon Theme<br>文件icon主题</li> <li>Vetur<br>vue语法高亮,格式化…</li> </ol> <h2 id=\"heading-2\"> <a class=\"post-anchor\" data-id=\"heading-2\" data-text=\"Prettier\" data-level=\"2\" href=\"#heading-2\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> Prettier </h2><hr> <pre><code class=\"language-js\">{\n  &quot;printWidth&quot;: 100, // 超过最大值换行 \n    &quot;overrides&quot;: [\n        {\n            &quot;files&quot;: &quot;.prettierrc&quot;,\n            &quot;options&quot;: { &quot;parser&quot;: &quot;json&quot; }\n        }\n    ],\n  &quot;tabWidth&quot;: 4, // 缩进字节数 \n  &quot;useTabs&quot;: false, // 缩进不使用tab，使用空格 \n  &quot;semi&quot;: true, // 句尾添加分号 \n  &quot;singleQuote&quot;: true, // 使用单引号代替双引号 \n  &quot;proseWrap&quot;: &quot;preserve&quot;, // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行 \n  &quot;arrowParens&quot;: &quot;avoid&quot;, // (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 \n  &quot;bracketSpacing&quot;: true, // 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot; \n  &quot;disableLanguages&quot;: [&quot;vue&quot;], // 不格式化vue文件，vue文件的格式化单独设置 \n  &quot;endOfLine&quot;: &quot;auto&quot;, // 结尾是 \\n \\r \\n\\r auto\n  &quot;eslintIntegration&quot;: false, //不让prettier使用eslint的代码格式进行校验 \n  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,\n  &quot;ignorePath&quot;: &quot;.prettierignore&quot;, // 不使用prettier格式化的文件填写在项目的.prettierignore文件中  \n  &quot;jsxBracketSameLine&quot;: false, // 在jsx中把&#39;&gt;&#39; 是否单独放一行\n  &quot;jsxSingleQuote&quot;: false, // 在jsx中使用单引号代替双引号  &quot;prettier.parser&quot;: &quot;babylon&quot;, // 格式化的解析器，默认是babylon\n  &quot;requireConfig&quot;: false, // Require a &#39;prettierconfig&#39; to format prettier  \n  &quot;stylelintIntegration&quot;: false, //不让prettier使用stylelint的代码格式进行校验  \n  &quot;trailingComma&quot;: &quot;es5&quot;, // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）\n  &quot;prettier.tslintIntegration&quot;: false // 不让prettier使用tslint的代码格式进行校验\n}\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 装饰器<br>date: 2019-09-03 11:46:11<br>categories: ES6<br>tags: 类的装饰器 ES6<hr> 装饰器(Decorator)是一种与类(class)相关的语法,用来注释和修改类和类方法.<br>装饰器是一种函数,写成<code>@+函数名</code>.可以放在类和类方法的定义前面.<pre><code class=\"language-js\">@frozen class Foo {\n  @configurable(false)\n  @enumerable(true)\n  method() {}\n\n  @throttle(500)\n  expensiveMethod() {}\n}\n</code></pre> 上面代码一共使用了四个装饰器，一个用在类本身，另外三个用在类方法。它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能. <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"类的装饰\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 类的装饰 </h2>装饰器可以装饰整个类, 在这个类上添加了静态属性isTestable<br>装饰器函数的第一个参数是被装饰的类<pre><code class=\"language-js\">@testable\nclass MyTestableClass {\n    // ...\n}\n\nfunction testable(target) {\n    target.isTestable = true;\n}\n</code></pre> 一个参数不够用,还可以在wrap一层<pre><code class=\"language-js\">function testable(isTestable) {\n    return function(target) {\n        target.isTestable = isTestable;\n    }\n}\n@testable(true)\nclass test1 {}\ntest1.isTestable; // true\n\n@testable(false)\nclass test2 {}\ntest2.isTestable; // false\n</code></pre> 要添加实例属性<pre><code class=\"language-js\">function testable(target) {\n  target.prototype.isTestable = true;\n}\n\n@testable\nclass MyTestableClass {}\n\nlet obj = new MyTestableClass();\nobj.isTestable // true\n</code></pre> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"方法的装饰\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 方法的装饰 </h2>装饰器第一个参数是类的原型对象,装饰器的本意是要“装饰”类的实例,但是这个时候实例还没生成,所以只能去装饰原型(这不同于类的装饰,那种情况时target参数指的是类本身)<br>第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象.<pre><code class=\"language-js\">class Person {\n  @readonly\n  nameTest() { return `${this.first} ${this.last}` }\n}\n\nfunction readonly(target, name, descriptor){\n  // descriptor对象原来的值如下\n  // {\n  //   value: nameTest,\n  //   enumerable: false,\n  //   configurable: true,\n  //   writable: true\n  // };\n  descriptor.writable = false;\n  return descriptor;\n}\n\nreadonly(Person.prototype, &#39;name&#39;, descriptor);\n// 类似于\nObject.defineProperty(Person.prototype, &#39;name&#39;, descriptor);\n</code></pre> 打印日志的功能<pre><code class=\"language-js\">class Math {\n  @log\n  add(a, b) {\n    return a + b;\n  }\n}\n\nfunction log(target, name, descriptor) {\n  let oldValue = descriptor.value;\n\n  descriptor.value = function() {\n    console.log(`Calling ${name} with`, arguments);\n    return oldValue.apply(this, arguments);\n  };\n\n  return descriptor;\n}\n\nconst math = new Math();\n\n// passed parameters should get logged now\nmath.add(2, 4);\n</code></pre> ";
// Exports
module.exports = code;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Module
var code = "<hr> authorName: Yu<br>title: 频谱<br>date: 2021-03-17 10:47:47<br>categories: 频谱<br>tags: 频谱<hr> <h2 id=\"heading\"> <a class=\"post-anchor\" data-id=\"heading\" data-text=\"音频频谱组件\" data-level=\"2\" href=\"#heading\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 音频频谱组件 </h2><hr> <h2 id=\"heading-1\"> <a class=\"post-anchor\" data-id=\"heading-1\" data-text=\"参考文章\" data-level=\"2\" href=\"#heading-1\"> <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+\"/> </a> 参考文章 </h2><hr> <a href=\"https://github.com/hu-ke/react-audio-spectrum/blob/master/src/AudioSpectrum.js\" target=\"_blank\" title=\"react-audio-spectrum\">react-audio-spectrum</a>";
// Exports
module.exports = code;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("v-viewer");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("ant-design-vue/lib");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.51e6f25.svg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
module.exports = __webpack_require__(105);


/***/ }),
/* 64 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat.0f09253.jpg";

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_1_id_09c83e43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_1_id_09c83e43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_1_id_09c83e43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_1_id_09c83e43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_style_index_1_id_09c83e43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play.2be960a.svg";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjE1MzY4MjI3OTEyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNzUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDk2Ny4xMTFjLTI1MC4zMTEgMC00NTUuMTExLTIwNC44LTQ1NS4xMTEtNDU1LjExMVMyNjEuNjg5IDU2Ljg4OSA1MTIgNTYuODg5IDk2Ny4xMTEgMjYxLjY4OSA5NjcuMTExIDUxMiA3NjIuMzExIDk2Ny4xMTEgNTEyIDk2Ny4xMTF6IG0wLTU2Ljg4OWMyMjEuODY3IDAgMzk4LjIyMi0xNzYuMzU1IDM5OC4yMjItMzk4LjIyMlM3MzMuODY3IDExMy43NzggNTEyIDExMy43NzggMTEzLjc3OCAyOTAuMTMzIDExMy43NzggNTEyIDI5MC4xMzMgOTEwLjIyMiA1MTIgOTEwLjIyMnoiIHAtaWQ9IjIwNzYiIGZpbGw9IiMwMGM1OGUiPjwvcGF0aD48cGF0aCBkPSJNMzQxLjMzMyAzNDEuMzMzaDM0MS4zMzR2MzQxLjMzNEgzNDEuMzMzeiIgcC1pZD0iMjA3NyIgZmlsbD0iIzAwYzU4ZSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "等你下课(with 杨瑞代)-周杰伦.mp3");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cac5396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cac5396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cac5396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cac5396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cac5396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4c7715c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4c7715c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4c7715c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4c7715c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4c7715c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Blob.md": 17,
	"./Canvas.md": 18,
	"./D3.md": 19,
	"./Docker.md": 20,
	"./EventLoop.md": 21,
	"./Flex.md": 22,
	"./Git.md": 23,
	"./Interview.md": 24,
	"./Linux.md": 25,
	"./Nginx.md": 26,
	"./Node.md": 27,
	"./Nuxt.md": 28,
	"./PM2.md": 29,
	"./React.md": 30,
	"./RequireJS.md": 31,
	"./SSH.md": 32,
	"./URL.md": 33,
	"./Unicode.md": 34,
	"./Url加密解密.md": 35,
	"./awesome.md": 36,
	"./charles.md": 37,
	"./fiddler.md": 38,
	"./git fetch和git pull.md": 39,
	"./git reset和git revert.md": 40,
	"./gulp配置.md": 41,
	"./hexo.md": 42,
	"./npm.md": 43,
	"./npm发包.md": 44,
	"./react-native-开发汇总.md": 45,
	"./react-native.md": 46,
	"./require-context.md": 47,
	"./sftp.md": 48,
	"./weinre.md": 49,
	"./前端模块化.md": 50,
	"./动画回调.md": 51,
	"./异步处理.md": 52,
	"./正则表达式.md": 53,
	"./编辑器配置.md": 54,
	"./装饰器.md": 55,
	"./频谱.md": 56
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 78;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.81a1c39.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.2ee7c20.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.ff29baf.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.7316e2c.jpeg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.1faae97.jpeg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.ce11986.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.aba2288.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/charles4.0133d66.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/charles5.ecf9579.jpg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/charles1.d686515.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/charles2.b027e00.jpg";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/charles3.ceaa815.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fiddler1.0fd5d7d.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fiddler2.26625b6.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fiddler3.97ef271.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.bd26f63.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.ada3ad8.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.8fc98c0.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add-commit.9de5e9c.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.0ebf0c9.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.6be9a96.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.64482c5.png";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.8fdb9f4.jpg";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Blob.md": 17,
	"./Canvas.md": 18,
	"./D3.md": 19,
	"./Docker.md": 20,
	"./EventLoop.md": 21,
	"./Flex.md": 22,
	"./Git.md": 23,
	"./Interview.md": 24,
	"./Linux.md": 25,
	"./Nginx.md": 26,
	"./Node.md": 27,
	"./Nuxt.md": 28,
	"./PM2.md": 29,
	"./React.md": 30,
	"./RequireJS.md": 31,
	"./SSH.md": 32,
	"./URL.md": 33,
	"./Unicode.md": 34,
	"./Url加密解密.md": 35,
	"./awesome.md": 36,
	"./charles.md": 37,
	"./fiddler.md": 38,
	"./git fetch和git pull.md": 39,
	"./git reset和git revert.md": 40,
	"./gulp配置.md": 41,
	"./hexo.md": 42,
	"./npm.md": 43,
	"./npm发包.md": 44,
	"./react-native-开发汇总.md": 45,
	"./react-native.md": 46,
	"./require-context.md": 47,
	"./sftp.md": 48,
	"./weinre.md": 49,
	"./前端模块化.md": 50,
	"./动画回调.md": 51,
	"./异步处理.md": 52,
	"./正则表达式.md": 53,
	"./编辑器配置.md": 54,
	"./装饰器.md": 55,
	"./频谱.md": 56
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 102;

/***/ }),
/* 103 */
/***/ (function(module, exports) {



/***/ }),
/* 104 */
/***/ (function(module, exports) {



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(57);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(58);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _6aafde8b = () => interopDefault(__webpack_require__.e(/* import() | pages/Octopus/index */ 8).then(__webpack_require__.bind(null, 140)));

const _7f06d782 = () => interopDefault(__webpack_require__.e(/* import() | pages/Posts/index */ 10).then(__webpack_require__.bind(null, 138)));

const _3b5ecb32 = () => interopDefault(__webpack_require__.e(/* import() | pages/Posts/_id */ 9).then(__webpack_require__.bind(null, 137)));

const _c36bff4a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 11).then(__webpack_require__.bind(null, 139)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Octopus",
    component: _6aafde8b,
    name: "Octopus"
  }, {
    path: "/Posts",
    component: _7f06d782,
    name: "Posts"
  }, {
    path: "/Posts/:id",
    component: _3b5ecb32,
    name: "Posts-id"
  }, {
    path: "/",
    component: _c36bff4a,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "75bfe8d4"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "7bc00108"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/dist/antd.css
var antd = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=950c79be&
var defaultvue_type_template_id_950c79be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_950c79be_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=950c79be&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_950c79be_render,
  defaultvue_type_template_id_950c79be_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "5ca40d16"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Octopus.vue?vue&type=template&id=09c83e43&scoped=true&
var Octopusvue_type_template_id_09c83e43_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.classPrefix + '-layout-wrapper']},[_c('Header',{attrs:{"imgSrc":_vm.blogSrc,"categoryList":_vm.categoryList,"classPrefix":_vm.classPrefix}}),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.classPrefix + '-content-wrapper']))+" data-v-09c83e43>","</div>",[_c('nuxt',{attrs:{"classPrefix":_vm.classPrefix}}),_vm._ssrNode(" "),_c('ScrollTop')],2)],2)}
var Octopusvue_type_template_id_09c83e43_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Octopus.vue?vue&type=template&id=09c83e43&scoped=true&

// EXTERNAL MODULE: ./node_modules/viewerjs/dist/viewer.css
var viewer = __webpack_require__(69);

// EXTERNAL MODULE: external "v-viewer"
var external_v_viewer_ = __webpack_require__(59);
var external_v_viewer_default = /*#__PURE__*/__webpack_require__.n(external_v_viewer_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Octopus.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



external_vue_default.a.use(external_v_viewer_default.a);
/* harmony default export */ var Octopusvue_type_script_lang_js_ = ({
  data: () => {
    let obj = {
      a: 1
    };
    let u = [1, 2];
    return {
      classPrefix: 'octopus',
      categoryList: [{
        name: '首页',
        href: '/Octopus'
      } // {
      //     name: '沸点',
      //     href: '/Octopus',
      // },
      ],
      blogSrc: __webpack_require__(70)
    };
  }
});
// CONCATENATED MODULE: ./layouts/Octopus.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Octopusvue_type_script_lang_js_ = (Octopusvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Octopus.vue



function Octopus_injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(72)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var Octopus_component = Object(componentNormalizer["a" /* default */])(
  layouts_Octopusvue_type_script_lang_js_,
  Octopusvue_type_template_id_09c83e43_scoped_true_render,
  Octopusvue_type_template_id_09c83e43_scoped_true_staticRenderFns,
  false,
  Octopus_injectStyles,
  "09c83e43",
  "0e2b6514"
  
)

/* harmony default export */ var Octopus = (Octopus_component.exports);

/* nuxt-component-imports */
installComponents(Octopus_component, {Header: __webpack_require__(106).default,ScrollTop: __webpack_require__(107).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_Octopus": sanitizeComponent(Octopus)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(108), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(103), 'octopus.js');
  resolveStoreModules(__webpack_require__(104), 'posts.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  Logo: () => __webpack_require__.e(/* import() | components/logo */ 4).then(__webpack_require__.bind(null, 131)).then(c => wrapFunctional(c.default || c)),
  Anchor: () => __webpack_require__.e(/* import() | components/anchor */ 1).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c)),
  AudioSpectrum: () => __webpack_require__.e(/* import() | components/audio-spectrum */ 3).then(__webpack_require__.bind(null, 135)).then(c => wrapFunctional(c.default || c)),
  ArticalList: () => __webpack_require__.e(/* import() | components/artical-list */ 2).then(__webpack_require__.bind(null, 130)).then(c => wrapFunctional(c.default || c)),
  Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c)),
  PostDetail: () => __webpack_require__.e(/* import() | components/post-detail */ 5).then(__webpack_require__.bind(null, 129)).then(c => wrapFunctional(c.default || c)),
  ScrollTop: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c)),
  ThemePicker: () => __webpack_require__.e(/* import() | components/theme-picker */ 6).then(__webpack_require__.bind(null, 128)).then(c => wrapFunctional(c.default || c)),
  WrapCompsInput: () => __webpack_require__.e(/* import() | components/wrap-comps-input */ 7).then(__webpack_require__.bind(null, 136)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(60);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "ant-design-vue/lib"
var lib_ = __webpack_require__(61);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib_);

// CONCATENATED MODULE: ./plugins/antd-ui.js


external_vue_default.a.use(lib_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/antd-ui (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "fade",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "OCTOPUS",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/antd-ui.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/antd-ui.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/index.vue?vue&type=template&id=6cac5396&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.classPrefix + '-header-wrapper']},[_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.classPrefix + '-header-content-wrapper']))+" data-v-6cac5396>","</div>",[_vm._ssrNode("<div class=\"h-l\" data-v-6cac5396><ul data-v-6cac5396><li data-v-6cac5396><a href=\"/\" data-v-6cac5396><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt data-v-6cac5396></a></li> "+(_vm._ssrList((_vm.categoryListDuplicate),function(item){return ("<li data-v-6cac5396><a"+(_vm._ssrAttr("href",item.href))+" data-v-6cac5396>"+_vm._ssrEscape(_vm._s(item.name))+"</a></li>")}))+"</ul></div> "),_vm._ssrNode("<div class=\"h-r\" data-v-6cac5396>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,[
                    'header-search-box',
                    _vm.$route.fullPath.indexOf('/Octopus') >= 0 ? 'v-show' : 'v-hidden' ]))+" data-v-6cac5396>","</div>",[_c('a-select',{staticStyle:{"width":"150px"},attrs:{"show-search":"","show-arrow":false,"label-in-value":"","value":_vm.value,"placeholder":"Search Title","filter-option":false,"not-found-content":_vm.fetching ? undefined : null},on:{"search":_vm.fetchPosts,"change":_vm.handleChange}},[(_vm.fetching)?_c('a-spin',{attrs:{"slot":"notFoundContent","size":"small"},slot:"notFoundContent"}):_vm._e(),_vm._v(" "),_vm._l((_vm.data),function(d){return _c('a-select-option',{key:d.value},[_vm._v("\n                        "+_vm._s(d.text)+"\n                    ")])})],2)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"avatar-box\" data-v-6cac5396>","</div>",[_c('a-popover',{attrs:{"placement":"bottomRight"}},[_c('template',{slot:"content"},[_c('div',[_vm._v("12")])]),_vm._v(" "),_c('template',{slot:"title"},[_c('span',[_vm._v("Title")])]),_vm._v(" "),_c('img',{attrs:{"src":_vm.imgSrc,"alt":""}})],2)],1),_vm._ssrNode(" <div class=\"audio-box\" data-v-6cac5396>"+((!_vm.playing)?("<img"+(_vm._ssrAttr("src",__webpack_require__(73)))+" data-v-6cac5396>"):"<!---->")+" "+((_vm.playing)?("<img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" data-v-6cac5396>"):"<!---->")+" <audio id=\"header-music\""+(_vm._ssrAttr("src",__webpack_require__(75)))+" data-v-6cac5396></audio></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/index.vue?vue&type=template&id=6cac5396&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: {
    imgSrc: String,
    categoryList: Array,
    classPrefix: String
  },
  data: function () {
    return {
      loading: false,
      fetching: false,
      data: [],
      value: [],
      playing: false,
      categoryListDuplicate: this.categoryList
    };
  },
  computed: { ...Object(external_vuex_["mapState"])(['postsDetail'])
  },
  methods: { ...Object(external_vuex_["mapMutations"])(['searchArticle']),

    fetchPosts(value) {
      this.data = [];
      this.fetching = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.fetching = false;
          const data = this.postsDetail.map(({
            title
          }) => title.toLowerCase().indexOf(value.toLowerCase()) < 0 ? undefined : {
            text: title,
            value: title
          });
          this.data = data.filter(Boolean);
          resolve(this.postsDetail);
        }, 100);
      });
    },

    handleChange(value) {
      console.log(value, 'value');
      this.$store.commit('searchArticle', {
        title: value.key
      });
      Object.assign(this, {
        value
      });
    },

    play() {
      this.audioEle.play();
      this.playing = true;
    },

    pause() {
      this.audioEle.pause();
      this.playing = false;
    }

  },
  mounted: function () {
    this.audioEle = document.getElementById('header-music');
  }
});
// CONCATENATED MODULE: ./components/Header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6cac5396",
  "4e4330b8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollTop/index.vue?vue&type=template&id=c4c7715c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('div',{class:['scroll-top'],on:{"click":_vm.scrollTop}},[]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ScrollTop/index.vue?vue&type=template&id=c4c7715c&scoped=true&

// EXTERNAL MODULE: external "loadsh/throttle"
var throttle_ = __webpack_require__(9);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollTop/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ScrollTopvue_type_script_lang_js_ = ({
  props: {},
  computed: {},
  data: function () {
    return {
      visible: true
    };
  },
  methods: {
    scrollTop: function () {
      window.scrollTo(0, 0);
    },
    scroll: throttle_default()(function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop <= 200) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }, 50)
  },
  mounted: function () {
    window.document.addEventListener('scroll', this.scroll);
  },
  updated: function () {},
  destroyed: function () {
    window.document.removeEventListener('scroll', this.scroll);
  }
});
// CONCATENATED MODULE: ./components/ScrollTop/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ScrollTopvue_type_script_lang_js_ = (ScrollTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ScrollTop/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ScrollTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4c7715c",
  "509c9ca7"
  
)

/* harmony default export */ var ScrollTop = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "action", function() { return /* binding */ action; });

// CONCATENATED MODULE: ./utils/tools.js
const generatePostsData = function () {
  let ctx = __webpack_require__(78);

  let fileNames = ctx.keys().map(item => {
    return item.match(/\.\/(.*)\.md/)[1];
  });
  let postsDetail = [];
  let postsData = fileNames.map(item => {
    let mdContent = __webpack_require__(102)(`./${item}.md`);

    let data = {
      id: item
    };
    mdContent = mdContent.replace(/^<hr(.*?)hr>/gis, function (match, p1) {
      p1.replace(/>(\w*): (.*?)</gis, function (mah, i1, i2) {
        data[i1] = i2;

        if (['categories', 'tags'].includes(i1)) {
          data[i1] = i2.split(' ');
        }
      });
      return '';
    }); // 修饰符s使.可以匹配\n换行符

    postsDetail.push({ ...data,
      content: mdContent
    });
    return data;
  });
  postsDetail.sort((x, y) => {
    let xTime = new Date(x.date).getTime();
    let yTime = new Date(y.date).getTime();

    if (xTime > yTime) {
      return -1;
    } else if (xTime < yTime) {
      return 1;
    } else {
      return 0;
    }
  });
  return {
    // postsData,
    postsDetail
  };
};
// CONCATENATED MODULE: ./store/index.js

let {
  postsDetail
} = generatePostsData();
const state = () => ({
  postsDetail,
  activePostsList: postsDetail
});
const mutations = {
  searchArticle(state, {
    title
  }) {
    state.activePostsList = state.postsDetail.filter(item => {
      return item.title === title;
    });
  }

};
const action = {};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("moment/locale/zh-cn");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map