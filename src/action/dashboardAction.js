import {  HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FECTHING, HTTP_DASHBOARD_SUCCESS  } from "../constant";
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
  return dispatch=>{
    dispatch(SetStateToFetching())
    
  }
}