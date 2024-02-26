import { API } from '../../helper/api'
import { StoreActions } from '../reducers/storeReducer'

export const setRolesActionCreator = (roles) => ({
  type: StoreActions.setRoles,
  payload: roles,
})

export const fetchRolesAction = () => (dispatch, getState) => {
  API.get('/roles').then((res) => {
    dispatch(setRolesActionCreator(res.data))
  })
}
