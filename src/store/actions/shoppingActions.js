import { toast } from 'react-toastify'
import { ShoppingActions } from '../reducers/shoppingReducer'
import { API } from '../../helper/api'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const addToCartCreator = (cart) => ({
  type: ShoppingActions.addToCart,
  payload: cart,
})

export const setTotalPriceCreator = (total) => ({
  type: ShoppingActions.setTotalPrice,
  payload: total,
})

export const setAddressCreator = (address) => ({
  type: ShoppingActions.setAddress,
  payload: address,
})

export const setTotalPriceAction = () => (dispatch, getState) => {
  const state = getState()
  const cart = state.shoppingReducer.cart

  let total = 0

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i].product

    if (cart[i].checked) {
      total += product.price * Number(cart[i].count)
      console.log(total)
    }
  }
  dispatch(setTotalPriceCreator(total.toFixed(2)))
}

export const updateCartAction = (item) => (dispatch, getState) => {
  // TODO: useLocaleStorage

  const state = getState()
  const cart = state.shoppingReducer.cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.product.id === item.product.id
  )

  if (existingItemIndex !== -1) {
    const updatedCart = cart.map((cartItem, index) => {
      if (index === existingItemIndex) {
        return { ...cartItem, checked: item.checked }
      }
      return cartItem
    })

    dispatch(addToCartCreator(updatedCart))
  } else {
    dispatch(addToCartCreator([...cart, item]))
  }
}

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
    position: 'bottom-right',
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

export const increaseCountAction = (item) => (dispatch, getState) => {
  const state = getState()
  const cart = state.shoppingReducer.cart

  let newCart = []

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id == item.product.id) {
      newCart.push({ ...item, count: cart[i].count + 1 })
    } else {
      newCart.push(cart[i])
    }
  }
  dispatch(addToCartCreator(newCart))
}
export const decreaseCountAction = (item) => (dispatch, getState) => {
  const state = getState()
  const cart = state.shoppingReducer.cart

  let newCart = []

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id == item.product.id && cart[i].count > 1) {
      newCart.push({ ...item, count: cart[i].count - 1 })
    } else {
      newCart.push(cart[i])
    }
  }
  dispatch(addToCartCreator(newCart))
}

export const doPostRequestAddressAction = (payload) => (dispatch, getState) => {
  const state = getState()
  const address = state.shoppingReducer.address
  console.log(address)
  API.post('/user/address', payload)
    .then((res) => {
      // dispatch(getUserDataCreator(res.data))
      console.log(res)
    })
    .catch((err) => {
      // dispatch(userErrorCreator(err))
      console.log(err)
      toast(err.response.data.message)
    })
    .finally(() => {
      // dispatch(setLoadingUserCreator(false))
    })
}
