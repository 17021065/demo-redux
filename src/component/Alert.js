import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({color, children}) => {
  return <div className={`w3-panel w3-pale-${color}`}>
    <p>{children}</p>
  </div> 
}

Alert.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
}

export default Alert;