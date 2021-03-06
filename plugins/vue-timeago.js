import VueTimeago from 'vue-timeago'
import Vue from 'vue'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: undefined, // Default locale
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja'),
  },
})
