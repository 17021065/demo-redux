import React from 'react';
import { LoginWrapper } from './Wrapper';
import CustomInput from './Input';
import { validateEmail } from '../feature/support';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginMsg, getLoginStatus } from '../redux/selectors';
import SubmitBtn from './SubmitBtn';
import { toB64 } from '../feature/support';
import { REGISTER } from '../feature/path';
import Alert from './Alert';

const Login = () => {

  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const loginStatus = useSelector(getLoginStatus);

  const loginMsg = useSelector(getLoginMsg);

  const handleSubmit = e => {
    e.preventDefault();
    if(validateEmail(email)) {
      dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          email: email,
          password: toB64(password),
        }
      });
    } else {
      e.stopPropagation();
      alert('Email không hợp lệ!');
    }
  }

  return <LoginWrapper>
    <h1 className='w3-center'>Redux App</h1>
    {loginStatus === 'failure' ? <Alert color='red'>{loginMsg}</Alert> : null}
    <form onSubmit={handleSubmit}>
      <CustomInput type='email' label='Email' value={email} onChange={handleEmailChange}/>
      <CustomInput type='password' label='Mật khẩu' value={password} onChange={handlePasswordChange}/>
      
      <SubmitBtn color='blue'>Đăng nhập</SubmitBtn>
      <div className='w3-right-align w3-margin-top w3-padding-16'>
        Chưa có tài khoản? Đăng ký <a href={REGISTER} className='w3-text-indigo' >ở đây</a>
      </div>
    </form>
  </LoginWrapper>
}

export default Login;