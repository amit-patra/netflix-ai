import { createSlice } from "@reduxjs/toolkit";

const translateSlice = createSlice({
    name: "language",
    initialState: {
        lang: "en"
    },
    reducers:{
        changeLanguage: (state, action)=>{
            state.lang = action.payload;  
        }
    }
})
export const {changeLanguage} = translateSlice.actions;
export default translateSlice.reducer;