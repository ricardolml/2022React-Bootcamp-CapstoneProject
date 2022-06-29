import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    numItems: 50,
  },
  reducers: {
    addCart: (state) => {
      return state;
    },
    deleteItem: (state, action) => {
      return state;
    },
    resetCart: (state, action) => {
      return state;
    },
  },
});

//actions
export const { addCart, deleteItem, resetCart } = cartSlice.actions;

//reducer
export default cartSlice.reducer;
