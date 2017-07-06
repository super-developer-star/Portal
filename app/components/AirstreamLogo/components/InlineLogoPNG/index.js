import React from 'react';
import PropTypes from 'prop-types';
import logoImage from './airstream-logo.png';

const Logo = ({ className = '' }) => (
  <img src={logoImage} alt="Airstream Logo" className={className} />
);
Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
