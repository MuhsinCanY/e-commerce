import { API } from '../../helper/api'
import { ProductActions } from '../reducers/productReducer'

export const getProductsCreator = (data) => ({
  type: ProductActions.getProduct,
  payload: data,
})

export const getProductsAction =
  (category = 1, filter = '', sort = '', limit = 20, offset = 0) =>
  (dispatch) => {
    API.get('/products', {
      params: {
        category: category,
        filter: filter,
        sort: sort,
        limit: limit,
        offset: offset,
      },
    }).then((res) => {
      dispatch(getProductsCreator(res.data))
    })
  }

export const getFiltredProductsAction =
  (category, filter, sort, limit = 20, offset = 0) =>
  (dispatch) => {
    API.get('/products', {
      params: {
        category: category,
        filter: filter,
        sort: sort,
        limit: limit,
        offset: offset,
      },
    }).then((res) => {
      dispatch(getProductsCreator(res.data))
    })
  }
