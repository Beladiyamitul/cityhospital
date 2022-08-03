import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { Counterreducer } from "./Counter.reducer";



export const rootreducer = combineReducers({
    count : Counterreducer,
    auth: authReducer,
    alert : alertReducer
})