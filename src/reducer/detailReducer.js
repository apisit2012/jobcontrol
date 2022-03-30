import { HTTP_DETAIL_FAIL, HTTP_DETAIL_FETCHING, HTTP_DETAIL_SUCCESS } from "../constant"

const initialState = {
    detail: {
      id_jobtype: null,
      id_model: null,
      id_line: null,
      workorder: null,
      barc_rules: false,
      inspec_process: false,
      mach_documents: false,
      assem_documents: false,
      id_creater:null,
      bom: null,
      xy_data: null,
      st_laser: null,
      use_bom: false,
      use_xy_data: false,
      use_st_lasermark: false,
    },
    isFetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_DETAIL_FETCHING:
    return { ...state, detail:null, isFetching:true, isError:false }

case HTTP_DETAIL_SUCCESS:
    return { ...state, detail:payload, isFetching:false, isError:false }

case HTTP_DETAIL_FAIL:
    return { ...state, detail:null, isFetching:false, isError:true }

  default:
    return state
  }
}
