import React from "react";
import { HOME } from "../feature/path";
import { SuccessWrapper } from "./Wrapper";

const LoginSuccess = () => {
  setTimeout(() => {
    window.location.replace(HOME);
  }, 1000);

  return <SuccessWrapper>
    <h1>Đăng nhập thành công</h1>
    <h3>Bạn sẽ được chuyển tiếp đến trang chủ trong giây lát...</h3>
  </SuccessWrapper>
}

export default LoginSuccess;