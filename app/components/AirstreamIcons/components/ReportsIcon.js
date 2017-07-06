import React from 'react';
import PropTypes from 'prop-types';

const ReportsIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52.09 64.73"
    aria-labelledby="title"
    className={className}
  >
    <title>Reports</title>
    <g fill={fill}>
      <path d="M51.09,18l-17-17a3.39,3.39,0,0,0-2.41-1H3.41A3.41,3.41,0,0,0,0,3.41V61.32a3.41,3.41,0,0,0,3.41,3.41H48.68a3.41,3.41,0,0,0,3.41-3.41V20.38A3.39,3.39,0,0,0,51.09,18Zm-3,42.76H4V4H31.46L48.09,20.63Z" />
    </g>
  </svg>
);
ReportsIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default ReportsIcon;
