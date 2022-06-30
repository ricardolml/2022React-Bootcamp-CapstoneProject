import { createSlice } from '@reduxjs/toolkit';
import { addItem } from '../../utils/actionsCart';

const initialState = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  numItems: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      return addItem(state, action);
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
