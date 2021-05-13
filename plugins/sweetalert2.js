import Swal from 'sweetalert2'

export default ({ app }, inject) => {
  //   Vue.use(VueSweetalert2)

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  })

  inject('toast', Toast)

  inject(
    'swal',
    Swal.mixin({
      confirmButtonColor: '#0000cc',
      cancelButtonColor: '#d33',
    })
  )
}
