import React from 'react';
import PropTypes from 'prop-types';

const DealerNetworkIcon = ({ fill = null, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 78.15 78.15"
    aria-labelledby="title"
    className={className}
  >
    <title>Dealer Network</title>
    <g fill={fill}>
      <path d="M39.26,0h-.18a39.08,39.08,0,1,0,0,78.15h.18A39.08,39.08,0,0,0,39.26,0Zm-12,6.06c-5.81,6.54-9.69,17.83-10,31H4.06A35.15,35.15,0,0,1,27.23,6.06Zm-23.17,35H17.19c.36,13.19,4.23,24.47,10,31A35.15,35.15,0,0,1,4.06,41.08Zm33,32.83c-8.48-2-15.38-16.06-15.89-32.83H37.08Zm0-36.83H21.19C21.7,20.3,28.59,6.24,37.08,4.24Zm37,0h-13c-.36-13.14-4.2-24.38-10-30.94A35.15,35.15,0,0,1,74.1,37.08Zm-33-32.87c8.55,1.87,15.52,16,16,32.87h-16Zm0,69.74V41.08h16C56.6,58,49.63,72.08,41.08,73.95ZM51.15,72c5.77-6.56,9.62-17.8,10-30.94h13A35.15,35.15,0,0,1,51.15,72Z" />
    </g>
  </svg>
);
DealerNetworkIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default DealerNetworkIcon;
