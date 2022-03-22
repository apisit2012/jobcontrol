import { combineReducers } from "redux";
import addReducer from "./addReducer";
import appReducer from "./appReducer";
import authenReducer from "./authenReducer";
import dashboardReducer from "./dashboardReducer";
import eventReducer from "./eventReducer";
import notigicationReducer from "./notigicationReducer";
import reportReducer from "./reportReducer";

export default combineReducers({
    appReducer,
    dashboardReducer,
    notigicationReducer,
    reportReducer,
    authenReducer,
    eventReducer,
    addReducer
})