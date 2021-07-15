import { combineReducers } from "redux";
import manageUser from "./user";
import manageSession from "./session";
import manageUserStocks from "./user_stocks";
import manageStockLookup from "./stock_lookup";

const masterReducer = combineReducers({
    user: manageUser,
    user_stocks: manageUserStocks,
    stock_lookup: manageStockLookup,
    session: manageSession
})
export default masterReducer