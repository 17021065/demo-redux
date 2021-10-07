import React from "react";
import { NavLink } from "react-router-dom";
import { PRODUCT, HOME } from "../feature/path";

const Sidebar = () => {
  return <div className="w3-light-gray w3-col m3 l2" style={{minHeight:`96vh`}}>
    <NavLink to={HOME} exact className="w3-button w3-block w3-left-align" activeClassName="w3-light-blue">Trang chủ</NavLink>
    <NavLink to={PRODUCT} className="w3-button w3-block w3-left-align" activeClassName="w3-light-blue">Sản phẩm</NavLink>
  </div>
}

export default Sidebar;