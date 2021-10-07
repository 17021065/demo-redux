import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { sagaMiddleware } from './redux/store';
import rootSaga from './redux/saga';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);