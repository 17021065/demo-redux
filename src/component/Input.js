import React from "react";
import PropTypes from 'prop-types'

const CustomInput = ({label, type, value, onChange}) => {
  return <div className="w3-margin-top">
    <label><b>{label}</b></label>
    <input type={type} className="w3-input w3-border"  value={value}  onChange={onChange} />
  </div> 
}

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
}

export default CustomInput;