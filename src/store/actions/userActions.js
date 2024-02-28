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
