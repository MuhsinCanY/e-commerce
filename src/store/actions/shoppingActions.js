import { ShoppingActions } from '../reducers/shoppingReducer'

export const addToCartCreator = (cart) => ({
  type: ShoppingActions.addToCart,
  payload: cart,
})

export const addToCartAction = (item) => (dispatch, getState) => {
  const state = getState()
  const cart = state.shoppingReducer.cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.product.id === item.product.id
  )

  if (existingItemIndex !== -1) {
    const updatedCart = cart.map((cartItem, index) => {
      if (index === existingItemIndex) {
        return { ...cartItem, count: cartItem.count + item.count }
      }
      return cartItem
    })

    dispatch(addToCartCreator(updatedCart))
  } else {
    dispatch(addToCartCreator([...cart, item]))
  }
}

export const deleteToCartAction = (item) => (dispatch, getState) => {
  const state = getState()
  const cart = state.shoppingReducer.cart

  let newCart = []

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id != item.product.id) {
      newCart.push(cart[i])
    }
  }
  dispatch(addToCartCreator(newCart))
}
