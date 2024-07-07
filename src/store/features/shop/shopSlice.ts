import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  { id: 1, title: "test" },
  { id: 2, title: "test2" },
];

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    test: (state, action: PayloadAction<any>) => {
      console.log("Test");
    },
  },
});
export const {test } = shopSlice.actions;
export default shopSlice.reducer;
