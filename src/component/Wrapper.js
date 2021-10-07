import React from "react";
import PropTypes from 'prop-types';

const LoginWrapper = ({children}) => {
  return <div className="w3-light-gray w3-display-container" style={{minHeight: '100vh', minWidth: '100vw'}}>
    <div className="w3-display-middle" style={{width: `30vw`}}>
      {children}
    </div>
  </div>
}

LoginWrapper.propTypes = {
  children: PropTypes.node,
}

const SuccessWrapper = ({children}) => {
  return <div className="w3-light-gray w3-display-container" style={{minHeight: '100vh', minWidth: '100vw'}}>
    <div className="w3-display-middle w3-center" style={{width: `100vw`}}>
      {children}
    </div>
  </div>
}

SuccessWrapper.propTypes = {
  children: PropTypes.node,
}

export {LoginWrapper, SuccessWrapper};