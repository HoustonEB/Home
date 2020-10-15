const marked = require('marked');
let renderer = new marked.Renderer();

Object.assign(renderer, {
  heading(text, level, raw, slugger) {
    let id = slugger.slug('heading');
    return `
            <h${level} id="${id}">
              <a class="post-anchor" data-id="${id}" data-text="${text}" data-level="${level}" href="#${id}">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"/>  
              </a>
              ${text}
            </h${level}>`;
  }
});

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Home',
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
  }
}
