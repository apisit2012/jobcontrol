import { SETCOMPONENT, SETJOBTYPE, SETLINE } from "../constant"

const initialState = {
    jobtype:{id_jobtype:null,name_jobtype:null},
    component:{id_component:null, name_component:null},
    line:{id_line:null, name_line:null}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SETLINE:
    return { ...state, id_line:{
        id_jobtype:payload.id_line
    } }

 case SETJOBTYPE:
    return { ...state, id_line:{
        id_jobtype:payload.id_jobtype,
        name_component:payload.name_component
    } }

 case SETCOMPONENT:
    return { ...state, component:{
        id_component:payload.id_line,
        name_component:payload.name_component
    } }



  default:
    return state
  }
}
