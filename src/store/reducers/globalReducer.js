export const GlobalActions = {
  getCategories: 'GET_CATEGORIES',
}

const initialState = {
  roles: [],
  categories: [],
  theme: '',
  language: '',
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalActions.getCategories:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}

export default globalReducer
