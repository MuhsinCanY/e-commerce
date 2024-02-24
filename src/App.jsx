import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from './layout/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  )
}

export default App
