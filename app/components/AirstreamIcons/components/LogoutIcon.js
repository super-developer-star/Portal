import React from 'react';
import PropTypes from 'prop-types';

const LogoutIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 79 79"
    aria-labelledby="title"
    className={className}
  >
    <title>Logout</title>
    <g fill={fill}>
      <path d="M39.5,0A39.5,39.5,0,1,0,79,39.5,39.54,39.54,0,0,0,39.5,0Zm0,75A35.5,35.5,0,1,1,75,39.5,35.54,35.54,0,0,1,39.5,75ZM54.33,26.83l-12.5,12.5,12.5,12.5a2,2,0,1,1-2.83,2.83L39,42.16,26.5,54.66a2,2,0,0,1-2.83-2.83l12.5-12.5-12.5-12.5A2,2,0,0,1,26.5,24L39,36.51,51.5,24a2,2,0,0,1,2.83,2.83Z" />
    </g>
  </svg>
);
LogoutIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default LogoutIcon;
