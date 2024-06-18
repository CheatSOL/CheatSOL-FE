import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};

const keywordSlice = createSlice({
  name: "keyword",
  initialState: initialState,
  reducers: {
    searchKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const { searchKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;