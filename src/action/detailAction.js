import axios from "axios";
import { HTTP_DETAIL_FAIL, HTTP_DETAIL_FETCHING, HTTP_DETAIL_SUCCESS, Server } from "../constant";

export const setStateToFetching = () => ({
  type: HTTP_DETAIL_FETCHING
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_DETAIL_SUCCESS,
  payload
})

export const setStateToFail = () => ({
  type: HTTP_DETAIL_FAIL
})

export const findEventByPk = (id_jobtype, navigation, component) => {
    return dispatch => {
        dispatch(setStateToFetching())
        axios.post(Server.FindEventByPk,id_jobtype).then(response=>{
            dispatch(setStateToSuccess(response.data.message))
            navigation.navigate('screendetail',{ component })
        }).catch(err=>{
            dispatch(setStateToFail())
          })
    }
}

