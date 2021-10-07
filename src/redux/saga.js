import { all } from 'redux-saga/effects'
import { loginFlow, loginAfterRegistryFlow } from './loginSaga';
import { fetchProductFlow, SubmitDataFlow } from './productSaga';
import { registryFlow } from './registerSaga';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    loginAfterRegistryFlow(),
    registryFlow(),
    fetchProductFlow(),
    SubmitDataFlow(),
  ])
}