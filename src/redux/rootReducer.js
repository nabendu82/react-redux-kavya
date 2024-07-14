import { combineReducers } from "redux";
import eggReducer from "./egg/eggReducer";
import chickenReducer from "./chicken/chickenReducer";
import { useReducer } from "react";

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer,
    user: useReducer
})

export default rootReducer