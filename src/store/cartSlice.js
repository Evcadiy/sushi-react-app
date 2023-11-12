import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price;
        } else {
          state.totalAmount -= item.price;
          state.items.splice(itemIndex, 1);
        }
      }
    },
    addItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const item = state.items[itemIndex];

      if (item.quantity > 0) {
        item.quantity += 1;
        state.totalAmount += item.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
