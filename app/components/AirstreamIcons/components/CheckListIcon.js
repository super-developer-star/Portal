import React from 'react';
import PropTypes from 'prop-types';

const CheckListIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 71.7 59.39"
    aria-labelledby="title"
    className={className}
  >
    <title>Check List</title>
    <g fill={fill}>
      <path d="M21.58,7.58a2.31,2.31,0,0,1,2.31-2.31h45.5a2.31,2.31,0,0,1,0,4.63H23.89A2.31,2.31,0,0,1,21.58,7.58Zm-6.71-.14A7.44,7.44,0,1,1,7.44,0,7.44,7.44,0,0,1,14.87,7.44Zm-4,0a3.44,3.44,0,1,0-3.44,3.44A3.44,3.44,0,0,0,10.87,7.44ZM69.39,27.52H23.89a2.31,2.31,0,0,0,0,4.63h45.5a2.31,2.31,0,0,0,0-4.63ZM14.87,29.7a7.44,7.44,0,1,1-7.44-7.44A7.44,7.44,0,0,1,14.87,29.7Zm-4,0a3.44,3.44,0,1,0-3.44,3.44A3.44,3.44,0,0,0,10.87,29.7ZM69.39,49.78H23.89a2.31,2.31,0,0,0,0,4.63h45.5a2.31,2.31,0,0,0,0-4.63ZM14.87,52a7.44,7.44,0,1,1-7.44-7.44A7.44,7.44,0,0,1,14.87,52Zm-4,0a3.44,3.44,0,1,0-3.44,3.44A3.44,3.44,0,0,0,10.87,52Z" />
    </g>
  </svg>
);
CheckListIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default CheckListIcon;
