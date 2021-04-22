exports.ids = [1];
exports.modules = {

/***/ 111:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a2aa7e88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a2aa7e88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a2aa7e88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a2aa7e88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a2aa7e88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Anchor/index.vue?vue&type=template&id=a2aa7e88&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.classPrefix + '-anchor-wrapper']},[_vm._ssrNode("<p class=\"catalog-title\" data-v-a2aa7e88>目录</p> <div class=\"catalog-body\" data-v-a2aa7e88><ul data-v-a2aa7e88>"+(_vm._ssrList((_vm.catalogData),function(ref){
var id = ref.id;
var title = ref.title;
var level = ref.level;
return ("<li"+(_vm._ssrClass(null,[_vm.activeLinkId === '#' + id ? 'active' : '']))+" data-v-a2aa7e88><a"+(_vm._ssrAttr("href",['#' + id]))+(_vm._ssrAttr("title",title))+(_vm._ssrClass(null,[
                    'catalog-link',
                    'ellipsis',
                    'level-' + level
                ]))+" data-v-a2aa7e88>"+_vm._ssrEscape("\n                "+_vm._s(title)+"\n            ")+"</a></li>")}))+"</ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Anchor/index.vue?vue&type=template&id=a2aa7e88&scoped=true&

// EXTERNAL MODULE: external "loadsh/throttle"
var throttle_ = __webpack_require__(9);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Anchor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Anchorvue_type_script_lang_js_ = ({
  props: {
    classPrefix: {
      type: String,
      default: 'blog'
    },
    catalogData: {
      type: Array,
      default: []
    }
  },
  computed: {
    activeLinkId: function () {
      return this.isExitDomIds[this.isExitDomIds.length - 1] || '#heading';
    }
  },
  data: function () {
    return {
      anchorDoms: [],
      isExitDomIds: [],
      anchorUlTop: 0
    };
  },
  methods: {
    linkClick: function (id, e) {
      // e.preventDefault();
      // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeadDom = document.getElementById(id);
      let top = scrollHeadDom.getBoundingClientRect().top;
      window.scrollBy({
        top: top - 120,
        left: 0,
        behavior: 'smooth'
      });
    },
    scroll: throttle_default()(function () {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 视口的高度

      let catalogBodyUl = document.querySelectorAll('.catalog-body ul')[0];
      let visibleUlHeight = clientHeight - this.anchorUlTop;
      let catalogBody = document.querySelectorAll('.catalog-body')[0];
      let catalogBodyHeight = catalogBody.offsetHeight;
      let catalogLiHeight = document.querySelectorAll('.catalog-body li')[0].offsetHeight;
      let halfActiveIdx = Math.round(visibleUlHeight / catalogLiHeight / 2);
      let activeIdx = 0;
      this.isExitDomIds = this.anchorDoms.map(item => {
        let top = item.getBoundingClientRect().top; // 与视口顶部的距离

        let bottom = item.getBoundingClientRect().bottom;

        if (top <= 150) {
          return '#' + item.getAttribute('id');
        }
      }).filter(Boolean);
      this.catalogData.forEach((item, index) => {
        if (item.id === this.activeLinkId.substr(1)) {
          activeIdx = index + 1;
        }
      });

      if (activeIdx > halfActiveIdx) {
        catalogBodyUl.style.marginTop = -((activeIdx - halfActiveIdx) * catalogLiHeight) + 'px';
      } else {
        catalogBodyUl.style.marginTop = '0px';
      } // console.log(halfActiveIdx, 'halfActiveIdx', activeIdx);
      // console.log(this.isExitDomIds)

    }, 50),
    getAnchorDom: function () {
      let domArr = this.catalogData.map(item => {
        return document.getElementById(`${item.id}`);
      });
      this.anchorDoms = [...domArr];
    }
  },
  mounted: function () {
    let catalogBodyUl = document.querySelectorAll('.catalog-body ul')[0];
    this.anchorUlTop = catalogBodyUl.getBoundingClientRect().top;
    window.document.addEventListener('scroll', this.scroll);
  },
  updated: function () {
    this.getAnchorDom();
    this.anchorDoms.forEach(item => {
      item.children[0].onclick = e => {
        e.preventDefault();
        this.linkClick(item.id);
      };
    });
  },
  destroyed: function () {
    window.document.removeEventListener('scroll', this.scroll);
  }
});
// CONCATENATED MODULE: ./components/Anchor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Anchorvue_type_script_lang_js_ = (Anchorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Anchor/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Anchorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a2aa7e88",
  "674322c9"
  
)

/* harmony default export */ var Anchor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=anchor.js.map