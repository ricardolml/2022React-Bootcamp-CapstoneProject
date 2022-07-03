import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  title: '',
  messaje: '',
};
export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
      state.title = action.payload.title;
      state.messaje = action.payload.message;
      return state;
    },
    stoptLoading: (state) => {
      state.isLoading = false;
      state.title = '';
      state.messaje = '';
      return state;
    },
  },
});

//actions
export const { startLoading, stoptLoading } = ui.actions;

//reducer
export default ui.reducer;
