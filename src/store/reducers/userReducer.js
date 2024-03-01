export const UserActions = {
  getUserData: 'GET_USER_DATA',
  getUserError: 'GET_USER_ERROR',
  setLoadingUser: 'SET_LOADING_USER',
  exitUser: 'EXIT_USER',
}

const initialState = {
  response: {},
  error: {},
  loading: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.getUserData:
      return { ...state, response: action.payload, error: {} }
    case UserActions.getUserError:
      return { ...state, error: action.payload, response: {} }
    case UserActions.setLoadingUser:
      return { ...state, loading: action.payload }
    case UserActions.exitUser:
      return { ...state, response: {}, error: {}, loading: false }
    default:
      return state
  }
}

export default userReducer
