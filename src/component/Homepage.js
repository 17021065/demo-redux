import React from "react";
import { useSelector } from "react-redux";
import { getLoginStatus } from "../redux/selectors";
import { Redirect } from "react-router";
import { LOGIN } from "../feature/path";

const Homepage = () => {
  const isLogin = useSelector(getLoginStatus) === "successful" ? true : false;

  return <div className="w3-display-container" style={{minHeight: '96vh', backgroundColor: 'white'}}>
    {!isLogin ? <Redirect to={LOGIN} /> : null}
    <h1 className="w3-display-middle">Redux App</h1>
  </div>
}

export default Homepage;