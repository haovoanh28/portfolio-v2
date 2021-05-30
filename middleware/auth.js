import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default function ({ req, redirect }) {
  const parsedCookies = cookie.parse(req.headers.cookie ?? '')
  if (!parsedCookies['user']) {
    redirect({ name: 'admin-login' })
  }

  // if (!window.localStorage.getItem('vuex')) {
  //   console.log(window.localStorage.getItem('vuex'))
  //   //  window.location = '/login'
  // }
}
