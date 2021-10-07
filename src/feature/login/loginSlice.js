import { createSlice } from '@reduxjs/toolkit';

const oldSession = localStorage.getItem('session');
const init = !oldSession ? {
  status: 'idle',
  msg: '',
  uid: '',
  email: '',
  accessToken: '',
}
: 
JSON.parse(oldSession);

export const loginSlice = createSlice({
  name: 'login',
  initialState: init,
  reducers: {
    pending: state => {
      state.status = 'loading';
    },
    success: (state, action) => {
      state.status = 'successful';
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
    failure: (state, action) => {
      state.status = 'failure';
      state.msg = action.payload;
    },
    logout: state => {
      state.status = 'idle';
      state.uid = '',
      state.email = '';
      state.accessToken = '';
    }
  }
})

export default loginSlice.reducer;