import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  title: '',
  messaje: '',
  icon: '',
};
export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
      state.title = action.payload.title;
      state.messaje = action.payload.message;
      state.icon = action.payload.icon;
      return state;
    },
    stoptLoading: (state) => {
      return initialState;
    },
  },
});

//actions
export const { startLoading, stoptLoading } = ui.actions;

//reducer
export default ui.reducer;
