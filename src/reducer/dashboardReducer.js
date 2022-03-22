import { HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FECTHING } from "../constant"

const initialState = {
    dashboard:{
        closejob:10 ,
        pending:15,
        total:30,
        follow:5,
        event:null,
        chart:{
            closejob:{},
            total:{}
        },
    },
    das_isFetching:false,
    das_isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_DASHBOARD_FECTHING:
    return { ...state, das_isFetching:true, das_isError:false  }

 case HTTP_DASHBOARD_FECTHING:
    return { ...state, dashboard:{
        closejob:payload.closejob,
        pending:payload.pending,
        total:payload.total,
        follow:payload.follow,
        event:payload.event,
        chart:{
            close:payload.chart.closejob,
            total:payload.chart.total
        }
    }
        , das_isFetching:false, das_isError:false  }

 case HTTP_DASHBOARD_FAIL:
    return { ...state, das_isFetching:false, das_isError:true  }

  default:
    return state
  }
}
