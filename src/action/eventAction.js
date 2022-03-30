import axios from 'axios'
import { HTTP_EVENT_FAIL, HTTP_EVENT_FETCHING, HTTP_EVENT_SUCCESS, Server, SETCOMPONENT } from '../constant'

export const setStateToFetching = () => ({
  type: HTTP_EVENT_FETCHING,
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_EVENT_SUCCESS,
  payload
})

export const setStateToFail = () => ({
  type: HTTP_EVENT_FAIL,
})

export const setStateToComponent = (payload) => ({
  type: SETCOMPONENT,
  payload
})


export const getEvent = ( ) => {
  return dispatch => {
    dispatch(setStateToFetching)
    axios.post(Server.Getevent).then(response=>{
      dispatch(setStateToSuccess({
        jobtype:response.data.message.jobtype,
        line:response.data.message.line,
        component:response.data.message.component}))
    }).catch(err=>{
      dispatch(setStateToFail())
    })
  }
}

export const getComponent = ( component ) => {
  return dispatch => {
    dispatch(setStateToFetching)
    axios.post(Server.Getevent,component).then(response=>{
      dispatch(setStateToSuccess({component:response.data.message}))
    }).catch(err=>{
      dispatch(setStateToFail())
    })
  }
}

export const add = (data) => {
  return dispatch=>{
    data.use_bom ? data.bom : data.bom = null
    data.use_xy_data ? data.xy_data : data.xy_data = null
    data.use_st_lasermark ? data.st_laser : data.st_laser = null
    axios.post(Server.Addevent, data).then(response=>{
      alert("OK","Record Success")
    }).catch(err=>{
      dispatch(setStateToFail())
    })

  }
}

export const setcomponent = (component) => {
  return dispatch => {
    dispatch(setStateToComponent(component))
  }
}

