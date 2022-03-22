import { HTTP_REPORT_FETCHING } from "../constant"

const initialState = {
    model:[],
    rep_isFetching:false,
    rep_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_REPORT_FETCHING:
    return { ...state, ...payload }

  default:
    return state
  }
}
