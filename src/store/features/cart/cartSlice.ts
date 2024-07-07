import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  { id: 1, title: "test" },
  { id: 2, title: "test2" },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    test: (state, { payload }: any) => {
      console.log("Test");
    },
  },
});
export const { test } = cartSlice.actions;
export default cartSlice.reducer;
