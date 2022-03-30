import { HTTP_SEARCHCOMPONENT_FAIL, HTTP_SEARCHCOMPONENT_FETCHINE, HTTP_SEARCHCOMPONENT_SUCCESS, SETCOMPONENT } from "../constant"

const initialState = {
    component:[{
        component:null,
        name_model:null,
        id_model:null,
        ct_code:null
    }],
    id_model:null,
    name_component:null,
    isFetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_SEARCHCOMPONENT_FETCHINE:
    return { ...state, isFetching:true, isError:false }

  case HTTP_SEARCHCOMPONENT_SUCCESS:
    return { ...state, component:payload, isFetching:false, isError:false }

  case HTTP_SEARCHCOMPONENT_FAIL:
    return { ...state, isFetching:false, isError:true }

  case SETCOMPONENT:
      return { ...state, id_model:payload.id_model, name_component:payload.name_component , isError:true }

  default:
    return state
  }
}
