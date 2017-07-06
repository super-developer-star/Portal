import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideMenuLayout from 'components/SideMenuLayout';
import SideMenuNav from 'components/SideMenuNav';
import PageLayout from 'components/PageLayout';
import * as appSelectors from './selectors';
import AuthLock from './containers/AuthLock';
// import styles from './app.styl';

function App({ children, isLoggedIn, routes }) {
  if (!isLoggedIn) {
    return <AuthLock />;
  }

  const currentRoute = routes[routes.length - 1];

  return (
    <SideMenuLayout menuComponent={SideMenuNav} collapsed={false}>
      <PageLayout title={currentRoute.name}>
        {children}
      </PageLayout>
    </SideMenuLayout>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLoggedIn: PropTypes.bool,
  routes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoggedIn: appSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps)(App);
