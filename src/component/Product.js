import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoginStatus } from '../redux/selectors';
import { Redirect } from 'react-router';
import { LOGIN } from '../feature/path';
import ProductList from './ProductList';

const Product = () => {
  const isLogin = useSelector(getLoginStatus) === 'successful' ? true : false;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({type: 'FETCH_PRODUCT_REQUEST'});
  }, [])

  return <div style={{minHeight: '96vh', backgroundColor: 'white'}}>
    {!isLogin ? <Redirect to={LOGIN}/> : null}
    <div className='w3-container w3-padding-large'>
      <ProductList />
    </div>
  </div>
}

export default Product;