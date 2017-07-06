import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './menu-item.styl';

const MenuItem = ({ children, collapsed, to, iconComponent: IconComponent }) => (
  <li className={styles.container}>
    <Link to={to}>
      <IconComponent className={styles.image} />
      {!collapsed && <span>{children}</span>}
    </Link>
  </li>
);
MenuItem.propTypes = {
  collapsed: PropTypes.bool,
  iconComponent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
MenuItem.defaultProps = {
  collapsed: false,
  iconComponent: () => null,
  to: null,
};

export default MenuItem;
