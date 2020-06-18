import * as types from './types'

export const initialState = {
  status: null,
  response: null
}

const reducer = (state = initialState, action: { type: any; response: any }) => {
  switch(action.type) {
    case types.DISH_FETCH:
      return { ...initialState, status:types.DISH_FETCH }
    case types.DISH_SUCCESS:
      return { ...state, status: types.DISH_SUCCESS, response: action.response }
    case types.DISH_FAILURE:
      return { ...state, status: types.DISH_FAILURE, response: action.response }
    default:
      return state
  }
}

export default reducer
