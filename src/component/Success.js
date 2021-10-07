import React from "react";
import { HOME } from "../feature/path";
import { SuccessWrapper } from "./Wrapper";
import PropTypes from 'prop-types';

const Success = ({match}) => {
  const text = match.params.type === 'login' ? 'Đăng nhập' : 'Đăng ký';
  console.log(match.params.type);
  setTimeout(() => {
    window.location.replace(HOME);
  }, 1000);

  return <SuccessWrapper>
    <h1>{text} thành công</h1>
    <h3>Bạn sẽ được chuyển tiếp đến trang chủ trong giây lát...</h3>
  </SuccessWrapper>
}

Success.propTypes = {
  match: PropTypes.object,
}

export default Success;