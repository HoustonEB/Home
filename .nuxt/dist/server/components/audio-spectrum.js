exports.ids = [3];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AudioSpectrum/index.vue?vue&type=template&id=1430b8f7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-spectrum-wrapper"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AudioSpectrum/index.vue?vue&type=template&id=1430b8f7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AudioSpectrum/index.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var AudioSpectrumvue_type_script_lang_js_ = ({
  props: {
    imgSrc: String,
    categoryList: Array,
    classPrefix: String
  },
  data: function () {
    return {};
  },
  computed: {},
  methods: {
    prepareAPIs: function () {
      window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
      window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;

      try {
        this.audioContext = new window.AudioContext(); // 1.set audioContext
      } catch (e) {
        // console.error('!Your browser does not support AudioContext')
        console.log(e);
      }
    }
  },
  mounted: function () {}
});
// CONCATENATED MODULE: ./components/AudioSpectrum/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AudioSpectrumvue_type_script_lang_js_ = (AudioSpectrumvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AudioSpectrum/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AudioSpectrumvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1430b8f7",
  "a1d1d334"
  
)

/* harmony default export */ var AudioSpectrum = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=audio-spectrum.js.map