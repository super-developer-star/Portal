/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

export const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

/* Auth */
const getAuthState = (state) => selectGlobal(state).get('auth');
export const getAuthUserInfo = (state) => getAuthState(state)
  .get('userInfo');
export const getAuthIdToken = (state) => getAuthState(state)
  .get('idToken');
export const getIsLoggingIn = (state) => getAuthState(state)
  .get('isLoggingIn');
export const getIsSendingPasswordReset = (state) => getAuthState(state)
  .get('isSendingPasswordReset');
export const getIsLoggedIn = (state) => getAuthState(state)
  .get('isLoggedIn');
export const getAuthError = (state) => getAuthState(state)
  .get('errorMessage');

// Get an array of our global roles. Retunred from Auth0.
export function getGlobalRoles(state) {
  const profile = getAuthUserInfo(state);
  return profile === null
    ? null
    : profile.airstream.global.roles;
}

export const makeGetHasGlobalRole = (role) => createSelector(
  getGlobalRoles,
  (roles) => roles.includes(role)
);
