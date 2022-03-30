import { combineReducers } from "redux";
import appReducer from "./appReducer";
import addReducer from "./addReducer"
import authenReducer from "./authenReducer";
import dashboardReducer from "./dashboardReducer";
import eventReducer from "./eventReducer";
import notigicationReducer from "./notigicationReducer";
import reportReducer from "./reportReducer";
import detailReducer from "./detailReducer"
import SearchcomponentReducer from "./SearchcomponentReducer";
import setReducer from "./setReducer";

export default combineReducers({
    appReducer,
    dashboardReducer,
    notigicationReducer,
    reportReducer,
    authenReducer,
    eventReducer,
    addReducer,
    detailReducer,
    SearchcomponentReducer,
    setReducer
})