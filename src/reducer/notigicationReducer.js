import { HTTP_NOTI_FAIL, HTTP_NOTI_FETCHING, HTTP_NOTI_SUCCESS } from "../constant"

const initialState = {
    notification:{
      badge:0
    },
    noti_isFetching:false,
    noti_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
  case HTTP_NOTI_FETCHING:
    return { ...state, noti_isFetching:true, noti_isError:false }

  case HTTP_NOTI_SUCCESS:
    return { ...state, notification:payload, noti_isFetching:false, noti_isError:false }

  case HTTP_NOTI_FAIL:
    return { ...state, noti_isFetching:false, noti_isError:true }

  default:
    return state
  }
}
