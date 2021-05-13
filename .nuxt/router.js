import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6aafde8b = () => interopDefault(import('../pages/Octopus/index.vue' /* webpackChunkName: "pages/Octopus/index" */))
const _7f06d782 = () => interopDefault(import('../pages/Posts/index.vue' /* webpackChunkName: "pages/Posts/index" */))
const _3b5ecb32 = () => interopDefault(import('../pages/Posts/_id.vue' /* webpackChunkName: "pages/Posts/_id" */))
const _c36bff4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
