import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './side-menu-layout.styl';

export default function SideMenuLayout({
  children = '',
  menuComponent = () => null,
  collapsed = false,
}) {
  const Menu = menuComponent;

  return (
    <div className={styles.container}>

      <aside className={cx(styles.side, { [styles.collapsed]: collapsed })}>
        <Menu collapsed={collapsed} />
      </aside>

      <section className={cx(styles.content, { [styles.collapsed]: collapsed })}>
        {children}
      </section>
    </div>
  );
}
SideMenuLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menuComponent: PropTypes.func,
  collapsed: PropTypes.bool,
};
