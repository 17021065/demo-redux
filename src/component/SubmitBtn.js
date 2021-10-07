import React from "react";
import PropTypes from 'prop-types';

const SubmitBtn = ({children, color}) => {
  return <div className="w3-margin-top w3-padding-16">
    <button type="submit" className={`w3-block w3-button w3-${color}`}>{children}</button>
  </div>
}

SubmitBtn.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
}

export default SubmitBtn;