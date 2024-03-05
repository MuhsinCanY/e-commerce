export const ProductActions = {
  getProduct: 'GET_PRODUCT',
}

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: '',
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.getProduct:
      return { ...state, productList: action.payload }
    default:
      return state
  }
}

export default productReducer
