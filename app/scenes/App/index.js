import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideMenuLayout from 'components/SideMenuLayout';
import SideMenuNav from 'components/SideMenuNav';
import * as appSelectors from './selectors';
import AuthLock from './containers/AuthLock';
import styles from './app.styl';

function App({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <AuthLock />;
  }

  return (
    <SideMenuLayout menuComponent={SideMenuNav} collapsed={false}>
      {children}
    </SideMenuLayout>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoggedIn: appSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps)(App);
