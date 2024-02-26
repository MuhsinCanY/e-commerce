export const StoreActions = {
  setRoles: 'SET_ROLES',
  // removeProduct: 'REMOVE_PRODUCT',
  // addProduct: 'ADD_PRODUCT',
  // setLoading: 'PRODUCTS_LOADING',
}

const initialState = {
  seller: {},
  roles: [],
}

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoreActions.setRoles:
      return { ...state, roles: action.payload }
    default:
      return state
  }
}

export default storeReducer
