import { toast } from 'react-toastify'

export function toasty(text, position) {
  toast.success(text, {
    position: position,
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    theme: 'light',
  })
}
