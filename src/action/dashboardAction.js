import {  HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FECTHING, HTTP_DASHBOARD_SUCCESS, Server  } from "../constant";
import axios from 'axios'

export const SetStateToFetching = () => ({
  type: HTTP_DASHBOARD_FECTHING,
})

export const SetStateToSuucess = (payload) => ({
  type: HTTP_DASHBOARD_SUCCESS,
  payload
})

export const SetStateToFail = () => ({
  type: HTTP_DASHBOARD_FAIL,
})

export const renderpage = () => {
  return dispatch =>{
    dispatch(SetStateToFetching());
    axios.post(Server.Dashboard).then(response=>{
      dispatch(SetStateToSuucess(response.data.message))
    }).catch(err => {
      dispatch(SetStateToFail())
    })

  }
}