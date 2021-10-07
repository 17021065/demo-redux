import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HOME } from '../feature/path';
import { breakEmail } from '../feature/support';
import { getEmail } from '../redux/selectors';

const Navbar = () => {
  const username = breakEmail(useSelector(getEmail));

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch({type: 'login/logout'});
    localStorage.removeItem('session');
  }

  return <div className='w3-bar w3-blue'>
    <a href={HOME} className='w3-bar-item' style={{cursor: 'pointer', textDecoration: 'none'}}><b>Redux</b></a>
    <div className='w3-dropdown-hover w3-right'>
      <button className='w3-button'>{username}</button>
      <div className='w3-dropdown-content w3-bar-block w3-card-4' style={{right: 0}}>
        <button className='w3-bar-item w3-button' onClick={handleLogOut}>Đăng xuất</button>
      </div>
    </div>
  </div>
}

export default Navbar;