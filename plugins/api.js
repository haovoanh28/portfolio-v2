import Swal from 'sweetalert2'

export default function ({ $axios, store }, inject) {
  let baseURL = ''

  if (
    process.env.NODE_ENV === 'development' ||
    process.env.VERCEL_ENV == 'development' ||
    process.env.NUXT_ENV_VERCEL_ENV == 'development'
  ) {
    baseURL = process.env.BASE_URL_DEV || process.env.baseURL
  }

  if (
    process.env.NODE_ENV == 'production' ||
    process.env.VERCEL_ENV == 'production' ||
    process.env.NUXT_ENV_VERCEL_ENV == 'production'
  ) {
    baseURL = process.env.BASE_URL_PRODUCTION || process.env.baseURL
  }

  const api = $axios.create({ baseURL: baseURL })
  api.interceptors.request.use(
    (config) => {
      // const token = store.state.auth.accessToken ?? ''
      // if (token) config.headers.Authorization = `Bearer ${token}`

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  inject('api', api)
}
