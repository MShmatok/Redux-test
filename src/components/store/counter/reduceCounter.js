import { initialCounter } from "./initialState";
import { DECREMENT, INCREMENT } from "./types";


export const reducerCounter = (state = initialCounter, action) => {
    switch (action.type) {
        case DECREMENT:
            return {
                ...state, total: state.total - action.payload,
            }
        case INCREMENT:
            return {
                ...state, total: state.total + action.payload,
            }
        default:
            return state;
    }
}