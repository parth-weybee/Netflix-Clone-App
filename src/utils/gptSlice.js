import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GptSearch",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleShowGpt: (state,action)=>
        {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { toggleShowGpt } = gptSlice.actions;

export default gptSlice.reducer;