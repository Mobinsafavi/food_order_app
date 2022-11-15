import { createSlice } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
  name: "shops",
  initialState: { shops: [] },
  reducers: {
    setShopInfo(state, action) {
      state.shops = action.payload.shopsData;
    },
  },
});

export const shopsSliceAction = shopsSlice.actions;

export default shopsSlice;
