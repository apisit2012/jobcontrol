import { HTTP_EVENT_FAIL, HTTP_EVENT_FETCHING, HTTP_EVENT_SUCCESS } from "../constant"

const initialState = {
  event:[],
  ifFetching:false,
  isError:false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_EVENT_FETCHING:
    return { ...state, isFetching:true, isError:false }

  case HTTP_EVENT_SUCCESS:
    return { ...state, event:payload, isFetching:false, isError:false }

  case HTTP_EVENT_FAIL:
    return { ...state, isFetching:false, isError:true }

  default:
    return state
  }
}
