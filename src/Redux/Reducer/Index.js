import { combineReducers } from "redux";
import { Counterreducer } from "./Counter.reducer";



export const rootreducer = combineReducers({
    count : Counterreducer
})