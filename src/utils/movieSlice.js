import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingVideoList: null,
    backgroundVides: null,
    popularVideos: null,
    upcomingVideos: null,
  },
  reducers: {
    addNowPlayingVideo: (state, action) => {
      state.nowPlayingVideoList = action.payload;
    },
    addBackgroundVedio: (state, action) => {
      state.backgroundVides = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideos = action.payload;
    },
    addUpcomingVideo: (state, action) => {
      state.upcomingVideos = action.payload;
    },
  },
});

export const {
  addNowPlayingVideo,
  addBackgroundVedio,
  addPopularVideo,
  addUpcomingVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
