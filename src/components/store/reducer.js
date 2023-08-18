import { combineReducers } from "redux";
import { reducerCounter } from "./counter/reduceCounter";
import { reducerMath } from "./math/reducerMath";


export const reducer = combineReducers({
    counter: reducerCounter,
    math: reducerMath,
})