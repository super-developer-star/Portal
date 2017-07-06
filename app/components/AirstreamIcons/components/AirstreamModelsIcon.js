import React from 'react';
import PropTypes from 'prop-types';

const AirstreamModelsIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 74.77 49.4"
    aria-labelledby="title"
    className={className}
  >
    <title>Airstream Models</title>
    <g fill={fill}>
      <path d="M74.77,39a2,2,0,0,1-2,2h-24a2,2,0,0,1,0-4H61.85l.09,0c1.58-.49,3.57-7.53,4.17-14.79,0-6.94-1.68-12-5-15.06A12,12,0,0,0,52.92,4H17.11A11.06,11.06,0,0,0,8.79,7.37C5,11.37,3.83,18.27,4,23c.32,7.67,2.09,13,3.06,14h4.7a2,2,0,0,1,0,4h-5C.94,41,.1,25,0,23.14-.21,17.39,1.2,9.5,5.91,4.6A14.91,14.91,0,0,1,17.11,0h35.6a15.86,15.86,0,0,1,11.1,4.13C68,8,70.11,14.09,70.11,22.26c0,.05,0,.11,0,.16C69.82,25.91,69,32.69,66.82,37h6A2,2,0,0,1,74.77,39Zm-34.87.38a10,10,0,1,1-10-10A10,10,0,0,1,39.91,39.4Zm-4,0a6,6,0,1,0-6,6A6,6,0,0,0,35.91,39.4Z" />
    </g>
  </svg>
);
AirstreamModelsIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default AirstreamModelsIcon;
