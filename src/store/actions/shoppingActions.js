import { toast } from 'react-toastify'
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
  toast.success('Added to Cart', {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    theme: 'light',
  })
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
