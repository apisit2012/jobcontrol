import { HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FECTHING, HTTP_DASHBOARD_SUCCESS } from "../constant"

const initialState = {
    dashboard:{},
    das_isFetching:false,
    das_isError:false
}

export default (state = initialState, { type, payload }) => {

  switch (type) {

  case HTTP_DASHBOARD_FECTHING:
    return { ...state, das_isFetching:true, das_isError:false  }

 case HTTP_DASHBOARD_SUCCESS:
    return { ...state, dashboard:payload, das_isFetching:false, das_isError:false  }

 case HTTP_DASHBOARD_FAIL:
    return { ...state, das_isFetching:false, das_isError:true  }

  default:
    return state
  }
}

