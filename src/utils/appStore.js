import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import translateReducer from "./transalteSlice";

const appStore = configureStore({
    reducer:{
        user: userRducer,
        movies: movieReducer,
        gptSearch: gptReducer,
        language: translateReducer
    }
})

export default appStore;