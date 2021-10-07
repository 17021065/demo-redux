import React from "react";
import PropTypes from 'prop-types';

const Pagination = ({array, active, select, prev, next}) => {
  return <div className="w3-center">
    <div className="w3-bar w3-border">
      <a className="w3-bar-item w3-button" onClick={prev} >&laquo;</a>
      {array.map(item => <a key={item} className={active == item ? "w3-button w3-blue" : "w3-button"} onClick={select} >{item}</a>)}
      <a className="w3-button" onClick={next} >&raquo;</a>
    </div>
  </div>
}

Pagination.propTypes = {
  array: PropTypes.array,
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  select: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
}

export default Pagination;
