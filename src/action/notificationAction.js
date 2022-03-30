import axios from "axios";
import { HTTP_NOTI_FAIL, HTTP_NOTI_FETCHING, HTTP_NOTI_SUCCESS, Server } from "../constant";

export const setStateToFetching = () => ({
  type: HTTP_NOTI_FETCHING,
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_NOTI_SUCCESS,
  payload
})

export const setSTateToFail = () => ({
  type: HTTP_NOTI_FAIL,
})


export const renderNotification = () => {
    return dispatch => {
        dispatch(setStateToFetching())
        const data = { id_emp:"2498" }
        axios.post(Server.Notification,data).then(response=>{
          dispatch(setStateToSuccess(response.data.message))
        }).catch(err => {
        dispatch(SetStateToFail())
        })
    }
}

