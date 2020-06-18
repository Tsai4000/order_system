import * as types from './types'

export const fetching = () => ({ type: types.DISH_FETCH })
export const success = (response: any) => ({ type: types.DISH_SUCCESS, response })
export const failure = (response: any) => ({ type: types.DISH_FAILURE, response })
