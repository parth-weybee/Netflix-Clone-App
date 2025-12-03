import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        selectedLang: "en"
    },
    reducers: {
        changeLang: (state,actions)=>
        {
            state.selectedLang = actions.payload;
        }
    }
})

export const {changeLang} = langSlice.actions;

export default langSlice.reducer;