import { combineReducers } from 'redux'

import { counter } from "./counterReducer";
import { signInReducer } from "./signInReducer";

export const reducers = combineReducers ({
    counter,
    signInReducer
});