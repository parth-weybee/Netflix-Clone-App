import { createSlice } from "@reduxjs/toolkit";

const movieListsSlice = createSlice({
    name: "MovieLists",
    initialState: {},
    reducers: {
        setMovieList: (state,action)=>
        {
            state[action.payload.name] = action.payload.list;
        }
    }
})

export const {setMovieList} = movieListsSlice.actions;

export default movieListsSlice.reducer;