export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hao Vo',
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
      {
        hid: 'description',
        name: 'description',
        content:
          'My name is Vo Anh Hao - a Junior Developer. This is my personal website for writing blog and introduce my self',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap',
      },
      {
        rel: 'canonical',
        href: 'https://haov.cf/',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/base.css', '@/assets/css/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persisted-state.js' },
    { src: '~/plugins/vue-particles' },
    { src: '~/plugins/vue-awesome' },
    { src: '~/plugins/vue-content-placeholders' },
    { src: '~/plugins/api' },
    { src: '~/plugins/vue-ripple-directive' },
    { src: '~/plugins/sweetalert2', ssr: false },
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
    '@nuxtjs/composition-api/module',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    '@nuxtjs/svg',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://haov.cf',
    exclude: ['/admin', '/admin/**'],
  },

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
      'vue-ripple-directive',
      'sweetalert2',
    ],
    splitChunks: {
      layouts: true,
    },
  },
  env: {
    baseURL:
      process.env.BASE_URL || 'https://portfolio-v2-api.herokuapp.com/api/v1/',
  },
  router: {
    // middleware: 'delayBeforeRoute',
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
}
