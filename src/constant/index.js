export const HTTP_ACCOUNT_FETCHING = 'HTTP_ACCOUNT_FETCHING'
export const HTTP_ACCOUNT_SUCCESS = 'HTTP_ACCOUNT_SUCCESS'
export const HTTP_ACCOUNT_FAIL = 'HTTP_ACCOUNT_FAIL'

export const HTTP_DASHBOARD_FECTHING = 'HTTP_DASHBOARD_FECTHING'
export const HTTP_DASHBOARD_SUCCESS = 'HTTP_DASHBOARD_SUCCESS'
export const HTTP_DASHBOARD_FAIL = 'HTTP_DASHBOARD_FAIL'

export const HTTP_ADD_FETCHING = 'HTTP_ADD_FETCHING'
export const HTTP_ADD_SUCCESS = 'HTTP_ADD_SUCCESS'
export const HTTP_ADD_FAIL = 'HTTP_ADD_FAIL'

export const HTTP_NOTI_FETCHING = 'HTTP_NOTI_FETCHING'
export const HTTP_NOTI_SUCCESS = 'HTTP_NOTI_SUCCESS'
export const HTTP_NOTI_FAIL = 'HTTP_NOTI_FAIL'

export const HTTP_REPORT_FETCHING = 'HTTP_REPORT_FETCHING'
export const HTTP_REPORT_SUCCESS = 'HTTP_REPORT_SUCCESS'
export const HTTP_REPORT_FAIL = 'HTTP_REPORT_FAIL'

export const HTTP_EVENT_FETCHING = 'HTTP_EVENT_FETCHING'
export const HTTP_EVENT_SUCCESS = 'HTTP_EVENT_SUCCESS'
export const HTTP_EVENT_FAIL = 'HTTP_EVENT_FAIL'

export const HTTP_DETAIL_FETCHING = 'HTTP_DETAIL_FETCHING'
export const HTTP_DETAIL_SUCCESS = 'HTTP_DETAIL_SUCCESS'
export const HTTP_DETAIL_FAIL = 'HTTP_DETAIL_FAIL'

export const HTTP_SEARCHCOMPONENT_FETCHINE = 'HTTP_SEARCHCOMPONENT_FETCHINE'
export const HTTP_SEARCHCOMPONENT_SUCCESS = 'HTTP_SEARCHCOMPONENT_SUCCESS'
export const HTTP_SEARCHCOMPONENT_FAIL = 'HTTP_SEARCHCOMPONENT_FAIL'



export const SETCOMPONENT = 'SETCOMPONENT'
export const SETJOBTYPE = 'SETJOBTYPE'
export const SETLINE = 'SETLINE'

export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'



const ipaddress = "http://172.29.24.39:8089"

export const Server = {
    Dashboard:`${ipaddress}/dashboard/render`,
    Notification:`${ipaddress}/notification/render`,
    Getevent:`${ipaddress}/event/getevent`,
    FindEventByPk:`${ipaddress}/event/findeventbypk`,
    Getecomponent:`${ipaddress}/event/getcomponent`,
    Addevent:`${ipaddress}/event/addevent`,
    AutoSearchComponent:`${ipaddress}/event/searchcomponentbycomponent`,

}
