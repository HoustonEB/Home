import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Anchor } from '../../components/Anchor/index.vue'
export { default as ArticalList } from '../../components/ArticalList/index.vue'
export { default as AudioSpectrum } from '../../components/AudioSpectrum/index.vue'
export { default as Header } from '../../components/Header/index.vue'
export { default as PostDetail } from '../../components/PostDetail/index.vue'
export { default as ScrollTop } from '../../components/ScrollTop/index.vue'
export { default as ThemePicker } from '../../components/ThemePicker/index.vue'
export { default as WrapCompsInput } from '../../components/wrapComps/Input/index.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAnchor = import('../../components/Anchor/index.vue' /* webpackChunkName: "components/anchor" */).then(c => wrapFunctional(c.default || c))
export const LazyArticalList = import('../../components/ArticalList/index.vue' /* webpackChunkName: "components/artical-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAudioSpectrum = import('../../components/AudioSpectrum/index.vue' /* webpackChunkName: "components/audio-spectrum" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header/index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyPostDetail = import('../../components/PostDetail/index.vue' /* webpackChunkName: "components/post-detail" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollTop = import('../../components/ScrollTop/index.vue' /* webpackChunkName: "components/scroll-top" */).then(c => wrapFunctional(c.default || c))
export const LazyThemePicker = import('../../components/ThemePicker/index.vue' /* webpackChunkName: "components/theme-picker" */).then(c => wrapFunctional(c.default || c))
export const LazyWrapCompsInput = import('../../components/wrapComps/Input/index.vue' /* webpackChunkName: "components/wrap-comps-input" */).then(c => wrapFunctional(c.default || c))
