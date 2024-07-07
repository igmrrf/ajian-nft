import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  { id: 1, title: "test" },
  { id: 2, title: "test2" },
];

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    test: (state, { payload }: any) => {
      console.log("Test");
    },
  },
});
export const { test } = authSlice.actions;
export default authSlice.reducer;
