import { SETCOMPONENT, SETJOBTYPE, SETLINE } from "../constant";

export const setStateToLine = (payload) => ({
  type: SETLINE,
  payload
})

export const setStateToType = (payload) => ({
  type: SETJOBTYPE,
  payload
})

export const setStateToComponent = (payload) => ({
  type: SETCOMPONENT,
  payload
})


export const setLine = (data,navigation) => {
    return dispatch => {
        dispatch(setStateToUseStack(
          data
        ))
        navigation.navigate()
    }
}