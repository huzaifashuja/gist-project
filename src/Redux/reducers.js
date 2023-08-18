import { combineReducers } from "redux";
import { slice } from './mainSlice';

export const rootReducer = combineReducers({
    slice: slice.reducer
});
