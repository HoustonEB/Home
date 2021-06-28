import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Anchor: () => import('../../components/Anchor/index.vue' /* webpackChunkName: "components/anchor" */).then(c => wrapFunctional(c.default || c)),
  ArticalList: () => import('../../components/ArticalList/index.vue' /* webpackChunkName: "components/artical-list" */).then(c => wrapFunctional(c.default || c)),
  AudioSpectrum: () => import('../../components/AudioSpectrum/index.vue' /* webpackChunkName: "components/audio-spectrum" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header/index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  PostDetail: () => import('../../components/PostDetail/index.vue' /* webpackChunkName: "components/post-detail" */).then(c => wrapFunctional(c.default || c)),
  ScrollTop: () => import('../../components/ScrollTop/index.vue' /* webpackChunkName: "components/scroll-top" */).then(c => wrapFunctional(c.default || c)),
  ThemePicker: () => import('../../components/ThemePicker/index.vue' /* webpackChunkName: "components/theme-picker" */).then(c => wrapFunctional(c.default || c)),
  WrapCompsInput: () => import('../../components/wrapComps/Input/index.vue' /* webpackChunkName: "components/wrap-comps-input" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
