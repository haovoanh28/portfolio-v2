export default function ({ $axios, store }, inject) {
  const baseURL = ''

  if (process.env.NODE_ENV === 'development') {
    baseURL = process.env.BASE_URL_DEV
  }

  if (process.env.NODE_ENV === 'production') {
    baseURL = process.env.BASE_URL_PRODUCTION
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

  inject('api', api)
}
