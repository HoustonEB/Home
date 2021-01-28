const {renderer, tokenizer} = require('./utils/markedParser');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'OCTOPUS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    extend(config, { isClient, loaders }) {
      // console.log(config, '0-----')
      config.module.rules.push(
        // {
        //   test: /\.md$/,
        //   use: [
        //     {
        //       loader: 'vue-loader'
        //     },
        //     {
        //       loader: 'vue-markdown-loader/lib/markdown-compiler.js',
        //       options: {
        //         preset: 'default',
        //         breaks: true,
        //         preventExtract: true
        //       }
        //     }
        //   ]
        //   // loaders: ['vue-loader', 'vue-markdown-loader/lib/markdown-compiler.js']
        // },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
                renderer,
                pedantic: false,
                gfm: true,
                breaks: true,
                sanitize: false,
                smartLists: true,
                smartypants: true,
                xhtml: false,
                // tokenizer,
                // walkTokens: (token) => {
                //   if (token.type === 'heading') {
                //     token.depth += 1;
                //   }
                // }
              }
            }
          ]
        }
      )
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
