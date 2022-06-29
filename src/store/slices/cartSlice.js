import { createSlice } from '@reduxjs/toolkit';
import { addItem } from '../../utils/actionsCart';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    numItems: 0,
  },
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
