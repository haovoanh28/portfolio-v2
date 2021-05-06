export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio-v2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'quO9-pjTQySW-mGKsQH6grDAqLAvbusQLIyAEmjsavk',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
      },
    ],
  },

  //<meta name="google-site-verification" content="quO9-pjTQySW-mGKsQH6grDAqLAvbusQLIyAEmjsavk" />

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/helper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/onPageScroll', ssr: false },
    { src: '~/plugins/vue-particles' },
    { src: '~/plugins/vue-awesome' },
    { src: '~/plugins/vue-content-placeholders' },
    { src: '~/plugins/api' },
  ],

  styleResources: {
    scss: ['~/assets/scss/_mixins.scss', '~/assets/scss/_variables.scss'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vue-particles',
      /^vue-awesome/,
      'epic-spinners',
      'vue2-timeago',
      'vue-content-placeholders',
    ],
    splitChunks: {
      layouts: true,
    },
  },
  loading: {
    color: '#cc9900',
    height: '3px',
    continuous: true,
  },
  env: {
    baseURL:
      process.env.BASE_URL || 'https://portfolio-v2-api.herokuapp.com/api/v1/',
  },
}
