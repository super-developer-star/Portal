import React from 'react';
import PropTypes from 'prop-types';

const AnalysisIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60.67 56.25"
    aria-labelledby="title"
    className={className}
  >
    <title>Analysis</title>
    <g fill={fill}>
      <path d="M4,36.77V54.25a2,2,0,0,1-4,0V36.77a2,2,0,0,1,4,0ZM16.17,7.7a2,2,0,0,0-2,2V54.25a2,2,0,0,0,4,0V9.7A2,2,0,0,0,16.17,7.7ZM30.33,19.86a2,2,0,0,0-2,2V54.25a2,2,0,1,0,4,0V21.86A2,2,0,0,0,30.33,19.86ZM44.5,27.61a2,2,0,0,0-2,2V54.25a2,2,0,0,0,4,0V29.61A2,2,0,0,0,44.5,27.61ZM58.67,0a2,2,0,0,0-2,2V54.25a2,2,0,0,0,4,0V2A2,2,0,0,0,58.67,0Z" />
    </g>
  </svg>
);
AnalysisIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default AnalysisIcon;
