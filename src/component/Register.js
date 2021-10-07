import React from 'react';
import CustomInput from './Input';
import SubmitBtn from './SubmitBtn';
import { validateEmail, toB64 } from '../feature/support';
import { useDispatch, useSelector } from 'react-redux';
import { getRegisterMsg, getRegisterStatus } from '../redux/selectors';
import Alert from './Alert';

const Register = () => {

  const [email, setEmail] = React.useState('');

  const [pw, setPw] = React.useState('');

  const [repw, setRepw] = React.useState('');

  const handleEmailChange = e => setEmail(e.target.value);

  const handlePwChange = e => setPw(e.target.value);

  const handleRepwChange = e => setRepw(e.target.value);

  const registryStatus = useSelector(getRegisterStatus);

  const registryMsg = useSelector(getRegisterMsg);

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (toB64(pw) === toB64(repw)) {
        dispatch({
          type: 'REGISTER_REQUEST', 
          payload: {
            email: email,
            password: toB64(pw),
          }
        })
      } else {
        e.stopPropagation();
        alert('Nhập lại mật khẩu không trùng khớp!')
      }
    } else {
      e.stopPropagation();
      alert('Email không hợp lệ!');
    }
  }

  return <div className='w3-light-gray w3-display-container' style={{minHeight: '100vh', minWidth: '100vw'}}>
    <div className='w3-display-middle' style={{width: `30vw`}}>
      <h1 className='w3-center'>Đăng ký vào Redux App</h1>
      {registryStatus === 'failure' ? <Alert color='red'>{registryMsg}</Alert> : null}

      <form onSubmit={handleSubmit}>
        <CustomInput type='email' label='Email' value={email} onChange={handleEmailChange} />
        <CustomInput type='password' label='Mật khẩu' value={pw} onChange={handlePwChange} />
        <CustomInput type='password' label='Nhập lại mật khẩu' value={repw} onChange={handleRepwChange} />
        
        <SubmitBtn color='red'>Đăng ký</SubmitBtn>
      </form>
    </div>
  </div>
}

export default Register;