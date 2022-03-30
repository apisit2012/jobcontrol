import axios from "axios";
import { HTTP_SEARCHCOMPONENT_FAIL, HTTP_SEARCHCOMPONENT_FETCHINE, HTTP_SEARCHCOMPONENT_SUCCESS, Server } from "../constant";

export const setStateToFeching = () => ({
  type: HTTP_SEARCHCOMPONENT_FETCHINE
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_SEARCHCOMPONENT_SUCCESS,
  payload
})

export const setStateToFail = () => ({
  type: HTTP_SEARCHCOMPONENT_FAIL,
})

export const autosearchcomponent = (data) => {
  return dispatch => {
    dispatch(setStateToFeching())
    axios.post(Server.AutoSearchComponent,data).then(response=>{
      dispatch(setStateToSuccess(response.data.message))
    }).catch(err => {
      dispatch(setStateToFail())
      })
  }
}