import { combineReducers } from "redux";
import manageUser from "./user";

const masterReducer = combineReducers({
    user: manageUser
})
export default masterReducer