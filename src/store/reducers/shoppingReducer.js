export const ShoppingActions = {
  addToCart: 'ADD_TO_CART',
}

const initialState = {
  cart: [],
  payment: {},
  address: {},
}

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShoppingActions.addToCart:
      return { ...state, cart: action.payload }
    default:
      return state
  }
}

export default shoppingReducer
