import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../feature/login/loginSlice';
import registerReducer from '../feature/login/registerSlice';
import productReducer from '../feature/product/productSlice';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    product: productReducer,
  },
  middleware: [sagaMiddleware],
})