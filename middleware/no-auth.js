export default function ({ store, redirect }) {
  if (store.state.user.auth.accessToken) {
    return redirect('/admin/post/overview')
  }
}
