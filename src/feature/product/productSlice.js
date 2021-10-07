import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    status: 'idle',
    saveStatus: 'idle',
    list: [],
  },
  reducers: {
    pending: state => {
      state.status = 'loading';
    },
    success: (state, action) => {
      state.status = 'successful';
      state.list = action.payload;
    },
    failure: state => {
      state.status = 'failure';
    },
    pendingSave: state => {
      state.saveStatus = 'saving';
    },
    successSave: state => {
      state.saveStatus = 'successful';
    },
    failureSave: state => {
      state.saveStatus = 'failure';
    },
    saveChange: (state, action) => {
      state.list[action.payload.index] = action.payload.data;
    },
    create: state => {
      state.list.push({
        isNew: true,
        isUpdate: false,
        isDelete: false,
        id: '',
        name: '',
        price: 0,
        detail: '',
      })
    },
    delete: (state, action) => {
      state.list[action.payload].isDelete = true;
    },
    rollback: (state, action) => {
      state.list[action.payload].isDelete = false;
      state.list[action.payload].isUpdate = false;
    },
    update: (state, action) => {
      state.list[action.payload].isUpdate = true;
    },
    clean: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    officialize: (state, action) => {
      state.list[action.payload].isNew = false;
      state.list[action.payload].isDelete = false;
      state.list[action.payload].isUpdate = false;
    },
  }
})

export default productSlice.reducer;