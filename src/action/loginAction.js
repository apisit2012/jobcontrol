import { LOGIN, LOGOUT } from "../../../../../../../Project/reactnative/src/constant";
import { HTTP_ACCOUNT_FAIL, HTTP_ACCOUNT_FETCHING, HTTP_ACCOUNT_SUCCESS } from "../constant";

export const SetStateToFetching = () => ({
  type: HTTP_ACCOUNT_FETCHING,
})

export const SetStateToSuccess = (payload) => ({
    type: HTTP_ACCOUNT_SUCCESS,
    payload
})

export const SetStateToFail = () => ({
    type: HTTP_ACCOUNT_FAIL,
})

export const SetStateToLogin = () => ({
  type: LOGIN,
})

export const SetStateToLogout = () => ({
  type: LOGOUT,
})
