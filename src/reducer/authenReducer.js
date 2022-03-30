import { HTTP_ACCOUNT_FAIL, HTTP_ACCOUNT_FETCHING, HTTP_ACCOUNT_SUCCESS } from "../constant"

const initialState = {
    account:{
      id_emp:"2498"
    },
    acc_isFetching:false,
    acc_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_ACCOUNT_FETCHING:
    return { ...state, account:null, acc_isFetching:true, acc_isError:false }

  case HTTP_ACCOUNT_SUCCESS:
    return { ...state, account:payload, acc_isFetching:false, acc_isError:false }

 case HTTP_ACCOUNT_FAIL:
    return { ...state, account:null, acc_isFetching:false, acc_isError:true }

  default:
    return state
  }
}
