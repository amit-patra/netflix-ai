import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";
import movieReducer from "./movieSlice";
const appStore = configureStore({
    reducer:{
        user: userRducer,
        movies: movieReducer
    }
})

export default appStore;