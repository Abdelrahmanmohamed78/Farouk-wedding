import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMuted: true,
  hideBody: true,
}

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    handleMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    handleHideBody: (state, action) => {
      state.hideBody = action.payload;
    }
  }
})

export const { handleMuted, handleHideBody } = slice.actions;
export default slice.reducer;