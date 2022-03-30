import { NOTUSESTACK, SET_LOGIN, SET_LOGOUT, USESTACK } from "../constant"

const initialState = {
    isLoggedIn:true,
    isStack:false
}

export default (state = initialState, { type }) => {
  switch (type) {

  case USESTACK:
    return { ...state, isLoggedIn:true, isStack:true }

  case NOTUSESTACK:
    return { ...state, isLoggedIn:true, isStack:false }

  case SET_LOGIN:
    return { ...state, isLoggedIn:true, isStack:false }

  case SET_LOGOUT:
    return { ...state, isLoggedIn:false, isStack:false }

  default:
    return state
  }
}
