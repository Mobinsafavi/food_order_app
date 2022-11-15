import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { orders: [], totalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      const newOrder = action.payload;
      const existingShop = state.orders.find((item) => item.id === newOrder.id);
      state.totalQuantity++;
      if (!existingShop) {
        state.orders.push({
          id: newOrder.id,
          shopName: newOrder.shopName,
          sendingPrice: newOrder.sendingPrice,
          shopTotolQuantity: 1,
          products: [
            {
              id: newOrder.product.id,
              name: newOrder.product.name,
              price: newOrder.product.price,
              amount: 1,
              totalPrice: newOrder.product.price,
            },
          ],
          shopTotalPrice: newOrder.sendingPrice + newOrder.product.price,
        });
      } else {
        const existingProduct = existingShop.products.find(
          (item) => item.id === newOrder.product.id
        );
        if (!existingProduct) {
          existingShop.products.push({
            id: newOrder.product.id,
            name: newOrder.product.name,
            price: newOrder.product.price,
            amount: 1,
            totalPrice: newOrder.product.price,
          });
          existingShop.shopTotolQuantity++;
        } else {
          existingProduct.amount++;
          existingShop.shopTotolQuantity++;
          existingProduct.totalPrice =
            existingProduct.totalPrice + existingProduct.price;
        }
        existingShop.shopTotalPrice =
          existingShop.shopTotalPrice + newOrder.product.price;
      }
    },
    removeOrder(state, action) {
      state.totalQuantity--;
      const identifire = action.payload;
      const existingShop = state.orders.find(
        (item) => item.id === identifire.shopId
      );
      if (existingShop.shopTotolQuantity === 1) {
        state.orders = state.orders.filter(
          (item) => item.id !== identifire.shopId
        );
      } else {
        existingShop.shopTotolQuantity--;
        const existingProduct = existingShop.products.find(
          (item) => item.id === identifire.productId
        );
        if (existingProduct.amount === 1) {
          existingShop.products = existingShop.products.filter(
            (item) => item.id !== identifire.productId
          );
        } else {
          existingProduct.amount--;
          existingProduct.totalPrice =
            existingProduct.totalPrice - existingProduct.price;
        }
        existingShop.shopTotalPrice = existingShop.shopTotalPrice - existingProduct.price
      }
    },
  },
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice;
