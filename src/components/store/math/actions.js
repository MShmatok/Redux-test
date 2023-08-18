import { ADD, DELETE } from "./types";

export const addValue = (value) => ({ type: ADD, payload: value });
export const deleteValue = (value) => ({ type: DELETE, payload: value });