import { put, take, call, } from 'redux-saga/effects';
import Api from '../feature/api';
import history from '../feature/history';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../feature/path';
import { toUTF8 } from '../feature/support';                                               

function* authorize(email, password) {  
  try {
    const res = yield call(Api.authentication, email, password);
    const {status, ...user} = res;
    if (status == 200) {
      const newState = {
        status: 'successful',
        ...user,
      }
      yield put({type: 'login/success', payload: user});
      localStorage.setItem('session', JSON.stringify(newState));
      return user.accessToken;
    } else {
      yield put({type: 'login/failure', payload: 'Sai tài khoản hoặc mật khẩu!'});
      return null;
    }
  } catch (error) {
    yield put({type: 'login/failure', payload: 'Đăng nhập thất bại!'});
  }
}

export function* loginFlow() {
  while (true) {
    const {payload} = yield take('LOGIN_REQUEST');
    yield put({type: 'login/pending'});
    const {email, password} = payload;
    const token = yield call(authorize, email, toUTF8(password));
    if (token) {
      history.push(LOGIN_SUCCESS);
      yield take('login/logout');
    }
  }
}

export function* loginAfterRegistryFlow() {
  while (true) {
    const {payload} = yield take('LOGIN_AFTER_REGISTRY');
    yield put({type: 'login/pending'});
    const {email, password} = payload;
    const token = yield call(authorize, email, toUTF8(password));
    if (token) {
      history.push(REGISTER_SUCCESS);
      yield take('login/logout');
    }
  }
}