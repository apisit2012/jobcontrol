import { SET_LOGIN, SET_LOGOUT } from "../constant"

const initialState = {
    isLoggedIn:false,
}

export default (state = initialState, { type }) => {
  switch (type) {

  case SET_LOGIN:
    return { ...state, isLoggedIn:true }

  case SET_LOGOUT:
    return { ...state, isLoggedIn:false }

  default:
    return state
  }
}
