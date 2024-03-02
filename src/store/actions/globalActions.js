import { API } from '../../helper/api'
import { GlobalActions } from '../reducers/globalReducer'

export const getCategoriesCreator = (data) => ({
  type: GlobalActions.getCategories,
  payload: data,
})

export const getCategoriesAction = () => (dispatch) => {
  API.get('/categories').then((res) => {
    dispatch(getCategoriesCreator(res.data))
  })
}
