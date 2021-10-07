import { put, take, call, select, fork } from 'redux-saga/effects';
import Api from '../feature/api';
import { getProductList } from './selectors';

function* fetchProduct() {
  try {
    const {status, list} = yield call(Api.getProduct);
    if(status == 200) {
      yield put({type: 'product/success', payload: list});
    }
    else yield put({type: 'product/failure'});
  } catch (err) {
    yield put({type: 'product/failure'});
  }  
}

export function* fetchProductFlow() {  
  while (true) {
    yield take('FETCH_PRODUCT_REQUEST');
    yield put({type: 'product/pending'});
    yield call(fetchProduct);
  }
}

function* addProduct(data) {
  const {id, name, price, detail} = data;
  const res = yield call (Api.addProduct, {id, name, price, detail});
  return res;
}

function* updateProduct(data) {
  const {id, name, price, detail} = data;
  const res = yield call (Api.updateProduct, {id, name, price, detail});
  return res;
}

function* deleteProduct(data) {
  const {id} = data;
  const res = yield call (Api.deleteProduct, {id});
  return res;
}

function* submitData() {
  try {
    const data = yield select(getProductList);
    const statusArray = [];

    for (let i = 0; i < data.length; i++) {
      if(data[i].isDelete) {
        if (!data[i].isNew) {
          const res = yield fork(deleteProduct, data[i]);
          statusArray.push(res);
        }
      } else {
        if(data[i].isNew) {
          const res = yield fork(addProduct, data[i]);
          yield put({type: 'product/officialize', payload: i});
          statusArray.push(res);
        }
        if(data[i].isUpdate) {
          const res = yield fork(updateProduct, data[i]);
          yield put({type: 'product/officialize', payload: i});
          statusArray.push(res);
        }
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].isDelete) yield put({type: 'product/clean', payload: i});
    }
    return statusArray.some(item => item != 200);
  } catch (error) {
    yield put({type: 'product/failureSave'});
  }
}

export function* SubmitDataFlow() {
  while (true) {
    yield take('SUBMIT_REQUEST');
    const data = yield select(getProductList);
    let i = 0;
    while (i<data.length) {
      yield take('product/saveChange');
      i+=1;
    }
    yield put({type: 'product/pendingSave'});
    const status = yield call(submitData);
    if(!status) yield put({type: 'product/successSave'});
    else yield put({type: 'product/failureSave'});
  }
}