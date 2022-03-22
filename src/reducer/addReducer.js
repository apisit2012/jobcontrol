import { HTTP_ADD_FAIL, HTTP_ADD_FETCHING, HTTP_ADD_SUCCESS } from "../constant"

const initialState = {
    model:[],
    mod_isFetching:false,
    mod_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_ADD_FETCHING:
    return { ...state, model:null, mod_isFetching:true, mod_isError: false }

  case HTTP_ADD_SUCCESS:
    return { ...state, model:payload, mod_isFetching:false, mod_isError: false }

  case HTTP_ADD_FAIL:
    return { ...state, model:null, mod_isFetching:false, mod_isError: true }

  default:
    return state
  }
}
