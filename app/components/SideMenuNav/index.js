import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LogoutIcon, OverviewIcon, FleetLocationIcon } from 'components/AirstreamIcons';
import styles from './side-menu-nav.styl';
import MenuItem from './components/MenuItem';

export default function SideMenuNav({ collapsed }) {
  return (
    <div className={styles.container}>
      <ul>
        <MenuItem iconComponent={OverviewIcon}>Overview</MenuItem>
        <MenuItem iconComponent={FleetLocationIcon}>Fleet Location</MenuItem>
      </ul>
      <ul>
        <MenuItem iconComponent={LogoutIcon}>Log out bf kjhfni kjfj jhbj sfbb fdgg</MenuItem>
      </ul>
    </div>
  );
}
SideMenuNav.propTypes = {
  collapsed: PropTypes.bool,
};
