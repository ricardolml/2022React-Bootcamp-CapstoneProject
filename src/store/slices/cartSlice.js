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
    updateNumsItemCar: (state, action) => {
      const { idProduct, numItem, numCurrentItems } = action.payload;
      const index = state.items.findIndex(({ id }) => id === idProduct);

      state.items[index].numItems = numItem;
      state.items[index].stock += numCurrentItems;
      state.items[index].stock -= numItem;

      state.numItems -= numCurrentItems;
      state.numItems += numItem;

      return state;
    },
    deleteItem: (state, action) => {
      const { id: idProduct, numItems } = action.payload;
      state.items = state.items.filter(({ id }) => id !== idProduct);
      state.numItems -= numItems;
      return state;
    },
    resetCart: (state, action) => {
      return {
        items: [],
        numItems: 0,
      };
    },
  },
});

//actions
export const { addCart, updateNumsItemCar, deleteItem, resetCart } =
  cartSlice.actions;

//reducer
export default cartSlice.reducer;
