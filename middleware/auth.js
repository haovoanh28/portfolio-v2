// import * as Cookies from 'js-cookie'
// import cookie from 'cookie'

export default function ({ store, redirect }) {
  if (!store.state.user.auth.accessToken) {
    return redirect('/admin/login')
  }
}
