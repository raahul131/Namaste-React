import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Banana", "Apple"],
  },
  reducers: {
    // reducer function to modify or update the state or cart
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // this function to remove the item from the cart
    removeItem: (state, action) => {
      state.items.pop();
    },
    // this function clear the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
