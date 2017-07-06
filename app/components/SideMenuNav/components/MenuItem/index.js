import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu-item.styl';

const MenuItem = ({ children, iconComponent: IconComponent }) => (
  <li className={styles.container}>
    <a href="/">
      <IconComponent className={styles.image} />
      <span>{children}</span>
    </a>
  </li>
);
MenuItem.propTypes = {
  iconComponent: PropTypes.func,
  children: PropTypes.node,
};
MenuItem.defaultProps = {
  iconComponent: () => null,
};

export default MenuItem;
