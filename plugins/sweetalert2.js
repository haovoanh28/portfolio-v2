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

  // const errorSwal = Swal.mixin({
  //   icon: 'error',
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timerProgressBar: false,
  //   timer: 1800,
  //   background: 'red',
  //   iconColor: 'white',
  // })

  function errorSwal(title) {
    Toast.fire({
      icon: 'error',
      position: 'top-end',
      timerProgressBar: false,
      background: '#ff5050',
      iconColor: 'white',
      title: `<span style="color: #fff !important; font-size: 1.5rem">${title}</span>`,
    })
  }

  function successSwal(title) {
    Toast.fire({
      icon: 'error',
      position: 'top-end',
      timerProgressBar: false,
      background: '#33cc33',
      iconColor: 'white',
      title: `<span style="color: #fff !important; font-size: 1.5rem">${title}</span>`,
    })
  }

  inject('errorSwal', errorSwal)

  inject('successSwal', successSwal)

  inject('toast', Toast)

  inject(
    'swal',
    Swal.mixin({
      confirmButtonColor: '#0000cc',
      cancelButtonColor: '#d33',
    })
  )
}
