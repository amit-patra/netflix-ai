import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showSearchContent: false,
  },
  reducers: {
    changeGptSearchStatus: (state) => {
      state.showSearchContent = !state.showSearchContent;
    },
  },
});
export const { changeGptSearchStatus } = gptSlice.actions;
export default gptSlice.reducer;
