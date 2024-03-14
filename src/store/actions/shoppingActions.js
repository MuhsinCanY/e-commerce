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

export const setCartCreator = (cart) => ({
  type: ShoppingActions.setCart,
  payload: cart,
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

export const doPostRequestAddressAction = (payload) => () => {
  API.post('/user/address', payload)
    .then((res) => {
      console.log(res.data)
      toast.success('Address added succesfully', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
      getAddressAction()
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
}

export const doPutRequestAddressAction = (payload) => () => {
  API.put('/user/address', payload)
    .then((res) => {
      console.log(res.data)
      toast.success('Address updated succesfully', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
      getAddressAction()
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
}

export const deleteAddressAction = (id) => () => {
  API.delete(`/user/address/${id}`)
    .then((res) => {
      toast.success(res.data, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
    .finally(() => {
      getAddressAction()
    })
}

export const getAddressAction = () => (dispatch) => {
  API.get('/user/address')
    .then((res) => {
      dispatch(setAddressCreator(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const doPostRequestCardAction = (payload) => () => {
  API.post('/user/card', payload)
    .then((res) => {
      console.log(res.data)
      toast.success('Card added succesfully', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
      getCardAction()
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
}

export const getCardAction = () => (dispatch) => {
  API.get('/user/card')
    .then((res) => {
      dispatch(setCartCreator(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const deleteCardAction = (id) => () => {
  API.delete(`/user/card/${id}`)
    .then((res) => {
      toast.success(res.data, {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
    .finally(() => {
      setTimeout(() => {
        getCardAction()
      }, 2000)
    })
}

export const doPutRequestCardAction = (payload) => () => {
  API.put('/user/card', payload)
    .then((res) => {
      console.log(res.data)
      toast.success('Card updated succesfully', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      })
      getAddressAction()
    })
    .catch((err) => {
      console.log(err)
      toast(err.response.data.message)
    })
}
