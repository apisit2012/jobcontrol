import { HTTP_ADD_FAIL, HTTP_ADD_FETCHING, HTTP_ADD_SUCCESS } from "../constant";
import axios from 'axios'

export const SetStateToFetching = () => ({
  type: HTTP_ADD_FETCHING,
})

export const SetStateToSuccess = (payload) => ({
  type: HTTP_ADD_SUCCESS,
  payload
})

export const SetStateToFail = () => ({
  type: HTTP_ADD_FAIL,
})

export const renderpage = () => {
    return dispatch=>{
        dispatch(SetStateToFetching())
    }
}
