import React from 'react';
import PropTypes from 'prop-types';

const OverviewIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.65 56.67"
    aria-labelledby="title"
    className={className}
  >
    <title>Overview</title>
    <g fill={fill}>
      <path d="M54.65,0h-22a2,2,0,0,0-2,2V24a2,2,0,0,0,2,2h22a2,2,0,0,0,2-2V2A2,2,0,0,0,54.65,0Zm-2,22h-18V4h18Zm2,8.75h-22a2,2,0,0,0-2,2v22a2,2,0,0,0,2,2h22a2,2,0,0,0,2-2v-22A2,2,0,0,0,54.65,30.71Zm-2,22h-18v-18h18ZM24,0H2A2,2,0,0,0,0,2V24a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V2A2,2,0,0,0,24,0ZM22,22H4V4H22Zm2,8.75H2a2,2,0,0,0-2,2v22a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2v-22A2,2,0,0,0,24,30.71Zm-2,22H4v-18H22Z" />
    </g>
  </svg>
);
OverviewIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default OverviewIcon;
