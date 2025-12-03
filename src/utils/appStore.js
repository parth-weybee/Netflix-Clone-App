import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import gptReducer from './gptSlice';
import langReducer from './langSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        gpt: gptReducer,
        lang: langReducer
    }
})

export default store;