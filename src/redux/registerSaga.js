import { put, take, call, } from 'redux-saga/effects';
import Api from '../feature/api';
import { toUTF8 } from '../feature/support';

function* registry(email, password) {  
  try {
    const status = yield call(Api.registry, email, password);
    
    if(status == 200) {
      yield put({type: 'register/success'});
      return true;
    } else {
      yield put({type: 'register/failure', payload: 'Tài khoản đã tồn tại!'});
      return false;
    }
  } catch (error) {
    yield put({type: 'register/failure', payload: 'Đăng ký thất bại!'});
  }
}

export function* registryFlow() {
  while (true) {
    const {payload} = yield take('REGISTER_REQUEST');
    yield put({type: 'register/pending'});
    const {email, password} = payload;
    const res = yield call(registry, email, toUTF8(password));
    if (res) {
      yield put({
        type: 'LOGIN_AFTER_REGISTRY', 
        payload: {
          email: email,
          password: password,
        }
      });
    }
  }
} 