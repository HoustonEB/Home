(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1283:function(t,e,n){},1290:function(t,e,n){"use strict";n(1283)},1299:function(t,e,n){"use strict";n.r(e);var r={props:{classPrefix:{type:String,default:""},postsData:{type:Array,defalut:[]}},data:function(){return{}}},o=(n(1290),n(36)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.classPrefix+"-artical-wrapper"]},[n("div",{staticClass:"posts-title-box"},[n("ul",t._l(t.postsData,(function(e){return n("li",[n("nuxt-link",{attrs:{"no-prefetch":"",to:{path:"/Posts/"+e.id}}},[n("div",[n("p",{staticClass:"post-content-info"},[n("a",{attrs:{href:"#"}},[t._v(t._s(e.authorName))]),t._v(" "),n("span",[t._v(t._s(e.date))]),t._v(" "),n("i",[t._v(".")]),t._v(" "),n("span",[t._v("分类:")]),t._v(" "),t._l(e.categories,(function(e,r){return n("a",{staticClass:"categories-item",attrs:{href:"#"}},[t._v(t._s((0!==r?" ":"")+e))])})),t._v(" "),n("i",[t._v(".")]),t._v(" "),n("span",[t._v("标签:")]),t._v(" "),t._l(e.tags,(function(e,r){return n("a",{staticClass:"tags-item",attrs:{href:"#"}},[t._v(t._s((0!==r?" ":"")+e))])}))],2),t._v(" "),n("p",{staticClass:"posts-title ellipsis"},[t._v("\n                            "+t._s(e.id)+"\n                        ")]),t._v(" "),n("p",{staticClass:"posts-operate"})])])],1)})),0)])])}),[],!1,null,"30af5454",null);e.default=component.exports}}]);