import { API } from '../../helper/api'
import { ProductActions } from '../reducers/productReducer'

export const getProductsCreator = (data) => ({
  type: ProductActions.getProduct,
  payload: data,
})

export const getFiltredProductsAction =
  (category, filter, sort, offset = 0) =>
  (dispatch) => {
    API.get('/products', {
      params: {
        category: category,
        filter: filter,
        sort: sort,
        limit: 12,
        offset: offset,
      },
    }).then((res) => {
      dispatch(getProductsCreator(res.data))
    })
  }
