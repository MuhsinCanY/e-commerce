import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from './layout/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { doAutoLoginAction } from './store/actions/userActions'

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      console.log('lalallaallala')
      dispatch(doAutoLoginAction(token))
    }
  }, [])

  return (
    <>
      <Main />
      <ToastContainer />
    </>
  )
}

export default App
