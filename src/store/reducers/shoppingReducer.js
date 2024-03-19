export const ShoppingActions = {
  addToCart: 'ADD_TO_CART',
  setTotalPrice: 'SET_TOTAL_PRICE',
  setAddress: 'SET_ADDRESS',
  setCart: 'SET_CART',
}

const initialState = {
  cart: [],
  payment: {},
  address: [],
  totalPrice: 0,
}

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShoppingActions.addToCart:
      return { ...state, cart: action.payload }
    case ShoppingActions.setTotalPrice:
      return { ...state, totalPrice: action.payload }
    case ShoppingActions.setAddress:
      return { ...state, address: action.payload }
    case ShoppingActions.setCart:
      return { ...state, cart: action.payload }
    default:
      return state
  }
}

export default shoppingReducer
