import { initialMath } from "./initialMath";
import { ADD, DELETE } from "./types";

export const reducerMath = (state = initialMath, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state, array: [...state.array, action.payload]
            }

        case DELETE:
            return {
                ...state, array: state.array.filter(item => { return item !== action.payload })
            }
        default:
            return state;
    }


}