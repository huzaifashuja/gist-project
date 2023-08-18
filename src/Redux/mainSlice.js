import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData: [],
    prevUsername: '',
    error: false,
    networkError: false,

};

export const slice = createSlice({
    name: "main",
    initialState: initialState,
    reducers: {
        setSearchData: (state, action) => {
            state.searchData = action.payload;
        },
        setPrevUsername: (state, action) => {
            state.prevUsername = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setNetworkError: (state, action) => {
            state.networkError = action.payload;
        },

    }
});
