import { HTTP_NOTI_FAIL, HTTP_NOTI_FETCHING, HTTP_NOTI_SUCCESS } from "../constant"

const initialState = {
    notification:{
        count:0,
        data:{
            name:null,
            type:null,
            model:null,
            datetime:null,
            status:null
        }
    },
    noti_isFetching:false,
    noti_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
  case HTTP_NOTI_FETCHING:
    return { ...state, noti_isFetching:true, noti_isError:false }

  case HTTP_NOTI_SUCCESS:
    return { ...state, notification:{ 
        count:payload.count, 
        data:{
            name:payload.data.name,
            type:payload.data.type,
            model:payload.data.model,
            datetime:payload.data.datetime,
            status:payload.data.status
        }
    } , noti_isFetching:false, noti_isError:false }

  case HTTP_NOTI_FAIL:
    return { ...state, noti_isFetching:false, noti_isError:true }

  default:
    return state
  }
}
