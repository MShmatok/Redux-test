import { combineReducers } from "redux";
import { reducerCounter } from "./counter/reduceCounter";


export const reducer = combineReducers({
    counter: reducerCounter,
})