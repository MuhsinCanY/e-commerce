import { toast } from 'react-toastify'
import { API } from '../../helper/api'
import { UserActions } from '../reducers/userReducer'

export const getUserDataCreator = (data) => ({
  type: UserActions.getUserData,
  payload: data,
})

export const userErrorCreator = (error) => ({
  type: UserActions.getUserError,
  payload: error,
})

export const setLoadingUserCreator = (info) => ({
  type: UserActions.setLoadingUser,
  payload: info,
})

export const exitUserCreator = () => ({
  type: UserActions.exitUser,
})

export const exitUser = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(exitUserCreator())
}

export const doPostRequestAction =
  (payload, history) => (dispatch, getState) => {
    dispatch(setLoadingUserCreator(true))
    API.post('/login', payload)
      .then((res) => {
        dispatch(getUserDataCreator(res.data))
        localStorage.setItem('token', res.data.token)
        history.push('/')
      })
      .catch((err) => {
        dispatch(userErrorCreator(err))
        toast(err.response.data.message)
      })
      .finally(() => {
        dispatch(setLoadingUserCreator(false))
      })
  }

export const doAutoLoginAction = (token) => (dispatch) => {
  API.get('/verify', {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      console.log('Auto Login oldu: ', res.data)
      localStorage.setItem('token', res.data.token)
      dispatch(getUserDataCreator(res.data))
    })
    .catch((err) => {
      console.error('Login Hata: ', err)
      localStorage.removeItem('token')
    })
}
