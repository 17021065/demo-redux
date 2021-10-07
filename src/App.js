import { hot } from 'react-hot-loader/root';
import React from 'react';
import './style/w3.css';
import './style/style.css';
import { Router, Route } from 'react-router-dom';
import history from './feature/history';
import {Navbar, Sidebar, Homepage, Product, Login, Success, Register} from './component';
import { HOME, LOGIN, REGISTER, PRODUCT, SUCCESS_URL } from './feature/path';

const App = () => {
  return <Router history={history}><div className='w3-light-gray'>

    <Route path={[HOME, PRODUCT]} exact component={Navbar} />
    <Route path={LOGIN} exact component={Login} />
    <Route path={SUCCESS_URL} component={Success} />
    <Route path={REGISTER} component={Register} />
    
    <div className='w3-row'>
      <Route path={[HOME, PRODUCT]} exact component={Sidebar} />
      <div className='w3-col m9 l10'>
        <Route path={HOME} exact component={Homepage} />
        <Route path={PRODUCT} component={Product} />
      </div>   
    </div>
  </div></Router>
} 

export default hot(App);