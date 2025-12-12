import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import gptReducer from './gptSlice';
import langReducer from './langSlice';
import movieListsReducer from './movieListsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        gpt: gptReducer,
        lang: langReducer,
        movieLists: movieListsReducer
    }
})

export default store;