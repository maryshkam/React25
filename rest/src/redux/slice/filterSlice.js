import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "type",
  initialState: "All",
  reducers: {
    changeType: (state, action) => action.payload,
  },
});

export const { changeType } = filterSlice.actions;

export default filterSlice.reducer;
