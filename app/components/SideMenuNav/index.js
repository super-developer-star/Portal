import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LogoutIcon, OverviewIcon, FleetLocationIcon } from 'components/AirstreamIcons';
import { InlineLogoPNG } from 'components/AirstreamLogo';
import FontAwesome from 'react-fontawesome';
import styles from './side-menu-nav.styl';
import MenuItem from './components/MenuItem';

export default function SideMenuNav({ collapsed }) {
  return (
    <div className={styles.container}>
      <div className={styles.menuHeader}><MenuIcon className={styles.hambugerIcon}/><a href="/"><InlineLogoPNG className={styles.navigationLogo}/></a></div>
      <div className={cx(styles.itemsContainer, { [styles.collapsed]: collapsed })}>
        <ul>
          {/*<MenuItem collapsed={collapsed} iconComponent={MenuIcon} to="/">Airstream</MenuItem>*/}
          <MenuItem collapsed={collapsed} iconComponent={OverviewIcon} to="/">Overview</MenuItem>
          <MenuItem collapsed={collapsed} iconComponent={FleetLocationIcon} to="/fleet">Fleet Location</MenuItem>
        </ul>

        <ul>
          <MenuItem collapsed={collapsed} iconComponent={LogoutIcon} to="/logout">Log out</MenuItem>
        </ul>
      </div>
    </div>
  );
}
SideMenuNav.propTypes = {
  collapsed: PropTypes.bool,
};

const MenuIcon = ({ className }) => <span className={className}><FontAwesome name="bars" size="lg" /></span>;
MenuIcon.propTypes = {
  className: PropTypes.string,
};
