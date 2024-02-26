import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import globalReducer from './reducers/globalReducer'
import storeReducer from './reducers/storeReducer'
import userReducer from './reducers/userReducer'
import shoppingReducer from './reducers/shoppingReducer'
import productReducer from './reducers/productReducer'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
// import logger from 'react-logger'

export const reducers = combineReducers({
  globalReducer: globalReducer,
  userReducer: userReducer,
  productReducer: productReducer,
  shoppingReducer: shoppingReducer,
  storeReducer: storeReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk, logger))
