import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingVideoList: null,
    BackgroundVides: null
  },
  reducers: {
    addNowPlayingVideo: (state, action) => {
      state.nowPlayingVideoList = action.payload;
    },
    addBackgroundVedio: (state, action)=>{
        state.BackgroundVides = action.payload;
    }
  },
});

export const { addNowPlayingVideo, addBackgroundVedio } = movieSlice.actions;
export default movieSlice.reducer;
