import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    status: 'idle',
    msg: '',
  },
  reducers: {
    pending: state => {
      state.status = 'loading';
      state.msg = '';
    },
    success: state => {
      state.status = 'successful';
    }, 
    failure: (state, action) => {
      state.status = 'failure';
      state.msg = action.payload;
    },
  }
});

export default registerSlice.reducer;