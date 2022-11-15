import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import shopsSlice from "./shop-slice";

const store = configureStore({
    reducer : { shop : shopsSlice.reducer , cart : cartSlice.reducer}
})

export default store;