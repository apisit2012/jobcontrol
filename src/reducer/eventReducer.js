import { HTTP_EVENT_FAIL, HTTP_EVENT_FETCHING, HTTP_EVENT_SUCCESS } from "../constant"

const initialState = {
    event:[],
    eve_isFetching:false,
    eve_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_EVENT_FETCHING:
    return { ...state, eve_isFetching:true, eve_isError:false }

  case HTTP_EVENT_SUCCESS:
    return { ...state, event:payload ,eve_isFetching:false, eve_isError:false }

  case HTTP_EVENT_FAIL:
    return { ...state, eve_isFetching:false, eve_isError:true }

  default:
    return state
  }
}
